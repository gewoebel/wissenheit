# Wissenheit

Wissenheit ist eine mobile Web-App im Stil von „Nobody is perfect“. Die Spieler erhalten eine Frage, schreiben glaubwürdige falsche Antworten und versuchen anschließend, die richtige Antwort zu erkennen.

## Spielprinzip

- Mindestens 3 Spieler
- Ein Spieler startet das Spiel und erhält einen vierstelligen Beitrittscode
- Die anderen Spieler treten mit Name und Code bei
- Der Spielleiter startet das Spiel, sobald alle erwarteten Spieler da sind
- Der Spielleiter rotiert von Runde zu Runde in Beitrittsreihenfolge
- In der eigenen Spielleiterrunde erhält man keine Punkte
- Jede Frage wird pro Spiel nur einmal verwendet
- Die Fragen werden zufällig ausgewählt; Kategorien werden nicht angezeigt

## Ablauf einer Runde

1. Alle Spieler schreiben innerhalb der gewählten Zeit eine mögliche Antwort.
2. Der Spielleiter prüft, ob eine Antwort der korrekten Antwort entspricht.
3. Spieler mit korrekten Antworten erhalten erneut die volle Antwortzeit für eine neue Antwort.
4. Der Spielleiter kann inhaltlich identische falsche Antworten zusammenführen.
5. Alle Antworten werden anonym und zufällig gemischt angezeigt.
6. Alle Spieler außer dem Spielleiter haben 30 Sekunden für ihren Tipp.
7. Für 10 Sekunden wird angezeigt, von wem jede Antwort stammt.
8. Anschließend erscheint die Punktetabelle.
9. Der Spielleiter startet ausdrücklich die nächste Runde oder beendet das Spiel.

## Punkte

- 1 Punkt für das Tippen der richtigen Antwort
- 2 Punkte pro Spieler, der auf die eigene falsche Antwort hereinfällt
- Bei zusammengeführten Antworten erhalten alle Urheber die Punkte
- Der Spielleiter erhält in seiner Runde keine Punkte
- Bei Gleichstand gibt es mehrere Gewinner

## Firebase einrichten

1. Erstelle in der Firebase Console ein neues Projekt.
2. Aktiviere **Firestore Database**.
3. Erstelle eine Web-App und kopiere die Firebase-Konfiguration.
4. Ersetze in `app.js` die Platzhalter in `firebaseConfig`.
5. Kopiere den Inhalt von `firestore.rules` in die Firestore-Regeln und veröffentliche sie.

## GitHub Pages

1. Erstelle ein neues GitHub-Repository, zum Beispiel `wissenheit`.
2. Lade alle Dateien dieses Projekts hoch.
3. Gehe zu **Settings → Pages**.
4. Wähle als Source `Deploy from a branch`, Branch `main` und Folder `/ (root)`.
5. Die App ist anschließend unter `https://DEIN_GITHUB_NAME.github.io/wissenheit/` erreichbar.

## Wichtiger Hinweis

Die Firebase-Konfiguration darf öffentlich im Frontend liegen; schütze stattdessen die Firestore-Daten mit geeigneten Sicherheitsregeln. Für den produktiven Betrieb sollten Authentifizierung, Serverregeln und Missbrauchsschutz ergänzt werden.