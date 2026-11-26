# UI-Integration mit simuliertem Firebase-SDK, NICHT mit Firebase-Server.
# Optional: pip install playwright && playwright install chromium
import copy, functools, http.server, json, pathlib, threading, time
from playwright.sync_api import sync_playwright
ROOT=pathlib.Path(__file__).resolve().parent.parent
class Handler(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Handler,directory=str(ROOT)))
threading.Thread(target=server.serve_forever,daemon=True).start()
DB={};OFFSET=0

def get(path):
 if path=='.info/connected':return True
 if path=='.info/serverTimeOffset':return OFFSET
 value=DB
 for key in path.split('/'):
  if key:value=value.get(key) if isinstance(value,dict) else value[int(key)] if isinstance(value,list) else None
  if value is None:break
 return copy.deepcopy(value)
def normalize(value):
 if isinstance(value,dict):
  if value=={'.sv':'timestamp'}:return int(time.time()*1000)+OFFSET
  result={key:n for key,v in value.items() if (n:=normalize(v)) is not None}
  return result or None
 if isinstance(value,list):return [normalize(v) for v in value]
 return value
def put(path,value):
 keys=[k for k in path.split('/') if k];n=DB
 for k in keys[:-1]:n=n.setdefault(k,{})
 if value is None:n.pop(keys[-1],None)
 else:n[keys[-1]]=value

def binding(source,method,payload):
 if method=='get':return get(payload)
 for path,value in payload.items():put(path,normalize(value))
 return True
