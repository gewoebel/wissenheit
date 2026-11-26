import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, onSnapshot, serverTimestamp, increment, arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { QUESTIONS } from "./questions.js";

const firebaseConfig = {

  apiKey: "AIzaSyBcO93kwZ_1Zdbo6ujaPEP4_E-neDCYPms",

  authDomain: "wissenheit-spiel.firebaseapp.com",

  databaseURL: "https://wissenheit-spiel-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "wissenheit-spiel",

  storageBucket: "wissenheit-spiel.firebasestorage.app",

  messagingSenderId: "890597262143",

  appId: "1:890597262143:web:7f6528a30aae4ff2f3098a"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const screen = document.getElementById("screen");
const codeLabel = document.getElementById("game-code");

let state = {
  gameId: localStorage.getItem("wissenheit_gameId") || null,
  playerId: localStorage.getItem("wissenheit_playerId") || null,
  playerName: localStorage.getItem("wissenheit_playerName") || "",
  game: null,
  round: null,
  unsubscribeGame: null,
  unsubscribeRound: null,
  tickInterval: null
};

const ANSWER_TIMES = [30, 45, 60, 75, 90];
const VOTE_TIME = 30;
const REVEAL_TIME = 10;

function saveLocal() {
  localStorage.setItem("wissenheit_gameId", state.gameId || "");
  localStorage.setItem("wissenheit_playerId", state.playerId || "");
  localStorage.setItem("wissenheit_playerName", state.playerName || "");
}

function esc(text) {
  const div = document.createElement("div");
  div.textContent = text ?? "";
  return div.innerHTML;
}

function clearTimers() {
  clearInterval(state.tickInterval);
  state.tickInterval = null;
}

function secondsLeft(endsAt) {
  if (!endsAt?.seconds) return 0;
  return Math.max(0, Math.ceil(endsAt.seconds - Date.now() / 1000));
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function render(html) {
  screen.innerHTML = html;
}

function setCode(code) {
  if (code) {
    codeLabel.textContent = code;
    codeLabel.classList.remove("hidden");
  } else {
    codeLabel.classList.add("hidden");
  }
}

function home() {
  clearTimers();
  setCode(null);
  state.gameId = null;
  state.game = null;
  state.round = null;
  saveLocal();

  render(`
    <div class="card">
      <h2>Willkommen bei Wissenheit</h2>
      <p>Starte ein neues Spiel oder tritt mit einem vierstelligen Zahlencode einem laufenden Spiel bei.</p>
      <button id="start-game">Spiel starten</button>
      <button id="join-game" class="secondary">Spiel beitreten</button>
    </div>
  `);

  document.getElementById("start-game").onclick = () => hostSetup();
  document.getElementById("join-game").onclick = () => joinSetup();
}

function hostSetup() {
  render(`
    <div class="card">
      <h2>Spiel starten</h2>
      <label for="name">Dein Name</label>
      <input id="name" maxlength="20" placeholder="z. B. Thomas" value="${esc(state.playerName)}">
      <label for="answer-time">Antwortzeit pro Runde</label>
      <select id="answer-time">
        ${ANSWER_TIMES.map(t => `<option value="${t}">${t} Sekunden</option>`).join("")}
      </select>
      <button id="create">Spiel erstellen</button>
      <button id="back" class="secondary">Zurück</button>
    </div>
  `);

  document.getElementById("back").onclick = home;
  document.getElementById("create").onclick = async () => {
    const name = document.getElementById("name").value.trim();
    const answerTime = Number(document.getElementById("answer-time").value);
    if (!name) return alert("Bitte gib deinen Namen ein.");

    state.playerId = crypto.randomUUID();
    state.playerName = name;

    let code;
    let created = false;

    while (!created) {
      code = String(Math.floor(1000 + Math.random() * 9000));
      const ref = doc(db, "games", code);
      const existing = await getDoc(ref);
      if (existing.exists()) continue;

      await setDoc(ref, {
        hostId: state.playerId,
        hostName: name,
        answerTime,
        status: "lobby",
        roundNumber: 0,
        usedQuestionIds: [],
        scores: {},
        createdAt: serverTimestamp()
      });

      created = true;
    }

    state.gameId = code;
    saveLocal();
    await joinGame(code, name, state.playerId, true);
  };
}

function joinSetup() {
  render(`
    <div class="card">
      <h2>Spiel beitreten</h2>
      <label for="code">Vierstelliger Zahlencode</label>
      <input id="code" inputmode="numeric" maxlength="4" placeholder="z. B. 4821">
      <label for="name">Dein Name</label>
      <input id="name" maxlength="20" placeholder="z. B. Anna" value="${esc(state.playerName)}">
      <button id="join">Beitreten</button>
      <button id="back" class="secondary">Zurück</button>
    </div>
  `);

  document.getElementById("back").onclick = home;
  document.getElementById("join").onclick = async () => {
    const code = document.getElementById("code").value.trim();
    const name = document.getElementById("name").value.trim();

    if (!/^\d{4}$/.test(code)) return alert("Bitte gib einen vierstelligen Zahlencode ein.");
    if (!name) return alert("Bitte gib deinen Namen ein.");

    const gameRef = doc(db, "games", code);
    const gameSnap = await getDoc(gameRef);

    if (!gameSnap.exists()) return alert("Kein Spiel mit diesem Code gefunden.");

    state.playerId = crypto.randomUUID();
    state.playerName = name;
    state.gameId = code;
    saveLocal();

    await joinGame(code, name, state.playerId, false);
  };
}

async function joinGame(code, name, playerId, isHost) {
  const gameRef = doc(db, "games", code);
  const gameSnap = await getDoc(gameRef);

  if (!gameSnap.exists()) return home();

  const game = gameSnap.data();

  if (game.status !== "lobby" && !isHost) {
    return alert("Dieses Spiel hat bereits begonnen.");
  }

  const playerRef = doc(db, "games", code, "players", playerId);

  await setDoc(playerRef, {
    name,
    isHost,
    joinedAt: serverTimestamp(),
    order: Date.now()
  });

  if (isHost) {
    await updateDoc(gameRef, {
      scores: { [playerId]: 0 }
    });
  }

  listenToGame();
}

function listenToGame() {
  clearTimers();
  const gameRef = doc(db, "games", state.gameId);

  state.unsubscribeGame?.();
  state.unsubscribeRound?.();

  state.unsubscribeGame = onSnapshot(gameRef, snap => {
    if (!snap.exists()) {
      alert("Das Spiel wurde beendet.");
      return home();
    }

    state.game = { id: snap.id, ...snap.data() };
    setCode(state.gameId);
    listenToRound();
  });
}

function listenToRound() {
  state.unsubscribeRound?.();

  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));

  state.unsubscribeRound = onSnapshot(roundRef, snap => {
    state.round = snap.exists() ? { id: snap.id, ...snap.data() } : null;
    renderCurrentScreen();
  });
}

