# Datenzugriff und bewusste Grenzen

## Datenmodell

- `rooms/CODE/public`: gemeinsamer Spielstand, Namen, Rollen, anonymisierte Auswahl, ab Auflösung Urheber und Stimmen.
- `secret/CODE/RUNDENID`: Rohantworten, interne Gruppierung, richtige Options-ID und Stimmen. Gesamtknoten nur für die aktuelle Spielleitung lesbar.
- Einzelne Rohantworten und Einzelstimmen: zusätzlich für die zugehörige anonyme UID lesbar. Keine allgemeine Lesefreigabe am darüberliegenden Knoten.
- `ownOptions/CODE/RUNDENID/UID`: eigene, nicht wählbare Options-IDs. Nur der jeweilige Spieler und über die Spielleitungsdaten die Spielleitung kennen die Zuordnung.
- `presence/CODE/UID`: Verbindungsanzeige; Schreibrecht nur für die jeweilige UID.

Realtime-Database-Lese-/Schreibfreigaben vererben sich nach unten. Deshalb gibt es keine Lesefreigabe an der gesamten Datenbank oder am gesamten Raum samt Geheimdaten. Gemeinsamer und privater Spielstand liegen getrennt. Die App liest gezielt die jeweils erlaubten Pfade.

Antworten und Stimmen sind einmalige Einträge pro Versuch/Runde und UID. Die Regeln lassen sie nur nach der jeweiligen Eingabefrist und innerhalb der fünfsekündigen Übertragungsfrist zu. Eigene Antwortmöglichkeiten sind auch durch Regeln von der Stimmabgabe ausgeschlossen. Nur die aktuelle Spielleitung schreibt öffentliche Punkte. Eine Transaktion verhindert, dass dieselbe Runde durch den normalen Clientablauf doppelt gewertet wird.

## Kein Wettbewerbssystem

Der Fragenkatalog samt Lösungen liegt absichtlich öffentlich auf GitHub. Wer gezielt nachschaut, kann schummeln. Auch die moderierende Person wird als vertrauenswürdig behandelt: Sie kann Text und gemeinsamen Spielstand verändern und sieht nach Zeitablauf die eingehenden Stimmen. Es gibt keine unabhängige serverseitige Punkteberechnung. Innerhalb der Übertragungsfrist kann ein manipuliertes Programm trotz lokal gesperrtem Feld andere Inhalte senden. Das ist mit dem vereinbarten rein statischen Client plus Regeln nicht vollständig auszuschließen.

Vierstellige Codes sind bequem, aber leicht erratbar. Authentifizierte Nutzer können bei Kenntnis oder Erraten des Codes den gemeinsamen Raumstand lesen. Keine sensiblen persönlichen Daten als Namen/Antworten verwenden. Anonyme Anmeldung ist kein wirksamer Schutz vor absichtlichem massenhaftem Anlegen von Räumen. Öffentliche Nutzung in größerem Maßstab erfordert zusätzliche Missbrauchsbegrenzung, App Check und ggf. serverseitige Funktionen.

Die Regeln sind zusammen mit der App zu verwenden. Nicht als allgemeine Firebase-Vorlage für andere Apps übernehmen. Eintragsschlüssel, Datenstruktur und Phasen müssen zusammenpassen. Die Regeln wurden lokal in einem Modell überprüft, aber nicht gegen einen live erreichbaren Firebase-Server oder offiziellen Emulator ausgeführt. Vor breiter Nutzung ist ein realer Mehrgerätetest erforderlich.

## Aufbewahrung

Keine automatische serverseitige Löschung. Veraltete Räume und zugehörige Privat-/Präsenzdaten im Firebase-Projekt regelmäßig entfernen, wenn niemand darin spielt. Der Browser speichert die anonyme Identität sowie lokale Entwürfe. Website-Daten zu löschen setzt diese zurück. Die App bindet keine Analyse- oder Werbeskripte ein. Firebase und der SDK-CDN werden für Anmeldung und Synchronisation kontaktiert.

## Quellen für die technische Auslegung

- https://firebase.google.com/docs/database/security/core-syntax
- https://firebase.google.com/docs/database/web/start
- https://firebase.google.com/docs/database/web/offline-capabilities
- https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