SDK=r"""
const path=p=>String(p||'').replace(/^\/+|\/+$/g,'');
export function initializeApp(){return {};}
export function getAuth(){return {currentUser:{uid:window.TEST_UID}};}
export const browserLocalPersistence={};export async function setPersistence(){}
export async function signInAnonymously(){return {user:{uid:window.TEST_UID}};}
export function getDatabase(){return {};}
export function ref(db,p){return {path:path(p)};}
const snap=v=>({val:()=>v,exists:()=>v!==null});
export async function get(r){return snap(await window.__db('get',r.path));}
export function onValue(r,cb,error){let stop=false,last=Symbol(),busy=false;const poll=async()=>{if(window.MOCK_CLOSED||stop||busy)return;busy=true;try{const v=await window.__db('get',r.path),s=JSON.stringify(v);if(!stop&&s!==last){last=s;cb(snap(v));}}catch(e){if(!stop)error?.(e);}finally{busy=false;}};poll();const t=setInterval(poll,50);(window.MOCK_TIMERS||=[]).push(t);return ()=>{stop=true;clearInterval(t);};}
export function serverTimestamp(){return {'.sv':'timestamp'};}
export async function set(r,v){await window.__db('write',{[r.path]:v});}
export async function remove(r){return set(r,null);}
export async function update(r,patch){const changes={};for(const [k,v]of Object.entries(patch))changes[path(r.path+'/'+k)]=v;await window.__db('write',changes);}
export async function runTransaction(r,updater){const old=(await get(r)).val(),value=updater(old);if(value===undefined)return {committed:false,snapshot:snap(old)};await set(r,value);return {committed:true,snapshot:snap(value)};}
export function onDisconnect(){return {set:async()=>{},cancel:async()=>{}};}
"""
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,args=['--no-sandbox'])
 pages=[];errors=[]
 try:
  for uid in ['h','a','b']:
   context=browser.new_context(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,service_workers='block')
   context.add_init_script('window.TEST_UID='+json.dumps(uid))
   context.expose_binding('__db',binding)
   context.route('**/firebase-config.js',lambda route:route.fulfill(content_type='text/javascript',body='export const firebaseIsConfigured=true; export const firebaseConfig={};'))
   context.route('https://www.gstatic.com/firebasejs/12.0.0/*.js',lambda route:route.fulfill(content_type='text/javascript',body=SDK))
   context.route('**/app.js',lambda route:route.fulfill(content_type='text/javascript',body=(ROOT/'app.js').read_text()+'\nwindow.DEBUG=S;'))
   page=context.new_page();page.set_default_timeout(3500)
   page.on('pageerror',lambda error:errors.append(str(error)))
   page.on('console',lambda msg:errors.append(msg.text) if msg.type=='error' else None)
   page.goto(f'http://127.0.0.1:{server.server_port}/')
   page.wait_for_function('window.DEBUG?.uid && DEBUG.online')
   pages.append(page)
  h,a,b=pages
  h.get_by_role('button',name='Spiel starten',exact=True).click();h.get_by_placeholder('Dein Name').fill('Hannes');h.get_by_role('button',name='Weiter',exact=True).click();h.get_by_role('heading',name='Warteraum',exact=True).wait_for();code=h.locator('.big-code').inner_text()
  for page,name in [(a,'Anna'),(b,'Berta')]:
   page.get_by_role('button',name='Spiel beitreten',exact=True).click();page.get_by_placeholder('0000').fill(code);page.get_by_placeholder('Dein Name').fill(name);page.get_by_role('button',name='Weiter',exact=True).click();page.get_by_role('heading',name='Warteraum',exact=True).wait_for()
  h.get_by_role('button',name='90 s',exact=True).click();h.wait_for_function('DEBUG.room.meta.answerSeconds===90 && !DEBUG.busy')
  h.get_by_role('button',name='Spiel starten',exact=True).click();h.get_by_role('heading',name='Frage vorbereiten',exact=True).wait_for()
  h.get_by_role('button',name='Antwortphase starten',exact=False).click()
  a.locator('#answer-input').wait_for();b.locator('#answer-input').wait_for()
  qid=get(f'rooms/{code}/public/meta/questionId');questions=json.loads((ROOT/'questions.js').read_text().split('=',1)[1].strip().rstrip(';'));correct=next(q['answer'] for q in questions if q['id']==qid)
  a.locator('#answer-input').fill(correct);b.locator('#answer-input').fill('Ein erfundenes Küchengerät')
  a.locator('#answer-input').focus();a.evaluate('window.original=document.querySelector("#answer-input");original.setSelectionRange(1,4)')
  put(f'presence/{code}/b',{'online':False,'lastSeen':int(time.time()*1000)})
  a.wait_for_timeout(180)
  assert a.evaluate('original===document.querySelector("#answer-input")&&document.activeElement===original&&original.selectionStart===1&&original.selectionEnd===4')
  OFFSET=get(f'rooms/{code}/public/meta/deadline')-int(time.time()*1000)+100
  h.get_by_role('heading',name='Antworten prüfen',exact=True).wait_for()
  h.locator('input[type=checkbox]').nth(0).check();h.get_by_role('button',name='Für Markierte Ersatzantwort anfordern',exact=True).click()
  a.locator('#answer-input').wait_for();assert b.locator('#answer-input').count()==0
  a.locator('#answer-input').fill('Eine erfundene Pflanze')
  OFFSET=get(f'rooms/{code}/public/meta/deadline')-int(time.time()*1000)+100
  h.get_by_role('heading',name='Antworten prüfen',exact=True).wait_for()
  h.get_by_role('button',name='Alle Antworten freigeben',exact=False).click()
  a.get_by_role('heading',name='Welche Antwort stimmt?',exact=True).wait_for();b.get_by_role('heading',name='Welche Antwort stimmt?',exact=True).wait_for()
  rid=get(f'rooms/{code}/public/meta/roundId');mapping=get(f'secret/{code}/{rid}/mapping');correct_id=next(k for k,v in mapping.items() if v['correct']);anna_id=next(k for k,v in mapping.items() if v.get('authors',{}).get('a'))
  a.locator(f'[data-option="{correct_id}"]').click();assert a.locator(f'[data-option="{anna_id}"]').is_disabled()
  b.locator(f'[data-option="{anna_id}"]').click()
  assert all(set(v)=={'text'} for v in get(f'rooms/{code}/public/options').values())
  OFFSET=get(f'rooms/{code}/public/meta/deadline')-int(time.time()*1000)+100
  a.get_by_role('heading',name='Tipps werden eingesammelt',exact=True).wait_for();h.wait_for_function('Object.keys(DEBUG.secret.ballots||{}).length===2')
  OFFSET=get(f'rooms/{code}/public/meta/collectUntil')-int(time.time()*1000)+100
  h.get_by_role('heading',name='Die Auflösung',exact=True).wait_for();assert get(f'rooms/{code}/public/scores/a')==3
  OFFSET=get(f'rooms/{code}/public/meta/deadline')-int(time.time()*1000)+100
  a.get_by_role('button',name='Nächste Runde starten',exact=True).wait_for()
  assert get(f'rooms/{code}/public/meta/hostId')=='a'
  a.get_by_role('button',name='Nächste Runde starten',exact=True).click();a.get_by_role('heading',name='Frage vorbereiten',exact=True).wait_for();a.get_by_role('button',name='Antwortphase starten',exact=False).click()
  b.locator('#answer-input').wait_for();assert b.locator('#answer-input').input_value()==''
  a.get_by_role('button',name='Spiel beenden',exact=True).click();a.get_by_role('heading',name='Bist du dir sicher?',exact=True).wait_for();a.locator('#modal-root').get_by_role('button',name='Spiel beenden',exact=True).click();a.get_by_role('heading',name='Das war Wissenheit',exact=True).wait_for()
  assert not errors,errors
  print(json.dumps({'status':'passed','scenarios':['3-player lobby','duration 90s','stable input identity/focus/selection','automatic answer upload','correct answer replacement','other players wait','anonymous choices','self vote disabled','1+2 point tally','10s reveal','host rotation','empty next-round inputs','confirmed end'],'javascript_errors':errors},ensure_ascii=False))
 finally:
  for page in pages:
   if not page.is_closed():
    page.evaluate("window.MOCK_CLOSED=true;(window.MOCK_TIMERS||[]).forEach(clearInterval)")
    page.wait_for_timeout(120)
  browser.close();server.shutdown()
