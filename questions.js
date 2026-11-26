const QUESTIONS = [
  {
    "id": 1,
    "q": "Welcher Knochen des Menschen ist normalerweise nicht gelenkig mit einem anderen Knochen verbunden?",
    "a": "Das Zungenbein."
  },
  {
    "id": 2,
    "q": "Was ist eine Glabella?",
    "a": "Die meist unbehaarte Stelle zwischen den Augenbrauen oberhalb der Nasenwurzel."
  },
  {
    "id": 3,
    "q": "Wie heißt die senkrechte Rinne zwischen Nase und Oberlippe?",
    "a": "Philtrum."
  },
  {
    "id": 4,
    "q": "Was ist eine Lunula am menschlichen Körper?",
    "a": "Der helle, halbmondförmige Bereich am Ansatz eines Fingernagels."
  },
  {
    "id": 5,
    "q": "Was bezeichnet der anatomische Ausdruck „Hallux“?",
    "a": "Die Großzehe."
  },
  {
    "id": 6,
    "q": "Welcher Muskel ist hauptsächlich für die Gänsehaut verantwortlich?",
    "a": "Der Haaraufrichtemuskel an den Haarfollikeln."
  },
  {
    "id": 7,
    "q": "Warum sieht sauerstoffarmes Blut in menschlichen Venen nicht wirklich blau aus?",
    "a": "Weil es dunkelrot ist; der blaue Eindruck entsteht durch die optischen Eigenschaften von Haut und Gewebe."
  },
  {
    "id": 8,
    "q": "Welcher Teil eines gesunden erwachsenen Auges wird nicht durch eigene Blutgefäße versorgt und liegt vor der Iris?",
    "a": "Die Hornhaut."
  },
  {
    "id": 9,
    "q": "Warum erscheinen die Fingerkuppen nach längerem Baden runzelig?",
    "a": "Eine vom vegetativen Nervensystem gesteuerte Verengung von Blutgefäßen lässt die Haut Falten bilden."
  },
  {
    "id": 10,
    "q": "Welcher Bestandteil der Haut sorgt überwiegend für ihre individuelle Grundfärbung?",
    "a": "Das Pigment Melanin."
  },
  {
    "id": 11,
    "q": "Was ist die sogenannte Tabatière am Handgelenk?",
    "a": "Eine bei abgespreiztem Daumen sichtbare Vertiefung auf der Daumenseite des Handrückens."
  },
  {
    "id": 12,
    "q": "Was verbindet die Eustachische Röhre miteinander?",
    "a": "Das Mittelohr und den Nasenrachenraum."
  },
  {
    "id": 13,
    "q": "Welcher Muskel zieht sich bei einem Schluckauf unwillkürlich zusammen?",
    "a": "Das Zwerchfell."
  },
  {
    "id": 14,
    "q": "Welche kleinen Strukturen im Innenohr werden umgangssprachlich als Ohrsteinchen bezeichnet?",
    "a": "Otolithen, kleine Kalziumkarbonatkristalle des Gleichgewichtsorgans."
  },
  {
    "id": 15,
    "q": "Welcher Stoff macht roten Blutkörperchen ihre Farbe?",
    "a": "Hämoglobin."
  },
  {
    "id": 16,
    "q": "Welche menschlichen Blutzellen verlieren bei ihrer Reifung normalerweise ihren Zellkern?",
    "a": "Die roten Blutkörperchen, die Erythrozyten."
  },
  {
    "id": 17,
    "q": "Welches Organ produziert die Gallenflüssigkeit?",
    "a": "Die Leber; die Gallenblase speichert und konzentriert sie."
  },
  {
    "id": 18,
    "q": "Welches körpereigene Enzym beginnt bereits im Mund mit dem Abbau von Stärke?",
    "a": "Die Speichelamylase."
  },
  {
    "id": 19,
    "q": "Was sind Borborygmen?",
    "a": "Hörbare Darmgeräusche."
  },
  {
    "id": 20,
    "q": "Was bedeutet Anosmie?",
    "a": "Verlust des Geruchssinns."
  },
  {
    "id": 21,
    "q": "Warum kann Schokolade beim Hund eine Vergiftung auslösen?",
    "a": "Sie enthält unter anderem Theobromin, das Hunde nur langsam abbauen."
  },
  {
    "id": 22,
    "q": "Welcher Pflanzenbestandteil ist Zimt?",
    "a": "Die getrocknete innere Rinde bestimmter Zimtbäume."
  },
  {
    "id": 23,
    "q": "Welcher Pflanzenteil wird als Gewürznelke verwendet?",
    "a": "Die getrocknete, noch geschlossene Blütenknospe des Gewürznelkenbaums."
  },
  {
    "id": 24,
    "q": "Welcher Teil der Safranblüte wird als Gewürz verwendet?",
    "a": "Die roten Narben der Blüte."
  },
  {
    "id": 25,
    "q": "Welche zwei Gewürze stammen vom selben Baum Myristica fragrans?",
    "a": "Muskatnuss und Macis, die sogenannte Muskatblüte."
  },
  {
    "id": 26,
    "q": "Was ist „Muskatblüte“ botanisch tatsächlich?",
    "a": "Der getrocknete Samenmantel der Muskatnuss, keine Blüte."
  },
  {
    "id": 27,
    "q": "Welcher Pflanzenteil wird als Ingwer gegessen?",
    "a": "Ein Rhizom, also ein unterirdisch wachsender Spross."
  },
  {
    "id": 28,
    "q": "Welcher Teil der Kartoffelpflanze ist die Speisekartoffel?",
    "a": "Eine unterirdische Sprossknolle, keine Wurzel."
  },
  {
    "id": 29,
    "q": "Zu welchem botanischen Fruchttyp gehört die Banane?",
    "a": "Zu den Beeren."
  },
  {
    "id": 30,
    "q": "Was sind die kleinen gelblichen Punkte auf der Außenseite einer Erdbeere botanisch?",
    "a": "Die eigentlichen Einzelfrüchte, kleine Nüsschen."
  },
  {
    "id": 31,
    "q": "Welcher Fruchttyp ist die Himbeere botanisch?",
    "a": "Eine Sammelsteinfrucht."
  },
  {
    "id": 32,
    "q": "Welcher Teil des Selleries wird beim Staudensellerie hauptsächlich gegessen?",
    "a": "Die verdickten Blattstiele."
  },
  {
    "id": 33,
    "q": "Was ist die essbare „Blume“ eines Blumenkohls?",
    "a": "Ein stark gestauchter, noch nicht voll entwickelter Blütenstand."
  },
  {
    "id": 34,
    "q": "Welche verbreiteten Kohlgemüse gehören wie Brokkoli zur Art Brassica oleracea?",
    "a": "Zum Beispiel Blumenkohl, Rosenkohl, Grünkohl und Kohlrabi."
  },
  {
    "id": 35,
    "q": "Woraus wird echter weißer Pfeffer hergestellt?",
    "a": "Aus reifen Früchten des Pfefferstrauchs, deren äußere Fruchthülle entfernt wurde."
  },
  {
    "id": 36,
    "q": "Warum prickelt Szechuanpfeffer auf der Zunge?",
    "a": "Er enthält Sanshoole, die sensorische Nerven reizen."
  },
  {
    "id": 37,
    "q": "Welcher Stoff ist hauptsächlich für die Schärfe von Chilischoten verantwortlich?",
    "a": "Capsaicin."
  },
  {
    "id": 38,
    "q": "Wo wird Capsaicin in einer Chilifrucht vor allem gebildet?",
    "a": "Im Plazentagewebe, an dem die Samen sitzen, nicht in den Samen selbst."
  },
  {
    "id": 39,
    "q": "Warum schmeckt ein Getränk nach dem Essen von Artischocken manchmal süßlich?",
    "a": "Inhaltsstoffe wie Cynarin können die nachfolgende Süßwahrnehmung verändern."
  },
  {
    "id": 40,
    "q": "Welcher Stoff macht Kurkuma gelb?",
    "a": "Curcumin."
  },
  {
    "id": 41,
    "q": "Was ist Aquafaba?",
    "a": "Das Koch- oder Einweichwasser von Hülsenfrüchten, insbesondere Kichererbsen, das sich aufschlagen lässt."
  },
  {
    "id": 42,
    "q": "Was ist Okara?",
    "a": "Der feste Rückstand aus der Sojadrink- beziehungsweise Tofuherstellung."
  },
  {
    "id": 43,
    "q": "Was ist Trester bei der Weinherstellung?",
    "a": "Der nach dem Pressen verbleibende Rückstand aus unter anderem Schalen und Kernen."
  },
  {
    "id": 44,
    "q": "Was ist Molke?",
    "a": "Die Flüssigkeit, die bei der Gerinnung von Milch und Abtrennung des Bruchs zurückbleibt."
  },
  {
    "id": 45,
    "q": "Was unterscheidet Kondensmilch grundsätzlich von gewöhnlicher Milch?",
    "a": "Ihr wurde durch Eindampfen ein Teil des Wassers entzogen."
  },
  {
    "id": 46,
    "q": "Was bedeutet Homogenisieren bei Milch?",
    "a": "Die Fettkügelchen werden mechanisch verkleinert und gleichmäßig verteilt."
  },
  {
    "id": 47,
    "q": "Welches Gas lässt Hefeteig aufgehen?",
    "a": "Kohlenstoffdioxid."
  },
  {
    "id": 48,
    "q": "Welche Reaktion ist für viele Röstaromen einer Brotkruste verantwortlich?",
    "a": "Die Maillard-Reaktion zwischen Aminoverbindungen und reduzierenden Zuckern."
  },
  {
    "id": 49,
    "q": "Warum wird ein angeschnittener Apfel häufig braun?",
    "a": "Enzyme fördern die Oxidation phenolischer Inhaltsstoffe."
  },
  {
    "id": 50,
    "q": "Woraus besteht die weiße Eiweißmasse, die beim Garen von Lachs austreten kann?",
    "a": "Aus geronnenen, wasserlöslichen Proteinen, häufig als Albumin bezeichnet."
  },
  {
    "id": 51,
    "q": "Warum wird Fleisch beim Braten braun, ohne dass es karamellisieren muss?",
    "a": "Durch Maillard-Reaktionen; Karamellisierung ist die thermische Umwandlung von Zucker."
  },
  {
    "id": 52,
    "q": "Was ist der sogenannte Fettreif auf Schokolade?",
    "a": "Ein heller Belag durch umgelagerte oder an die Oberfläche gewanderte Fettkristalle."
  },
  {
    "id": 53,
    "q": "Was ist Kefir mikrobiologisch betrachtet?",
    "a": "Ein durch eine Gemeinschaft von Bakterien und Hefen fermentiertes Milchgetränk."
  },
  {
    "id": 54,
    "q": "Wodurch erhält Blauschimmelkäse seine typischen blauen Adern?",
    "a": "Durch kultivierte Schimmelpilze, meist Penicillium roqueforti."
  },
  {
    "id": 55,
    "q": "Welcher Mikroorganismus bildet die typischen Fäden beim japanischen Nattō?",
    "a": "Das Bakterium Bacillus subtilis, insbesondere für Nattō genutzte Stämme."
  },
  {
    "id": 56,
    "q": "Warum platzt Popcornmais beim Erhitzen auf?",
    "a": "Wasserdampf baut in der weitgehend dichten Kornhülle Druck auf, bis sie aufreißt."
  },
  {
    "id": 57,
    "q": "Was ist Panko?",
    "a": "Ein grobflockiges japanisches Paniermehl aus Brot."
  },
  {
    "id": 58,
    "q": "Was ist Seitan?",
    "a": "Ein Lebensmittel, dessen Hauptbestandteil Weizengluten ist."
  },
  {
    "id": 59,
    "q": "Was ist Gomasio?",
    "a": "Eine Würzmischung aus geröstetem Sesam und Salz."
  },
  {
    "id": 60,
    "q": "Was ist Sumach als Küchengewürz?",
    "a": "Ein säuerliches Gewürz aus getrockneten Früchten bestimmter Sumacharten."
  },
  {
    "id": 61,
    "q": "Was misst der Schwimmer in einer Senkspindel für Flüssigkeiten?",
    "a": "Über seine Eintauchtiefe die Dichte der Flüssigkeit."
  },
  {
    "id": 62,
    "q": "Wie heißt der bewegliche kleine Hebel einer Getränkedose, mit dem die Öffnung eingedrückt wird?",
    "a": "Aufreißlasche beziehungsweise Stay-on-Tab."
  },
  {
    "id": 63,
    "q": "Wozu dient die Kugel in vielen Spraydosen mit Lack?",
    "a": "Zum Durchmischen des Inhalts beim Schütteln."
  },
  {
    "id": 64,
    "q": "Was ist eine Sicke an einem Blechbauteil?",
    "a": "Eine eingeformte Rinne oder Wulst, die unter anderem die Steifigkeit erhöht."
  },
  {
    "id": 65,
    "q": "Was ist eine Sollbruchstelle?",
    "a": "Eine gezielt geschwächte Stelle, an der ein Bauteil bei bestimmter Belastung bevorzugt versagen soll."
  },
  {
    "id": 66,
    "q": "Was bewirkt ein Bimetallstreifen in einem Thermostaten?",
    "a": "Er verbiegt sich bei Temperaturänderung, weil seine Metalle sich unterschiedlich stark ausdehnen."
  },
  {
    "id": 67,
    "q": "Warum kühlt sich die Haut beim Verdunsten von Wasser ab?",
    "a": "Für die Verdunstung wird Wärmeenergie aus der Umgebung aufgenommen."
  },
  {
    "id": 68,
    "q": "Warum fühlt sich eine Metallplatte bei gleicher Raumtemperatur kälter an als Holz?",
    "a": "Metall führt Wärme aus der Hand schneller ab."
  },
  {
    "id": 69,
    "q": "Warum schwimmt gewöhnliches Wassereis auf flüssigem Wasser?",
    "a": "Es hat unter diesen Bedingungen eine geringere Dichte."
  },
  {
    "id": 70,
    "q": "Was ist der Leidenfrost-Effekt?",
    "a": "Eine Flüssigkeit kann auf einer sehr heißen Oberfläche auf einem isolierenden Dampfkissen schweben."
  },
  {
    "id": 71,
    "q": "Warum erzeugt Seife auf einer Wasseroberfläche oft eine Bewegung kleiner schwimmender Teilchen?",
    "a": "Sie verändert örtlich die Oberflächenspannung."
  },
  {
    "id": 72,
    "q": "Was ist ein Lotuseffekt?",
    "a": "Starke Wasserabweisung durch die Kombination geeigneter Oberflächenstruktur und Oberflächenchemie."
  },
  {
    "id": 73,
    "q": "Was macht ein Katalysator in einer chemischen Reaktion?",
    "a": "Er ermöglicht einen Reaktionsweg mit geringerer Aktivierungsenergie und wird insgesamt nicht verbraucht."
  },
  {
    "id": 74,
    "q": "Warum kann ein Induktionskochfeld einen geeigneten Topf direkt erhitzen?",
    "a": "Ein wechselndes Magnetfeld erzeugt elektrische Ströme und weitere magnetische Verluste im Topfboden."
  },
  {
    "id": 75,
    "q": "Was ist die Frequenz des Brummens vieler Netztransformatoren bei 50-Hertz-Netzfrequenz hauptsächlich?",
    "a": "100 Hertz, weil sich magnetisch bedingte Verformungen zweimal je Netzperiode wiederholen."
  },
  {
    "id": 76,
    "q": "Wozu dient ein Ferritkern als Verdickung an einem Kabel?",
    "a": "Er unterdrückt hochfrequente Störströme."
  },
  {
    "id": 77,
    "q": "Was ist ein Faradayscher Käfig?",
    "a": "Eine leitende Umhüllung, die elektrische Felder im Inneren abschirmen kann."
  },
  {
    "id": 78,
    "q": "Warum hat eine Mikrowellentür ein Metallgitter?",
    "a": "Die kleinen Öffnungen lassen sichtbares Licht durch, schirmen die wesentlich längeren Mikrowellen aber weitgehend ab."
  },
  {
    "id": 79,
    "q": "Was ist ein Piezozünder?",
    "a": "Ein Zünder, der durch mechanische Verformung eines piezoelektrischen Materials eine hohe elektrische Spannung erzeugt."
  },
  {
    "id": 80,
    "q": "Warum beschlägt eine kalte Brille beim Betreten eines warmen Raums?",
    "a": "Wasserdampf aus der Luft kondensiert auf den kalten Gläsern."
  },
  {
    "id": 81,
    "q": "Was ist ein Zeolith, wie er auch in Geschirrspülern verwendet wird?",
    "a": "Ein mikroporöses Material, das Wasser aufnehmen und dabei Wärme freisetzen kann."
  },
  {
    "id": 82,
    "q": "Was ist Kieselgel in kleinen Trockenmittelbeuteln?",
    "a": "Ein poröses Siliciumdioxid, das Wasserdampf an seiner Oberfläche bindet."
  },
  {
    "id": 83,
    "q": "Was bedeutet „hygroskopisch“?",
    "a": "Feuchtigkeit aus der Umgebung anziehend beziehungsweise aufnehmend."
  },
  {
    "id": 84,
    "q": "Was ist ein Vakuumisolierglas im Unterschied zum üblichen gasgefüllten Isolierglas?",
    "a": "Eine Verglasung mit weitgehend evakuiertem Zwischenraum zwischen den Scheiben."
  },
  {
    "id": 85,
    "q": "Warum befinden sich kleine Abstandhalter zwischen den Scheiben von Vakuumglas?",
    "a": "Sie verhindern, dass der äußere Luftdruck die Scheiben aufeinanderpresst."
  },
  {
    "id": 86,
    "q": "Was ist ein Aerogel?",
    "a": "Ein extrem poröser Feststoff, bei dem die Flüssigkeit eines Gels weitgehend durch Gas ersetzt wurde."
  },
  {
    "id": 87,
    "q": "Was ist ein Geotextil?",
    "a": "Ein wasserdurchlässiges textiles Flächengebilde für Anwendungen im Erd- und Grundbau."
  },
  {
    "id": 88,
    "q": "Was ist ein Trass im Baustoffkontext?",
    "a": "Ein fein gemahlenes vulkanisches Gestein mit puzzolanischen Eigenschaften."
  },
  {
    "id": 89,
    "q": "Was bedeutet „thixotrop“ bei einem Material?",
    "a": "Unter mechanischer Beanspruchung nimmt seine Viskosität zeitabhängig ab und in Ruhe wieder zu."
  },
  {
    "id": 90,
    "q": "Was bezeichnet „Kriechen“ bei einem Baustoff?",
    "a": "Eine zeitabhängige bleibende Verformung unter anhaltender Belastung."
  },
  {
    "id": 91,
    "q": "Was ist ein Kapillarbruch im Bauwesen?",
    "a": "Eine Schicht oder Unterbrechung, die den kapillaren Wassertransport hemmt."
  },
  {
    "id": 92,
    "q": "Was bezeichnet der Begriff „Taupunkt“?",
    "a": "Die Temperatur, bei der Luft bei gegebenem Wasserdampfgehalt Sättigung erreicht und Kondensation einsetzen kann."
  },
  {
    "id": 93,
    "q": "Was ist ein Hygrometer?",
    "a": "Ein Messgerät für die Luftfeuchtigkeit."
  },
  {
    "id": 94,
    "q": "Was ist ein Psychrometer?",
    "a": "Ein Feuchtemessgerät, das die Temperaturen eines trockenen und eines befeuchteten Thermometers vergleicht."
  },
  {
    "id": 95,
    "q": "Was ist ein Knicklicht chemisch gesehen?",
    "a": "Eine Lichtquelle, die durch eine chemische Reaktion ohne äußere Stromversorgung leuchtet."
  },
  {
    "id": 96,
    "q": "Was bezeichnet Tribolumineszenz?",
    "a": "Lichtemission, die beispielsweise beim Brechen oder Reiben bestimmter Materialien entsteht."
  },
  {
    "id": 97,
    "q": "Warum leuchten Textmarker unter Schwarzlicht so auffällig?",
    "a": "Ihre Farbstoffe fluoreszieren: Sie nehmen UV-Strahlung auf und geben sichtbares Licht ab."
  },
  {
    "id": 98,
    "q": "Was ist ein Retroreflektor?",
    "a": "Ein Reflektor, der einfallendes Licht weitgehend in Richtung seiner Quelle zurückwirft."
  },
  {
    "id": 99,
    "q": "Warum kann eine Thermoskanne Wärmeverluste verringern?",
    "a": "Ein Vakuum hemmt Wärmeleitung und Konvektion; reflektierende Flächen vermindern Wärmestrahlung."
  },
  {
    "id": 100,
    "q": "Was ist ein Peltierelement?",
    "a": "Ein thermoelektrisches Bauteil, bei dem Stromfluss auf einer Seite Wärme aufnimmt und auf der anderen abgibt.\n\n## 2. Sprache – seltene Wörter, Wortherkünfte und sprachliche Phänomene"
  },
  {
    "id": 101,
    "q": "Was bezeichnet das veraltende Wort „Hagestolz“?",
    "a": "Einen älteren, unverheiratet gebliebenen Mann."
  },
  {
    "id": 102,
    "q": "Was sind „Fisimatenten“?",
    "a": "Unnötige Umstände, Ausflüchte, Schwierigkeiten oder törichter Unfug."
  },
  {
    "id": 103,
    "q": "Was ist ein „Schlendrian“?",
    "a": "Eine nachlässige, gedankenlose Gewohnheit oder Arbeitsweise."
  },
  {
    "id": 104,
    "q": "Was bezeichnet „Kokolores“?",
    "a": "Unsinn oder leeres Gerede."
  },
  {
    "id": 105,
    "q": "Was bedeutet „hanebüchen“ im heutigen übertragenen Sprachgebrauch?",
    "a": "Unerhört, empörend oder grob unsinnig."
  },
  {
    "id": 106,
    "q": "Was ist ein „Wiedergänger“ im Volksglauben?",
    "a": "Ein Verstorbener, der in irgendeiner Form zu den Lebenden zurückkehrt."
  },
  {
    "id": 107,
    "q": "Was ist ein „Gauch“ in älterem Deutsch als Vogelname?",
    "a": "Ein Kuckuck."
  },
  {
    "id": 108,
    "q": "Was ist ein „Büttel“ historisch?",
    "a": "Ein untergeordneter Gerichts- oder Polizeidiener."
  },
  {
    "id": 109,
    "q": "Was ist ein „Kalfakter“ ursprünglich?",
    "a": "Ein für das Heizen zuständiger Diener beziehungsweise Gehilfe."
  },
  {
    "id": 110,
    "q": "Was ist ein „Amanuensis“?",
    "a": "Ein Schreiber oder wissenschaftlicher Schreibgehilfe."
  },
  {
    "id": 111,
    "q": "Was ist ein „Famulus“ im historischen Universitätsbetrieb?",
    "a": "Ein Gehilfe oder Assistent eines Gelehrten."
  },
  {
    "id": 112,
    "q": "Was ist ein „Kopist“?",
    "a": "Jemand, der Texte, Noten oder andere Vorlagen abschreibt beziehungsweise kopiert."
  },
  {
    "id": 113,
    "q": "Was ist ein „Aphorismus“?",
    "a": "Ein kurzer, pointiert formulierter Gedanke oder Sinnspruch."
  },
  {
    "id": 114,
    "q": "Was ist eine „Sentenz“?",
    "a": "Ein knapp formulierter, allgemeiner Sinn- oder Lehrsatz."
  },
  {
    "id": 115,
    "q": "Was ist ein „Oxymoron“?",
    "a": "Eine Verbindung sich widersprechender Begriffe, etwa „beredtes Schweigen“."
  },
  {
    "id": 116,
    "q": "Was ist eine „Katachrese“ in der Rhetorik im Sinne eines Bildbruchs?",
    "a": "Die Verbindung nicht zusammenpassender sprachlicher Bilder."
  },
  {
    "id": 117,
    "q": "Was ist eine „Litotes“?",
    "a": "Eine oft durch Verneinung des Gegenteils gebildete Untertreibung, etwa „nicht schlecht“."
  },
  {
    "id": 118,
    "q": "Was ist ein „Hendiadyoin“?",
    "a": "Der Ausdruck eines einheitlichen Begriffs durch zwei mit „und“ verbundene Wörter."
  },
  {
    "id": 119,
    "q": "Was ist ein „Zeugma“ als rhetorische Figur?",
    "a": "Die Verbindung mehrerer Satzteile mit demselben Ausdruck, der dabei unterschiedlich verstanden wird."
  },
  {
    "id": 120,
    "q": "Was ist eine „Aposiopese“?",
    "a": "Ein bewusstes Abbrechen einer Äußerung vor ihrem Ende."
  },
  {
    "id": 121,
    "q": "Was ist ein „Anakoluth“?",
    "a": "Ein Bruch im grammatischen Aufbau eines Satzes."
  },
  {
    "id": 122,
    "q": "Was ist eine „Anapher“ als Stilmittel?",
    "a": "Die Wiederholung desselben Wortes oder derselben Wortgruppe am Anfang aufeinanderfolgender Sätze oder Satzteile."
  },
  {
    "id": 123,
    "q": "Was ist ein „Chiasmus“?",
    "a": "Eine überkreuzte Anordnung einander entsprechender Satzglieder."
  },
  {
    "id": 124,
    "q": "Was ist ein „Pleonasmus“?",
    "a": "Eine Verbindung von Wörtern mit inhaltlich überflüssiger Bedeutungswiederholung, etwa „weißer Schimmel“."
  },
  {
    "id": 125,
    "q": "Was ist eine „Metonymie“?",
    "a": "Die Ersetzung eines Ausdrucks durch einen sachlich eng verbundenen, etwa „ein Glas trinken“ für dessen Inhalt."
  },
  {
    "id": 126,
    "q": "Was ist eine „Synekdoche“?",
    "a": "Eine Bedeutungsübertragung zwischen Teil und Ganzem beziehungsweise engerem und weiterem Begriff."
  },
  {
    "id": 127,
    "q": "Was ist eine „Antonomasie“?",
    "a": "Die Ersetzung eines Eigennamens durch eine kennzeichnende Bezeichnung oder umgekehrt."
  },
  {
    "id": 128,
    "q": "Was ist ein „Euphemismus“?",
    "a": "Ein beschönigender oder verhüllender Ausdruck."
  },
  {
    "id": 129,
    "q": "Was ist ein „Dysphemismus“?",
    "a": "Ein bewusst abwertender oder vergröbernder Ausdruck."
  },
  {
    "id": 130,
    "q": "Was ist eine „Onomatopoesie“?",
    "a": "Lautmalerei, etwa „Kuckuck“ oder „platsch“."
  },
  {
    "id": 131,
    "q": "Was ist ein „Palindrom“?",
    "a": "Eine Zeichenfolge, die vorwärts und rückwärts gleich lautet, etwa „Lagerregal“."
  },
  {
    "id": 132,
    "q": "Was ist ein „Anagramm“?",
    "a": "Eine durch Umstellen der Buchstaben einer anderen Zeichenfolge entstandene Zeichenfolge."
  },
  {
    "id": 133,
    "q": "Was ist ein „Lipogramm“?",
    "a": "Ein Text, der einen oder mehrere bestimmte Buchstaben absichtlich vermeidet."
  },
  {
    "id": 134,
    "q": "Was ist ein „Pangramm“?",
    "a": "Ein Satz oder Text, der alle Buchstaben eines festgelegten Alphabets enthält."
  },
  {
    "id": 135,
    "q": "Was ist ein „Akrostichon“?",
    "a": "Ein Text, dessen Anfangsbuchstaben oder Anfangszeichen zeilenweise eine zusätzliche Botschaft bilden."
  },
  {
    "id": 136,
    "q": "Was ist ein „Hapaxlegomenon“?",
    "a": "Ein Wort oder Ausdruck, der in einem betrachteten Textbestand nur einmal belegt ist."
  },
  {
    "id": 137,
    "q": "Was ist ein „Homograph“?",
    "a": "Ein Wort, das wie ein anderes geschrieben wird, aber eine andere Bedeutung und möglicherweise Aussprache hat."
  },
  {
    "id": 138,
    "q": "Was ist ein „Homophon“?",
    "a": "Ein Wort, das wie ein anderes klingt, aber eine andere Bedeutung und möglicherweise Schreibweise hat."
  },
  {
    "id": 139,
    "q": "Was ist ein „Autolog“ als Eigenschaft eines Wortes?",
    "a": "Ein Wort, das die durch sich selbst bezeichnete Eigenschaft besitzt, beispielsweise „dreisilbig“."
  },
  {
    "id": 140,
    "q": "Was ist ein „Deonym“?",
    "a": "Ein Wort, das aus einem Eigennamen entstanden ist."
  },
  {
    "id": 141,
    "q": "Was ist ein „Kofferwort“?",
    "a": "Ein Wort, das durch Verschmelzen von Teilen mehrerer Wörter entstanden ist, etwa „Smog“."
  },
  {
    "id": 142,
    "q": "Aus welchen englischen Wörtern entstand „Smog“?",
    "a": "Aus „smoke“ und „fog“, also Rauch und Nebel."
  },
  {
    "id": 143,
    "q": "Was bedeutet das französische „portefeuille“ wörtlich in seinen Bestandteilen?",
    "a": "Etwa „Blätterträger“; gemeint ist unter anderem eine Brieftasche oder Mappe."
  },
  {
    "id": 144,
    "q": "Auf welche Zahl geht das Wort „Quarantäne“ zurück?",
    "a": "Auf vierzig, bezogen auf eine historische Absonderungsfrist von vierzig Tagen."
  },
  {
    "id": 145,
    "q": "Auf welches tschechische Wort geht „Roboter“ zurück?",
    "a": "Auf „robota“, das schwere Arbeit beziehungsweise Frondienst bezeichnet."
  },
  {
    "id": 146,
    "q": "Welche ursprüngliche Bauform bezeichnet das über mehrere Sprachen entlehnte Wort „Kiosk“?",
    "a": "Einen Gartenpavillon."
  },
  {
    "id": 147,
    "q": "Welcher französische Finanzpolitiker gab der Silhouette ihren Namen?",
    "a": "Étienne de Silhouette."
  },
  {
    "id": 148,
    "q": "Welcher schottische Chemiker gab einer wasserabweisenden Regenbekleidung den Namen „Mackintosh“?",
    "a": "Charles Macintosh."
  },
  {
    "id": 149,
    "q": "Welcher britische Gutsverwalter wurde zum Namensgeber des Wortes „Boykott“?",
    "a": "Charles Cunningham Boycott."
  },
  {
    "id": 150,
    "q": "Was bezeichnet „Scharteke“ abwertend, wenn es um ein Buch geht?",
    "a": "Ein altes, abgegriffenes oder als wertlos angesehenes Buch."
  },
  {
    "id": 151,
    "q": "Was bedeutete lateinisch „candidatus“, der Ursprung von „Kandidat“?",
    "a": "Weiß gekleidet, bezogen auf die Kleidung römischer Amtsbewerber."
  },
  {
    "id": 152,
    "q": "Was bedeutet lateinisch „manuscriptum“, das hinter „Manuskript“ steht?",
    "a": "Mit der Hand Geschriebenes."
  },
  {
    "id": 153,
    "q": "Was bedeutet das lateinische „agenda“ wörtlich?",
    "a": "Das zu Tuende."
  },
  {
    "id": 154,
    "q": "Was bedeutet „Alibi“ im Lateinischen?",
    "a": "Anderswo."
  },
  {
    "id": 155,
    "q": "Was bedeutet „Veto“ im Lateinischen?",
    "a": "Ich verbiete."
  },
  {
    "id": 156,
    "q": "Was bedeutet „Placebo“ wörtlich aus dem Lateinischen übersetzt?",
    "a": "Ich werde gefallen."
  },
  {
    "id": 157,
    "q": "Was bedeutet „Nocebo“ wörtlich aus dem Lateinischen übersetzt?",
    "a": "Ich werde schaden."
  },
  {
    "id": 158,
    "q": "Was bedeutet das lateinische „Video“ wörtlich?",
    "a": "Ich sehe."
  },
  {
    "id": 159,
    "q": "Was bedeutet das lateinische „Audio“ wörtlich?",
    "a": "Ich höre."
  },
  {
    "id": 160,
    "q": "Was bedeutet „Persona non grata“ wörtlich?",
    "a": "Unerwünschte Person."
  },
  {
    "id": 161,
    "q": "Was bedeutet „Tabula rasa“ ursprünglich wörtlich?",
    "a": "Eine abgeschabte beziehungsweise geglättete Schreibtafel."
  },
  {
    "id": 162,
    "q": "Welche Bedeutung hat „Advent“ seinem lateinischen Ursprung nach?",
    "a": "Ankunft."
  },
  {
    "id": 163,
    "q": "Welche Bedeutung steckt im griechischen Ursprung von „Mikroskop“?",
    "a": "Kleines sehen beziehungsweise betrachten."
  },
  {
    "id": 164,
    "q": "Was bedeutet „Teleskop“ seinen griechischen Bestandteilen nach?",
    "a": "In die Ferne schauen."
  },
  {
    "id": 165,
    "q": "Was bedeutet „Hydrophobie“ wörtlich?",
    "a": "Wasserscheu beziehungsweise Angst vor Wasser."
  },
  {
    "id": 166,
    "q": "Was bedeutet „Photophobie“ im medizinischen Sprachgebrauch?",
    "a": "Lichtscheu beziehungsweise eine übermäßige Lichtempfindlichkeit."
  },
  {
    "id": 167,
    "q": "Was ist „Dysgeusie“?",
    "a": "Eine Störung oder Verfälschung der Geschmackswahrnehmung."
  },
  {
    "id": 168,
    "q": "Was ist ein „Solezismus“?",
    "a": "Ein Verstoß gegen die üblichen grammatischen Regeln einer Sprache."
  },
  {
    "id": 169,
    "q": "Was ist „Metathese“ in der Sprachwissenschaft?",
    "a": "Die Vertauschung von Lauten oder Lautgruppen innerhalb eines Wortes."
  },
  {
    "id": 170,
    "q": "Was bezeichnet „Apokope“?",
    "a": "Den Wegfall eines Lautes oder einer Silbe am Wortende."
  },
  {
    "id": 171,
    "q": "Was bezeichnet „Synkope“ in der Sprachwissenschaft?",
    "a": "Den Ausfall eines Lautes oder einer Silbe im Wortinneren."
  },
  {
    "id": 172,
    "q": "Was ist „Prothese“ in der Sprachwissenschaft?",
    "a": "Das Hinzufügen eines Lautes am Wortanfang."
  },
  {
    "id": 173,
    "q": "Was ist „Epenthese“?",
    "a": "Das Einfügen eines Lautes in ein Wort."
  },
  {
    "id": 174,
    "q": "Was bezeichnet „Gemination“?",
    "a": "Die Verdopplung beziehungsweise Längung eines Sprachlauts."
  },
  {
    "id": 175,
    "q": "Was ist ein „Schwa“?",
    "a": "Ein unbetonter zentraler Vokal, etwa der erste Vokal in „Beruf“ bei üblicher Aussprache."
  },
  {
    "id": 176,
    "q": "Was ist ein „Glottisschlag“?",
    "a": "Ein kurzer Verschlusslaut an den Stimmlippen, etwa vor dem Vokal in „beachten“."
  },
  {
    "id": 177,
    "q": "Was ist ein „Graphem“?",
    "a": "Eine kleinste bedeutungsunterscheidende Einheit eines Schriftsystems."
  },
  {
    "id": 178,
    "q": "Was ist ein „Morphem“?",
    "a": "Eine kleinste bedeutungstragende beziehungsweise grammatische Funktion tragende sprachliche Einheit."
  },
  {
    "id": 179,
    "q": "Was ist ein „Allomorph“?",
    "a": "Eine Formvariante desselben Morphems."
  },
  {
    "id": 180,
    "q": "Was ist „Suppletion“?",
    "a": "Die Bildung von Formen eines Wortes aus verschiedenen Stämmen, etwa „gut – besser“."
  },
  {
    "id": 181,
    "q": "Was ist ein „Portmanteaumorphem“?",
    "a": "Ein Morphem, das mehrere grammatische Merkmale zugleich ausdrückt."
  },
  {
    "id": 182,
    "q": "Was ist „Reduplikation“?",
    "a": "Die vollständige oder teilweise Wiederholung sprachlichen Materials zur Wort- oder Formenbildung."
  },
  {
    "id": 183,
    "q": "Was ist ein „Diminutiv“?",
    "a": "Eine Verkleinerungsform, im Deutschen zum Beispiel mit „-chen“ oder „-lein“."
  },
  {
    "id": 184,
    "q": "Was ist ein „Augmentativ“ in der Wortbildung?",
    "a": "Eine Vergrößerungs- oder Verstärkungsform."
  },
  {
    "id": 185,
    "q": "Was ist ein „Patronym“?",
    "a": "Ein vom Namen des Vaters abgeleiteter Name."
  },
  {
    "id": 186,
    "q": "Was ist ein „Matronym“?",
    "a": "Ein vom Namen der Mutter abgeleiteter Name."
  },
  {
    "id": 187,
    "q": "Was ist ein „Toponym“?",
    "a": "Ein geografischer Name, insbesondere ein Ortsname."
  },
  {
    "id": 188,
    "q": "Was ist ein „Hydronym“?",
    "a": "Ein Gewässername."
  },
  {
    "id": 189,
    "q": "Was ist ein „Oronym“?",
    "a": "Ein Name für einen Berg oder ein Gebirge."
  },
  {
    "id": 190,
    "q": "Was ist ein „Exonym“?",
    "a": "Ein Orts- oder Landesname in einer anderen Sprache als der am betreffenden Ort verwendeten, etwa „Mailand“ für „Milano“."
  },
  {
    "id": 191,
    "q": "Was ist ein „Endonym“?",
    "a": "Ein geografischer Name in einer am bezeichneten Ort verwendeten Sprache."
  },
  {
    "id": 192,
    "q": "Was ist „Boustrophedon“ als Schreibrichtung?",
    "a": "Eine zeilenweise wechselnde Schreibrichtung, vergleichbar mit den Furchen beim Pflügen."
  },
  {
    "id": 193,
    "q": "Was ist ein „Palimpsest“?",
    "a": "Ein beschriebener Träger, dessen frühere Schrift entfernt oder überdeckt und der erneut beschrieben wurde."
  },
  {
    "id": 194,
    "q": "Was ist eine „Ligatur“ in der Typografie?",
    "a": "Die Verbindung mehrerer Buchstaben zu einer gemeinsamen Glyphe."
  },
  {
    "id": 195,
    "q": "Was ist eine „Punze“ beim gedruckten Buchstaben?",
    "a": "Ein vollständig oder teilweise eingeschlossener Innenraum eines Buchstabens."
  },
  {
    "id": 196,
    "q": "Was ist ein „Schusterjunge“ im traditionellen deutschen Schriftsatz?",
    "a": "Eine einzelne erste Zeile eines Absatzes am Ende einer Seite oder Spalte."
  },
  {
    "id": 197,
    "q": "Was ist ein „Hurenkind“ im traditionellen deutschen Schriftsatz?",
    "a": "Eine einzelne letzte Zeile eines Absatzes am Anfang einer Seite oder Spalte."
  },
  {
    "id": 198,
    "q": "Was ist „Blindtext“?",
    "a": "Ein Platzhaltertext zur Beurteilung von Layout und Schriftbild."
  },
  {
    "id": 199,
    "q": "Was ist ein „Kolophon“ im Buchwesen?",
    "a": "Ein Vermerk mit Angaben zur Herstellung eines Buches, oft an dessen Ende."
  },
  {
    "id": 200,
    "q": "Was ist ein „Incunabulum“ beziehungsweise eine Inkunabel im Buchwesen?",
    "a": "Ein mit beweglichen Lettern hergestellter europäischer Druck aus der Zeit bis einschließlich 1500.\n\n## 3. Geografie – ungewöhnliche Orte, Grenzen und Landschaften"
  },
  {
    "id": 201,
    "q": "Welcher souveräne Staat wird vollständig von Südafrika umschlossen?",
    "a": "Lesotho."
  },
  {
    "id": 202,
    "q": "Welche beiden souveränen Staaten sind vollständig von italienischem Staatsgebiet umgeben?",
    "a": "San Marino und die Vatikanstadt."
  },
  {
    "id": 203,
    "q": "Welche zwei Staaten gelten als doppelte Binnenstaaten, weil auch alle ihre Nachbarstaaten Binnenstaaten sind?",
    "a": "Liechtenstein und Usbekistan."
  },
  {
    "id": 204,
    "q": "Welche deutsche Gemeinde ist vollständig von Schweizer Staatsgebiet umgeben?",
    "a": "Büsingen am Hochrhein."
  },
  {
    "id": 205,
    "q": "Welche ehemalige Eisenbahntrasse hat dazu geführt, dass mehrere deutsche Gebiete durch belgisches Staatsgebiet vom deutschen Kernland getrennt sind?",
    "a": "Die Vennbahn; ihre Trasse gehört in den betreffenden Abschnitten zu Belgien."
  },
  {
    "id": 206,
    "q": "Welches österreichische Tal ist mit dem Auto auf öffentlichen Straßen nur über Deutschland erreichbar?",
    "a": "Das Kleinwalsertal."
  },
  {
    "id": 207,
    "q": "Welche österreichische Gemeinde berührt das übrige Österreich nur an einem einzigen Punkt auf einem Berggipfel?",
    "a": "Jungholz."
  },
  {
    "id": 208,
    "q": "Welche italienische Exklave liegt am Luganersee und ist von der Schweiz umgeben?",
    "a": "Campione d’Italia."
  },
  {
    "id": 209,
    "q": "Welche spanische Exklave liegt in den französischen Pyrenäen?",
    "a": "Llívia."
  },
  {
    "id": 210,
    "q": "Welche belgische Gemeinde bildet mit Baarle-Nassau einen besonders komplizierten Grenzflickenteppich?",
    "a": "Baarle-Hertog."
  },
  {
    "id": 211,
    "q": "Welche Flussinsel wird im halbjährlichen Wechsel von Frankreich und Spanien verwaltet?",
    "a": "Die Fasaneninsel im Fluss Bidasoa."
  },
  {
    "id": 212,
    "q": "Welcher Fluss bildet einen großen Teil der Grenze zwischen Rumänien und Bulgarien?",
    "a": "Die Donau."
  },
  {
    "id": 213,
    "q": "Welche beiden Länder trennt die Meerenge von Gibraltar?",
    "a": "Spanien und Marokko."
  },
  {
    "id": 214,
    "q": "Welche beiden Staaten trennt die Beringstraße?",
    "a": "Russland und die USA."
  },
  {
    "id": 215,
    "q": "Zwischen welchen beiden Staaten verläuft die internationale Grenze auf der Insel Hispaniola?",
    "a": "Zwischen Haiti und der Dominikanischen Republik."
  },
  {
    "id": 216,
    "q": "Welche drei Staaten teilen sich die Insel Borneo?",
    "a": "Indonesien, Malaysia und Brunei."
  },
  {
    "id": 217,
    "q": "Welche beiden Staaten teilen sich die Insel Neuguinea?",
    "a": "Indonesien und Papua-Neuguinea."
  },
  {
    "id": 218,
    "q": "Welche beiden Staaten teilen sich die Hauptinsel Feuerlands?",
    "a": "Argentinien und Chile."
  },
  {
    "id": 219,
    "q": "Welche beiden souveränen Staaten grenzen in Südamerika an französisches Staatsgebiet?",
    "a": "Brasilien und Suriname; sie grenzen an Französisch-Guayana."
  },
  {
    "id": 220,
    "q": "Welche zwei Länder teilen sich die Karibikinsel Saint-Martin beziehungsweise Sint Maarten?",
    "a": "Frankreich und das Königreich der Niederlande."
  },
  {
    "id": 221,
    "q": "Welcher souveräne Staat liegt sowohl auf der Nord- als auch auf der Südhalbkugel und beiderseits des 180. Längengrads?",
    "a": "Kiribati."
  },
  {
    "id": 222,
    "q": "Welcher Inselstaat ließ 1995 die Datumsgrenze so verlegen, dass sein gesamtes Staatsgebiet denselben Kalendertag hat?",
    "a": "Kiribati."
  },
  {
    "id": 223,
    "q": "Welcher pazifische Inselstaat übersprang beim Wechsel der Datumsgrenzenseite den 30. Dezember 2011?",
    "a": "Samoa."
  },
  {
    "id": 224,
    "q": "In welchem Ozean liegt der Schnittpunkt von Äquator und Nullmeridian, der scherzhaft „Null Island“ heißt?",
    "a": "Im Atlantischen Ozean, im Golf von Guinea."
  },
  {
    "id": 225,
    "q": "Welche europäische Hauptstadt liegt dem Äquator näher: Rom oder Madrid?",
    "a": "Madrid."
  },
  {
    "id": 226,
    "q": "Welche europäische Hauptstadt liegt weiter westlich: Madrid oder London?",
    "a": "Madrid."
  },
  {
    "id": 227,
    "q": "Welche Stadt liegt weiter nördlich: New York oder Rom?",
    "a": "Rom."
  },
  {
    "id": 228,
    "q": "Welche Stadt liegt weiter südlich: Kapstadt oder Sydney?",
    "a": "Kapstadt."
  },
  {
    "id": 229,
    "q": "Welche Stadt liegt weiter östlich: Wladiwostok oder Tokio?",
    "a": "Tokio."
  },
  {
    "id": 230,
    "q": "Welcher afrikanische Staat liegt als einziger zugleich am Atlantik und am Mittelmeer?",
    "a": "Marokko."
  },
  {
    "id": 231,
    "q": "Welcher souveräne Staat liegt vollständig oberhalb von 1.000 Metern Meereshöhe?",
    "a": "Lesotho."
  },
  {
    "id": 232,
    "q": "Welcher afrikanische See ist nach seiner maximalen Tiefe der zweittiefste See der Erde?",
    "a": "Der Tanganjikasee."
  },
  {
    "id": 233,
    "q": "Welcher See ist nach maximaler Tiefe der tiefste der Erde?",
    "a": "Der Baikalsee."
  },
  {
    "id": 234,
    "q": "Welches Binnengewässer gilt nach seiner Fläche als größter See der Erde?",
    "a": "Das Kaspische Meer."
  },
  {
    "id": 235,
    "q": "Welcher See liegt zwischen Peru und Bolivien und wird oft als höchstgelegener großer schiffbarer See bezeichnet?",
    "a": "Der Titicacasee."
  },
  {
    "id": 236,
    "q": "Welcher südamerikanische Salzsee bildet die größte Salzpfanne der Erde?",
    "a": "Der Salar de Uyuni in Bolivien."
  },
  {
    "id": 237,
    "q": "Welche Wüste ist nach ihrer gesamten Fläche die größte der Erde, wenn Kältewüsten mitgezählt werden?",
    "a": "Die antarktische Wüste."
  },
  {
    "id": 238,
    "q": "Welche Wüste ist nach ihrer Fläche die größte heiße Wüste der Erde?",
    "a": "Die Sahara."
  },
  {
    "id": 239,
    "q": "In welchem Land liegt der überwiegende Teil der Atacama?",
    "a": "In Chile."
  },
  {
    "id": 240,
    "q": "Welche Wüste erstreckt sich über große Teile Botswanas und reicht nach Namibia und Südafrika?",
    "a": "Die Kalahari."
  },
  {
    "id": 241,
    "q": "Welches Meer besitzt keine durch Festland gebildete Küste?",
    "a": "Die Sargassosee; ihre Grenzen werden durch Meeresströmungen bestimmt."
  },
  {
    "id": 242,
    "q": "Welcher große Fluss überquert den Äquator zweimal?",
    "a": "Der Kongo."
  },
  {
    "id": 243,
    "q": "Welcher Fluss fließt durch die Hauptstädte Wien, Bratislava, Budapest und Belgrad?",
    "a": "Die Donau."
  },
  {
    "id": 244,
    "q": "Welche zwei Hauptstädte liegen sich am Unterlauf des Kongo gegenüber?",
    "a": "Kinshasa und Brazzaville."
  },
  {
    "id": 245,
    "q": "Wie heißt der nach seiner Mündung wasserreichste Fluss der Erde?",
    "a": "Der Amazonas."
  },
  {
    "id": 246,
    "q": "Welcher Fluss schuf den Grand Canyon hauptsächlich?",
    "a": "Der Colorado River."
  },
  {
    "id": 247,
    "q": "Welcher Fluss durchfließt Bagdad?",
    "a": "Der Tigris."
  },
  {
    "id": 248,
    "q": "Welcher Fluss durchfließt die australische Stadt Brisbane?",
    "a": "Der Brisbane River."
  },
  {
    "id": 249,
    "q": "Welcher Fluss bildet in Paris die Île de la Cité?",
    "a": "Die Seine."
  },
  {
    "id": 250,
    "q": "Welcher Wasserfall in Venezuela gilt mit 979 Metern Gesamthöhe als höchster Wasserfall der Erde?",
    "a": "Der Salto Ángel."
  },
  {
    "id": 251,
    "q": "In welchem Land liegen die Victoriafälle außer in Sambia?",
    "a": "In Simbabwe."
  },
  {
    "id": 252,
    "q": "Welche beiden Länder teilen sich die Iguazúfälle unmittelbar?",
    "a": "Argentinien und Brasilien."
  },
  {
    "id": 253,
    "q": "Welcher Berg hat seinen Gipfel am weitesten vom Erdmittelpunkt entfernt?",
    "a": "Der Chimborazo in Ecuador, bedingt durch die Abplattung der Erde."
  },
  {
    "id": 254,
    "q": "Welcher Berg ist vom Meeresspiegel aus gemessen der höchste der Erde?",
    "a": "Der Mount Everest."
  },
  {
    "id": 255,
    "q": "Welcher hawaiische Vulkan ist von seinem untermeerischen Fuß bis zum Gipfel höher als der Mount Everest über dem Meeresspiegel?",
    "a": "Mauna Kea."
  },
  {
    "id": 256,
    "q": "Wie heißt der höchste Berg Afrikas beziehungsweise dessen Bergmassiv?",
    "a": "Kilimandscharo, mit dem höchsten Gipfel Kibo beziehungsweise Uhuru Peak."
  },
  {
    "id": 257,
    "q": "Wie heißt der höchste Berg Südamerikas?",
    "a": "Aconcagua."
  },
  {
    "id": 258,
    "q": "Wie heißt der höchste Berg des antarktischen Kontinents?",
    "a": "Mount Vinson."
  },
  {
    "id": 259,
    "q": "Welcher aktive Vulkan in der Antarktis beherbergt einen langlebigen Lavasee?",
    "a": "Mount Erebus."
  },
  {
    "id": 260,
    "q": "Welcher höchste Gipfel liegt genau auf der Grenze zwischen Nepal und China?",
    "a": "Der Mount Everest."
  },
  {
    "id": 261,
    "q": "Welche Insel ist die größte der Erde, wenn Australien als Kontinent eingeordnet wird?",
    "a": "Grönland."
  },
  {
    "id": 262,
    "q": "Welche Insel liegt politisch teils im Vereinigten Königreich und teils in einem souveränen Staat gleichen Inselnamens?",
    "a": "Irland."
  },
  {
    "id": 263,
    "q": "Welcher Inselstaat im Indischen Ozean besteht unter anderem aus der namensgebenden großen Insel südöstlich von Afrika?",
    "a": "Madagaskar."
  },
  {
    "id": 264,
    "q": "Zu welchem Staat gehört die Inselgruppe Galápagos?",
    "a": "Zu Ecuador."
  },
  {
    "id": 265,
    "q": "Zu welchem Staat gehört die Osterinsel Rapa Nui?",
    "a": "Zu Chile."
  },
  {
    "id": 266,
    "q": "Zu welchem Staat gehört die Inselgruppe Färöer staatsrechtlich?",
    "a": "Zum Königreich Dänemark; sie besitzt weitgehende Autonomie."
  },
  {
    "id": 267,
    "q": "Zu welchem Staat gehört die Inselgruppe Åland staatsrechtlich?",
    "a": "Zu Finnland; sie ist autonom und schwedischsprachig."
  },
  {
    "id": 268,
    "q": "Zu welchem Staat gehört Spitzbergen beziehungsweise die Inselgruppe Svalbard?",
    "a": "Zu Norwegen."
  },
  {
    "id": 269,
    "q": "Welchem Staat gehört die Insel Sokotra mit ihren auffälligen Drachenblutbäumen?",
    "a": "Dem Jemen."
  },
  {
    "id": 270,
    "q": "Auf welcher australischen Außengebietsinsel findet die berühmte Massenwanderung roter Landkrabben statt?",
    "a": "Auf der Weihnachtsinsel im Indischen Ozean."
  },
  {
    "id": 271,
    "q": "Welche japanische Insel ist wegen ihrer großen Zahl frei lebender Kaninchen bekannt?",
    "a": "Ōkunoshima."
  },
  {
    "id": 272,
    "q": "In welchem Land befindet sich der Karni-Mata-Tempel, in dem zahlreiche Ratten verehrt werden?",
    "a": "In Indien."
  },
  {
    "id": 273,
    "q": "In welcher japanischen Stadt führt eine Autobahntrasse durch das Gate Tower Building?",
    "a": "In Osaka."
  },
  {
    "id": 274,
    "q": "In welcher Stadt stehen die bekannten gelben Kubushäuser von Piet Blom neben dem Bahnhof Blaak?",
    "a": "In Rotterdam."
  },
  {
    "id": 275,
    "q": "In welcher europäischen Stadt steht das „Tanzende Haus“ von Frank Gehry und Vlado Milunić?",
    "a": "In Prag."
  },
  {
    "id": 276,
    "q": "In welchem Land befindet sich die Höhlenburg Predjama?",
    "a": "In Slowenien."
  },
  {
    "id": 277,
    "q": "In welchem Land befindet sich der Krumme Wald mit auffällig gebogenen Kiefern bei Gryfino?",
    "a": "In Polen."
  },
  {
    "id": 278,
    "q": "In welchem Land liegt der Ort Graun, dessen alter Kirchturm aus dem Reschensee ragt?",
    "a": "In Italien."
  },
  {
    "id": 279,
    "q": "Welche schottische Insel besitzt einen Flughafen mit regulärem Flugbetrieb auf einem Strand?",
    "a": "Barra."
  },
  {
    "id": 280,
    "q": "In welcher niederländischen Stadt wurden die ursprünglich fiktiven Brückenmotive der Eurobanknoten als reale Brücken nachgebaut?",
    "a": "In Spijkenisse."
  },
  {
    "id": 281,
    "q": "Welche österreichische Ortschaft änderte ihren Namen zum 1. Januar 2021 von „Fucking“ zu „Fugging“?",
    "a": "Fugging in der Gemeinde Tarsdorf."
  },
  {
    "id": 282,
    "q": "Welche Stadt in Nordrhein-Westfalen wird in einer satirischen Verschwörungstheorie als nicht existent bezeichnet?",
    "a": "Bielefeld."
  },
  {
    "id": 283,
    "q": "Welches Hamburger Stadtgebiet liegt auf einer Insel vor Cuxhaven?",
    "a": "Neuwerk."
  },
  {
    "id": 284,
    "q": "Welche zwei Städte vereinigte man 1977 zur kurzlebigen hessischen Stadt Lahn?",
    "a": "Gießen und Wetzlar, zusammen mit weiteren Gemeinden."
  },
  {
    "id": 285,
    "q": "In welcher europäischen Hauptstadt befindet sich das Museum der zerbrochenen Beziehungen?",
    "a": "In Zagreb."
  },
  {
    "id": 286,
    "q": "In welchem Land steht das Buzludzha-Denkmal, das häufig mit einem UFO verglichen wird?",
    "a": "In Bulgarien."
  },
  {
    "id": 287,
    "q": "In welchem Land befindet sich die Knochenkirche von Sedlec?",
    "a": "In Tschechien."
  },
  {
    "id": 288,
    "q": "Welcher europäische Kleinstaat liegt zwischen Frankreich und Spanien in den Pyrenäen?",
    "a": "Andorra."
  },
  {
    "id": 289,
    "q": "Welche beiden Staaten haben eine Landgrenze mit Liechtenstein?",
    "a": "Österreich und die Schweiz."
  },
  {
    "id": 290,
    "q": "Welcher europäische Staat hat keine Landgrenze und liegt auf einer Insel unmittelbar südlich des Polarkreises?",
    "a": "Island."
  },
  {
    "id": 291,
    "q": "Welcher afrikanische Staat hieß bis 2018 Swasiland?",
    "a": "Eswatini."
  },
  {
    "id": 292,
    "q": "Welcher Staat hieß bis 1984 Obervolta?",
    "a": "Burkina Faso."
  },
  {
    "id": 293,
    "q": "Welches Land hieß bis 1972 Ceylon?",
    "a": "Sri Lanka."
  },
  {
    "id": 294,
    "q": "Welches Land hieß bis 1989 international überwiegend Birma beziehungsweise Burma?",
    "a": "Myanmar."
  },
  {
    "id": 295,
    "q": "Welcher südamerikanische Staat hieß früher Niederländisch-Guayana?",
    "a": "Suriname."
  },
  {
    "id": 296,
    "q": "Welches Land hieß vor seiner Unabhängigkeit 1973 Britisch-Honduras?",
    "a": "Belize."
  },
  {
    "id": 297,
    "q": "In welchem heutigen Staat liegt die historische Stadt Timbuktu?",
    "a": "In Mali."
  },
  {
    "id": 298,
    "q": "In welchem heutigen Staat liegt die Felsenstadt Petra?",
    "a": "In Jordanien."
  },
  {
    "id": 299,
    "q": "In welchem heutigen Staat liegt die antike Stadt Persepolis?",
    "a": "Im Iran."
  },
  {
    "id": 300,
    "q": "Welcher südafrikanische Küstenort bei Kapstadt ist für seine Pinguinkolonie am Boulders Beach bekannt?",
    "a": "Simon’s Town.\n\n## 4. Geschichte und Kultur – Erfindungen, Bräuche und ungewöhnliche Ereignisse"
  },
  {
    "id": 301,
    "q": "Welchem Beruf ging Ferdinand Cheval nach, während er Steine für seinen „Palais idéal“ sammelte?",
    "a": "Er war Briefträger."
  },
  {
    "id": 302,
    "q": "In welchem französischen Ort steht Ferdinand Chevals „Palais idéal“?",
    "a": "In Hauterives."
  },
  {
    "id": 303,
    "q": "Welcher berühmte Physiker wurde 1696 Wardein und 1699 Master der englischen Münzanstalt?",
    "a": "Isaac Newton."
  },
  {
    "id": 304,
    "q": "Welcher berühmte Physiker arbeitete im Berner Patentamt, als er 1905 mehrere grundlegende Arbeiten veröffentlichte?",
    "a": "Albert Einstein."
  },
  {
    "id": 305,
    "q": "Welche zuckerhaltige Flüssigkeit überschwemmte am 15. Januar 1919 nach einem Tankbruch Teile von Boston?",
    "a": "Melasse."
  },
  {
    "id": 306,
    "q": "Mit welcher besonderen Kolbenform widerlegte Louis Pasteur die Vorstellung einer spontanen Entstehung von Mikroorganismen in Nährlösungen?",
    "a": "Mit Schwanenhalskolben, die Luft hereinließen, aber staubgetragene Mikroorganismen zurückhielten."
  },
  {
    "id": 307,
    "q": "Wer führte die bis heute gebräuchlichen Wolkennamen Cirrus, Cumulus und Stratus ein?",
    "a": "Luke Howard."
  },
  {
    "id": 308,
    "q": "Welcher Naturforscher veröffentlichte 1665 in „Micrographia“ Zeichnungen von Kork und prägte dabei den Begriff „Zellen“?",
    "a": "Robert Hooke."
  },
  {
    "id": 309,
    "q": "Welcher Naturforscher beschrieb mit selbstgebauten Mikroskopen unter anderem einzellige Lebewesen als „animalcules“?",
    "a": "Antoni van Leeuwenhoek."
  },
  {
    "id": 310,
    "q": "Welcher schwedische Chemiker entdeckte mehrere Elemente, starb aber mit nur 43 Jahren und probierte viele Chemikalien auch mit der Zunge?",
    "a": "Carl Wilhelm Scheele."
  },
  {
    "id": 311,
    "q": "Welche Berufsbezeichnung hatte Luke Howard, der die moderne Wolkenklassifikation prägte?",
    "a": "Er war von Beruf Pharmazeut beziehungsweise Apotheker."
  },
  {
    "id": 312,
    "q": "Welcher Chemiker entdeckte 1856 bei der Suche nach einer Chininsynthese den violetten Farbstoff Mauvein?",
    "a": "William Henry Perkin."
  },
  {
    "id": 313,
    "q": "Welcher Mediziner führte 1796 seine berühmte Impfung mit Kuhpockenmaterial durch?",
    "a": "Edward Jenner."
  },
  {
    "id": 314,
    "q": "Welcher Arzt propagierte in Wien im 19. Jahrhundert die Händedesinfektion mit Chlorkalk gegen Kindbettfieber?",
    "a": "Ignaz Semmelweis."
  },
  {
    "id": 315,
    "q": "Welche Krankenpflegerin nutzte im 19. Jahrhundert eindrucksvolle statistische Diagramme, um Hygienereformen zu unterstützen?",
    "a": "Florence Nightingale."
  },
  {
    "id": 316,
    "q": "Welcher Londoner Arzt untersuchte 1854 einen Choleraausbruch und brachte ihn mit einer Wasserpumpe in der Broad Street in Verbindung?",
    "a": "John Snow."
  },
  {
    "id": 317,
    "q": "Welche historische Seuche wurde auch „Englischer Schweiß“ genannt?",
    "a": "Eine rätselhafte, rasch verlaufende Schweißkrankheit des späten 15. und 16. Jahrhunderts."
  },
  {
    "id": 318,
    "q": "Was bezeichnet die „Tanzwut“ von Straßburg 1518?",
    "a": "Ein historisch dokumentiertes Ereignis, bei dem Menschen über längere Zeit unkontrolliert tanzten; seine genaue Ursache ist ungeklärt."
  },
  {
    "id": 319,
    "q": "Was war die „Tulpenmanie“ im niederländischen 17. Jahrhundert?",
    "a": "Eine spekulative Preissteigerung und ein anschließender Einbruch im Handel mit bestimmten Tulpenzwiebeln."
  },
  {
    "id": 320,
    "q": "Welche britische Gesellschaft stand im Mittelpunkt der Südseeblase von 1720, bei der auch Isaac Newton Geld verlor?",
    "a": "Die South Sea Company."
  },
  {
    "id": 321,
    "q": "Gegen welche Vögel setzte das australische Militär 1932 in Westaustralien Maschinengewehre ein?",
    "a": "Gegen Emus."
  },
  {
    "id": 322,
    "q": "Was waren die aufblasbaren Panzer der alliierten Operation Fortitude?",
    "a": "Täuschkörper, die deutsche Aufklärung über Stärke und Ort alliierter Truppen täuschen sollten."
  },
  {
    "id": 323,
    "q": "Welcher nicht existierende US-Heeresverband wurde im Vorfeld des D-Day für die Täuschung der deutschen Führung inszeniert?",
    "a": "Die First United States Army Group, kurz FUSAG."
  },
  {
    "id": 324,
    "q": "Was waren die „Rupert“-Fallschirmspringer bei der alliierten Landung in der Normandie?",
    "a": "Abgeworfene Fallschirmspringerattrappen zur Täuschung."
  },
  {
    "id": 325,
    "q": "Welches Tier wurde im Zweiten Weltkrieg unter dem Namen „Wojtek“ von polnischen Soldaten gehalten und als Soldat geführt?",
    "a": "Ein Braunbär."
  },
  {
    "id": 326,
    "q": "Welches Haustier war „Unsinkable Sam“, dessen Kriegsgeschichte teilweise legendenhaft überliefert ist?",
    "a": "Ein Kater."
  },
  {
    "id": 327,
    "q": "Was war ein „Pneumatisches Postsystem“?",
    "a": "Eine Rohrpostanlage, die Sendungen in Behältern mit Luftdruck oder Unterdruck transportierte."
  },
  {
    "id": 328,
    "q": "Welche Tiere wurden in vielen Postgebäuden zur Bekämpfung von Mäusen beschäftigt?",
    "a": "Katzen."
  },
  {
    "id": 329,
    "q": "Welche Kleintiere dienten Bergleuten früher als Warnung vor giftigen Grubengasen?",
    "a": "Kanarienvögel."
  },
  {
    "id": 330,
    "q": "Warum trugen Ärzte bei der später berühmt gewordenen Pestdoktor-Maske einen langen Schnabel?",
    "a": "Darin wurden Duftstoffe untergebracht, die nach damaliger Vorstellung vor krank machender Luft schützen sollten."
  },
  {
    "id": 331,
    "q": "Was war ein „Nachtwächter“ im vormodernen städtischen Alltag?",
    "a": "Ein nächtlicher Wächter, der unter anderem vor Feuer und Gefahren warnte und häufig die Stunden ausrief."
  },
  {
    "id": 332,
    "q": "Was machte ein „Abtrittanbieter“ im historischen Straßenleben?",
    "a": "Er bot Passanten gegen Bezahlung eine mobile oder abgeschirmte Möglichkeit zur Verrichtung ihrer Notdurft."
  },
  {
    "id": 333,
    "q": "Was stellte ein „Reepschläger“ her?",
    "a": "Seile und Taue."
  },
  {
    "id": 334,
    "q": "Was fertigte ein „Böttcher“ traditionell an?",
    "a": "Fässer und andere aus Dauben zusammengesetzte Holzgefäße."
  },
  {
    "id": 335,
    "q": "Was machte ein „Posamentierer“?",
    "a": "Er stellte dekorative textile Besätze wie Borten, Quasten und Fransen her."
  },
  {
    "id": 336,
    "q": "Was fertigte ein „Gürtler“ traditionell außer Gürteln beziehungsweise Gürtelbeschlägen?",
    "a": "Metallene Gebrauchs- und Schmuckgegenstände, etwa Beschläge und Leuchter."
  },
  {
    "id": 337,
    "q": "Was war die Aufgabe eines „Perückenmachers“ im höfischen Umfeld?",
    "a": "Er fertigte und pflegte Perücken und Haarersatz."
  },
  {
    "id": 338,
    "q": "Was tat ein „Zinngießer“?",
    "a": "Er goss und bearbeitete Gegenstände aus Zinn beziehungsweise Zinnlegierungen."
  },
  {
    "id": 339,
    "q": "Was war ein „Köhler“?",
    "a": "Ein Handwerker, der durch Erhitzen von Holz bei begrenzter Luftzufuhr Holzkohle herstellte."
  },
  {
    "id": 340,
    "q": "Was sammelte ein „Lumpensammler“ unter anderem für die Papierherstellung?",
    "a": "Alte Textilien, die als Faserrohstoff verwendet wurden."
  },
  {
    "id": 341,
    "q": "Welches heute bekannte Spielzeugmaterial wurde ursprünglich als Reinigungsmasse für Tapeten vermarktet?",
    "a": "Die Vorläufermasse von Play-Doh."
  },
  {
    "id": 342,
    "q": "Für welchen Einrichtungszweck war Luftpolsterfolie zunächst gedacht?",
    "a": "Als strukturierte Tapete."
  },
  {
    "id": 343,
    "q": "Welches Büroprodukt ging aus Spencer Silvers Entwicklung eines nur schwach haftenden Klebstoffs hervor?",
    "a": "Der Post-it-Haftnotizzettel."
  },
  {
    "id": 344,
    "q": "Welche Pflanzenteile inspirierten Georges de Mestral zur Entwicklung des Klettverschlusses?",
    "a": "Die hakentragenden Früchte beziehungsweise Fruchtstände der Klette."
  },
  {
    "id": 345,
    "q": "Welches Material entdeckte Roy Plunkett 1938 zufällig bei Arbeiten mit Kältemittelgasen?",
    "a": "Polytetrafluorethylen, bekannt unter dem Handelsnamen Teflon."
  },
  {
    "id": 346,
    "q": "Welcher Gegenstand wurde 1952 als „Mr. Potato Head“ zunächst ohne mitgelieferten Kunststoffkörper verkauft?",
    "a": "Ein Satz von Gesichtsteilen und Zubehör, der in echte Kartoffeln oder anderes Gemüse gesteckt wurde."
  },
  {
    "id": 347,
    "q": "Welches mechanische Haushaltsgerät inspirierte Josephine Cochrane zu ihrer 1886 patentierten Verbesserung?",
    "a": "Die Geschirrspülmaschine."
  },
  {
    "id": 348,
    "q": "Welche 1908 patentierte Erfindung von Melitta Bentz nutzte Papier zur Trennung von Getränk und Satz?",
    "a": "Der Kaffeefilter."
  },
  {
    "id": 349,
    "q": "Welcher technische Entwickler entwarf den sogenannten Ur-Leica-Prototyp für Kleinbildfotografie?",
    "a": "Oskar Barnack."
  },
  {
    "id": 350,
    "q": "Welche Erfindung machte László Bíró gemeinsam mit seinem Bruder György maßgeblich alltagstauglich?",
    "a": "Den Kugelschreiber mit geeigneter zähflüssiger Tinte."
  },
  {
    "id": 351,
    "q": "Welche Schriftart entwickelte Louis Braille auf der Grundlage tastbarer Punkte?",
    "a": "Die Brailleschrift für blinde Menschen."
  },
  {
    "id": 352,
    "q": "Welche Vorläuferschrift von Charles Barbier beeinflusste Louis Braille?",
    "a": "Eine als Nachtschrift entwickelte tastbare Punktschrift."
  },
  {
    "id": 353,
    "q": "Welches Kommunikationssystem entstand aus auf See genutzten optischen Signalen mit beweglichen Armen oder Flügeln?",
    "a": "Die optische Telegrafie, etwa das System von Claude Chappe."
  },
  {
    "id": 354,
    "q": "Was war das „Jacquard-Prinzip“ beim Weben?",
    "a": "Die Steuerung von Webmustern durch gelochte Karten."
  },
  {
    "id": 355,
    "q": "Welche mathematisch-technische Pionierin veröffentlichte 1843 Anmerkungen zu Babbages Analytical Engine einschließlich eines Algorithmus?",
    "a": "Ada Lovelace."
  },
  {
    "id": 356,
    "q": "Welches Insekt wurde 1947 im Logbuch eines Harvard-Mark-II-Rechners festgeklebt und als „bug“ dokumentiert?",
    "a": "Eine Motte."
  },
  {
    "id": 357,
    "q": "Welcher Künstler stellte 1917 ein signiertes Urinal unter dem Titel „Fountain“ als Kunstwerk vor?",
    "a": "Marcel Duchamp."
  },
  {
    "id": 358,
    "q": "Welcher Komponist schrieb das Werk „4′33″“, bei dem die Ausführenden keine absichtlich gespielten Instrumentaltöne erzeugen sollen?",
    "a": "John Cage."
  },
  {
    "id": 359,
    "q": "Was war Yves Kleins „Le Vide“ von 1958?",
    "a": "Eine Ausstellung eines weitgehend leeren Galerieraums."
  },
  {
    "id": 360,
    "q": "Welcher Künstler verpackte gemeinsam mit Jeanne-Claude 1995 den Berliner Reichstag?",
    "a": "Christo."
  },
  {
    "id": 361,
    "q": "Welcher Künstler schuf die „Merda d’artista“ genannten Dosen von 1961?",
    "a": "Piero Manzoni."
  },
  {
    "id": 362,
    "q": "Welche Künstlerin saß 2010 für „The Artist Is Present“ Besuchern schweigend gegenüber?",
    "a": "Marina Abramović."
  },
  {
    "id": 363,
    "q": "Welcher Surrealist entwarf das berühmte „Hummertelefon“?",
    "a": "Salvador Dalí."
  },
  {
    "id": 364,
    "q": "Wer malte „Der Verrat der Bilder“ mit einer Pfeife und der Aufschrift „Ceci n’est pas une pipe“?",
    "a": "René Magritte."
  },
  {
    "id": 365,
    "q": "Warum ist Rembrandts „Nachtwache“ heute kleiner als bei ihrer Fertigstellung?",
    "a": "Sie wurde 1715 beschnitten, damit sie an ihren neuen Aufstellungsort passte."
  },
  {
    "id": 366,
    "q": "Welche Kunstform war von 1912 bis 1948 neben Malerei, Bildhauerei, Musik und Literatur Gegenstand olympischer Wettbewerbe?",
    "a": "Architektur."
  },
  {
    "id": 367,
    "q": "Welcher Begründer der modernen Olympischen Spiele gewann 1912 unter Pseudonymen einen Literaturwettbewerb mit der „Ode an den Sport“?",
    "a": "Pierre de Coubertin."
  },
  {
    "id": 368,
    "q": "Für welche nicht sportliche Leistung gewann Walter Winans bei den Olympischen Spielen 1912 Gold?",
    "a": "Für eine Skulptur, „An American Trotter“."
  },
  {
    "id": 369,
    "q": "Was war die „Florentiner Camerata“?",
    "a": "Ein Kreis von Musikern und Gelehrten im Florenz des späten 16. Jahrhunderts, der die Entstehung der Oper beeinflusste."
  },
  {
    "id": 370,
    "q": "Was bezeichnet der Ausdruck „Hosenrolle“ im Theater und in der Oper?",
    "a": "Eine männliche Rolle, die von einer Frau dargestellt beziehungsweise gesungen wird."
  },
  {
    "id": 371,
    "q": "Was ist eine „Kastratenrolle“ in der historischen Oper?",
    "a": "Eine ursprünglich für einen kastrierten männlichen Sänger geschriebene Partie."
  },
  {
    "id": 372,
    "q": "Was war eine „Camera obscura“ vor der modernen Fotografie?",
    "a": "Ein abgedunkelter Raum oder Kasten, in dem eine kleine Öffnung oder Linse ein umgekehrtes Außenbild projiziert."
  },
  {
    "id": 373,
    "q": "Was ist eine „Laterna magica“?",
    "a": "Ein historisches Projektionsgerät für transparente Bilder."
  },
  {
    "id": 374,
    "q": "Was ist ein „Thaumatrop“?",
    "a": "Ein optisches Spielzeug mit zwei Bildern, die durch rasche Bewegung scheinbar zu einem Bild verschmelzen."
  },
  {
    "id": 375,
    "q": "Was ist ein „Zoetrop“?",
    "a": "Eine geschlitzte Trommel, die beim Drehen eine Folge von Bildern als Bewegung erscheinen lässt."
  },
  {
    "id": 376,
    "q": "Was ist ein „Phonograph“ ursprünglich?",
    "a": "Ein Gerät zur Aufzeichnung und Wiedergabe von Schall, bei frühen Ausführungen mit Walzen."
  },
  {
    "id": 377,
    "q": "Was war eine „Wunderkammer“ in der Frühen Neuzeit?",
    "a": "Eine Sammlung bemerkenswerter Naturgegenstände, Kunstobjekte und anderer Raritäten."
  },
  {
    "id": 378,
    "q": "Was bezeichnet „Spolien“ in der Architekturgeschichte?",
    "a": "Wiederverwendete Bauteile oder Bildwerke aus älteren Bauwerken."
  },
  {
    "id": 379,
    "q": "Was ist eine „Folly“ in der Gartenarchitektur?",
    "a": "Ein vor allem als Blickfang oder Staffage errichtetes Bauwerk, oft ohne praktischen Nutzungszweck."
  },
  {
    "id": 380,
    "q": "Was ist ein „Ha-Ha“ in der historischen Gartenkunst?",
    "a": "Ein abgesenkter Graben, der eine unsichtbar wirkende Grenze bildet, ohne den Blick zu verstellen."
  },
  {
    "id": 381,
    "q": "Wozu diente ein „Eiskeller“ vor der Verbreitung elektrischer Kühlgeräte?",
    "a": "Zur Lagerung von Eis und zur Kühlung von Lebensmitteln."
  },
  {
    "id": 382,
    "q": "Was war ein „Lustschloss“?",
    "a": "Ein für Vergnügen und privaten Rückzug bestimmter fürstlicher Landsitz, nicht primär eine Regierungsresidenz."
  },
  {
    "id": 383,
    "q": "Was ist ein „Belvedere“ in der Architektur?",
    "a": "Ein Bauwerk oder Gebäudeteil, der einen schönen Ausblick ermöglichen soll."
  },
  {
    "id": 384,
    "q": "Was ist ein „Bergfried“?",
    "a": "Ein meist nicht dauerhaft bewohnter Hauptturm einer mittelalterlichen Burg."
  },
  {
    "id": 385,
    "q": "Was ist ein „Donjon“?",
    "a": "Ein meist als Wehr- und Wohnturm genutzter Hauptturm einer mittelalterlichen Burg."
  },
  {
    "id": 386,
    "q": "Was bezeichnet „Pechnase“ an einem Wehrbau?",
    "a": "Einen vorspringenden, nach unten offenen Erker zur Verteidigung des Mauerfußes oder eines Eingangs."
  },
  {
    "id": 387,
    "q": "Was war ein „Pranger“?",
    "a": "Eine öffentliche Vorrichtung, an der Menschen zur beschämenden Bestrafung ausgestellt wurden."
  },
  {
    "id": 388,
    "q": "Was war ein „Schandmantel“ beziehungsweise eine „Schandtonne“?",
    "a": "Eine tragbare hölzerne Vorrichtung zur öffentlichen Beschämung Verurteilter."
  },
  {
    "id": 389,
    "q": "Was bezeichnet der historische Ausdruck „Defenestration“?",
    "a": "Das Hinauswerfen von Menschen aus einem Fenster, insbesondere bei den Prager Fensterstürzen."
  },
  {
    "id": 390,
    "q": "Was war die „Leichensynode“ von 897?",
    "a": "Ein kirchliches Gerichtsverfahren in Rom gegen den ausgegrabenen Leichnam von Papst Formosus."
  },
  {
    "id": 391,
    "q": "Welcher römische Kaiser ist mit seinem Lieblingspferd Incitatus und der überlieferten Absicht verbunden, es zum Konsul zu machen?",
    "a": "Caligula; eine tatsächliche Ernennung zum Konsul ist nicht belegt."
  },
  {
    "id": 392,
    "q": "Welcher römische Kaiser wird mit der Redensart „Geld stinkt nicht“ in Verbindung gebracht?",
    "a": "Vespasian, im Zusammenhang mit einer Abgabe auf Urin beziehungsweise dessen gewerbliche Nutzung."
  },
  {
    "id": 393,
    "q": "Warum war menschlicher Urin im antiken Walkergewerbe nützlich?",
    "a": "Beim Altern entstand Ammoniak, das beim Reinigen und Entfetten von Textilien half."
  },
  {
    "id": 394,
    "q": "Welche chemische Behandlung macht Naturkautschuk zu einem elastischeren und widerstandsfähigeren Gummi?",
    "a": "Die Vulkanisation, klassisch durch Vernetzung mit Schwefel."
  },
  {
    "id": 395,
    "q": "Was war „Skriptgeld“ beziehungsweise „Scrip“ in manchen historischen Unternehmenssiedlungen?",
    "a": "Ein betriebsinternes Ersatzgeld oder Gutscheinsystem, das häufig nur in firmeneigenen Läden eingelöst werden konnte."
  },
  {
    "id": 396,
    "q": "Was waren „Kerbhölzer“ als historisches Abrechnungsmittel?",
    "a": "Mit Kerben versehene Holzstäbe zur Dokumentation von Schulden, Lieferungen oder Ansprüchen."
  },
  {
    "id": 397,
    "q": "Was war ein „Stocktally“ im englischen Finanzwesen?",
    "a": "Eine Hälfte eines gespaltenen Kerbholzes; die passende Gegenhälfte diente als Kontrollstück."
  },
  {
    "id": 398,
    "q": "Was geschah 1834 beim Verbrennen ausrangierter Kerbhölzer im Londoner Parlament?",
    "a": "Das Feuer geriet außer Kontrolle und zerstörte große Teile des alten Palace of Westminster."
  },
  {
    "id": 399,
    "q": "Welches Ereignis wurde als „Großer Gestank“ von London 1858 bekannt?",
    "a": "Eine extreme Geruchsbelastung durch die mit Abwässern verschmutzte Themse während eines heißen Sommers."
  },
  {
    "id": 400,
    "q": "Welches ungewöhnliche Versorgungssystem führte man im 19. Jahrhundert in Teilen von Paris für Uhren ein?",
    "a": "Ein pneumatisches Zeitsystem, bei dem Druckluftimpulse Uhren synchronisierten.\n\n## 5. Zahlen und Größen – Natur, Weltraum, Maße und Spielregeln"
  },
  {
    "id": 401,
    "q": "Wie viele Herzen hat ein Oktopus?",
    "a": "Drei: zwei Kiemenherzen und ein Körperherz."
  },
  {
    "id": 402,
    "q": "Wie viele Arme hat ein Oktopus normalerweise?",
    "a": "Acht."
  },
  {
    "id": 403,
    "q": "Wie viele Arme und zusätzliche Fangtentakel besitzt ein typischer Kalmar?",
    "a": "Acht Arme und zwei längere Fangtentakel."
  },
  {
    "id": 404,
    "q": "Wie viele Halswirbel hat eine Giraffe normalerweise?",
    "a": "Sieben."
  },
  {
    "id": 405,
    "q": "Wie viele Flügel besitzt ein erwachsenes Insekt aus der Ordnung der Zweiflügler normalerweise?",
    "a": "Zwei funktionsfähige Flügel; das hintere Paar ist zu Schwingkölbchen umgebildet."
  },
  {
    "id": 406,
    "q": "Wie viele Beine hat eine erwachsene Zecke normalerweise?",
    "a": "Acht."
  },
  {
    "id": 407,
    "q": "Wie viele Beine hat eine Zeckenlarve normalerweise?",
    "a": "Sechs."
  },
  {
    "id": 408,
    "q": "Wie viele Beine besitzen erwachsene Insekten grundsätzlich?",
    "a": "Sechs."
  },
  {
    "id": 409,
    "q": "Wie viele Flügel hat eine Biene normalerweise?",
    "a": "Vier."
  },
  {
    "id": 410,
    "q": "Wie viele Flügel hat eine Libelle normalerweise?",
    "a": "Vier."
  },
  {
    "id": 411,
    "q": "Wie viele Mägen hat ein Rind anatomisch, wenn man die Abschnitte nicht als einzelne Mägen zählt?",
    "a": "Einen Magen mit vier Abschnitten: Pansen, Netzmagen, Blättermagen und Labmagen."
  },
  {
    "id": 412,
    "q": "Wie viele Zitzen hat ein normales Kuheuter?",
    "a": "Vier."
  },
  {
    "id": 413,
    "q": "Wie viele Kammern besitzt das Herz eines gesunden erwachsenen Menschen?",
    "a": "Vier."
  },
  {
    "id": 414,
    "q": "Wie viele Lungenlappen hat ein Mensch normalerweise insgesamt?",
    "a": "Fünf: drei rechts und zwei links."
  },
  {
    "id": 415,
    "q": "Wie viele Knöchelchen enthält ein menschliches Mittelohr normalerweise?",
    "a": "Drei: Hammer, Amboss und Steigbügel."
  },
  {
    "id": 416,
    "q": "Wie viele Milchzähne umfasst ein vollständiges menschliches Milchgebiss?",
    "a": "Zwanzig."
  },
  {
    "id": 417,
    "q": "Wie viele Zähne hat ein vollständiges bleibendes menschliches Gebiss einschließlich Weisheitszähnen?",
    "a": "Zweiunddreißig."
  },
  {
    "id": 418,
    "q": "Wie viele Knochen werden für das typische erwachsene menschliche Skelett konventionell angegeben?",
    "a": "206; individuelle Abweichungen sind möglich."
  },
  {
    "id": 419,
    "q": "Wie viele Chromosomen besitzt eine typische kernhaltige menschliche Körperzelle ohne entsprechende Chromosomenabweichung?",
    "a": "46, angeordnet in 23 Paaren."
  },
  {
    "id": 420,
    "q": "Wie viele Chromosomen enthält eine normale menschliche Ei- oder Samenzelle?",
    "a": "23."
  },
  {
    "id": 421,
    "q": "Wie viele Basen hat ein Codon des genetischen Codes?",
    "a": "Drei."
  },
  {
    "id": 422,
    "q": "Wie viele unterschiedliche Codons sind mit vier Basen und drei Positionen möglich?",
    "a": "64."
  },
  {
    "id": 423,
    "q": "Wie viele davon sind im Standardcode Stopcodons?",
    "a": "Drei."
  },
  {
    "id": 424,
    "q": "Wie viele reguläre proteinogene Aminosäuren umfasst die übliche Grundliste des genetischen Standardcodes?",
    "a": "Zwanzig; Selenocystein und Pyrrolysin werden dabei nicht mitgezählt."
  },
  {
    "id": 425,
    "q": "Wie viele anerkannte chemische Elemente hatte das Periodensystem nach der Benennung von Nihonium, Moscovium, Tenness und Oganesson 2016?",
    "a": "118."
  },
  {
    "id": 426,
    "q": "Wie viele Protonen besitzt ein Goldatom?",
    "a": "79."
  },
  {
    "id": 427,
    "q": "Wie viele Protonen besitzt ein Quecksilberatom?",
    "a": "80."
  },
  {
    "id": 428,
    "q": "Wie viele Protonen besitzt ein Kohlenstoffatom?",
    "a": "Sechs."
  },
  {
    "id": 429,
    "q": "Wie viele Neutronen besitzt ein Atom des Isotops Kohlenstoff-14?",
    "a": "Acht."
  },
  {
    "id": 430,
    "q": "Wie viele Wasserstoffatome enthält ein Molekül Ethanol?",
    "a": "Sechs."
  },
  {
    "id": 431,
    "q": "Wie viele Kohlenstoffatome enthält ein Molekül Koffein?",
    "a": "Acht."
  },
  {
    "id": 432,
    "q": "Wie viele Sauerstoffatome enthält ein Ozonmolekül?",
    "a": "Drei."
  },
  {
    "id": 433,
    "q": "Wie viele Kohlenstoffatome enthält ein Buckminsterfulleren-Molekül C60?",
    "a": "Sechzig."
  },
  {
    "id": 434,
    "q": "Wie viele SI-Basiseinheiten gibt es?",
    "a": "Sieben."
  },
  {
    "id": 435,
    "q": "Wie viele Meter legt Licht im Vakuum definitionsgemäß in genau einer Sekunde zurück?",
    "a": "299.792.458 Meter."
  },
  {
    "id": 436,
    "q": "Welches Atom steht mit seinem Hyperfeinübergang im Zentrum der SI-Definition der Sekunde?",
    "a": "Cäsium-133."
  },
  {
    "id": 437,
    "q": "Wie viele Perioden der festgelegten Cäsium-133-Strahlung entsprechen definitionsgemäß einer Sekunde?",
    "a": "9.192.631.770."
  },
  {
    "id": 438,
    "q": "Wie viele Teilchen enthält ein Mol definitionsgemäß genau?",
    "a": "6,02214076 × 10²³ der jeweils festgelegten Teilchen."
  },
  {
    "id": 439,
    "q": "Bei welcher Celsius-Temperatur liegt der absolute Nullpunkt?",
    "a": "Bei −273,15 °C."
  },
  {
    "id": 440,
    "q": "Bei welchem Zahlenwert zeigen Celsius- und Fahrenheit-Skala dieselbe Temperatur an?",
    "a": "Bei −40 Grad."
  },
  {
    "id": 441,
    "q": "Wie viele Millimeter misst ein internationaler Zoll genau?",
    "a": "25,4 Millimeter."
  },
  {
    "id": 442,
    "q": "Wie viele Zentimeter misst ein internationaler Fuß genau?",
    "a": "30,48 Zentimeter."
  },
  {
    "id": 443,
    "q": "Wie viele Meter hat eine internationale Seemeile genau?",
    "a": "1.852 Meter."
  },
  {
    "id": 444,
    "q": "Welche Geschwindigkeit bedeutet ein Knoten?",
    "a": "Eine Seemeile pro Stunde, also genau 1,852 Kilometer pro Stunde."
  },
  {
    "id": 445,
    "q": "Wie viele Meter umfasst eine internationale Landmeile genau?",
    "a": "1.609,344 Meter."
  },
  {
    "id": 446,
    "q": "Wie viele Quadratmeter hat ein Hektar?",
    "a": "10.000 Quadratmeter."
  },
  {
    "id": 447,
    "q": "Wie viele Liter fasst ein Würfel mit genau einem Meter Kantenlänge?",
    "a": "1.000 Liter."
  },
  {
    "id": 448,
    "q": "Wie viele Kubikmeter umfasst ein Ster geschichtetes Holz einschließlich Zwischenräumen?",
    "a": "Einen Kubikmeter."
  },
  {
    "id": 449,
    "q": "Wie viele Kilogramm entspricht eine metrische Tonne?",
    "a": "1.000 Kilogramm."
  },
  {
    "id": 450,
    "q": "Wie viele Gramm hat ein metrisches Karat als Masseeinheit für Edelsteine?",
    "a": "0,2 Gramm."
  },
  {
    "id": 451,
    "q": "Wie viele Gramm wiegt eine Feinunze ungefähr?",
    "a": "31,1035 Gramm."
  },
  {
    "id": 452,
    "q": "Welchen Goldanteil bezeichnet 18-karätiges Gold nominell?",
    "a": "18 von 24 Teilen, also 75 Prozent."
  },
  {
    "id": 453,
    "q": "Wie viele Millimeter misst ein Didot-Punkt im traditionellen typografischen System ungefähr?",
    "a": "0,376 Millimeter."
  },
  {
    "id": 454,
    "q": "Wie viele Millimeter misst ein auf 1/72 Zoll festgelegter DTP-Punkt ungefähr?",
    "a": "0,3528 Millimeter."
  },
  {
    "id": 455,
    "q": "Wie viele Bit hat ein Byte in der heute üblichen Bedeutung?",
    "a": "Acht Bit."
  },
  {
    "id": 456,
    "q": "Wie viele Byte hat ein Kibibyte?",
    "a": "1.024 Byte."
  },
  {
    "id": 457,
    "q": "Wie viele Byte hat ein dezimales Kilobyte?",
    "a": "1.000 Byte."
  },
  {
    "id": 458,
    "q": "Wie viele Bit umfasst eine IPv6-Adresse?",
    "a": "128 Bit."
  },
  {
    "id": 459,
    "q": "Wie viele Bit umfasst eine IPv4-Adresse?",
    "a": "32 Bit."
  },
  {
    "id": 460,
    "q": "Wie viele unterschiedliche Werte lassen sich mit acht Bit darstellen?",
    "a": "256."
  },
  {
    "id": 461,
    "q": "Wie viele Jahre umfasst der vollständige Wiederholungszyklus der Schaltjahresregel des gregorianischen Kalenders?",
    "a": "400 Jahre."
  },
  {
    "id": 462,
    "q": "Wie viele Schaltjahre liegen in einem vollständigen 400-Jahre-Zyklus des gregorianischen Kalenders?",
    "a": "97."
  },
  {
    "id": 463,
    "q": "Wie viele Tage umfasst ein vollständiger 400-Jahre-Zyklus des gregorianischen Kalenders?",
    "a": "146.097 Tage."
  },
  {
    "id": 464,
    "q": "Wie viele Tage hat ein julianisches Jahr nach astronomischer Definition genau?",
    "a": "365,25 Tage."
  },
  {
    "id": 465,
    "q": "Wie lang ist ein siderischer Tag der Erde ungefähr, gemessen in gewöhnlichen Stunden, Minuten und Sekunden?",
    "a": "23 Stunden, 56 Minuten und 4 Sekunden."
  },
  {
    "id": 466,
    "q": "Wie lange braucht die Venus ungefähr für eine vollständige Drehung relativ zu den Sternen?",
    "a": "243 Erdtage."
  },
  {
    "id": 467,
    "q": "Wie lange dauert ein Umlauf der Venus um die Sonne ungefähr?",
    "a": "225 Erdtage."
  },
  {
    "id": 468,
    "q": "Wie viele natürliche Monde haben Merkur und Venus jeweils?",
    "a": "Keine."
  },
  {
    "id": 469,
    "q": "Wie viele natürliche Monde hat der Mars?",
    "a": "Zwei: Phobos und Deimos."
  },
  {
    "id": 470,
    "q": "Wie viele Planeten des Sonnensystems besitzen Ringsysteme?",
    "a": "Vier: Jupiter, Saturn, Uranus und Neptun."
  },
  {
    "id": 471,
    "q": "Wie viele Erdtage dauert ein Marsjahr ungefähr?",
    "a": "687 Erdtage."
  },
  {
    "id": 472,
    "q": "Wie viele Erdjahre dauert ein Umlauf des Neptun um die Sonne ungefähr?",
    "a": "165 Erdjahre."
  },
  {
    "id": 473,
    "q": "Wie viele Erdjahre dauert ein Umlauf des Uranus um die Sonne ungefähr?",
    "a": "84 Erdjahre."
  },
  {
    "id": 474,
    "q": "Wie groß ist die Neigung der Uranus-Rotationsachse gegenüber der Senkrechten auf seine Bahnebene ungefähr?",
    "a": "98 Grad."
  },
  {
    "id": 475,
    "q": "Wie viele Minuten braucht Sonnenlicht ungefähr von der Sonne zur Erde?",
    "a": "Etwa 8 Minuten und 20 Sekunden; der genaue Wert hängt vom Abstand ab."
  },
  {
    "id": 476,
    "q": "Wie viele Kilometer liegen Erde und Mond im Mittel ungefähr auseinander?",
    "a": "384.400 Kilometer."
  },
  {
    "id": 477,
    "q": "Wie viele Kilometer misst der mittlere Durchmesser der Erde ungefähr?",
    "a": "12.742 Kilometer."
  },
  {
    "id": 478,
    "q": "Wie viel Prozent der Erdoberfläche sind ungefähr von Wasser bedeckt?",
    "a": "71 Prozent."
  },
  {
    "id": 479,
    "q": "Wie viele Meter über dem Meeresspiegel liegt der Mount Everest nach der 2020 gemeinsam bekannt gegebenen nepalesisch-chinesischen Vermessung?",
    "a": "8.848,86 Meter."
  },
  {
    "id": 480,
    "q": "Wie viele Meter beträgt die größte bekannte Tiefe des Baikalsees?",
    "a": "1.642 Meter."
  },
  {
    "id": 481,
    "q": "Wie viele Meter beträgt die offizielle Länge eines Marathonlaufs?",
    "a": "42.195 Meter."
  },
  {
    "id": 482,
    "q": "Wie hoch ist ein Basketballkorb nach FIBA-Regeln bis zur Ringoberkante?",
    "a": "3,05 Meter."
  },
  {
    "id": 483,
    "q": "Wie hoch ist die Oberkante eines Volleyballnetzes im regulären Männerwettbewerb?",
    "a": "2,43 Meter."
  },
  {
    "id": 484,
    "q": "Wie hoch ist die Oberkante eines Volleyballnetzes im regulären Frauenwettbewerb?",
    "a": "2,24 Meter."
  },
  {
    "id": 485,
    "q": "Wie viele Meter liegt die Mitte der Fußball-Elfmetermarke nach den Spielregeln von der Torlinie entfernt?",
    "a": "Elf Meter."
  },
  {
    "id": 486,
    "q": "Wie breit ist ein reguläres Fußballtor zwischen den Innenkanten der Pfosten?",
    "a": "7,32 Meter."
  },
  {
    "id": 487,
    "q": "Wie hoch ist ein reguläres Fußballtor vom Boden bis zur Unterkante der Querlatte?",
    "a": "2,44 Meter."
  },
  {
    "id": 488,
    "q": "Wie viele Fünfecke besitzt ein klassischer Fußball mit 32 Flächen?",
    "a": "Zwölf Fünfecke; hinzu kommen zwanzig Sechsecke."
  },
  {
    "id": 489,
    "q": "Wie viele Felder umfasst ein Schachbrett?",
    "a": "64."
  },
  {
    "id": 490,
    "q": "Wie viele Steine stehen bei einer regulären Schachpartie zu Beginn insgesamt auf dem Brett?",
    "a": "32."
  },
  {
    "id": 491,
    "q": "Wie viele Steine umfasst ein vollständiger Doppel-Sechs-Dominosatz?",
    "a": "28."
  },
  {
    "id": 492,
    "q": "Wie viele spielbare Schnittpunkte hat ein Standard-Go-Brett?",
    "a": "361 Schnittpunkte auf einem Raster aus 19 mal 19 Linien."
  },
  {
    "id": 493,
    "q": "Wie viele Mulden hat ein übliches Kalaha-Brett einschließlich der beiden Sammelmulden?",
    "a": "Vierzehn."
  },
  {
    "id": 494,
    "q": "Wie viele Augen befinden sich insgesamt auf einem üblichen sechsseitigen Spielwürfel?",
    "a": "21."
  },
  {
    "id": 495,
    "q": "Welche Summe ergeben gegenüberliegende Seiten eines üblichen sechsseitigen Spielwürfels?",
    "a": "Sieben."
  },
  {
    "id": 496,
    "q": "Wie viele Karten hat ein übliches französisches Standardblatt ohne Joker?",
    "a": "52."
  },
  {
    "id": 497,
    "q": "Wie viele Karten umfasst ein übliches deutsches Skatblatt?",
    "a": "32."
  },
  {
    "id": 498,
    "q": "Wie viele verschiedene Formen und Größen von Steinen enthält ein klassisches Tangram, wenn deckungsgleiche Teile nur einmal gezählt werden?",
    "a": "Fünf: großes, mittleres und kleines Dreieck, Quadrat und Parallelogramm."
  },
  {
    "id": 499,
    "q": "Wie viele Seiten besitzt ein Möbiusband?",
    "a": "Eine zusammenhängende Seite."
  },
  {
    "id": 500,
    "q": "Wie viele Kanten hat ein Möbiusband als Begrenzung seiner Fläche?",
    "a": "Eine zusammenhängende Randkurve."
  }
];
