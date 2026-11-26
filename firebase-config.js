// Die Werte des NEUEN Firebase-Projekts eintragen. Keine Admin-/Service-Account-Schlüssel!
export const firebaseConfig = {
 apiKey: "AIzaSyCfRe45WP6qpVaYqBopH2Yx0V2W1VzQmnE",
 authDomain: "wissenheit-77fe4.firebaseapp.com",
 databaseURL: "https://wissenheit-77fe4-default-rtdb.europe-west1.firebasedatabase.app/",
 projectId: "wissenheit-77fe4",
 storageBucket: "wissenheit-77fe4.firebasestorage.app",
 messagingSenderId: "638385923966",
 appId: "1:638385923966:web:02c4d650e16e2664deb52f"
};
// HIER_EINTRAGEN in dieser Prüfzeile NICHT ersetzen.
export const firebaseIsConfigured=["apiKey","authDomain","databaseURL","projectId","appId"].every(k=>typeof firebaseConfig[k]==="string"&&firebaseConfig[k].length>0&&!firebaseConfig[k].includes("HIER_EINTRAGEN"));