function playersSorted() {
  return Object.entries(state.game.players || {})
    .map(([id, player]) => ({ id, ...player }))
    .sort((a, b) => a.order - b.order);
}

function currentPlayer() {
  return playersSorted().find(player => player.id === state.playerId);
}

function isHost() {
  return state.game?.hostId === state.playerId;
}

function currentHostPlayerId() {
  const players = playersSorted();
  if (!players.length) return null;
  const index = ((state.game.roundNumber - 1) % players.length + players.length) % players.length;
  return players[index]?.id || null;
}

async function startRound() {
  const gameRef = doc(db, "games", state.gameId);
  const available = QUESTIONS.filter(question => !state.game.usedQuestionIds.includes(question.id));
  const question = shuffle(available.length ? available : QUESTIONS)[0];
  const roundNumber = state.game.roundNumber + 1;
  const answerTime = state.game.answerTime || 60;

  const roundRef = doc(db, "games", state.gameId, "rounds", String(roundNumber));

  await setDoc(roundRef, {
    number: roundNumber,
    hostId: currentHostPlayerId(),
    question: question.question,
    correctAnswer: question.answer,
    phase: "writing",
    endsAt: new Date(Date.now() + answerTime * 1000),
    answers: {},
    tips: {},
    mergedAnswers: {}
  });

  await updateDoc(gameRef, {
    roundNumber,
    usedQuestionIds: arrayUnion(question.id),
    status: "running"
  });
}

async function submitAnswer(text) {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, {
    [`answers.${state.playerId}`]: {
      text: text.trim(),
      isCorrect: false,
      replaced: false,
      contributors: [state.playerId]
    }
  });
}

async function markCorrect(answerKey, isCorrect) {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, {
    [`answers.${answerKey}.isCorrect`]: isCorrect
  });
}

async function requestRewrites() {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  const answers = state.round.answers || {};
  const correctPlayers = Object.entries(answers)
    .filter(([, answer]) => answer.isCorrect)
    .map(([playerId]) => playerId);

  if (!correctPlayers.length) return;

  await updateDoc(roundRef, {
    phase: "rewriting",
    rewritePlayers: correctPlayers,
    endsAt: new Date(Date.now() + (state.game.answerTime || 60) * 1000)
  });
}

