import type { Dict } from './types';

// Swedish. Translated from the English source, not from another translation.

export const sv: Dict = {
  shell: {
    nav: { how: 'Så fungerar det', modes: 'Lägen', about: 'Om oss', credits: 'Priser', faq: 'Vanliga frågor' },
    badge: { top: 'Ladda ned i', bottom: 'App Store' },
    footer: {
      privacy: 'Integritet',
      terms: 'Villkor',
      refunds: 'Återbetalning',
      eula: 'Licensavtal',
      credits: 'Priser',
      contact: 'Kontakt',
      rights: 'Symponia av Boroto Ltd',
      built: 'Byggd av YD',
      explore: 'Utforska',
      legal: 'Juridik',
      blurb: 'En AI-följeslagare för inre arbete. Djuppsykologi, på ditt eget språk.',
      designedBy: 'Design av',
    },
    // Swedish legal pages are served in English for now, and the English text is
    // the binding version in every language. Say so rather than let a reader
    // discover it.
    legalNote:
      'Den här juridiska texten finns för närvarande på engelska. Den engelska versionen är den bindande i samtliga språk.',
  },

  nav: { rel: 'Skuggan', method: 'Metoden', memory: 'Minne', faq: 'Frågor', about: 'Om oss' },

  hero: {
    eyebrow: 'Skuggarbete, med en metod.',
    l1: 'Djuret du inte står ut med',
    l2: 'är det som styr ditt liv.',
    lead: 'Nämn sex djur som känns som du. Nämn sedan det som får det att krypa i dig. Det sjunde är din skugga: den del av dig som du förvisade så tidigt att du inte längre minns det. Sedan dess är det den som fattar dina beslut. Symponia är en AI-följeslagare för skuggarbete, och den börjar med att sätta namn på den.',
    cta: 'Möt ditt sjunde djur',
    proof: 'Djuppsykologi, inte terapi. Byggd på Jung, Hillman och arketypernas gamla språk.',
  },

  recog: {
    k: 'Igenkänning',
    h2: 'Vilken av dessa är din?',
    items: [
      'Jag vet precis varför jag gör det. Jag gör det ändå.',
      'Jag kan förklara mina mönster i detalj. Jag kan fortfarande inte sluta upprepa dem.',
      'Det jag dömer hårdast hos andra är det jag aldrig tillåtit mig själv.',
      'Jag kommer nära det jag vill ha, och saboterar det sedan i tysthet.',
      'Jag hörde mig själv tala i en ton jag kände igen. Det var min mors.',
      'Jag har skrivit dagbok om det i två år. Ingenting har rört sig.',
    ],
  },

  mech: {
    k: 'Varför det fortsätter hända',
    h2: 'Det du inte står ut med hos andra är det du begravde i dig själv.',
    lead: 'Jung kallade det skuggan: allt du tidigt, och utan att samtycka, lärde dig var oacceptabelt hos dig. Det försvinner inte. Det går under jorden och styr därifrån: vilka ambitioner du tillåter dig, i vilka rum du krymper, vem du inte kan förlåta. Psykologin kallar mekanismen projektion. Det är inte ett karaktärsfel, utan en gammal överlevnadsstrategi som överlevt sin nytta.',
    stat: 'Skuggan är inte ditt trauma, och den är inte det värsta hos dig. Den är den del du vägrade. Jungs tes var att den rymmer lika mycket olevd styrka som olevd skam, och därför kostar det dig dubbelt att låta den ligga begravd.',
    note: 'Symponia hör alltid bara en sida. Din. Vilket råkar vara den enda du kan förändra.',
  },

  seven: {
    k: 'Det sjunde djuret',
    h2: 'Sex djur som känns som du. Ett som får det att krypa i dig.',
    lead: 'Nämn sex som tillhör dig. Nämn sedan det som stöter bort dig. Det sjunde är det viktigaste av alla, för det bär det som de sex andra inte kan bära, och din vämjelse är ledtråden. Man ryggar inte för det främmande. Man ryggar för det förnekade.',
    lead2: 'Varje djur läses för sin gåva, sin skugga och vägen däremellan. Symponia läser hela fältet samlat. Ingenting tilldelas dig: detta är en projektiv metod, inte en personlighetstyp. En lins, aldrig en etikett, och den kommer aldrig att tala om vilket ditt kraftdjur är.',
  },

  attune: {
    k: 'Före djuren',
    h2: 'Några frågor utan rätta svar.',
    lead: 'Vad som för dig hit. Draget som irriterar dig mest hos andra. Berättelsen du berättar om dig själv. Korta, obekväma, ärliga. Så lär Symponia känna dig innan den säger ett ord.',
  },

  langs: {
    k: 'Nio språk',
    h2: 'Skriv på ditt eget språk. Den svarar på samma.',
    lead: 'Ditt inre liv sker inte på ditt andraspråk. Skriv till Symponia på svenska, engelska, italienska, ryska, portugisiska, franska, tyska, spanska eller danska, så förstår den dig och svarar på det språk du skrev på. Ingen påklistrad maskinöversättning: varje skärm, varje avisering och själva rösten är skrivna för att läsas som om de skapats på det språket.',
  },

  modes: {
    k: 'Tre vägar in',
    items: [
      { t: 'Möt dina arketyper', d: 'Dina sju djur, lästa som ett fält. Gåvan, skuggan och vägen däremellan.' },
      { t: 'Prata igenom din dag', d: 'Inte vad som hände. Själva strukturen i det, och vad det rörde upp.' },
      { t: 'Bara prata', d: 'Ingen struktur, ingen fråga. För kvällarna då du inte vet var du ska börja.' },
    ],
  },

  answer: {
    k: 'Skillnaden',
    h2: 'De flesta skuggarbete-appar räcker dig en fråga och lämnar dig ensam med den.',
    lead: 'Läs recensionerna av vilken som helst av dem, och samma mening dyker upp om och om igen: och sedan hände ingenting. En färdig fråga kan inte se dig. Den frågar alla samma sak och vet inte vad du svarade förra gången. Symponia tar på allvar det du kommer med, och varje svar siktar på det enda som tar dig ett lager djupare.',
    chat: [
      { who: 's', t: 'draget som irriterar dig mest hos andra är oftast det du förvisat i dig själv. vilket är det?' },
      { who: 'u', t: 'människor som behöver saker av andra. jag får lust att fly.' },
      { who: 's', t: 'och om det vore tillåtet för dig att behöva, vad skulle det be om?' },
      { who: 'u', t: 'att bli omhändertagen, antar jag. jag har aldrig låtit någon göra det.' },
      { who: 's', t: 'då är det du flyr hos dem precis det du aldrig tillåtit dig själv. du har stått vid stranden av ditt eget vatten i åratal och väntat på att bli inbjuden.' },
    ],
  },

  mem: {
    k: 'Minne',
    h2: 'Den minns. Bara om du säger till.',
    lead: 'Du ska inte behöva presentera dig på nytt varje tisdag. Men det du mest behöver säga är ofta det du minst vill ha lagrat. Båda är sanna, så båda är dina att bestämma över.',
    items: [
      { t: 'Avstängt som standard', d: 'Minnet är avstängt tills du slår på det. När det är av lagras ingenting på våra servrar.' },
      { t: 'Stäng av det', d: 'Slå av det när du vill, även mitt i ett samtal.' },
      { t: 'Radera', d: 'Ta bort det som finns sparat. Ett tryck. Inga är-du-säker-frågor.' },
      { t: 'Aldrig tränat på', d: 'Ingenting du skriver tränar någons modell. Kontinuitet, inte övervakning.' },
    ],
    pill: 'Avstängt som standard. Ingenting lagras när minnet är av.',
  },

  limits: {
    k: 'Ärliga gränser',
    h2: 'Vad Symponia inte låtsas vara.',
    lead: 'Inte terapi, och ingen ersättning för det. Den hör bara din sida och kan inte se ditt liv utifrån. Varje känsla är inte ett sår, och allt du ogillar hos någon annan är inte din skugga: ibland är folk helt enkelt hänsynslösa. Om du är i kris, kontakta en kvalificerad fackperson eller larmnumret.',
  },

  close: {
    k: 'Börja',
    h2: 'Din skugga har fattat dina beslut i åratal. Möt den.',
    lead: 'Du anar redan att mönstret är ditt. Det du saknar är ett sätt att se det arbeta: draget du undviker, skälet till att du tar samma sväng varje gång, ögonblicket då det tar ratten. Det är precis vad Symponia gör.',
    gets: [
      'Sätt namn på din skugga på ungefär fyra minuter, genom de sju djuren',
      'Obegränsad reflektion, ingenting att räkna och inget saldo att ransonera',
      'Din humörvecka: hur du kom, hur du gick, och skillnaden däremellan',
      'Nio språk, skrivna som om de skapats på vart och ett',
    ],
    reassure: 'Sju dagar gratis. Sedan obegränsad reflektion. Säg upp när du vill i dina Apple ID-inställningar.',
  },

  compare: {
    k: 'Symponia mot promptdagböckerna',
    h2: 'En prompt ställer frågan. Den kan inte höra svaret.',
    lead: 'Varje skuggarbete-app på marknaden ger dig samma lista med frågor och en tom ruta. Det är en dagbok med bättre marknadsföring. Arbetet börjar inte när du får en fråga, det börjar när något svarar dig.',
    them: {
      t: 'Promptdagböcker',
      items: [
        'Samma frågor till alla som laddar ned den',
        'Du måste redan veta vad din skugga är',
        'Skriver ingenting tillbaka, du är ensam med sidan',
        'Glömmer dig mellan gångerna',
        'En personlighetstyp, räckt till dig som en etikett',
      ],
    },
    us: {
      t: 'Symponia',
      items: [
        'En projektiv metod som får fram det du inte kan säga rakt ut',
        'Det sjunde djuret sätter namn på din skugga, på minuter',
        'Svarar dig, varje svar skrivet till det du faktiskt skrev',
        'Minns över månader, så att ett mönster blir synligt',
        'En lins att se genom, aldrig en etikett satt på dig',
      ],
    },
  },

  founder: {
    k: 'Där det började',
    h2: 'Byggd av en osteopat, och kvinnan som gav den en form du kan hålla i.',
    lead: 'Symponia började med dr Alessandro Biletta, en osteopat som ägnat sin karriär åt platsen där kroppen och sinnet stilla möts. Efter år av att lyssna på människor för sitt levebröd blev han säker på en sak. Under varje berättelse letar människor efter ett sätt att känna igen sig själva. Han fann sitt svar i djuppsykologin, i Jung, i Hillman, i arketypernas gamla språk.',
    quote: 'Tänk om du kunde möta dig själv genom det som redan känns som du?',
    lead2: 'Yekta Dastranj var med i de samtalen. Hon förstod idén i samma stund hon hörde den, och kände den långt innan hon tänkte på hur den skulle byggas. Hon blev medgrundare och förvandlade visionen till något du kan öppna en tisdagskväll och återvända till.',
    cta: 'Läs vår historia',
  },

  faq: {
    k: 'Frågor',
    h2: 'Vanliga frågor',
    items: [
      { q: 'Vad är skuggarbete, enkelt uttryckt?', a: 'Skuggarbete är att se på de delar av dig själv som du lärde dig att dölja, oftast tidigt och för att vara trygg. Carl Jung kallade det skuggan. Den försvinner inte när du begraver den; den börjar fatta dina beslut underifrån. Skuggarbete är praktiken att få tillbaka den i sikte.' },
      { q: 'Hur tar jag reda på vad min skugga är?', a: 'Genvägen är din egen vämjelse. Draget du finner outhärdligt hos andra är mycket ofta det du förvisat i dig själv. Symponia använder det direkt: du väljer sex djur som känns som du och ett sjunde som stöter bort dig, och i det sjunde gömmer sig din skugga.' },
      { q: 'Hur skiljer det sig från en skuggdagbok eller en prompt-app?', a: 'En färdig fråga frågar och lämnar dig med ett tomt blad. Symponia svarar. Den läser det du faktiskt skrev, inte vad en genomsnittsanvändare skulle ha skrivit, och varje svar siktar på det enda som tar dig ett lager djupare.' },
      { q: 'Är djuren bara ett personlighetstest?', a: 'Nej. Ingenting tilldelas dig och det finns ingen typ på slutet. Du väljer sju, varav ett som stöter bort dig, och Symponia läser dem samlat som ett fält. Det är en projektiv metod, närmare en bläckplump än ett quiz, och den kommer aldrig att tala om ditt kraftdjur.' },
      { q: 'Vad är projektion?', a: 'Att reagera på människan framför dig utifrån en äldre berättelse. Duken är de. Filmen är din. Symponia hjälper dig att se vilket som är vilket.' },
      { q: 'Är det här terapi?', a: 'Nej. Symponia är ett reflektionsverktyg, inte terapi och ingen ersättning för det. Den hör bara din sida. Om du är i kris eller behöver klinisk hjälp, tala med en kvalificerad fackperson.' },
      { q: 'Minns den vad jag berättar?', a: 'Bara om du slår på minnet. Det är avstängt som standard, och så länge det är det lagras ingenting på våra servrar. Du kan radera det den håller, och ingenting du skriver tränar någon modell.' },
      { q: 'Kan jag göra skuggarbete på mitt eget språk?', a: 'Ja. Skriv på svenska, engelska, italienska, ryska, portugisiska, franska, tyska, spanska eller danska, så förstår Symponia dig och svarar på det språk du skrev på.' },
    ],
  },

  about: {
    metaTitle: 'Om oss — Människorna bakom Symponia',
    metaDesc: 'Symponia byggdes av dr Alessandro Biletta och Yekta Dastranj: en filosof över det inre livet, och den som gav visionen en form du kan hålla i.',
    k: 'Människorna bakom Symponia',
    h1a: 'Hör dig själv',
    h1b: 'igen.',
    lead: 'Världen har aldrig varit högljuddare. Någonstans under bruset har rösten du brukade lita på tystnat. Symponia byggdes för att hjälpa dig hitta tillbaka till den. Inte för att laga dig. Inte för att råda dig. Bara för att lyssna, och spegla tillbaka det den hör.',
    beganK: 'Där det började',
    began: [
      'Symponia började med dr Alessandro Biletta, en osteopat som ägnat sitt liv åt platsen där kroppen och sinnet stilla möts. Efter år av att lyssna på människor för sitt levebröd blev han säker på en sak. Under varje berättelse letar människor efter ett sätt att känna igen sig själva.',
      'Han fann sitt svar i djuppsykologin. I Jung, i Hillman, i arketypernas gamla språk. Och han ställde frågan som skulle bli Symponias själ.',
      'Det växte som de bästa idéerna gör. Långsamt, i samtal. Långa samtal om det inre jaget, om samhörighet, om vad som krävs för att återvända till en lugnare plats inom sig.',
      'Yekta Dastranj var med i de samtalen. Hon förstod idén i samma stund hon hörde den, och kände den långt innan hon tänkte på hur den skulle byggas. Hon blev medgrundare och gav visionen en form du kan hålla i, öppna och återvända till varje dag.',
    ],
    quote: 'Tänk om du kunde möta dig själv genom det som redan känns som du?',
    people: [
      {
        name: 'Dr Alessandro Biletta',
        role: 'Grundare',
        bio: 'Symponias filosofiska hjärta. Osteopat och livslång student av det inre livet. Alessandro kom att tro att verklig förståelse börjar långt innan någon sträcker sig efter en lösning. Arketypmetoden i Symponias mitt är hans.',
      },
      {
        name: 'Yekta Dastranj',
        role: 'Medgrundare',
        bio: 'Den som väckte det till liv. Där Alessandro såg filosofin såg Yekta upplevelsen. Hon formade hur Symponia känns i handen, övertygad om att något så personligt måste förbli enkelt, privat och djupt mänskligt.',
      },
    ],
    believeK: 'Vad vi tror på',
    beliefs: [
      'Att förstå sig själv inte ska behöva vänta på en kris.',
      'Att rätt sorts teknik kan skapa tystnad snarare än fylla den.',
      'Och att det mäktigaste en följeslagare kan göra är att räcka tillbaka en tanke du redan hade, men aldrig vågat säga högt.',
    ],
    closing: [
      'Symponia är inte terapi, och kommer aldrig att låtsas vara det. Det är ett tankeutrymme. En spegel som inte ryggar.',
      'Vi gjorde den för alla som någon gång anat att det finns mer i dem än de haft tystnaden att höra.',
    ],
    outroA: 'Välkommen.',
    outroB: 'Vi har väntat på dig.',
  },
};

export default sv;
