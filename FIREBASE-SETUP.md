# Firebase für Wissenheit einrichten

## 1. Eigenes Projekt

1. https://console.firebase.google.com/ öffnen und mit dem gewünschten Google-Konto anmelden.
2. Neues Projekt `Wissenheit` erstellen. Nicht das Projekt einer anderen App verwenden.
3. Google Analytics ist für diese App nicht erforderlich.
4. Eine Web-App registrieren (Symbol `</>`), z.B. `Wissenheit Web`. Firebase Hosting muss nicht aktiviert werden; veröffentlicht wird über GitHub Pages.

## 2. Realtime Database

1. Im Projekt **Realtime Database** suchen (nicht Cloud Firestore).
2. Datenbank erstellen. Gewünschte Region wählen, möglichst in Europa. Mit gesperrten Regeln starten.
3. Die angezeigte Datenbank-URL kopieren. Sie kann z.B. `https://PROJEKT-default-rtdb.europe-west1.firebasedatabase.app` oder `https://PROJEKT-default-rtdb.firebaseio.com` lauten. NICHT aus dem Beispiel ableiten, sondern die tatsächlich angezeigte URL verwenden.
4. Unter **Regeln** den vollständigen Inhalt von `database.rules.json` einfügen und **Veröffentlichen**.
5. Bei einem Fehler nicht ersatzweise globale Lese-/Schreibrechte einschalten. Den genauen Fehler prüfen. Diese Datei verwendet Realtime-Database-Regeln, keine Firestore-Regeln.

## 3. Anonyme Anmeldung

1. Im Projekt **Authentication** öffnen; ggf. zunächst „Loslegen“.
2. Unter **Anmeldemethode / Sign-in method** den Anbieter **Anonym / Anonymous** aktivieren und speichern.
3. Unter **Einstellungen → Autorisierte Domains** prüfen, ob `gewoebel.github.io` enthalten ist; ggf. hinzufügen. Keine Unterpfade oder https:// eintragen.
4. Für lokalen Test ggf. `localhost` hinzufügen. Ein sichtbares Benutzerkonto oder Passwort brauchen die Spieler nicht.

## 4. Konfiguration

1. Zahnrad neben Projektübersicht → **Projekteinstellungen → Allgemein → Meine Apps**.
2. Die Konfiguration der neuen Web-App kopieren.
3. In `firebase-config.js` nur die Werte zwischen den Anführungszeichen ersetzen. Insbesondere `apiKey`, `authDomain`, `projectId`, `appId` und die echte `databaseURL` setzen. Auch die anderen vom Projekt gelieferten Felder übernehmen.
4. Keine Anführungszeichen verdoppeln. Kommata und Klammern beibehalten.
5. Die Suchzeichenfolge `HIER_EINTRAGEN` in der letzten Prüfzeile NICHT ersetzen. Dort steht keine weitere Konfiguration.
6. Keinen Admin-Schlüssel und keine Service-Account-Datei ins Repository hochladen.
7. Die Konfiguration VOR dem ersten Aufruf der veröffentlichten App eintragen. Bei späterer Änderung zusätzlich die Cache-Version in `service-worker.js` erhöhen.

## 5. Veröffentlichung

GitHub-Repository `wissenheit`, Inhalt des Pakets auf den Hauptbranch hochladen. In GitHub Settings → Pages den Branch `main` und Ordner `/ (root)` auswählen. Die App ist nach erfolgreichem Deployment unter https://gewoebel.github.io/wissenheit/ erreichbar.

## 6. Prüfen

- Einrichtungshinweis statt Start: Konfiguration enthält noch Platzhalter.
- Grauer Punkt / Ladeansicht: Browser-Konsole auf Syntax- oder Importfehler prüfen. Internetverbindung und Firebase-SDK-Zugriff prüfen.
- `operation-not-allowed`: anonyme Anmeldung aktivieren.
- `permission-denied`: richtige Realtime Database und die vollständigen mitgelieferten Regeln prüfen. Das Kopieren der Regeldatei nur auf GitHub genügt nicht.
- Alte App auf dem Homebildschirm: sichtbare Version prüfen und Update anbieten lassen; zwischen den Spielen aktualisieren.
- Ein Teilnehmer belegt zwei Fenster: dieselbe Identität nicht parallel verwenden.

Der modulare Firebase-Web-SDK wird fest auf Version 12.0.0 vom offiziellen Google-CDN geladen. Er ist nicht im Paket gebündelt. Ein Versionswechsel sollte separat getestet werden.

## Optionaler Emulator-Test

`firebase.json` ist vorbereitet. Mit installierter Node.js-Laufzeit, Java und Firebase CLI kann ein erfundenes Demo-Projekt verwendet werden. Die lokalen Regelmodelltests sind KEIN offizieller Emulator-Test. Eine Anleitung für deine echte Datenbank ersetzt das nicht: vor der ersten Runde die reale Dreigeräte-Checkliste ausführen.

Firebase-Web-API-Keys sind Teil der Clientkonfiguration; sie ersetzen keine Datenbankregeln. Zugriffsbeschränkungen, Nutzungsübersicht und ggf. App Check gesondert prüfen. Die App verwendet weder Fotospeicher noch Cloud Functions. Abrechnung und Kontingente des eigenen Projekts im Blick behalten; hier wird kein bestimmter Preis garantiert.