async function finishRewrite() {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, {
    phase: "review",
    rewritePlayers: []
  });
}

async function mergeAnswers(sourceKey, targetKey) {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  const answers = state.round.answers || {};
  const source = answers[sourceKey];
  const target = answers[targetKey];

  if (!source || !target) return;

  const contributors = [...new Set([...(target.contributors || [targetKey]), ...(source.contributors || [sourceKey])])];

  await updateDoc(roundRef, {
    [`answers.${sourceKey}.replaced`]: true,
    [`answers.${targetKey}.contributors`]: contributors,
    [`mergedAnswers.${sourceKey}`]: targetKey
  });
}

async function publishAnswers() {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, {
    phase: "voting",
    endsAt: new Date(Date.now() + VOTE_TIME * 1000)
  });
}

async function submitTip(answerKey) {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, {
    [`tips.${state.playerId}`]: answerKey
  });
}

async function finishVoting() {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, {
    phase: "reveal",
    endsAt: new Date(Date.now() + REVEAL_TIME * 1000)
  });
}

async function showScores() {
  const roundRef = doc(db, "games", state.gameId, "rounds", String(state.game.roundNumber));
  await updateDoc(roundRef, { phase: "scores" });
}

async function nextRound() {
  await startRound();
}

async function endGame() {
  const gameRef = doc(db, "games", state.gameId);
  await updateDoc(gameRef, { status: "finished" });
}

function countdown(endsAt, onEnd) {
  clearTimers();

  const update = () => {
    const element = document.getElementById("countdown");
    if (!element) return;

    const left = secondsLeft(endsAt);
    element.textContent = left;
    element.classList.toggle("warning", left <= 5);

    if (left <= 0) {
      clearTimers();
      onEnd?.();
    }
  };

  update();
  state.tickInterval = setInterval(update, 1000);
}

function renderCurrentScreen() {
  if (!state.game) return;

  if (state.game.status === "finished") {
    return renderFinalScores();
  }

  if (state.game.status === "lobby") {
    return renderLobby();
  }

  if (!state.round) return;

  const phase = state.round.phase;

  if (phase === "writing") return renderWriting();
  if (phase === "review") return renderReview();
  if (phase === "rewriting") return renderRewriting();
  if (phase === "voting") return renderVoting();
  if (phase === "reveal") return renderReveal();
  if (phase === "scores") return renderScores();
}

function renderLobby() {
  const players = playersSorted();
  const host = isHost();

  render(`
    <div class="card">
      <h2>Warteraum</h2>
      <p>Teile den vierstelligen Code mit deinen Mitspielern. Es benötigen mindestens drei Spieler.</p>

      <div class="player-list">
        ${players.map(player => `
          <div class="player">
            <span>${esc(player.name)}${player.id === state.game.hostId ? " — Spielleiter" : ""}</span>
            <span class="badge">Spieler</span>
          </div>
        `).join("")}
      </div>

      ${host ? `
        <button id="start" ${players.length < 3 ? "disabled" : ""}>
          Spiel starten
        </button>
        ${players.length < 3 ? "<p>Es müssen mindestens drei Spieler beigetreten sein.</p>" : ""}
      ` : "<p>Warte, bis der Spielleiter das Spiel startet.</p>"}
    </div>
  `);

  document.getElementById("start")?.addEventListener("click", startRound);
}

function renderWriting() {
  const myAnswer = state.round.answers?.[state.playerId];
  const submitted = Boolean(myAnswer);
  const answersCount = Object.keys(state.round.answers || {}).length;
  const playerCount = playersSorted().length;

  render(`
    <div class="card">
      <h2>Schreibe deine Antwort</h2>
      <div class="timer"><span id="countdown">${secondsLeft(state.round.endsAt)}</span></div>
      <p><strong>${esc(state.round.question)}</strong></p>
      <p>${answersCount} von ${playerCount} Antworten erhalten.</p>

      ${submitted ? `
        <div class="notice">Deine Antwort wurde übermittelt.</div>
      ` : `
        <textarea id="answer" maxlength="200" placeholder="Deine mögliche Antwort"></textarea>
        <button id="submit">Antwort abgeben</button>
      `}
    </div>
  `);

  document.getElementById("submit")?.addEventListener("click", () => {
    const text = document.getElementById("answer").value;
    submitAnswer(text);
  });

  countdown(state.round.endsAt, () => {
    if (!state.round.answers?.[state.playerId]) {
      submitAnswer("");
    }
  });
}

