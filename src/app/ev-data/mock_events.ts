import { EvEvent } from "./EvEvent";
import { EvEventType } from "./EvEventType";

export const EVENTS: EvEvent[] = [
  {
    type: EvEventType.Lecture,
    title: "Gröbnerbaser er magi",
    date: new Date(2025, 3, 4, 16),
    location: "Aud. G2",
    host: "Anders Nedergaard Jensen",
    description: "Kom med.",
    abstract: "Det kan simpelthen ikke passe, at de er så flotte.",
    link: ""
  },
  {
        type: EvEventType.Lecture,
        title: "Hvorfor algebra er bedre end analyse",
        date: new Date(2024, 11, 24, 16),
        location: "Aud. E",
        host: "Jesper Funch Thomsen",
        description: "Totalt meget et foredrag, som ikke kun er her, for at teste.",
        abstract: "Dette overlades ikke til læseren. Fordi så vil analytikere læse det, og misforstå.",
        link: ""
    },
    {
        type: EvEventType.Lecture,
        title: "Can Large Numbers Become Small?",
        date: new Date(2024, 2, 19, 16),
        location: "Aud. G2",
        host: "Corina-Gabriela Ciobotaru",
        description: "It is finally time for the second talk of the semester; this time with Corina-Gabriela Ciobotaru. The talk will be held Tuesday, March 19th, at 16.15 in Aud. G2!",
        abstract: "It is an absolutely inconceivable, crazy question to ask if a large number can be seen as a very small one, right? We learn from an early age about the real numbers, and we all think those are the only numbers we have in Math. Still, one agrees that the question above is valid mathematically. If you want to find the answer, and dive into a totally new mathematical world, come to my talk on Tuesday, March 19, at 16:15.",
        link: "https://fb.me/e/7jFPXUN9B"
    },
    {
        type: EvEventType.GeneralAssembly,
        title: "Generalforsamling i Eulers Venner",
        date: new Date(2024, 1, 27, 16),
        location: "Koll. G4",
        host: "",
        description: "Dagen gryner på endnu et forårssemester, og derfor er det tid til den årlige generalforsamling i Eulers Venner. Vi kaster et blik tilbage på året der gik, og samarbejder om at finde ud af, hvad næste år skal bringe. Derudover er der nogle bestyrelsesmedlemmer der træder af og nogle nye der skal vælges ind. Sidst men ikke mindst skal vi have et glas portvin!\nSå grib en ven, kom glad og vær med til at forme foreningen for matematikere og matematikinteresserede på AU og med nogle dejlige mennesker på tværs af årgange.\n\nDagsorden:\n1. Valg af dirigent og referent.\n2. Valg af stemmetællere.\n3. Bestyrelsen aflægger beretning.\n4. Fremlæggelse af det reviderede regnskab og forslag til budget.\n5. Fastlæggelse af kontingent.\n6. Indkomne forslag.\n7. Ideer til de kommende års arrangementer og diskussion heraf.\n8. Valg af bestyrelsen.\n9. Valg af revisor og revisorsuppleant.\n10. Eventuelt.\n\nForslag, som ønskes behandlet på generalforsamlingen, sendes til bestyrelsen senest 8 dage før generalforsamlingen.\nKom, grib chancen for at blive en del af Eulers Venner!\nVi giver portvin!",
        abstract: "",
        link: "https://fb.me/e/1RdijLCLF"
    },
    {
        type: EvEventType.Lecture,
        title: "Fastsættelse af forsikringspræmier med GLM og Random Forest",
        date: new Date(2024, 1, 20, 16),
        location: "Koll. G3",
        host: "Jan Pedersen",
        description: "Så er det endelig blevet tid til Semesterets første foredrag, dennegang med Jan Pedersen!\nDet kommer til at forgå Tirsdag d. 20 februar kl. 16 i Koll. G3!!",
        abstract: "Traditionelt har forsikringsselskaber anvendt Generaliserede Lineære Modeller (GLM) til fastsættelse af forsikringspræmier. Disse matematiske modeller, baseret på sandsynlighedsteori og statistik, har været brugt til at estimere risici og præmier. I dette foredrag vil vi først gennemgå de traditionelle metoder og derefter introducere anvendelsen af Random Forest (RF) som en alternativ tilgang til forsikringspræmieberegning. RF er en advanceret maskinlæringsmetode, der især er god til at håndtere komplekse ikke-lineære sammenhænge og har potentialet til at forbedre præcisionen af præmieberegninger markant.\n\nUnder foredraget vil vi sammenligne de to tilgange og diskutere fordele og ulemper ved hver af dem. Vi vil også berøre åbne problemstillinger vedrørende de asymptotiske egenskaber for maskinlæringsmetoder som RF, særligt i forhold til traditionelle statistiske metoder som GLM. Gennem præsentationen vil vi dykke ned i tekniske aspekter af forsikringspræmieberegning og give et indblik i, hvordan moderne maskinlæringsteknikker kan anvendes til at forbedre præcisionen og effektiviteten af denne proces.\n\nForedraget bygger delvist på nylige specialer og kan måske fungere som inspiration til egne forskningsprojekter. Det kan følges af studerende, som har afsluttet første studieår.",
        link: "https://fb.me/e/3m3jntTPg"
    },
    {
        type: EvEventType.StudyNight,
        title: "Lektiecafé og Pizza Aften",
        date: new Date(2023, 11, 6, 17),
        location: "MatLab",
        host: "",
        description: "Mangler du også at lave de sidste analyseafleveringer så du kan blive indstillet til eksamen?\nEller er der noget statistik TØ som du virkelig gerne vil have styr på? Derfor vil Eulers Venner invitere jer til gratis studie- og pizzaaften i Matlab!\nHvis du er 1.- eller 2.-årsstuderende vil der være folk til aftenen, som man kan stille spørgsmål om ens kurser, mens hvis man er ældre kan man risikere man skal yde lidt hjælp i bytte for pizzaen.\nSelv hvis du har totalt styr på det hele, så duk op, få noget gratis pizza og hyg dig med andre matematikere!\nTilmelding er blot via en begivenhed på Eulers Venner's Facebook side.\nDeadline for tilmelding er tirsdag d. 5. december, kl 20.",
        abstract: "",
        link: "https://fb.me/e/33XGzbwhE"
    },
    {
        type: EvEventType.Lecture,
        title: "Poincaréformodningen: Hvad gør man med en million dollar?",
        date: new Date(2023, 9, 3, 16),
        location: "Aud. D1",
        host: "Andrew Swann",
        description: "Så er det endelig blevet tid til Semesterets første foredrag, dennegang med Andrew Swann! Det kommer til at forgå Tirsdag d.3 Oktober kl. 16 i Aud. D1!!",
        abstract: "Poincaréformodningen er en af de syv millennium-problemer og er den eneste, der er blevet løst.\nDen siger noget, der umiddelbart er ret simpelt om visse rum af dimension tre, men det gik næsten 100 år inden løsningen blevet givet. Jeg vil fortælle om formodningens historie, forklare problemstillingen og sammenligne løsningsideen med ideer for kurver og for overflader.",
        link: "https://fb.me/e/6amEXhtvv"
    },
    {
        type: EvEventType.Lecture,
        title: "Kvantecomputere og post-kvante kryptografi",
        date: new Date(2023, 4, 9, 16, 30),
        location: "Aud. D3",
        host: "Ivan Damgård",
        description: "Så blev det tid til endnu et Eulers Venner foredrag med Ivan Damgård! Det kommer til at foregå tirsdag d. 9. Maj klokken 16.30 i Auditorium D3!",
        abstract: "Vi giver en kort introduktion til kvantecomputere: hvordan virker de, hvad kan de? Og hvad kan de ikke?\nVi ser på grundideerne bag den algoritme som på en tilstrækkelig stor kvantecomputer kan bryde de feste af de krypteringsmetoder vi bruger i dag på nettet. Til sidst ser vi på en af de nye metoder til kryptering, som vi tror på er sikre mod selv en kvantecomputer.",
        link: "https://fb.me/e/3ugJoRFVj"
    },
    {
        type: EvEventType.Lecture,
        title: "Hilberts tredje problem - kan vi glemme alt om Newton og Leibniz?",
        date: new Date(2023, 2, 21, 17),
        location: "Aud. D3",
        host: "Markus Kiderlen",
        description: "Så blev det tid til endnu et Eulers Venner foredrag med Markus Kiderlen! Det kommer til at foregå torsdag d. 21. Marts klokken 17 i Auditorium D3.",
        abstract: "For at beregne arealet af en trekant kan man som bekendt bruge Newtons og Leibniz innitesimalregning. Der gøres ved at finde en funktion, så trekanten er området under grafen og så integrere funktionen.\nMen det er jo slet ikke nødvendigt!!! Arealet af en trekant kan også beregnes elementært, ved at dissekere trekanten og sætte delene sammen til en kvadrat, hvis areal er produktet af sidelængderne. \n\nI slutningen af 1800-tallet undrede forskere sig over, om man generelt kan undgå innitesimale argumenter, hvis man skal beregne arealet af simple figurer. I to dimensioner siger Wallace-Bolyai-Gerwien sætningen, at det er sandt for polygoner, altså mængder hvis rand består af linjestykker. Hilbert var i tvivl om det tilsvarende resultat holder i tre dimensioner med volumen i stedet for areal. Han formodede mere konkret, at der findes en pyramide, som ikke kan skæres i endelig mange dele, og efterfølgende kan sættes sammen til en kube. Ved den Internatione Matematikkongres i Paris i året 1900 formulerede han dette. Det er i dag kendt som Hilberts tredje problem. \n\nJeg vil forklare de todimensionale resultater og så beskrive hvordan Hilberts PhD studerende Max Dehn løste problemet i tre dimensioner. Jeg vil også antyde hvordan Dehns ideer har skabt et helt nyt forskningsfelt, som mange matematikere (inklusiv mig selv) forsker i i dag.\n\nForedraget kræver ingen forudsætninger ud over lidt skolegeometri.",
        link: "https://fb.me/e/2rg5QgFXJ"
    },
    {
        type: EvEventType.GeneralAssembly,
        title: "Generalforsamling i Eulers Venner",
        date: new Date(2023, 1, 28, 16),
        location: "Koll. G3",
        host: "",
        description: "Dagen gryner på endnu et forårssemester, og derfor er det tid til den årlige generalforsamling i Eulers Venner. Vi kaster et blik tilbage på året der gik, og samarbejder om at finde ud af, hvad næste år skal bringe. Derudover er der nogle bestyrelsesmedlemmer, der går af, og nogle nye, der skal vælges ind. Sidst, men ikke mindst skal vi have et glas portvin! Så grib en ven, kom glad, vær med til at forme foreningen for matematikere og matematikinteresserede på AU og mød nogle dejlige mennesker på tværs af årgange.\nDagsorden:\n1. Valg af dirigent og referent.\n2. Valg af stemmetællere.\n3. Bestyrelsen aflægger beretning.\n4. Fremlæggelse af det reviderede regnskab og forslag til budget.\n5. Fastlæggelse af kontingent.\n6. Indkomne forslag.\n7. Ideer til de kommende års arrangementer og diskussion heraf.\n8. Valg af bestyrelsen.\n9. Valg af revisor og revisorsuppleant.\n10. Eventuelt.\nForslag, som ønskes behandlet, sendes til bestyrelsen senest 8 dage før generalforsamlingen.",
        abstract: "",
        link: "https://fb.me/e/3wEl073wb"
    },
    {
        type: EvEventType.Lecture,
        title: "Riemanns zeta-funktion - rationalitet og galskab",
        date: new Date(2023, 1, 24, 14),
        location: "Aud. D1",
        host: "Simon Kristensen",
        description: "",
        abstract: "Riemanns \\(\\zeta\\)-funktion, er et af de mest fundamentale objekter i analytisk talteori. Funktionen, der i udgangspunktet kun er defineret for komplekse tal med reeldel \\(> 1\\), kan udvides til alle komplekse tal, kaldes Riemanns \\(\\zeta\\)-funktion efter Bernhard Riemanns artikel fra 1859. I 1896 benyttede Hadamard og de la Vallée Poussin hver for sig funktionen til at give et asymptotisk udtryk for antallet af primtal mindre end \\(T\\). Funktionen er ligeledes det fundamentale objekt i et af matematikkens mest berømte åbne problemer, Riemannhypotesen.\n\\(\\zeta\\)-funktionens historie går imidlertid længere tilbage end Riemann, ligesom der er andre åbne problemer knyttet til funktionen. Allerede så langt tilbage som 1734/35 fandt Euler et udtryk for \\(\\zeta\\)-funktionens værdier i alle lige hele tal. Specialtilfældet for værdien af 2 af denne formel var en løsning til det såkaldte Basel-problem, hvis historie går endnu længere tilbage. Euler viste, at summen af alle kvadraters reciprokker overraskende nok giver \\(\\pi^2 / 6\\).\nI mit foredrag vil jeg give et elementært bevis (der skyldes Papadimitriou) for denne formel, og beskrive hvordan dette kan udvides til alle lige \\(\\zeta\\)-værdier. Jeg vil også beskrive, hvad disse resultater betyder i talteorien. Til sidst vil jeg komme ind på et meget aktivt forskningsområde, der peger direkte tilbage til Euler: Studiet af de ulige \\(\\zeta\\)-værdier, hvor meget mindre er kendt.\nDer forudsættes intet kendskab til matematik, udover det der undervises i på studiets første år.",
        link: ""
    },
    {
        type: EvEventType.StudyNight,
        title: "Lektiecafé og Pizzaaften",
        date: new Date(2022, 11, 7, 17),
        location: "MatLab",
        host: "",
        description: "Mangler du også at lave de sidste analyseafleveringer så du kan blive indstillet til eksamen?\nEller er der noget statistik TØ som du virkelig gerne vil have styr på?\nDerfor vil Eulers Venner invitere jer til gratis studie- og pizzaaften i Matlab!\nHvis du er 1.- eller 2.-årsstuderende vil der være folk til aftenen, som man kan stille spørgsmål om ens kurser, mens hvis man er ældre kan man risikere man skal yde lidt hjælp i bytte for pizzaen.\nSelv hvis du har totalt styr på det hele, så duk op, få noget gratis pizza og hyg dig med andre matematikere!\nTilmelding er blot via denne begivenhed.\nDeadline for tilmelding er tirsdag d. 6. december, kl 20.",
        abstract: "",
        link: "https://fb.me/e/2aDKqAjvY"
    }
];
