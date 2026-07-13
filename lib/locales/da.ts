import type { Dict } from './types';

// Dansk. Skrevet, ikke oversat: læseren tiltales «du», partneren har intet køn,
// og Symponia omtales som «den», når et pronomen ikke kan undgås.

export const da: Dict = {
  shell: {
    nav: { how: 'Sådan virker det', modes: 'Tilstande', about: 'Om os', credits: 'Priser', faq: 'FAQ' },
    badge: { top: 'Hent i', bottom: 'App Store' },
    footer: {
      privacy: 'Privatliv',
      terms: 'Vilkår',
      refunds: 'Refusion',
      eula: 'EULA',
      credits: 'Priser',
      contact: 'Kontakt',
      rights: 'Symponia af Boroto Ltd',
      built: 'Bygget af YD',
      explore: 'Udforsk',
      legal: 'Juridisk',
      blurb: 'En AI-ledsager til indre arbejde. Dybdepsykologi, på dit eget sprog.',
      designedBy: 'Design af',
    },
    legalNote: 'Denne oversættelse stilles kun til rådighed for læsevenlighedens skyld; det er alene den engelske version, der er juridisk bindende.',
  },

  nav: { rel: 'Skyggen', method: 'Metoden', memory: 'Hukommelse', faq: 'FAQ', about: 'Om os' },
  hero: {
    eyebrow: 'Skyggearbejde, med en metode.',
    l1: 'Det dyr, du ikke kan udstå,',
    l2: 'er det, der styrer dit liv.',
    lead: 'Nævn seks dyr, der føles som dig. Nævn så det ene, der får det til at krible ubehageligt. Det syvende er din skygge: den del af dig, du forviste så tidligt, at du ikke længere husker det. Siden har den truffet dine beslutninger. Symponia er en AI-ledsager til skyggearbejde, og den begynder med at sætte navn på den.',
    cta: 'Mød dit syvende dyr',
    proof: 'Dybdepsykologi, ikke terapi. Bygget på Jung, Hillman og arketypernes gamle sprog.',
  },
  recog: {
    k: 'Genkendelse',
    h2: 'Hvilken af disse er din?',
    items: [
      'Jeg ved præcis, hvorfor jeg gør det. Jeg gør det alligevel.',
      'Jeg kan forklare mine mønstre i detaljer. Jeg kan stadig ikke lade være med at gentage dem.',
      'Det, jeg dømmer hårdest hos andre, er det, jeg aldrig har tilladt mig selv.',
      'Jeg kommer tæt på det, jeg vil have, og saboterer det så i stilhed.',
      'Jeg hørte mig selv tale i et tonefald, jeg kendte. Det var min mors.',
      'Jeg har skrevet dagbog om det i to år. Intet har rykket sig.',
    ],
  },
  mech: {
    k: 'Hvorfor det bliver ved',
    h2: 'Det, du ikke kan udstå hos andre, er det, du begravede i dig selv.',
    lead: 'Jung kaldte det skyggen: alt det, du tidligt og uden at samtykke lærte var uacceptabelt ved dig. Det forsvinder ikke. Det går under jorden og regerer derfra, hvilke ambitioner du tillader dig, i hvilke rum du bliver mindre, hvem du ikke kan tilgive. Psykologien kalder mekanismen projektion. Det er ikke en karakterbrist, men en gammel overlevelsesstrategi, der har overlevet sin nytte.',
    stat: 'Skyggen er ikke dit traume, og den er ikke det værste ved dig. Den er den del, du afviste. Jungs pointe var, at den rummer lige så meget ulevet styrke som ulevet skam, og derfor koster det dig dobbelt at lade den ligge begravet.',
    note: 'Symponia hører altid kun én side. Din. Som tilfældigvis er den eneste, du kan ændre.',
  },
  seven: {
    k: 'Det syvende dyr',
    h2: 'Seks dyr, der føles som dig. Ét, der får det til at krible.',
    lead: 'Nævn seks, der tilhører dig. Nævn så det ene, der frastøder dig. Det syvende er det vigtigste af dem alle, for det bærer det, de seks andre ikke kan bære, og din væmmelse er sporet. Man viger ikke for det fremmede. Man viger for det fornægtede.',
    lead2: 'Hvert dyr læses for sin gave, sin skygge og vejen derimellem. Symponia læser hele feltet samlet. Intet bliver tildelt dig: dette er en projektiv metode, ikke en personlighedstype. En linse, aldrig et mærkat, og den vil aldrig fortælle dig dit kraftdyr.',
  },
  attune: {
    k: 'Før dyrene',
    h2: 'Nogle få spørgsmål uden rigtige svar.',
    lead: 'Hvad der bringer dig hertil. Det træk, der irriterer dig mest hos andre. Den historie, du fortæller om dig selv. Korte, ubehagelige, ærlige. Sådan lærer Symponia dig at kende, før den siger et eneste ord.',
  },
  langs: {
    k: 'Ni sprog',
    h2: 'Skriv på dit eget sprog. Den svarer på samme.',
    lead: 'Dit indre liv foregår ikke på dit andetsprog. Skriv til Symponia på dansk, svensk, engelsk, italiensk, russisk, portugisisk, fransk, tysk eller spansk, så forstår den dig og svarer på det sprog, du skrev på. Ingen påklistret maskinoversættelse: hver skærm, hver notifikation og selve stemmen er skrevet, som var de forfattet på det sprog.',
  },
  modes: {
    k: 'Tre veje ind',
    items: [
      { t: 'Mød dine arketyper', d: 'Dine syv dyr, læst som ét felt. Gaven, skyggen og vejen derimellem.' },
      { t: 'Tal dagen igennem', d: 'Ikke hvad der skete. Hvordan det føltes, og hvad det rørte op.' },
      { t: 'Bare tal', d: 'Ingen struktur, intet oplæg. Til de aftener, hvor du ikke ved, hvor du skal begynde.' },
    ],
  },
  answer: {
    k: 'Forskellen',
    h2: 'De fleste skyggearbejde-apps rækker dig et spørgsmål og lader dig være alene med det.',
    lead: 'Læs anmeldelserne af hvilken som helst af dem, og den samme sætning dukker op igen og igen: og så skete der ikke noget. Et færdigt spørgsmål kan ikke se dig. Det stiller alle det samme og aner ikke, hvad du svarede sidst. Symponia tager alvorligt, hvad du kommer med, og hvert svar rammer den ene ting, der fører dig et lag dybere.',
    chat: [
      { who: 's', t: 'det træk, der irriterer dig mest hos andre, er som regel det, du har forvist i dig selv. hvilket er det?' },
      { who: 'u', t: 'folk der har brug for andre. jeg får lyst til at løbe.' },
      { who: 's', t: 'og hvis det var tilladt dig at have brug for nogen, hvad ville det så bede om?' },
      { who: 'u', t: 'at blive taget hånd om, går jeg ud fra. jeg har aldrig ladet nogen gøre det.' },
      { who: 's', t: 'så er det, du flygter fra hos dem, præcis det, du aldrig har tilladt dig selv. du har stået ved bredden af dit eget vand i årevis og ventet på at blive budt indenfor.' },
    ],
  },
  mem: {
    k: 'Hukommelse',
    h2: 'Symponia husker. Kun hvis du beder om det.',
    lead: 'Du skal ikke præsentere dig selv forfra hver tirsdag. Men det, du allermest har brug for at sige, er ofte det, du allermindst vil have gemt. Begge dele er sande, så begge dele er dine at bestemme over.',
    items: [
      { t: 'Slået fra fra start', d: 'Hukommelsen er slået fra, indtil du selv slår den til. Når den er fra, gemmes der intet på vores servere overhovedet.' },
      { t: 'Slå den fra', d: 'Slå den fra, når du vil, også midt i en samtale.' },
      { t: 'Slet', d: 'Fjern det, der er gemt. Ét tryk. Ingen bebrejdende »er du nu helt sikker?«.' },
      { t: 'Aldrig brugt til træning', d: 'Intet af det, du skriver, træner nogens model. Kontinuitet, ikke overvågning.' },
    ],
    pill: 'Slået fra fra start. Er hukommelsen fra, gemmes der intet.',
  },
  limits: {
    k: 'Ærlige grænser',
    h2: 'Hvad Symponia ikke vil lade som om, den er.',
    lead: 'Ikke terapi, og ingen erstatning for det. Den hører kun din side og kan ikke se dit liv udefra. Ikke enhver følelse er et sår, og ikke alt, du ikke kan lide ved et andet menneske, er din skygge, nogle gange er folk bare hensynsløse. Er du i krise, så kontakt en kvalificeret fagperson eller alarmcentralen.',
  },
  close: {
    k: 'Begynd',
    h2: 'Din skygge har truffet dine beslutninger i årevis. Mød den.',
    lead: 'Du aner allerede, at mønsteret er dit. Det, du mangler, er en måde at se det arbejde på: det træk, du undgår, grunden til at du tager det samme sving hver gang, øjeblikket hvor det tager rattet. Det er præcis det, Symponia gør.',
    gets: [
      'Sæt navn på din skygge på cirka fire minutter, gennem de syv dyr',
      'Ubegrænset refleksion, intet at tælle og intet forbrug at rationere',
      'Din humøruge: hvordan du kom, hvordan du gik, og forskellen imellem',
      'Ni sprog, skrevet som var de forfattet på hvert enkelt',
    ],
    reassure: 'Syv dage gratis. Derefter ubegrænset refleksion. Opsig når som helst i dine Apple ID-indstillinger.',
  },

  compare: {
    k: 'Symponia over for prompt-dagbøgerne',
    h2: 'En prompt stiller spørgsmålet. Den kan ikke høre svaret.',
    lead: 'Alle shadow work-apps på markedet giver dig den samme liste med spørgsmål og et tomt felt. Det er en dagbog med bedre markedsføring. Arbejdet begynder ikke, når du får stillet et spørgsmål: det begynder, når noget svarer dig.',
    them: {
      t: 'Prompt-dagbøger',
      items: [
        'De samme spørgsmål til alle, der henter den',
        'Du skal allerede vide, hvad din skygge er',
        'Skriver intet tilbage, du er alene med siden',
        'Glemmer dig mellem sessionerne',
        'En personlighedstype, rakt til dig som et mærkat',
      ],
    },
    us: {
      t: 'Symponia',
      items: [
        'En projektiv metode, der får frem, hvad du ikke kan sige direkte',
        'Det syvende dyr sætter navn på din skygge, på minutter',
        'Svarer dig: hvert svar er skrevet til det, du faktisk skrev',
        'Husker på tværs af måneder, så et mønster bliver synligt',
        'En linse at se igennem, aldrig et mærkat sat på dig',
      ],
    },
  },

  founder: {
    k: 'Hvor det begyndte',
    h2: 'Skabt af en osteopat og af kvinden, der gav idéen en form, du kan holde i hånden.',
    lead: 'Symponia begyndte med Dr. Alessandro Biletta, en osteopat, der har brugt sit arbejdsliv dér, hvor kroppen og sindet stille mødes. Efter mange år med at lytte til mennesker som levevej blev han sikker på én ting. Under enhver historie leder mennesker efter en måde at genkende sig selv på. Sit svar fandt han i dybdepsykologien, hos Jung, hos Hillman, i arketypernes gamle sprog.',
    quote: 'Hvad nu hvis du kunne møde dig selv gennem det, der allerede føles som dig?',
    lead2: 'Yekta Dastranj var med i de samtaler. Hun forstod idéen i samme øjeblik, hun hørte den, og hun mærkede den længe før, hun begyndte at tænke på, hvordan den skulle bygges. Hun blev medstifter og gjorde visionen til noget, du kan åbne en tirsdag aften og vende tilbage til.',
    cta: 'Læs vores historie',
  },

  faq: {
    k: 'Spørgsmål',
    h2: 'Ofte stillede spørgsmål',
    items: [
      { q: 'Hvad er skyggearbejde, sagt enkelt?', a: 'Skyggearbejde er at se på de dele af dig selv, du lærte at skjule, som regel tidligt, og for at være i sikkerhed. Carl Jung kaldte det skyggen. Den forsvinder ikke, når du begraver den; den begynder at træffe dine beslutninger nedefra. Skyggearbejde er praksissen med at få den frem i lyset igen.' },
      { q: 'Hvordan finder jeg ud af, hvad min skygge er?', a: 'Genvejen er din egen væmmelse. Det træk, du finder uudholdeligt hos andre, er meget ofte det, du har forvist i dig selv. Symponia bruger det direkte: du vælger seks dyr, der føles som dig, og et syvende, der frastøder dig, og i det syvende gemmer din skygge sig.' },
      { q: 'Hvordan adskiller det sig fra en skyggedagbog eller en prompt-app?', a: 'Et færdigt spørgsmål spørger og efterlader dig med en blank side. Symponia svarer. Den læser det, du faktisk skrev, ikke hvad en gennemsnitsbruger ville have skrevet, og hvert svar sigter mod den ene ting, der fører dig et lag dybere.' },
      { q: 'Er dyrene bare en personlighedstest?', a: 'Nej. Intet bliver tildelt dig, og der er ingen type til sidst. Du vælger syv, heriblandt ét der frastøder dig, og Symponia læser dem samlet som et felt. Det er en projektiv metode, nærmere en blækklat end en quiz, og den vil aldrig fortælle dig dit kraftdyr.' },
      { q: 'Hvad er projektion?', a: 'At reagere på mennesket foran dig ud fra en ældre historie. Lærredet er dem. Filmen er din. Symponia hjælper dig med at se forskellen.' },
      { q: 'Er det terapi?', a: 'Nej. Symponia er et refleksionsværktøj, ikke terapi og ingen erstatning for det. Den hører kun din side. Er du i krise eller har brug for klinisk hjælp, så tal med en kvalificeret fagperson.' },
      { q: 'Husker den, hvad jeg fortæller den?', a: 'Kun hvis du slår hukommelsen til. Den er slået fra som standard, og så længe den er det, gemmes intet på vores servere. Du kan slette det, den rummer, og intet af det, du skriver, træner nogen model.' },
      { q: 'Kan jeg gøre det på mit eget sprog?', a: 'Ja. Skriv på dansk, engelsk, italiensk, russisk, portugisisk, fransk, tysk eller spansk, Symponia forstår dig og svarer på det sprog, du skrev på.' },
    ],
  },

  about: {
    metaTitle: 'Om os, Menneskene bag Symponia',
    metaDesc: 'Symponia er skabt af Dr. Alessandro Biletta og Yekta Dastranj, en filosof for det indre liv, og hende, der gav visionen en form, du kan holde i hånden.',
    k: 'Menneskene bag Symponia',
    h1a: 'Hør dig selv',
    h1b: 'igen.',
    lead: 'Verden har aldrig larmet mere. Et sted under støjen er den stemme, du engang stolede på, blevet tavs. Symponia er bygget for at hjælpe dig tilbage til den. Ikke for at reparere dig. Ikke for at give dig råd. Kun for at lytte og give tilbage, hvad den hører.',
    beganK: 'Hvor det begyndte',
    began: [
      'Symponia begyndte med Dr. Alessandro Biletta, en osteopat, der har brugt sit liv dér, hvor kroppen og sindet stille mødes. Efter mange år med at lytte til mennesker som levevej blev han sikker på én ting. Under enhver historie leder mennesker efter en måde at genkende sig selv på.',
      'Sit svar fandt han i dybdepsykologien. Hos Jung, hos Hillman, i arketypernes gamle sprog. Og han stillede det spørgsmål, der blev Symponias sjæl.',
      'Idéen voksede, som de bedste idéer gør. Langsomt, i samtale. Lange samtaler om det indre menneske, om nærhed, om hvad der skal til for at finde tilbage til et roligere sted i sig selv.',
      'Yekta Dastranj var en del af de samtaler. Hun forstod idéen i samme øjeblik, hun hørte den, og hun mærkede den længe før, hun begyndte at tænke på, hvordan den skulle bygges. Hun blev medstifter og gav visionen en form, du kan holde i hånden, åbne og vende tilbage til hver dag.',
    ],
    quote: 'Hvad nu hvis du kunne møde dig selv gennem det, der allerede føles som dig?',
    people: [
      {
        name: 'Dr. Alessandro Biletta',
        role: 'Stifter',
        bio: 'Symponias filosofiske hjerte. Osteopat og livslang studerende af det indre liv. Alessandro er nået frem til, at virkelig forståelse begynder længe før, nogen rækker ud efter en løsning. Arketypemetoden, der ligger i midten af Symponia, er hans.',
      },
      {
        name: 'Yekta Dastranj',
        role: 'Medstifter',
        bio: 'Hende, der gav det liv. Dér hvor Alessandro så filosofien, så Yekta oplevelsen. Hun formede, hvordan Symponia føles i hånden, overbevist om at noget så personligt skal blive ved med at være enkelt, privat og dybt menneskeligt.',
      },
    ],
    believeK: 'Det, vi tror på',
    beliefs: [
      'At det at forstå sig selv ikke bør vente på en krise.',
      'At den rigtige slags teknologi kan skabe stilhed i stedet for at fylde den ud.',
      'Og at det stærkeste, en ledsager kan gøre, er at række dig en tanke tilbage, du allerede havde, men aldrig turde sige højt.',
    ],
    closing: [
      'Symponia er ikke terapi og vil aldrig foregive at være det. Den er et rum at tænke i. Et spejl, der ikke ser væk.',
      'Vi har lavet den til alle, der en gang har anet, at der er mere i dem, end de har haft ro nok til at høre.',
    ],
    outroA: 'Velkommen.',
    outroB: 'Vi har ventet på dig.',
  },
};

export default da;