function renderReview() {
  const answers = Object.entries(state.round.answers || {})
    .filter(([, answer]) => !answer.replaced);

  const host = isHost();

  render(`
    <div class="card">
      <h2>Antworten prüfen</h2>
      <p><strong>${esc(state.round.question)}</strong></p>
      <p>Korrekte Antwort: <strong>${esc(state.round.correctAnswer)}</strong></p>

      ${host ? `
        <h3>Antworten der Spieler</h3>
        ${answers.map(([playerId, answer]) => `
          <div class="checkbox-row">
            <input type="checkbox" id="correct-${playerId}" ${answer.isCorrect ? "checked" : ""}>
            <div>
              <label for="correct-${playerId}">${esc(answer.text || "Leere Antwort")}</label>
              <button class="small secondary merge" data-key="${playerId}">Mit markierter Antwort zusammenführen</button>
            </div>
          </div>
        `).join("")}

        <button id="rewrite">Neue Antworten anfordern</button>
        <button id="publish" class="secondary">Antworten freigeben</button>
      ` : `
        <div class="notice">Der Spielleiter prüft die Antworten. Bitte warte.</div>
      `}
    </div>
  `);

  if (!host) return;

  document.querySelectorAll('input[id^="correct-"]').forEach(input => {
    input.addEventListener("change", () => markCorrect(input.dataset.key || input.id.replace("correct-", ""), input.checked));
  });

  document.querySelectorAll(".merge").forEach(button => {
    button.addEventListener("click", () => {
      const target = prompt("Bitte gib die Spielernummer der Antwort ein, mit der zusammengeführt werden soll.");
      if (target) mergeAnswers(button.dataset.key, target);
    });
  });

  document.getElementById("rewrite").onclick = requestRewrites;
  document.getElementById("publish").onclick = publishAnswers;
}

function renderRewriting() {
  const mustRewrite = (state.round.rewritePlayers || []).includes(state.playerId);
  const myAnswer = state.round.answers?.[state.playerId];

  render(`
    <div class="card">
      <h2>Neue Antwort erstellen</h2>
      <div class="timer"><span id="countdown">${secondsLeft(state.round.endsAt)}</span></div>
      <p><strong>${esc(state.round.question)}</strong></p>

      ${mustRewrite ? `
        <p>Du hattest die richtige Antwort eingegeben. Bitte erstelle eine neue, glaubwürdige Antwort.</p>
        <textarea id="answer" maxlength="200" placeholder="Deine neue Antwort">${esc(myAnswer?.text || "")}</textarea>
        <button id="submit">Neue Antwort abgeben</button>
      ` : `
        <div class="notice">Ein oder mehrere Spieler erstellen neue Antworten.</div>
      `}
    </div>
  `);

  document.getElementById("submit")?.addEventListener("click", () => {
    const text = document.getElementById("answer").value;
    submitAnswer(text);
  });

  countdown(state.round.endsAt, finishRewrite);
}

function visibleAnswers() {
  const answers = Object.entries(state.round.answers || {})
    .filter(([, answer]) => !answer.replaced)
    .map(([playerId, answer]) => ({
      key: playerId,
      text: answer.text || "Leere Antwort",
      contributors: answer.contributors || [playerId],
      isCorrect: answer.isCorrect
    }));

  return shuffle(answers);
}

function renderVoting() {
  const options = visibleAnswers();
  const myTip = state.round.tips?.[state.playerId];
  const host = isHost();
  const answersCount = Object.keys(state.round.tips || {}).length;
  const voterCount = playersSorted().length - 1;

  render(`
    <div class="card">
      <h2>Welche Antwort ist richtig?</h2>
      <div class="timer"><span id="countdown">${secondsLeft(state.round.endsAt)}</span></div>
      <p><strong>${esc(state.round.question)}</strong></p>
      <p>${answersCount} von ${voterCount} Tipps abgegeben.</p>

      ${host ? `
        <div class="notice">Du bist in dieser Runde Spielleiter und gibst keinen Tipp ab.</div>
      ` : options.map(option => {
        const own = option.contributors.includes(state.playerId);
        return `
          <button class="answer-option ${myTip === option.key ? "selected" : ""} ${own ? "own" : ""}"
            data-key="${option.key}" ${own || myTip ? "disabled" : ""}>
            ${esc(option.text)}
            ${own ? '<span class="answer-author">Eigene Antwort</span>' : ""}
          </button>
        `;
      }).join("")}
    </div>
  `);

  document.querySelectorAll(".answer-option").forEach(button => {
    button.addEventListener("click", () => submitTip(button.dataset.key));
  });

  countdown(state.round.endsAt, finishVoting);
}

