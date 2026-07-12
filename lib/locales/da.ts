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
    },
    legalNote: 'Denne oversættelse stilles kun til rådighed for læsevenlighedens skyld; det er alene den engelske version, der er juridisk bindende.',
  },

  nav: { rel: 'Relationer', method: 'Metoden', memory: 'Hukommelse', faq: 'FAQ', about: 'Om os' },
  hero: {
    eyebrow: 'Dybdepsykologi. Ikke terapi.',
    l1: 'Du har haft det her skænderi',
    l2: 'før. Med en anden.',
    lead: 'Samme skænderi, nyt ansigt. Symponia er en AI-ledsager til indre arbejde. Du nævner seks dyr, du genkender dig selv i, og et syvende, der får det til at krible under huden. Det syvende er det, du undgår, og det er som regel det, der styrer dine relationer.',
    cta: 'Se metoden',
    proof: 'App Store-bedømmelse, antal mennesker og én ærlig sætning fra en psykoterapeut eller jungiansk analytiker.',
  },
  recog: {
    k: 'Genkendelse',
    h2: 'Hvilken af dem er din?',
    items: [
      'Vi har haft præcis det her skænderi fire gange. Andre ord, samme sår.',
      'Jeg valgte en, der var helt anderledes. Et halvt år efter er det det samme forhold.',
      'I det øjeblik den anden kommer tæt på, finder jeg en grund til at gå.',
      'Jeg snerrede ad ham i en stemme, jeg genkendte. Det var min mors.',
      'Jeg kan forklare min tilknytningsstil ned til mindste detalje. Jeg kan stadig ikke lade være.',
      'Når nogen spørger, hvad jeg har brug for, går jeg i sort.',
    ],
  },
  mech: {
    k: 'Hvorfor det bliver ved',
    h2: 'Din partner er ikke problemet. Din partner er lærredet.',
    lead: 'Den historie, du fortæller dig selv om din partner, er som regel en historie om dig. Psykologer kalder det projektion, og det er ikke en karakterbrist. Det er en gammel overlevelsesstrategi, der har overlevet sin nytte. Det, du ikke kan udstå hos den anden, er meget ofte det, du har forvist i dig selv.',
    stat: 'Gottman fandt, at 69 % af det, par skændes om, aldrig bliver løst. De par, der holder, er ikke dem, der løste det. Det er dem, der til sidst forstod, hvad det egentlig handlede om.',
    note: 'Symponia hører altid kun én side. Din. Og det er tilfældigvis den eneste, du kan lave om på. Det her er ikke parterapi. Det er det arbejde, du tager med ind i parforholdet.',
  },
  seven: {
    k: 'Det syvende dyr',
    h2: 'Seks dyr, der føles som dig. Ét, der får det til at krible under huden.',
    lead: 'Nævn seks, der hører til dig. Nævn så det ene, der frastøder dig. Det syvende er det vigtigste af dem alle, for det bærer det, de seks andre ikke kan bære.',
    lead2: 'Hvert dyr læses gennem sin gave, sin skygge og vejen derimellem. Symponia læser hele rækken som ét felt, også hvordan du elsker, beskytter, holder tilbage og åbner dig. Intet bliver tildelt dig. Det er en linse, ikke en mærkat, og du får aldrig at vide, hvad dit kraftdyr er.',
  },
  attune: {
    k: 'Før dyrene',
    h2: 'Nogle få spørgsmål uden rigtige svar.',
    lead: 'Hvad der bringer dig hertil. Det træk, der irriterer dig mest hos andre. Den historie, du fortæller om dig selv. Korte, ubehagelige, ærlige. Sådan lærer Symponia dig at kende, før den siger et eneste ord.',
  },
  langs: {
    k: 'Ethvert sprog',
    h2: 'Skriv på dit eget sprog. Symponia svarer på det samme.',
    lead: 'Dit indre liv foregår ikke på dit andetsprog. Skriv til Symponia på dansk, italiensk, russisk, portugisisk, fransk, tysk, spansk eller engelsk. Den forstår og svarer på det sprog, du skrev på.',
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
    h2: 'De fleste apps rækker dig et spørgsmål og lader dig så være alene med det.',
    lead: 'Læs anmeldelserne af en hvilken som helst app til skyggearbejde, og den samme sætning dukker op igen og igen: og så skete der ikke mere. Symponia tager imod det, du kommer med, i dets fulde vægt, og hvert svar lander på den ene ting, der tager dig et lag dybere. Nogle gange et spørgsmål. Nogle gange et billede, du ikke kan lægge fra dig.',
    chat: [
      { who: 's', t: 'det træk, der irriterer dig mest hos andre, er som regel det, du har forvist i dig selv. hvad er det, hos hende?' },
      { who: 'u', t: 'hun er så klæbende. jeg får lyst til at løbe min vej.' },
      { who: 's', t: 'og hvis det at have brug for nogen var tilladt i dig, hvad ville det så bede om?' },
      { who: 'u', t: 'om at nogen tog sig af mig, vel. det har jeg aldrig ladet nogen gøre.' },
      { who: 's', t: 'så det, du flygter fra hos hende, er det, du aldrig har givet dig selv lov til. i årevis har du stået ved bredden af dit eget vand og ventet på, at nogen inviterede dig ud i det.' },
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
    h2: 'Hvad Symponia ikke foregiver at være.',
    lead: 'Ikke terapi. Ikke parterapi. Symponia hører kun din side og kan ikke se det forhold, du står i. Ikke enhver følelse er et sår, og nogle gange er din partner bare ubetænksom. Er du i krise, så kontakt en kvalificeret fagperson eller alarmcentralen.',
  },
  price: {
    k: 'Pris',
    lead: '350 refleksionssamtaler om måneden. De daglige refleksioner er altid gratis. Begynd med en håndfuld gratis samtaler, og sig op når som helst i dine Apple ID-indstillinger. Intet er skjult, og intet er bygget for at gøre det svært at gå.',
  },

  founder: {
    k: 'Hvor det begyndte',
    h2: 'Skabt af en osteopat og af kvinden, der gav idéen en form, du kan holde i hånden.',
    lead: 'Symponia begyndte med Dr. Alessandro Biletta, en osteopat, der har brugt sit arbejdsliv dér, hvor kroppen og sindet stille mødes. Efter mange år med at lytte til mennesker som levevej blev han sikker på én ting. Under enhver historie leder mennesker efter en måde at genkende sig selv på. Sit svar fandt han i dybdepsykologien — hos Jung, hos Hillman, i arketypernes gamle sprog.',
    quote: 'Hvad nu hvis du kunne møde dig selv gennem det, der allerede føles som dig?',
    lead2: 'Yekta Dastranj var med i de samtaler. Hun forstod idéen i samme øjeblik, hun hørte den, og hun mærkede den længe før, hun begyndte at tænke på, hvordan den skulle bygges. Hun blev medstifter og gjorde visionen til noget, du kan åbne en tirsdag aften og vende tilbage til.',
    cta: 'Læs vores historie',
  },

  faq: {
    k: 'Spørgsmål',
    h2: 'FAQ',
    items: [
      { q: 'Kan indre arbejde virkelig ændre mine relationer?', a: 'Ofte, ja. Du kan ikke få din partner til at gøre arbejdet. Men det meste af det, du reagerer på hos den anden, er noget, du ikke har set efter i dig selv, og netop den del er din at flytte.' },
      { q: 'Hvad er projektion, sagt ligeud?', a: 'At reagere på personen over for dig ud fra en ældre historie. Lærredet er din partner. Filmen er din egen. Symponia hjælper dig med at skelne mellem de to.' },
      { q: 'Hvorfor vælger jeg altid den samme slags menneske?', a: 'Fordi velkendt og trygt ikke er det samme. Dit nervesystem søger mod det, det genkender. Det er navnet på mønstret, der løsner dets greb.' },
      { q: 'Er det her terapi eller parterapi?', a: 'Nej. Symponia er et redskab til refleksion. Den hører altid kun din side. Er du i krise eller har du brug for klinisk hjælp, så tal med en kvalificeret fagperson.' },
      { q: 'Er dyrene bare en personlighedstest?', a: 'Nej. Intet bliver tildelt dig. Du vælger selv syv, heriblandt ét der frastøder dig, og Symponia læser dem sammen som ét felt. Du får ikke at vide, hvem du er.' },
      { q: 'Husker den, hvad jeg fortæller?', a: 'Kun hvis du slår hukommelsen til. Den er slået fra fra start, og så gemmes der intet på vores servere. Du kan altid slette det, der er gemt, og intet af det, du skriver, træner nogens model.' },
      { q: 'Kan jeg skrive på mit eget sprog?', a: 'Ja. Skriv på et hvilket som helst sprog, og Symponia forstår og svarer på det samme.' },
    ],
  },

  about: {
    metaTitle: 'Om os — Menneskene bag Symponia',
    metaDesc: 'Symponia er skabt af Dr. Alessandro Biletta og Yekta Dastranj — en filosof for det indre liv, og hende, der gav visionen en form, du kan holde i hånden.',
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
