export const VERSION="1.0.0", DURATIONS=[30,45,60,75,90], GRACE=5000;
export const clean=(v,max=300)=>String(v??"").trim().replace(/\s+/g," ").slice(0,max);
export const normalize=v=>clean(v).toLocaleLowerCase("de").replace(/[.,;:!?]+$/g,"");
export function shuffle(values,random=Math.random){const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function nextPlayer(order,current,active){const start=Math.max(0,order.indexOf(current));for(let n=1;n<=order.length;n++){const uid=order[(start+n)%order.length];if(active.includes(uid))return uid;}return null;}
export function latestAnswers(attempts,upto,requests={}){const result={};[...new Set([...Object.keys(attempts||{}),...Object.keys(requests||{})])].map(Number).filter(n=>n<=upto).sort((a,b)=>a-b).forEach(n=>{Object.keys(requests?.[n]||{}).forEach(uid=>{result[uid]="";});Object.entries(attempts?.[n]||{}).forEach(([uid,a])=>{result[uid]=a.text||"";});});return result;}
export function buildChoices({answers,moderation,excluded,uidFactory,random=Math.random}){
 const correctText=clean(moderation.correctText);if(!correctText)throw new Error("Die richtige Lösung darf nicht leer sein.");
 const groups=new Map();for(const [uid,raw] of Object.entries(answers)){
  if(excluded[uid]||moderation.excluded?.[uid])continue;
  const anchor=moderation.groups?.[uid]||uid,text=clean(moderation.edits?.[anchor]??moderation.edits?.[uid]??answers[anchor]??raw);if(!text)continue;
  if(normalize(text)===normalize(correctText))throw new Error("Eine Antwort entspricht genau der richtigen Lösung. Ersatz anfordern oder ausschließen.");
  const key=normalize(text);if(!groups.has(key))groups.set(key,{text,authors:{}});groups.get(key).authors[uid]=true;
 }
 const correctId=uidFactory(),mapping={[correctId]:{text:correctText,correct:true,authors:{}}};for(const g of groups.values())mapping[uidFactory()]={...g,correct:false};
 const order=shuffle(Object.keys(mapping),random),options=Object.fromEntries(order.map(oid=>[oid,{text:mapping[oid].text}])),own={};
 for(const [oid,o]of Object.entries(mapping))for(const uid of Object.keys(o.authors||{}))(own[uid]||={})[oid]=true;
 return {mapping,correctId,order,options,own};
}
export function tally({mapping,ballots,eligible,excluded,scores}){
 const delta=Object.fromEntries(eligible.map(uid=>[uid,0])),voters={};
 for(const [uid,b]of Object.entries(ballots||{})){const o=mapping[b.optionId];if(!o||!eligible.includes(uid)||excluded[uid]||o.authors?.[uid])continue;(voters[b.optionId]||={})[uid]=true;if(o.correct)delta[uid]++;else for(const author of Object.keys(o.authors||{}))if(eligible.includes(author)&&!excluded[author])delta[author]+=2;}
 const totals={...scores};for(const uid of eligible)totals[uid]=(Number(scores[uid])||0)+delta[uid];return {delta,totals,voters};
}
