import type { LegalDict } from './types';

// Dansk. Oversættelse af ./en.ts: den engelske tekst er og bliver den juridisk
// bindende version; det står på hver enkelt side via shell.legalNote. Gældende
// ret er retten i England og Wales, og derfor står alle britiske henvisninger
// (Consumer Rights Act 2015, ICO, 999, Samaritans) uændret. Læseren tiltales
// «du», som det er kutyme i danske forbrugervilkår.

export const da: LegalDict = {
  terms: {
    metaTitle: 'Vilkår for brug',
    metaDesc: 'Vilkårene for din brug af Symponia-appen og dette website, som drives af Boroto Ltd.',
    kicker: 'Juridisk',
    title: 'Vilkår for brug',
    updated: 'Sidst opdateret: juli 2026',
    intro:
      'Disse vilkår for brug (»vilkårene«) regulerer din adgang til og brug af mobilappen Symponia og dette website (tilsammen »tjenesten«). Tjenesten drives af Boroto Ltd, et selskab registreret i England og Wales (»Boroto«, »vi«, »os« eller »vores«). Læs venligst vilkårene grundigt. Ved at downloade, tilgå eller bruge tjenesten accepterer du at være bundet af dem. Er du ikke enig, skal du ikke bruge tjenesten.',
    sections: [
      {
        h: '1. Hvem vi er, og hvordan du kontakter os',
        blocks: [
          { t: 'p', x: 'Tjenesten leveres af Boroto Ltd, registreret i England og Wales. Du kan altid kontakte os på [hello@symponia.io](mailto:hello@symponia.io). Vores selskabsregistreringsnummer og adressen på vores registrerede hjemsted fremgår af vores offentliggjorte selskabsoplysninger og oplyses på forespørgsel.' },
        ],
      },
      {
        h: '2. Adgangskrav og alder',
        blocks: [
          { t: 'p', x: 'Du skal være mindst **18 år** for at oprette en konto og bruge Symponia. Ved at bruge tjenesten bekræfter du, at du er fyldt 18 år, og at du har retlig handleevne til at indgå disse vilkår. Symponia er beregnet til voksne og er hverken udformet til eller rettet mod børn.' },
        ],
      },
      {
        h: '3. Din konto',
        blocks: [
          { t: 'p', x: 'For at bruge visse funktioner skal du oprette en konto og logge ind. Du forpligter dig til at give korrekte oplysninger, holde dine loginoplysninger sikre og være ansvarlig for al aktivitet, der finder sted på din konto. Skriv straks til os på [hello@symponia.io](mailto:hello@symponia.io), hvis du har mistanke om, at nogen har fået adgang til din konto uden din tilladelse. Du kan altid slette din konto inde i appen (fanen »Profil«, afsnittet »Konto«, »slet konto«).' },
        ],
      },
      {
        h: '4. Hvad Symponia er',
        blocks: [
          { t: 'p', x: 'Symponia er et AI-understøttet redskab til personlig refleksion og selvudforskning. Funktionerne omfatter:' },
          {
            t: 'ul',
            x: [
              'tre tilstande: Arketype, Min dag og Samtale;',
              'en øvelse med dyrearketyper og en sammenfatning af dine resultater;',
              'personlige daglige refleksioner;',
              'samtalebaseret adgang til dialog med appen.',
            ],
          },
          { t: 'p', x: 'Vi kan fra tid til anden tilføje, ændre eller fjerne funktioner for at forbedre tjenesten.' },
        ],
      },
      {
        h: '5. Symponia er ikke en sundhedsfaglig tjeneste eller en krisetjeneste',
        blocks: [
          { t: 'p', x: 'Symponia er **ikke en medicinsk, terapeutisk, psykiatrisk, psykologisk eller rådgivende tjeneste**, og den er ikke en erstatning for professionel behandling. Intet i appen og intet, som Symponia frembringer, er professionel rådgivning, diagnose eller behandling, og det bør ikke lægges til grund som sådan.' },
          { t: 'p', x: 'Symponia kan ikke hjælpe i en nødsituation og tilbyder ikke krisestøtte. **Er du i krise, eller frygter du, at du kan komme til at skade dig selv eller andre, skal du straks kontakte de lokale alarmtjenester eller en kvalificeret fagperson.** I Storbritannien kan du ringe til 999 eller kontakte Samaritans gratis på 116 123.' },
        ],
      },
      {
        h: '6. AI-genereret indhold',
        blocks: [
          { t: 'p', x: 'Symponias svar genereres af kunstig intelligens. AI kan tage fejl, være ufuldstændig eller vildledende, og svarene passer måske ikke til din situation. Du er selv ansvarlig for, hvordan du forstår og handler på det, Symponia frembringer, og du bør bruge din egen dømmekraft og søge kvalificeret professionel rådgivning, hvor det er relevant. Vi indestår ikke for, at noget output er korrekt, pålideligt eller egnet til et bestemt formål.' },
        ],
      },
      {
        h: '7. Abonnement, priser og automatisk fornyelse',
        id: 'tokens',
        blocks: [
          { t: 'p', x: '**Gratis startmængde.** Nye brugere får en begrænset gratis mængde, så de kan prøve Symponia, før de tegner abonnement.' },
          { t: 'p', x: '**Symponia Månedlig.** Et abonnement giver 350 refleksionssamtaler pr. kalendermåned. Prisen er den, der vises i App Store på købstidspunktet; Apple fastsætter priserne for hvert land og kan ændre dem. Ved hver fornyelse tildeles en ny mængde på 350 samtaler; ubrugte samtaler overføres ikke. De daglige refleksioner er gratis, tæller ikke med i dine samtaler og er begrænset til 10 inden for 24 timer.' },
          { t: 'p', x: '**Betaling og fornyelse.** Abonnementer sælges og behandles af Apple gennem køb i appen og opkræves via dit Apple ID. Dit abonnement fornys automatisk til den til enhver tid gældende pris ved udgangen af hver betalingsperiode, medmindre du opsiger senest 24 timer før periodens udløb. Du kan altid administrere eller opsige dit abonnement i dine Apple ID-indstillinger (Indstillinger, dit navn, Abonnementer). At slette appen opsiger ikke dit abonnement.' },
          { t: 'p', x: '**Betaling.** Betalingen opkræves af Apple. Vi ser eller gemmer aldrig dine betalingskortoplysninger. Priserne vises i appen og kan ændre sig; vi varsler prisændringer i det omfang, det er påkrævet, og en ændring berører ikke en betalingsperiode, der allerede er betalt.' },
        ],
      },
      {
        h: '8. Opsigelse og refusion',
        blocks: [
          { t: 'p', x: 'Du kan altid opsige dit abonnement som beskrevet ovenfor, og du beholder adgangen indtil udgangen af den periode, du har betalt for. Køb sker gennem Apple, og refusioner håndteres af Apple efter Apples egne politikker. Alle detaljer, herunder dine lovbestemte rettigheder som forbruger, finder du i vores [refusionspolitik](/refunds). Intet i disse vilkår berører dine lovbestemte rettigheder efter Consumer Rights Act 2015 eller anden gældende forbrugerlovgivning.' },
        ],
      },
      {
        h: '9. Acceptabel brug',
        blocks: [
          { t: 'p', x: 'Du forpligter dig til ikke at:' },
          {
            t: 'ul',
            x: [
              'bruge tjenesten til ulovlige, skadelige eller svigagtige formål;',
              'foretage reverse engineering, dekompilere, skrabe (scrape) eller forsøge at udtrække kildekoden, prompterne eller modellerne bag tjenesten, medmindre denne begrænsning er ulovlig efter loven;',
              'bruge tjenesten til at chikanere, krænke, true eller skade dig selv eller andre;',
              'give urigtige oplysninger om din identitet eller alder eller bruge en anden persons konto uden tilladelse;',
              'bruge bots, scripts eller andre automatiserede metoder til at tilgå tjenesten eller generere samtaler;',
              'forstyrre, afbryde eller forsøge at skaffe dig uautoriseret adgang til tjenesten eller dens systemer.',
            ],
          },
          { t: 'p', x: 'Vi kan suspendere eller lukke din adgang, hvis du overtræder disse vilkår eller bruger tjenesten på en måde, der indebærer risiko for skade på dig, på andre eller på os.' },
        ],
      },
      {
        h: '10. Immaterielle rettigheder',
        blocks: [
          { t: 'p', x: 'Tjenesten, herunder Symponias software, dyrearketypemetoden, prompter, tekst, design og branding, tilhører Boroto Ltd eller vores licensgivere og er beskyttet af immaterialretten. Vi giver dig en begrænset, personlig, ikke-eksklusiv, ikke-overdragelig og genkaldelig licens til at bruge tjenesten til dit eget personlige, ikke-kommercielle brug i overensstemmelse med disse vilkår. Du må ikke kopiere, distribuere eller skabe afledte værker af tjenesten uden vores skriftlige tilladelse.' },
          { t: 'p', x: 'De refleksioner og samtaler, du skaber, er dine. Vi gør ikke krav på ejerskab til dit personlige indhold. Du giver os en begrænset licens til at behandle dette indhold, alene i det omfang det er nødvendigt for at drive og levere tjenesten til dig, som beskrevet i vores [privatlivspolitik](/privacy).' },
        ],
      },
      {
        h: '11. Tredjepartstjenester',
        blocks: [
          { t: 'p', x: 'Tjenesten bygger på tredjeparter, herunder Apple (distribution, login og betalinger), Anthropic (den Claude-AI, der genererer svarene) og Supabase (sikker hosting). Din brug af appen er også omfattet af Apples [Licensed Application End User License Agreement](/eula). Vi er ikke ansvarlige for tredjepartstjenester, og deres egne vilkår og privatlivspolitikker gælder for deres del af oplevelsen.' },
        ],
      },
      {
        h: '12. Tilgængelighed og ændringer af tjenesten',
        blocks: [
          { t: 'p', x: 'Vi bestræber os på at holde Symponia tilgængelig, men vi garanterer ikke, at tjenesten er uafbrudt, sikker eller fejlfri. Tjenesten kan være utilgængelig under vedligeholdelse eller af årsager uden for vores kontrol, og vi kan ændre, suspendere eller indstille hele tjenesten eller dele af den. Indstiller vi en betalt funktion, handler vi rimeligt og i overensstemmelse med dine forbrugerrettigheder.' },
        ],
      },
      {
        h: '13. Suspension og ophør',
        blocks: [
          { t: 'p', x: 'Du kan altid holde op med at bruge tjenesten og slette din konto. Vi kan suspendere eller lukke din adgang, hvis du overtræder disse vilkår, hvis loven kræver det, eller hvis det ikke med rimelighed er muligt fortsat at levere tjenesten til dig. Bestemmelser, som efter deres natur skal gælde efter ophør (herunder immaterielle rettigheder, ansvarsfraskrivelser, ansvarsbegrænsning og lovvalg), gælder fortsat.' },
        ],
      },
      {
        h: '14. Ansvarsfraskrivelser',
        blocks: [
          { t: 'p', x: 'Bortset fra de forpligtelser, vi udtrykkeligt påtager os i disse vilkår, og de rettigheder, du har efter forbrugerlovgivningen, og som ikke kan fraviges, leveres tjenesten »som den er og forefindes«, og vi giver ingen garantier af nogen art, hverken udtrykkelige eller stiltiende, for tjenesten, dens indhold eller noget AI-genereret output.' },
        ],
      },
      {
        h: '15. Vores ansvar over for dig',
        blocks: [
          { t: 'p', x: 'Intet i disse vilkår begrænser eller fraskriver vores ansvar, hvor det ville være ulovligt at gøre det. Det omfatter ansvar for dødsfald eller personskade forårsaget af vores uagtsomhed, for svig eller svigagtige urigtige oplysninger og for ethvert andet ansvar, der ikke kan begrænses eller fraskrives efter gældende ret, herunder dine lovbestemte rettigheder som forbruger.' },
          { t: 'p', x: 'Med forbehold for foregående afsnit og i videst muligt omfang efter loven gælder: vi er ikke ansvarlige for tab eller skade, der ikke var påregnelig, for tab, der opstår som følge af, at du forlader dig på AI-genereret indhold, eller for indirekte tab eller følgeskader; og vores samlede ansvar over for dig for alle krav, der udspringer af eller har forbindelse med tjenesten, kan i en given 12-måneders periode ikke overstige det største af (a) det samlede beløb, du har betalt til os eller til Apple for tjenesten i den periode, eller (b) £100. Vi leverer kun tjenesten til personlig brug og er ikke ansvarlige for erhvervsmæssige tab.' },
        ],
      },
      {
        h: '16. Skadesløsholdelse',
        blocks: [
          { t: 'p', x: 'Du accepterer at bære og at godtgøre os rimelige tab og omkostninger, som vi påføres som følge af dit misbrug af tjenesten eller din overtrædelse af disse vilkår, i det omfang de er forårsaget af dig. Dette begrænser ikke dine forbrugerrettigheder.' },
        ],
      },
      {
        h: '17. Ændringer af disse vilkår',
        blocks: [
          { t: 'p', x: 'Vi kan fra tid til anden opdatere disse vilkår, for eksempel for at afspejle ændringer i tjenesten eller i lovgivningen. Vi ændrer datoen »Sidst opdateret« ovenfor og tager, hvor ændringerne er væsentlige, rimelige skridt til at gøre dig opmærksom på dem. Fortsætter du med at bruge tjenesten, efter at ændringerne er trådt i kraft, accepterer du de opdaterede vilkår. Er du ikke enig, bør du holde op med at bruge tjenesten og kan opsige abonnementet og slette din konto.' },
        ],
      },
      {
        h: '18. Lovvalg og værneting',
        blocks: [
          { t: 'p', x: 'Disse vilkår og enhver tvist, der udspringer af eller har forbindelse med dem, er underlagt lovgivningen i England og Wales. Tvister afgøres under enekompetence af domstolene i England og Wales, dog således at du, hvis du bor i en anden del af Storbritannien, kan anlægge sag i dit eget hjemland, og forbrugere bevarer beskyttelsen efter de ufravigelige regler i deres bopælsland.' },
        ],
      },
      {
        h: '19. Generelt',
        blocks: [
          { t: 'p', x: 'Hvis en del af disse vilkår viser sig ikke at kunne håndhæves, forbliver resten i kraft. At vi undlader at håndhæve en bestemmelse, er ikke et afkald på den. Du kan ikke overdrage dine rettigheder efter disse vilkår uden vores samtykke; vi kan overdrage vores, når dine rettigheder ikke påvirkes negativt. Disse vilkår udgør sammen med vores [privatlivspolitik](/privacy), [refusionspolitik](/refunds) og [EULA’en](/eula) den samlede aftale mellem dig og os om tjenesten.' },
        ],
      },
      {
        h: '20. Kontakt',
        blocks: [
          { t: 'p', x: 'Spørgsmål til disse vilkår? Skriv til os på [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: 'Privatlivspolitik',
    metaDesc: 'Sådan indsamler, bruger og beskytter Boroto Ltd dine personoplysninger, når du bruger Symponia.',
    kicker: 'Juridisk',
    title: 'Privatlivspolitik',
    updated: 'Sidst opdateret: juli 2026',
    intro:
      'Denne privatlivspolitik forklarer, hvordan Boroto Ltd (»Boroto«, »vi«, »os« eller »vores«) indsamler, bruger, videregiver og beskytter dine personoplysninger, når du bruger Symponia-appen og websitet. Symponia er et rum for privat refleksion, så vi indsamler så lidt som overhovedet muligt, og vi sælger aldrig dine data.',
    sections: [
      {
        h: '1. Hvem vi er (dataansvarlig)',
        blocks: [
          { t: 'p', x: 'Boroto Ltd er dataansvarlig for dine personoplysninger. Vi er registreret i England og Wales. Du kan altid kontakte os om alt i denne politik på [hello@symponia.io](mailto:hello@symponia.io). Vores selskabsregistreringsnummer og adressen på vores registrerede hjemsted fremgår af vores offentliggjorte selskabsoplysninger og oplyses på forespørgsel.' },
        ],
      },
      {
        h: '2. De personoplysninger, vi indsamler',
        blocks: [
          { t: 'p', x: '**Oplysninger, du giver os under onboarding og brug:**' },
          {
            t: 'ul',
            x: [
              'dit fornavn og, hvis du vælger at oplyse det, dit køn;',
              'dine syv dyrearketyper og dine svar på de indstillende spørgsmål;',
              'din foretrukne resonansfrekvens;',
              'de beskeder og refleksioner, du skriver i hver tilstand;',
              'dine notifikationsindstillinger, og om du siger ja til lejlighedsvise nyhedsmails.',
            ],
          },
          { t: 'p', x: '**Konto- og tekniske oplysninger:**' },
          {
            t: 'ul',
            x: [
              'kontooplysninger, der er nødvendige for at logge dig ind og holde dine data sikre;',
              'din saldo af samtaler (tokens) og din abonnementsstatus;',
              'begrænsede tekniske og diagnostiske oplysninger (såsom appversion og grundlæggende enhedsoplysninger), der bruges til at holde tjenesten kørende og sikker.',
            ],
          },
          { t: 'p', x: '**Købsoplysninger:** Når du tegner abonnement, behandler Apple din betaling. Vi modtager en bekræftelse af din abonnementsstatus fra Apple, men vi modtager eller gemmer aldrig dine betalingskortoplysninger.' },
          { t: 'p', x: 'Nogle oplysninger gemmes også lokalt på din enhed (for eksempel dine arketyper, dine indstillinger og din samtalehistorik i hver tilstand). Lokale data fjernes, når du sletter appen.' },
          { t: 'p', x: 'Del venligst ikke oplysninger, du ikke ønsker registreret, og vær særligt varsom med følsomme oplysninger (såsom oplysninger om dit helbred, din tro eller din seksualitet). Når sådanne oplysninger optræder i det, du skriver, behandler vi dem alene for at levere tjenesten til dig, på grundlag af dit udtrykkelige samtykke, som du kan trække tilbage ved at slette det pågældende indhold eller din konto.' },
        ],
      },
      {
        h: '3. Hvordan og hvorfor vi bruger dine data, og vores behandlingsgrundlag',
        blocks: [
          { t: 'p', x: 'Efter britisk og EU-retlig databeskyttelseslovgivning skal vi have et lovligt grundlag for at bruge dine personoplysninger. Vi støtter os på følgende:' },
          {
            t: 'ul',
            x: [
              '**Opfyldelse af vores aftale med dig**: at oprette og drive din konto, generere personlige Symponia-svar, levere din daglige refleksion, opretholde en session under en samtale og bekræfte dit abonnement hos Apple.',
              '**Dit samtykke**: at sende push-notifikationer eller lejlighedsvise markedsføringsmails (kun hvis du siger ja) og at behandle eventuelle følsomme oplysninger i det, du skriver. Du kan til enhver tid tilbagekalde dit samtykke.',
              '**Vores legitime interesser**: at holde tjenesten sikker og kørende, forhindre misbrug og svig og forbedre driftssikkerheden, på en måde der ikke går forud for dine rettigheder.',
              '**Retlig forpligtelse**: at overholde den lovgivning, der gælder for os, for eksempel om skat og om besvarelse af lovlige anmodninger.',
            ],
          },
          { t: 'p', x: 'Vi bruger ikke dine data til reklame eller annoncemålretning, og vi sælger ikke dine personoplysninger.' },
        ],
      },
      {
        h: '4. Hvordan Symponia bruger AI',
        blocks: [
          { t: 'p', x: 'For at generere reflekterende svar sendes den tekst, du skriver, sammen med dit fornavn, dit køn (hvis oplyst), dine arketyper og din resonansfrekvens til Anthropics Claude-API. Denne behandling sker på Zero Data Retention (ZDR)-vilkår: Anthropic opbevarer ikke indholdet af dine samtaler, efter at et svar er genereret, og bruger det ikke til at træne eller forbedre sine modeller.' },
          { t: 'p', x: 'Symponia genererer indhold automatisk, men træffer ikke afgørelser alene baseret på automatisk behandling med retsvirkning eller tilsvarende betydelig virkning for dig. Symponia er et redskab til refleksion, ikke en beslutningstager.' },
        ],
      },
      {
        h: '5. Hvem vi deler data med',
        blocks: [
          { t: 'p', x: 'Vi deler kun data med de leverandører, der hjælper os med at drive Symponia, og som hver især handler efter aftaler, der forpligter dem til at beskytte dine data:' },
          {
            t: 'ul',
            x: [
              '**Anthropic**: leverer den Claude-AI, der genererer svarene, på Zero Data Retention-vilkår. Se [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy).',
              '**Supabase**: sikker database, autentificering og backend-hosting til din konto og dine samtaler.',
              '**Apple**: distribution via App Store, login, levering af push-notifikationer og behandling af køb i appen. Betalingsoplysninger håndteres udelukkende af Apple.',
            ],
          },
          { t: 'p', x: 'Vi kan også videregive data, hvis loven kræver det, for at beskytte vores brugeres eller andres sikkerhed, rettigheder eller ejendom, eller i forbindelse med en virksomhedsoverdragelse, hvor vi vil orientere dig og fortsat beskytte dine data.' },
        ],
      },
      {
        h: '6. Internationale overførsler',
        blocks: [
          { t: 'p', x: 'Nogle af vores leverandører (herunder Anthropic og Apple) behandler data uden for Storbritannien og EØS, blandt andet i USA. Når data overføres internationalt, støtter vi os på passende garantier, der er anerkendt efter britisk og EU-retlig lovgivning, såsom den britiske International Data Transfer Agreement eller det tilhørende addendum og Europa-Kommissionens standardkontraktbestemmelser, suppleret med yderligere beskyttelsesforanstaltninger, hvor det er nødvendigt. Du kan bede os om flere oplysninger om disse garantier.' },
        ],
      },
      {
        h: '7. Hvor længe vi opbevarer dine data',
        blocks: [
          { t: 'p', x: 'Vi opbevarer din konto og din samtalehistorik, så længe din konto er aktiv. Når du sletter din konto (fanen »Profil«, afsnittet »Konto«, »slet konto«) eller beder os om at slette dine data, sletter vi dem fra vores aktive systemer, og de fjernes fra de rutinemæssige sikkerhedskopier inden for kort tid. Indhold, der sendes til Anthropic, opbevares ikke af dem efter ZDR-vilkårene. Lokale data på din enhed fjernes, når du sletter appen. Vi opbevarer kun begrænsede oplysninger længere, hvor loven kræver det (for eksempel grundlæggende transaktionsoplysninger).' },
          { t: 'p', x: 'Beder du os om at slette data, der er knyttet til din konto, efterkommer vi din anmodning inden for 30 dage.' },
        ],
      },
      {
        h: '8. Hvordan vi beskytter dine data',
        blocks: [
          { t: 'p', x: 'Vi bruger tekniske og organisatoriske foranstaltninger til at beskytte dine data, herunder kryptering under transmission, adgangskontrol og anerkendte infrastrukturleverandører. Ingen metode til transmission eller opbevaring er fuldstændig sikker, men vi arbejder for at beskytte dine oplysninger og for at reagere hurtigt, hvis noget går galt, herunder ved at underrette dig og den relevante myndighed, hvor loven kræver det.' },
        ],
      },
      {
        h: '9. Dine rettigheder',
        id: 'gdpr',
        blocks: [
          { t: 'p', x: 'Befinder du dig i Storbritannien eller EØS, har du følgende rettigheder over dine personoplysninger efter den britiske GDPR og EU’s databeskyttelsesforordning (GDPR):' },
          {
            t: 'ul',
            x: [
              '**Indsigt**: at få en kopi af de personoplysninger, vi har om dig;',
              '**Berigtigelse**: at få urigtige oplysninger rettet;',
              '**Sletning**: at få dine data slettet (»retten til at blive glemt«);',
              '**Begrænsning**: at bede os begrænse vores brug af dine data;',
              '**Dataportabilitet**: at modtage dine data i et overførbart, maskinlæsbart format;',
              '**Indsigelse**: at gøre indsigelse mod behandling, der bygger på vores legitime interesser;',
              '**Tilbagekaldelse af samtykke**: til enhver tid, hvor vi støtter os på dit samtykke, uden at det berører behandlingen forud herfor.',
            ],
          },
          { t: 'p', x: 'Vil du gøre brug af en af disse rettigheder, så skriv til [hello@symponia.io](mailto:hello@symponia.io). Vi opkræver dig ikke betaling og behandler dig ikke anderledes, fordi du bruger dine rettigheder. Er du utilfreds med, hvordan vi håndterer dine data, kan du klage til den britiske tilsynsmyndighed Information Commissioner’s Office ([ico.org.uk](https://ico.org.uk)) eller til din lokale tilsynsmyndighed i EØS.' },
        ],
      },
      {
        h: '10. Markedsføring',
        blocks: [
          { t: 'p', x: 'Vi sender kun markedsføringsmails, hvis du har sagt ja til det. Hver markedsføringsmail indeholder et afmeldingslink, og du kan til enhver tid framelde dig ved at bruge det eller ved at skrive til [hello@symponia.io](mailto:hello@symponia.io). At framelde sig markedsføring berører ikke de servicebeskeder, der er nødvendige for at drive din konto.' },
        ],
      },
      {
        h: '11. Cookies og websitet',
        blocks: [
          { t: 'p', x: 'Vores website bruger kun de cookies og den lokale lagring, der er strengt nødvendige for, at siden fungerer, og for at huske grundlæggende præferencer. Vi bruger ikke cookies til reklame eller sporing på tværs af websites. Tilføjer vi analyseværktøjer i fremtiden, opdaterer vi denne politik og indhenter, hvor det er påkrævet, dit samtykke først.' },
        ],
      },
      {
        h: '12. Børn',
        blocks: [
          { t: 'p', x: 'Symponia er beregnet til voksne. Den er ikke rettet mod personer under 18 år, og vi indsamler ikke bevidst personoplysninger fra børn. Har du mistanke om, at et barn har givet os personoplysninger, så kontakt os på [hello@symponia.io](mailto:hello@symponia.io), og vi sletter dem.' },
        ],
      },
      {
        h: '13. Ændringer af denne politik',
        blocks: [
          { t: 'p', x: 'Vi kan fra tid til anden opdatere denne privatlivspolitik. Vi ændrer datoen »Sidst opdateret« ovenfor og tager, hvor ændringerne er væsentlige, rimelige skridt til at gøre dig opmærksom på dem. Fortsætter du med at bruge Symponia, efter at ændringerne er trådt i kraft, accepterer du den opdaterede politik.' },
        ],
      },
      {
        h: '14. Kontakt',
        blocks: [
          { t: 'p', x: 'Har du spørgsmål eller anmodninger om privatliv, så kontakt vores privacy-team på [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Refusionspolitik',
    metaDesc: 'Sådan fungerer refusion, opsigelse og dine forbrugerrettigheder for Symponia-abonnementer købt via App Store.',
    kicker: 'Juridisk',
    title: 'Refusionspolitik',
    updated: 'Sidst opdateret: juli 2026',
    intro:
      'Symponia drives af Boroto Ltd. Abonnementer sælges og behandles af Apple gennem køb i appen. Fordi Apple håndterer betalingen, anmodes der om refusion hos Apple, og Apple træffer afgørelsen efter sine egne politikker. Denne side forklarer, hvordan det fungerer, og beskriver dine rettigheder som forbruger. Intet her begrænser dine lovbestemte rettigheder.',
    sections: [
      {
        h: '1. Prøv Symponia gratis',
        blocks: [
          { t: 'p', x: 'Nye brugere får en begrænset gratis mængde, så du kan opleve Symponia, før du beslutter dig for at tegne abonnement. Vi opfordrer dig til at bruge den, før du køber.' },
        ],
      },
      {
        h: '2. Sådan anmoder du om refusion',
        blocks: [
          { t: 'p', x: 'Alle køb sker via dit Apple ID, så det er Apple og ikke Boroto Ltd, der behandler refusioner. Sådan anmoder du:' },
          {
            t: 'ul',
            x: [
              'gå til [reportaproblem.apple.com](https://reportaproblem.apple.com) og log ind med dit Apple ID; eller',
              'åbn Indstillinger på din enhed, tryk på dit navn, og brug købshistorikken til at rapportere et problem.',
            ],
          },
          { t: 'p', x: 'Apple vurderer hver anmodning ud fra sine egne kriterier og afgør, om der skal ydes refusion. Vi hjælper gerne, hvor vi kan, men vi kan ikke selv udstede refusioner via App Store eller garantere Apples afgørelse.' },
        ],
      },
      {
        h: '3. Opsigelse af dit abonnement',
        blocks: [
          { t: 'p', x: 'Du kan altid opsige i dine Apple ID-indstillinger (Indstillinger, dit navn, Abonnementer). Opsiger du, fornys dit abonnement ikke, og du beholder adgangen indtil udgangen af den periode, du allerede har betalt for. En opsigelse udløser ikke i sig selv refusion for den igangværende periode, og ubrugte samtaler overføres ikke. At slette appen opsiger ikke dit abonnement.' },
        ],
      },
      {
        h: '4. Dine rettigheder som forbruger i Storbritannien eller EU',
        blocks: [
          { t: 'p', x: 'Er du forbruger i Storbritannien eller EU, har du normalt 14 dages fortrydelsesret ved køb af digitalt indhold og ret til refusion. Denne ret kan dog bortfalde, når leveringen af det digitale indhold er påbegyndt, forudsat at du udtrykkeligt har givet samtykke hertil og har anerkendt, at du dermed mister fortrydelsesretten. Når du starter et abonnement og begynder at bruge samtaler eller daglige refleksioner, leveres det digitale indhold straks, hvilket kan bringe den 14-dages fortrydelsesret til ophør for indhold, der allerede er leveret.' },
          { t: 'p', x: 'Intet af dette fratager dig dine lovbestemte rettigheder. Er tjenesten mangelfuld, ikke som beskrevet eller ikke leveret med rimelig omhu og faglig dygtighed, kan du have krav på et retsmiddel efter Consumer Rights Act 2015 (eller tilsvarende lovgivning dér, hvor du bor), uanset Apples almindelige refusionsproces. Mener du, at det gælder dig, så kontakt os, og vi hjælper dig.' },
        ],
      },
      {
        h: '5. Prisændringer',
        blocks: [
          { t: 'p', x: 'Ændrer vi abonnementsprisen, gælder den nye pris ikke for en betalingsperiode, du allerede har betalt for. Hvor det er påkrævet, vil Apple bede dig bekræfte en prisstigning, før den træder i kraft; siger du nej, fornys dit abonnement ikke til den nye pris.' },
        ],
      },
      {
        h: '6. Kontakt os',
        blocks: [
          { t: 'p', x: 'Har du et problem med en betaling, et abonnement eller tjenesten, så skriv til [hello@symponia.io](mailto:hello@symponia.io), og vi gør vores bedste for at bringe det i orden.' },
        ],
      },
    ],
  },

  eula: {
    metaTitle: 'Slutbrugerlicensaftale',
    metaDesc: 'Apples standard-EULA for Symponia til iOS. Den regulerer din licens til at bruge Symponia-appen hentet fra App Store.',
    kicker: 'Juridisk',
    titleL1: 'Licensed Application',
    titleL2: 'End User License Agreement',
    sub: 'Apple Standard EULA',
    note: 'Aftalen nedenfor er Apples standardlicensaftale for licenserede applikationer og gengives derfor på Apples originale engelsk: det er Apples egen kontrakt, ikke vores. Det er alene den engelske tekst, der er bindende.',
  },

  credits: {
    metaTitle: 'Priser',
    metaDesc: 'Symponias priser: begynd med 10 gratis samtaler, derefter et månedsabonnement med 350 samtaler. Prisen vises i App Store.',
    kicker: 'Priser',
    h1: 'Vælg din dybde',
    lead: 'Begynd gratis. Gå månedligt, når du er klar.',
    free: {
      k: 'Nye ankomster',
      price: 'Gratis',
      sub: '10 gratis refleksionssamtaler til at udforske Symponia',
      body: 'Navngiv dine syv dyrearketyper, få dit konstellationsportræt, og brug 10 gratis refleksionssamtaler. Ingen binding.',
      cta: 'Hent i App Store',
    },
    monthly: {
      badge: 'Anbefalet',
      k: 'Symponia Månedlig',
      price: 'I App Store',
      sub: 'om måneden · 350 refleksionssamtaler',
      bullets: [
        '350 samtaler i tilstandene Arketyper, Min dag og Samtale',
        'Gratis daglige refleksioner, op til 10 om dagen, der ikke tæller med',
        'Ny mængde hver måned, samtaler overføres ikke',
        'Apple fastsætter prisen for dit land, se App Store',
        'Opsig når som helst i Apple ID-indstillingerne',
      ],
      cta: 'Tilgængelig i appen',
    },
    how: {
      h2: 'Sådan fungerer det',
      items: [
        { t: 'Én samtale pr. refleksion', d: 'Hver udveksling med Symponia bruger én samtale. De daglige refleksioner er gratis og tæller ikke med i din mængde.' },
        { t: 'Månedlig nulstilling', d: 'Dine 350 månedlige samtaler nulstilles ved hver fornyelse. Ubrugte samtaler overføres ikke.' },
        { t: 'Køb inde i appen', d: 'Alle køb sker inde i Symponias iOS-app via Apples køb i appen.' },
        { t: 'Sikker betaling via Apple', d: 'Alle betalinger behandles af Apple. Vi ser eller gemmer aldrig dine kortoplysninger.' },
      ],
    },
    contact: 'Spørgsmål om abonnement eller betaling? Kontakt os på [hello@symponia.io](mailto:hello@symponia.io). Se alle detaljer i vores [vilkår for brug](/terms#tokens).',
  },
};
