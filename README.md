# Wissenheit · Version 1.0.0

Mobile Multiplayer-PWA für 3–8 Personen. Veröffentlichen unter https://gewoebel.github.io/wissenheit/.

## Schnellstart

1. ZIP entpacken. Den INHALT des Ordners `wissenheit` verwenden, nicht den Ordner als weitere Unterebene hochladen.
2. Ein eigenes Firebase-Projekt anlegen. Schrittfolge: `FIREBASE-SETUP.md`.
3. In `firebase-config.js` die Projektwerte und insbesondere die tatsächliche `databaseURL` eintragen.
4. `database.rules.json` in Firebase unter Realtime Database → Regeln vollständig einfügen und veröffentlichen. Die Datei auf GitHub alleine ändert die Regeln NICHT.
5. Ein neues GitHub-Repository `wissenheit` erstellen. Alle App-Dateien samt `icons`-Ordner, Manifest und Service Worker hochladen. Die Dokumentationen und Tests dürfen mit ins Repository.
6. In Settings → Pages → Deploy from a branch → `main` → `/ (root)` → Save wählen.
7. Warten, bis die Veröffentlichung abgeschlossen ist. Die App unter der oben genannten Adresse öffnen.
8. Vor der ersten Freundesrunde `TESTPLAN.md` mit mindestens drei getrennten Geräten/Browserprofilen durchgehen.

Es gibt keinen Build-Schritt, keine npm-Installation und keinen eigenen Webserver für den Betrieb. Firebase ist das zusätzlich benötigte Backend. Die Firebase-Konfiguration im Paket enthält absichtlich Platzhalter.

## Enthaltene Dateien

- `index.html`, `styles.css`: Oberfläche nach der bereitgestellten Auch-Vorlage.
- `app.js`: Ansichten, Firebase-Anbindung, Spielzustandsautomat, Eingaben und Wiederverbindung.
- `core.js`: reine Funktionen für Gruppierung, Rollenrotation und Punkte.
- `questions.js`: 481 Fragen/Antworten aus der bereitgestellten Ausgangsdatei.
- `AUSGESCHLOSSENE-FRAGEN.md`: 19 ausgeschlossene Einträge mit Gründen.
- `firebase-config.js`: hier die Werte des neuen Projekts einsetzen.
- `database.rules.json`: Realtime-Database-Regeln; separat in Firebase veröffentlichen.
- `manifest.webmanifest`, `service-worker.js`, `icons/`: Homebildschirm-App und kontrollierte Updates.
- `tests/`: lokale Logik-/Berechtigungsmodelltests und optionaler Browser-Smoke-Test.
- `firebase.json`: optionale Emulator-Konfiguration, für GitHub Pages nicht erforderlich.

## Spielablauf

Die Raumerstellung erzeugt einen vierstelligen Code. Im Warteraum können 30, 45, 60, 75 oder 90 Sekunden gewählt werden (Standard 60). Der Ersteller beginnt als Spielleitung. Die Reihenfolge wird beim Start nach Beitrittszeit festgelegt und geht anschließend reihum.

1. Nur die Spielleitung sieht Frage und korrekte Lösung. Sie kann ungeeignete Fragen überspringen, bevor sie die Antwortzeit startet.
2. Alle anderen geben bis zu 300 Zeichen ein. Eingaben bleiben bis zum Ende lokal und werden dann automatisch gesendet. Kein Bestätigen-Button nötig.
3. Nach Eingabeschluss gibt es maximal fünf Sekunden Übertragungsfrist. Diese sind KEINE zusätzliche Eingabezeit. Die Spielleitung wartet auf alle Antworten oder auf das Ende dieser Frist.
4. Die Spielleitung prüft die Antworten mit Namen. Sinngemäß richtige Antworten werden markiert und durch neue erfundene Antworten ersetzt. Alle markierten Personen erhalten gleichzeitig die volle ursprüngliche Antwortzeit. Andere sehen nur einen Wartebildschirm.
5. Die Spielleitung darf Formulierungen glätten, Antworten ausschließen und ähnliche falsche Antworten zusammenfassen. Der Text der zuerst markierten Person wird zum gemeinsamen Text. Identische Texte werden automatisch zusammengefasst. Gruppierungen können aufgehoben werden.
6. Erst die ausdrückliche Freigabe veröffentlicht anonymisierte Antwortmöglichkeiten einschließlich der richtigen Lösung. Mindestens eine falsche Möglichkeit muss vorhanden sein.
7. Alle außer der Spielleitung wählen 30 Sekunden lang einen Tipp und dürfen ihn ändern. Eigene bzw. mitverfasste Antworten bleiben sichtbar, sind aber nicht wählbar.
8. Tipps werden am Ende automatisch übertragen. Nach der fünfsekündigen Übertragungsfrist werden die Punkte einmalig berechnet: richtiger Tipp +1; pro fremder Stimme für eine erfundene Antwort +2 pro Urheber.
9. Zehn Sekunden Auflösung zeigen Lösung, Urheber, Stimmen und Rundenpunkte. Danach erscheint der Gesamtstand. Die nächste Spielleitung startet die nächste Runde.
10. Keine feste Rundenzahl. Die aktuelle Spielleitung kann mit „Spiel beenden“ → „Bist du dir sicher?“ beenden. Es zählen abgeschlossene Runden. Eine Revanche führt in den Warteraum zurück.