function renderReveal() {
  const options = visibleAnswers();
  const players = Object.fromEntries(playersSorted().map(player => [player.id, player.name]));

  render(`
    <div class="card">
      <h2>Auflösung</h2>
      <p><strong>${esc(state.round.question)}</strong></p>
      <div class="timer"><span id="countdown">${secondsLeft(state.round.endsAt)}</span></div>

      ${options.map(option => `
        <div class="answer-option ${option.isCorrect ? "correct" : ""}">
          ${esc(option.text)}
          <span class="answer-author">
            ${option.contributors.map(id => esc(players[id] || "Unbekannt")).join(", ")}
            ${option.isCorrect ? " — richtige Antwort" : ""}
          </span>
        </div>
      `).join("")}
    </div>
  `);

  countdown(state.round.endsAt, showScores);
}

function calculateRoundPoints() {
  const answers = state.round.answers || {};
  const tips = state.round.tips || {};
  const points = {};

  playersSorted().forEach(player => {
    points[player.id] = 0;
  });

  Object.entries(tips).forEach(([voterId, answerKey]) => {
    const answer = answers[answerKey];
    if (!answer) return;

    if (answer.isCorrect) {
      points[voterId] += 1;
    } else {
      (answer.contributors || []).forEach(contributorId => {
        if (contributorId !== state.game.hostId) {
          points[contributorId] += 2;
        }
      });
    }
  });

  return points;
}

function renderScores() {
  const roundPoints = calculateRoundPoints();
  const host = isHost();

  const totalScores = { ...(state.game.scores || {}) };
  Object.entries(roundPoints).forEach(([playerId, points]) => {
    totalScores[playerId] = (totalScores[playerId] || 0) + points;
  });

  const players = playersSorted()
    .map(player => ({
      ...player,
      roundPoints: roundPoints[player.id] || 0,
      total: totalScores[player.id] || 0
    }))
    .sort((a, b) => b.total - a.total);

  render(`
    <div class="card">
      <h2>Punkte dieser Runde</h2>
      <p><strong>${esc(state.round.question)}</strong></p>
      <p>Richtige Antwort: ${esc(state.round.correctAnswer)}</p>

      ${players.map(player => `
        <div class="score-row ${player.id === players[0].id ? "leader" : ""}">
          <span>${esc(player.name)}</span>
          <span>+${player.roundPoints} · ${player.total} Punkte</span>
        </div>
      `).join("")}

      ${host ? `
        <button id="next">Nächste Runde starten</button>
        <button id="end" class="danger">Spiel beenden</button>
      ` : `
        <div class="notice">Warte, bis der Spielleiter die nächste Runde startet oder das Spiel beendet.</div>
      `}
    </div>
  `);

  document.getElementById("next")?.addEventListener("click", async () => {
    const gameRef = doc(db, "games", state.gameId);
    await updateDoc(gameRef, { scores: totalScores });
    nextRound();
  });

  document.getElementById("end")?.addEventListener("click", async () => {
    const gameRef = doc(db, "games", state.gameId);
    await updateDoc(gameRef, {
      scores: totalScores,
      status: "finished"
    });
  });
}

function renderFinalScores() {
  const players = playersSorted()
    .map(player => ({
      ...player,
      total: state.game.scores?.[player.id] || 0
    }))
    .sort((a, b) => b.total - a.total);

  const bestScore = players[0]?.total || 0;
  const winners = players.filter(player => player.total === bestScore);

  render(`
    <div class="card">
      <h2>Spiel beendet</h2>
      <p>${winners.length > 1 ? "Gewinnerinnen und Gewinner" : "Gewinner"}:</p>
      <p><strong>${winners.map(player => esc(player.name)).join(", ")}</strong></p>

      <h3>Endstand</h3>
      ${players.map(player => `
        <div class="score-row">
          <span>${esc(player.name)}</span>
          <span>${player.total} Punkte</span>
        </div>
      `).join("")}

      <button id="home" class="secondary">Zurück zum Start</button>
    </div>
  `);

  document.getElementById("home").onclick = home;
}

window.addEventListener("beforeunload", () => {
  clearTimers();
  state.unsubscribeGame?.();
  state.unsubscribeRound?.();
});

if (state.gameId && state.playerId) {
  listenToGame();
} else {
  home();
}