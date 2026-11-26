# Testplan und tatsächlich durchgeführte Prüfungen

## Hier durchgeführt

- JavaScript-Syntaxprüfung mit Node.js.
- 28 automatisierte Tests für Fragenstruktur, Eingabebegrenzung, Gruppierungen, Rundenrotation, fehlende/ersetzte Antworten, Punkteberechnung und ein lokales Modell der Berechtigungen.
- Chromium-Browser-Smoke-Test mit drei getrennten mobilen Browserkontexten (390 × 844), simuliertem Firebase-SDK und beschleunigten Fristen:
  - Raum erstellen und zwei Beitritte;
  - Antwortzeit 90 Sekunden;
  - DOM-Identität, Fokus und Cursorselektion bleiben bei Präsenzänderung erhalten;
  - automatische Abgabe;
  - richtige Eingabe ersetzen, andere Person wartet;
  - öffentliche Auswahl ohne Urheber oder Richtigkeitsmarkierung;
  - eigene Antwort nicht wählbar;
  - richtiger Tipp plus fremde Bluffstimme ergibt 3 Punkte;
  - Auflösung, nächste Spielleitung, leere Eingaben der Folgerunde;
  - Spielende mit Bestätigung.
- Im erfolgreichen Browserlauf keine JavaScript-Seitenfehler.

Diese Tests verwenden KEIN echtes Firebase-Backend. Das lokale Berechtigungsmodell ersetzt weder den offiziellen Firebase-Regelcompiler noch einen Emulator-Test. Chromium simuliert auch keine echte iPhone-Softwaretastatur.

## Tests lokal wiederholen (optional)

Mit Node.js: `npm test`. Keine npm-Abhängigkeiten erforderlich.

Optionaler Browsertest: Python, `pip install playwright`, `playwright install chromium`, dann `python tests/browser-smoke.py`. Auch hierbei bleibt Firebase simuliert.

## Vor der ersten Spielrunde real testen

1. Neues Projekt konfigurieren, anonyme Anmeldung aktivieren, Regeln veröffentlichen.
2. Drei reale Geräte oder strikt getrennte Browserprofile, gleiche Versionsnummer. Ein iPhone/Safari und falls genutzt Android/Chrome einschließen.
3. Einen Raum erstellen, doppelte Namen und ungültigen Code testen. Die Starttaste muss unter drei Personen gesperrt bleiben.
4. Zeiten 30/45/60/75/90 im Warteraum durchgehen; Auswahl muss auf den anderen Geräten erscheinen.
5. Alle Nicht-Leitenden gleichzeitig tippen. App im Vordergrund lassen. Text, Tastatur und Cursor müssen während der Phase erhalten bleiben.
6. Eine Person gibt die korrekte Lösung ein. Nach Fristablauf muss nur die Leitung die Rohantworten mit Namen sehen. Die übrigen sehen einen neutralen Wartebildschirm.
7. Ersatzantwort für diese Person anfordern. Sie erhält die volle ursprüngliche Zeit, das andere Gerät kein neues Eingabefeld. Fehlenden Ersatz ebenfalls testen: keine alte richtige Antwort übernehmen.
8. Zwei ähnliche falsche Antworten gruppieren, Gruppierung aufheben und erneut gruppieren. Korrekte Lösung darf nicht als Spieleroption stehenbleiben.
9. Freigeben. Alle sehen gleiche zufällige Reihenfolge. Eigene Option sichtbar, aber gesperrt. Tipp bis Sekunde null ändern.
10. Kein Tipp: null Tipp-Punkte, Bluffpunkte trotzdem möglich. Bei gemeinsamer Option erhält jeder Urheber zwei Punkte pro fremder Stimme.
11. Zehn Sekunden Auflösung; Gesamtwertung; nächste Person erhält Starttaste und Moderationsrolle. Drei Runden spielen, sodass jede Person moderiert hat.
12. „Spiel beenden“ erst abbrechen, dann bestätigen. Ergebnis bleibt sichtbar. Revanche im Warteraum startet mit null Punkten.
13. Während Antwortphase kurz offline gehen und rechtzeitig zurückkehren. Längeren Ausfall testen: verständliche Fehlermeldung statt falscher Erfolgsmeldung.
14. Seite neu laden: gleiche Person kehrt in dieselbe Rolle zurück, sofern Identität noch vorhanden.
15. Spielleitung offline: nach serverseitiger Offline-Meldung zwei Minuten warten, festgelegte Vertretung übernimmt. Wer die Lösung sieht, darf in dieser Runde nicht abstimmen und erhält keine neuen Rundenpunkte.
16. Als Homebildschirm-App testen; neue Version zwischen Spielen veröffentlichen und Updatehinweis testen.

Bei einem Fehler den genauen Bildschirm, Browser, sichtbare Versionsnummer und die Fehlermeldung aus der Konsole festhalten. Regeln NICHT pauschal öffnen, um einen Test zum Laufen zu bringen.