Eine Person ohne erfundene Antwort darf trotzdem abstimmen. Eine Person ohne Tipp kann trotzdem Punkte für ihre erfundene Antwort erhalten. Es gibt keine Zusatzpunkte für ursprünglich richtig eingegebene Lösungen.

## Stabilität und Wiederverbindung

Während Antwort- und Abstimmungsphase wird die aktive Eingabe bei Datenänderungen nicht ausgetauscht. Damit bleiben DOM-Element, Fokus und Cursor erhalten. Entwürfe und lokale Tipps werden zusätzlich im lokalen Browserspeicher gesichert. Leere Eingaben der nächsten Runde werden über die eindeutige Runden-ID getrennt.

Nur einen Tab bzw. eine Homebildschirm-Instanz pro Person verwenden. Die App während Zeitphasen im Vordergrund lassen. iOS/Android können Hintergrundseiten anhalten. Bei fehlender Verbindung ist eine rechtzeitige Übertragung nicht garantiert; fehlgeschlagene Übertragung wird angezeigt. Das Löschen von Website-Daten löscht auch die lokale anonyme Identität und Entwürfe.

Die nächste Person in der Reihenfolge ist festgelegte Vertretung. Meldet Firebase die Spielleitung als offline, kann diese Vertretung nach zwei Minuten übernehmen. Wer dabei die Lösung sieht, ist für den Rest der Runde von Tipps und neuen Rundenpunkten ausgeschlossen. Fristen werden durch einen Ausfall NICHT verlängert. Ist auch die festgelegte Vertretung nicht erreichbar, muss die ursprüngliche Spielleitung zurückkehren; es gibt keinen zusätzlichen automatischen Ersatzserver.

Der Raumersteller verwaltet Teilnehmer und kann diese im Warteraum bzw. zwischen Runden entfernen. Aktuelle Spielleitung und Raumersteller sind von dieser Auswahl ausgenommen. Nach Spielstart keine neuen Mitspieler, außer beim Zurückkehren einer bereits vorhandenen Identität.

## Fragen ergänzen

In `questions.js` einen Eintrag im selben Format ergänzen:

```js
{ "id": "q501", "question": "Deine Frage?", "answer": "Die richtige Lösung." }
```

IDs müssen eindeutig bleiben. Richtige Lösungen maximal 300 Zeichen. Einträge mit nur zwei naheliegenden Möglichkeiten oder verratener Lösung vermeiden. Die übernommenen Antworten wurden nicht vollständig extern nachrecherchiert. Bei Zweifeln die Frage in der Vorschau überspringen. Bei einer Änderung an Dateien auch die Version in `core.js` und `service-worker.js` erhöhen.

## Homebildschirm und Updates

Auf dem iPhone in Safari öffnen → Teilen → Zum Home-Bildschirm. Unter Android im Browser „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.

Eine sichtbare Versionsnummer steht unten in der App. Bei einer neuen Veröffentlichung dieselbe neue Versionsnummer in `core.js` und `service-worker.js` setzen. Die App prüft beim Öffnen auf einen neuen Service Worker und bietet „Aktualisieren“ an. Updates erst zwischen Spielen auslösen, anschließend alle Geräte auf denselben Stand bringen. Ein wartender Service Worker kann sonst regulär aktiv werden, nachdem alle alten App-Fenster geschlossen wurden.

Erster Firebase-Aufruf und Mehrspielermodus benötigen Internet. Der Cache ersetzt keine Offline-Multiplayerfunktion. Den Code nicht einfach aus dem Dateimanager als file:// öffnen. Für einen lokalen Test z.B. im App-Ordner `python -m http.server 8000` starten und http://localhost:8000 aufrufen.

## Sicherheit, Grenzen und Aufräumen

Siehe `SICHERHEIT.md`. Insbesondere ist der Fragenkatalog bewusst öffentlich und die Spielleitung vertrauenswürdig. Es handelt sich nicht um ein betrugssicheres Turniersystem. Das Paket wurde nicht in dein Firebase-Projekt eingespielt und nicht auf GitHub veröffentlicht.

Räume werden nach sechs Stunden Inaktivität beim Beitritt/Wiederherstellen als veraltet behandelt, aber nicht automatisch vom Server gelöscht. Wenn niemand spielt, alte Einträge zu einem Zahlencode unter `rooms`, `secret`, `ownOptions` und `presence` in Firebase löschen. In einem dauerhaft genutzten Projekt sollte später eine serverseitige Aufräumroutine ergänzt werden. Keine gleichzeitig laufenden Räume löschen. Lokale Entwürfe verbleiben im Website-Speicher bis dieser gelöscht wird.
