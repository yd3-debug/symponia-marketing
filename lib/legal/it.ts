import type { LegalDict } from './types';

// Italiano. Traduzione di ./en.ts: il testo inglese resta la versione
// giuridicamente vincolante, come indicato da shell.legalNote in cima a ogni
// pagina legale. La legge applicabile è quella di Inghilterra e Galles: tutti i
// riferimenti britannici (Consumer Rights Act 2015, ICO, 999, Samaritans)
// restano quindi invariati. Nei testi legali si usa il «Lei».

export const it: LegalDict = {
  terms: {
    metaTitle: 'Condizioni del servizio',
    metaDesc: 'Le condizioni che regolano l’uso dell’app e del sito Symponia, gestiti da Boroto Ltd.',
    kicker: 'Note legali',
    title: 'Condizioni del servizio',
    updated: 'Ultimo aggiornamento: luglio 2026',
    intro:
      'Le presenti Condizioni del servizio (le “Condizioni”) regolano l’accesso e l’uso dell’applicazione mobile Symponia e di questo sito (insieme, il “Servizio”). Il Servizio è gestito da Boroto Ltd, società registrata in Inghilterra e Galles (“Boroto”, “noi” o “nostro”). La invitiamo a leggere attentamente le presenti Condizioni. Scaricando il Servizio, accedendovi o utilizzandolo, Lei accetta di esserne vincolato. Se non le accetta, La preghiamo di non utilizzare il Servizio.',
    sections: [
      {
        h: '1. Chi siamo e come contattarci',
        blocks: [
          { t: 'p', x: 'Il Servizio è fornito da Boroto Ltd, società registrata in Inghilterra e Galles. Può contattarci in qualsiasi momento all’indirizzo [hello@symponia.io](mailto:hello@symponia.io). Il numero di registrazione della società e l’indirizzo della sede legale risultano dai nostri atti societari pubblicati e sono disponibili su richiesta.' },
        ],
      },
      {
        h: '2. Requisiti di accesso ed età',
        blocks: [
          { t: 'p', x: 'Per creare un account e utilizzare Symponia occorre avere almeno **18 anni**. Utilizzando il Servizio, Lei conferma di avere 18 anni o più e di avere la capacità giuridica di vincolarsi alle presenti Condizioni. Symponia è destinata agli adulti e non è progettata per i minori né a essi rivolta.' },
        ],
      },
      {
        h: '3. Il Suo account',
        blocks: [
          { t: 'p', x: 'Per utilizzare alcune funzionalità è necessario creare un account e accedere. Lei si impegna a fornire informazioni esatte, a custodire in sicurezza le proprie credenziali di accesso e a rispondere di ogni attività svolta tramite il Suo account. La preghiamo di avvisarci tempestivamente all’indirizzo [hello@symponia.io](mailto:hello@symponia.io) se ritiene che qualcuno abbia avuto accesso al Suo account senza il Suo permesso. Può eliminare il Suo account in qualsiasi momento dall’app (scheda Profilo, sezione Account, “elimina account”).' },
        ],
      },
      {
        h: '4. Che cos’è Symponia',
        blocks: [
          { t: 'p', x: 'Symponia è uno strumento assistito da intelligenza artificiale per la riflessione personale e l’esplorazione di sé. Le sue funzionalità comprendono:' },
          {
            t: 'ul',
            x: [
              'tre modalità: Archetipo, La mia giornata e Conversazione;',
              'un esercizio sugli archetipi animali e una sintesi dei Suoi risultati;',
              'riflessioni quotidiane personalizzate;',
              'accesso a sessioni di conversazione con l’app.',
            ],
          },
          { t: 'p', x: 'Di volta in volta potremo aggiungere, modificare o rimuovere funzionalità per migliorare il Servizio.' },
        ],
      },
      {
        h: '5. Symponia non è un servizio medico né un servizio di emergenza',
        blocks: [
          { t: 'p', x: 'Symponia **non è un servizio medico, terapeutico, psichiatrico, psicologico o di counselling** e non sostituisce l’assistenza professionale. Nulla di ciò che si trova nell’app, e nulla di ciò che Symponia genera, costituisce consulenza professionale, diagnosi o trattamento, e non deve essere considerato tale.' },
          { t: 'p', x: 'Symponia non può prestare aiuto in caso di emergenza e non offre supporto nelle situazioni di crisi. **Se si trova in una situazione di crisi, o teme di poter fare del male a sé stesso o ad altri, contatti immediatamente i servizi di emergenza locali o un professionista qualificato.** Nel Regno Unito può chiamare il 999 oppure contattare gratuitamente i Samaritans al 116 123.' },
        ],
      },
      {
        h: '6. Contenuti generati dall’IA',
        blocks: [
          { t: 'p', x: 'Le risposte di Symponia sono generate da un’intelligenza artificiale. L’IA può essere errata, incompleta o fuorviante, e le sue risposte possono non essere adatte alla Sua situazione. Lei è responsabile del modo in cui interpreta ciò che Symponia produce e delle azioni che ne fa conseguire, e dovrebbe usare il proprio discernimento e rivolgersi a un professionista qualificato ove opportuno. Non garantiamo che i contenuti prodotti siano accurati, affidabili o idonei a uno scopo particolare.' },
        ],
      },
      {
        h: '7. Abbonamenti, prezzi e rinnovo automatico',
        id: 'tokens',
        blocks: [
          { t: 'p', x: '**Credito gratuito.** I nuovi utenti ricevono 10 sessioni di riflessione gratuite per provare Symponia prima di abbonarsi.' },
          { t: 'p', x: '**Symponia Mensile.** L’abbonamento comprende 350 sessioni di riflessione per mese solare. Si applica il prezzo indicato nell’App Store al momento dell’acquisto; Apple stabilisce i prezzi per ciascun Paese e può modificarli. A ogni rinnovo viene concesso un nuovo credito di 350 sessioni; le sessioni non utilizzate non vengono riportate. Le riflessioni quotidiane sono gratuite, non vengono scalate dalle Sue sessioni e sono limitate a 10 in un periodo di 24 ore.' },
          { t: 'p', x: '**Fatturazione e rinnovo.** Gli abbonamenti sono venduti e gestiti da Apple tramite acquisto in-app e sono addebitati sul Suo Apple ID. L’abbonamento si rinnova automaticamente al prezzo in vigore al termine di ciascun periodo di fatturazione, salvo disdetta almeno 24 ore prima della fine del periodo. Può gestire o disdire l’abbonamento in qualsiasi momento nelle impostazioni del Suo Apple ID (Impostazioni, il Suo nome, Abbonamenti). L’eliminazione dell’app non comporta la disdetta dell’abbonamento.' },
          { t: 'p', x: '**Pagamento.** Il pagamento è incassato da Apple. Non vediamo né conserviamo mai i dati della Sua carta di pagamento. I prezzi sono indicati nell’app e possono variare; comunicheremo le variazioni di prezzo nella misura richiesta e nessuna variazione inciderà su un periodo di fatturazione già pagato.' },
        ],
      },
      {
        h: '8. Disdetta e rimborsi',
        blocks: [
          { t: 'p', x: 'Può disdire l’abbonamento in qualsiasi momento secondo quanto descritto sopra e manterrà l’accesso fino al termine del periodo già pagato. Gli acquisti avvengono tramite Apple e i rimborsi sono gestiti da Apple secondo le proprie politiche. Per tutti i dettagli, compresi i Suoi diritti di consumatore previsti dalla legge, consulti la nostra [Politica sui rimborsi](/refunds). Nulla nelle presenti Condizioni pregiudica i Suoi diritti previsti dal Consumer Rights Act 2015 o da altra normativa applicabile a tutela dei consumatori.' },
        ],
      },
      {
        h: '9. Uso consentito',
        blocks: [
          { t: 'p', x: 'Lei si impegna a non:' },
          {
            t: 'ul',
            x: [
              'utilizzare il Servizio per finalità illecite, dannose o fraudolente;',
              'decompilare, sottoporre a reverse engineering, effettuare scraping o tentare di estrarre il codice sorgente, i prompt o i modelli alla base del Servizio, salvo nei limiti in cui tale restrizione sia vietata dalla legge;',
              'utilizzare il Servizio per molestare, insultare, minacciare o danneggiare sé stesso o altri;',
              'dichiarare falsamente la propria identità o età, o utilizzare l’account di un’altra persona senza il suo permesso;',
              'utilizzare bot, script o altri mezzi automatizzati per accedere al Servizio o per generare sessioni;',
              'interferire con il Servizio o i suoi sistemi, comprometterne il funzionamento o tentare di accedervi senza autorizzazione.',
            ],
          },
          { t: 'p', x: 'Possiamo sospendere o revocare l’accesso in caso di violazione delle presenti Condizioni o di un uso del Servizio che comporti un rischio di danno per Lei, per altri o per noi.' },
        ],
      },
      {
        h: '10. Proprietà intellettuale',
        blocks: [
          { t: 'p', x: 'Il Servizio, compresi il software di Symponia, il modello degli archetipi animali, i prompt, i testi, il design e il marchio, è di proprietà di Boroto Ltd o dei suoi licenzianti ed è tutelato dalle normative sulla proprietà intellettuale. Le concediamo una licenza limitata, personale, non esclusiva, non trasferibile e revocabile per utilizzare il Servizio per uso personale e non commerciale, in conformità alle presenti Condizioni. Non è consentito copiare, distribuire o creare opere derivate dal Servizio senza il nostro permesso scritto.' },
          { t: 'p', x: 'Le riflessioni e le conversazioni che Lei crea sono Sue. Non rivendichiamo alcuna titolarità sui Suoi contenuti personali. Lei ci concede una licenza limitata a trattare tali contenuti solo nella misura necessaria a gestire e fornirLe il Servizio, come descritto nella nostra [Informativa sulla privacy](/privacy).' },
        ],
      },
      {
        h: '11. Servizi di terze parti',
        blocks: [
          { t: 'p', x: 'Il Servizio si avvale di terze parti, tra cui Apple (distribuzione, accesso e pagamenti), Anthropic (l’IA Claude che genera le risposte) e Supabase (hosting sicuro). L’uso dell’app è soggetto anche al [Licensed Application End User License Agreement](/eula) di Apple. Non siamo responsabili dei servizi di terze parti: alle rispettive parti dell’esperienza si applicano i loro termini e le loro informative sulla privacy.' },
        ],
      },
      {
        h: '12. Disponibilità e modifiche del Servizio',
        blocks: [
          { t: 'p', x: 'Ci impegniamo a mantenere Symponia disponibile, ma non garantiamo che il Servizio sia ininterrotto, sicuro o privo di errori. Il Servizio può essere indisponibile durante la manutenzione o per cause al di fuori del nostro controllo, e possiamo modificarlo, sospenderlo o interromperlo in tutto o in parte. Qualora interrompessimo una funzionalità a pagamento, agiremo in modo corretto e nel rispetto dei Suoi diritti di consumatore.' },
        ],
      },
      {
        h: '13. Sospensione e cessazione',
        blocks: [
          { t: 'p', x: 'Può smettere di utilizzare il Servizio ed eliminare il Suo account in qualsiasi momento. Possiamo sospendere o cessare il Suo accesso in caso di violazione delle presenti Condizioni, se richiesto dalla legge o se continuare a fornirLe il Servizio non è ragionevolmente possibile. Le clausole che per loro natura devono sopravvivere alla cessazione (comprese quelle su proprietà intellettuale, esclusioni di garanzia, limitazione di responsabilità e legge applicabile) continueranno ad applicarsi.' },
        ],
      },
      {
        h: '14. Esclusioni di garanzia',
        blocks: [
          { t: 'p', x: 'Fatti salvi gli obblighi che assumiamo espressamente nelle presenti Condizioni e i diritti a Lei spettanti in base alla normativa a tutela dei consumatori che non possono essere esclusi, il Servizio è fornito “così com’è” e “come disponibile”, e non prestiamo alcuna garanzia, espressa o implicita, sul Servizio, sui suoi contenuti o su qualsiasi contenuto generato dall’IA.' },
        ],
      },
      {
        h: '15. La nostra responsabilità nei Suoi confronti',
        blocks: [
          { t: 'p', x: 'Nulla nelle presenti Condizioni limita o esclude la nostra responsabilità laddove ciò sarebbe illecito. Ciò comprende la responsabilità per morte o lesioni personali causate da nostra negligenza, per dolo o dichiarazioni fraudolente e per qualsiasi altra responsabilità che non possa essere limitata o esclusa ai sensi della legge applicabile, compresi i Suoi diritti di consumatore previsti dalla legge.' },
          { t: 'p', x: 'Fatto salvo il paragrafo che precede, e nella massima misura consentita dalla legge: non rispondiamo di perdite o danni non prevedibili, di perdite derivanti dal Suo affidamento su contenuti generati dall’IA, né di danni indiretti o consequenziali; e la nostra responsabilità complessiva nei Suoi confronti per tutte le pretese derivanti dal Servizio o a esso connesse, in un qualsiasi periodo di 12 mesi, non supererà il maggiore fra (a) l’importo totale da Lei corrisposto a noi o ad Apple per il Servizio in tale periodo e (b) £100. Forniamo il Servizio esclusivamente per uso personale e non rispondiamo di perdite commerciali.' },
        ],
      },
      {
        h: '16. Manleva',
        blocks: [
          { t: 'p', x: 'Lei accetta di farsi carico delle perdite e dei costi ragionevoli da noi subiti a causa di un Suo uso improprio del Servizio o di una Sua violazione delle presenti Condizioni, e di rimborsarceli, nella misura in cui siano a Lei imputabili. Ciò non limita i Suoi diritti di consumatore.' },
        ],
      },
      {
        h: '17. Modifiche alle presenti Condizioni',
        blocks: [
          { t: 'p', x: 'Potremo aggiornare di volta in volta le presenti Condizioni, ad esempio per riflettere modifiche del Servizio o della legge. Aggiorneremo la data di “Ultimo aggiornamento” sopra riportata e, in caso di modifiche sostanziali, adotteremo misure ragionevoli per portarle alla Sua attenzione. Se continua a utilizzare il Servizio dopo l’entrata in vigore delle modifiche, accetta le Condizioni aggiornate. Se non le accetta, dovrebbe cessare di utilizzare il Servizio e può disdire l’abbonamento ed eliminare il Suo account.' },
        ],
      },
      {
        h: '18. Legge applicabile e foro competente',
        blocks: [
          { t: 'p', x: 'Le presenti Condizioni e ogni controversia da esse derivante o a esse connessa sono regolate dal diritto di Inghilterra e Galles. Le controversie sono devolute alla competenza esclusiva dei tribunali di Inghilterra e Galles, fermo restando che, se risiede in un’altra nazione del Regno Unito, potrà agire in giudizio nella Sua nazione di residenza, e che i consumatori conservano la protezione delle norme imperative del proprio Paese di residenza.' },
        ],
      },
      {
        h: '19. Disposizioni generali',
        blocks: [
          { t: 'p', x: 'Qualora una parte delle presenti Condizioni risultasse inefficace, le restanti parti resteranno valide. Il mancato esercizio di un diritto da parte nostra non costituisce rinuncia allo stesso. Lei non può cedere i diritti derivanti dalle presenti Condizioni senza il nostro consenso; noi possiamo cedere i nostri, purché i Suoi diritti non ne risultino pregiudicati. Le presenti Condizioni, insieme alla nostra [Informativa sulla privacy](/privacy), alla nostra [Politica sui rimborsi](/refunds) e all’[EULA](/eula), costituiscono l’intero accordo tra Lei e noi in relazione al Servizio.' },
        ],
      },
      {
        h: '20. Contatti',
        blocks: [
          { t: 'p', x: 'Ha domande sulle presenti Condizioni? Ci scriva a [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: 'Informativa sulla privacy',
    metaDesc: 'Come Boroto Ltd raccoglie, utilizza e protegge i Suoi dati personali quando utilizza Symponia.',
    kicker: 'Note legali',
    title: 'Informativa sulla privacy',
    updated: 'Ultimo aggiornamento: luglio 2026',
    intro:
      'La presente Informativa sulla privacy spiega come Boroto Ltd (“Boroto”, “noi” o “nostro”) raccoglie, utilizza, comunica e protegge i Suoi dati personali quando utilizza l’app e il sito Symponia. Symponia è uno spazio di riflessione privata: raccogliamo il minimo indispensabile e non vendiamo mai i Suoi dati.',
    sections: [
      {
        h: '1. Chi siamo (titolare del trattamento)',
        blocks: [
          { t: 'p', x: 'Boroto Ltd è il titolare del trattamento dei Suoi dati personali. Siamo registrati in Inghilterra e Galles. Per qualsiasi aspetto della presente informativa può contattarci all’indirizzo [hello@symponia.io](mailto:hello@symponia.io). Il numero di registrazione della società e l’indirizzo della sede legale risultano dai nostri atti societari pubblicati e sono disponibili su richiesta.' },
        ],
      },
      {
        h: '2. I dati personali che raccogliamo',
        blocks: [
          { t: 'p', x: '**Informazioni che ci fornisce durante l’onboarding e l’uso dell’app:**' },
          {
            t: 'ul',
            x: [
              'il Suo nome e, se sceglie di indicarlo, il Suo genere;',
              'i Suoi sette archetipi animali e le Sue risposte alle domande di sintonizzazione;',
              'la Sua preferenza di frequenza di risonanza;',
              'i messaggi e le riflessioni che scrive in ciascuna modalità;',
              'le Sue preferenze di notifica e l’eventuale consenso a ricevere saltuari aggiornamenti via email.',
            ],
          },
          { t: 'p', x: '**Informazioni sull’account e informazioni tecniche:**' },
          {
            t: 'ul',
            x: [
              'i dati dell’account necessari per l’accesso e per la sicurezza dei Suoi dati;',
              'il Suo saldo di sessioni (token) e lo stato del Suo abbonamento;',
              'informazioni tecniche e diagnostiche limitate (come la versione dell’app e informazioni di base sul dispositivo), utilizzate per mantenere il Servizio funzionante e sicuro.',
            ],
          },
          { t: 'p', x: '**Informazioni sugli acquisti:** quando sottoscrive un abbonamento, il pagamento è gestito da Apple. Riceviamo da Apple la conferma dello stato del Suo abbonamento, ma non riceviamo né conserviamo mai i dati della Sua carta di pagamento.' },
          { t: 'p', x: 'Alcune informazioni sono conservate anche localmente sul Suo dispositivo (ad esempio i Suoi archetipi, le Sue preferenze e la cronologia delle conversazioni in ciascuna modalità). I dati locali vengono rimossi quando elimina l’app.' },
          { t: 'p', x: 'La invitiamo a non condividere informazioni che non desidera registrare e a prestare particolare attenzione alle categorie particolari di dati (come informazioni sulla Sua salute, sulle Sue convinzioni o sulla Sua sessualità). Laddove tali informazioni compaiano in ciò che scrive, le trattiamo esclusivamente per fornirLe il Servizio, sulla base del Suo consenso esplicito, che può revocare eliminando i contenuti in questione o il Suo account.' },
        ],
      },
      {
        h: '3. Come e perché utilizziamo i Suoi dati, e le nostre basi giuridiche',
        blocks: [
          { t: 'p', x: 'Ai sensi della normativa sulla protezione dei dati del Regno Unito e dell’UE, dobbiamo disporre di una base giuridica per utilizzare i Suoi dati personali. Ci basiamo sulle seguenti:' },
          {
            t: 'ul',
            x: [
              '**Esecuzione del contratto con Lei**: per creare e gestire il Suo account, generare risposte personalizzate di Symponia, consegnarLe la riflessione quotidiana, mantenere una sessione durante una conversazione e confermare il Suo abbonamento presso Apple.',
              '**Il Suo consenso**: per inviarLe notifiche push o saltuarie email di marketing (solo se ha prestato il consenso) e per trattare eventuali categorie particolari di dati contenute in ciò che scrive. Può revocare il consenso in qualsiasi momento.',
              '**Il nostro legittimo interesse**: per mantenere il Servizio sicuro e funzionante, prevenire abusi e frodi e migliorarne l’affidabilità, in modo tale da non prevalere sui Suoi diritti.',
              '**Obbligo di legge**: per adempiere alle leggi che ci riguardano, ad esempio in materia fiscale e nel rispondere a richieste legittime delle autorità.',
            ],
          },
          { t: 'p', x: 'Non utilizziamo i Suoi dati per la pubblicità o per la profilazione pubblicitaria e non vendiamo i Suoi dati personali.' },
        ],
      },
      {
        h: '4. Come Symponia utilizza l’IA',
        blocks: [
          { t: 'p', x: 'Per generare risposte riflessive, il testo che invia, insieme al Suo nome, al Suo genere (se indicato), ai Suoi archetipi e alla Sua frequenza di risonanza, viene trasmesso all’API Claude di Anthropic. Questo trattamento avviene in regime di Zero Data Retention (ZDR): Anthropic non conserva il contenuto delle Sue conversazioni dopo aver generato una risposta e non lo utilizza per addestrare o migliorare i propri modelli.' },
          { t: 'p', x: 'Symponia genera contenuti in modo automatico, ma non adotta decisioni basate unicamente su un trattamento automatizzato che producano effetti giuridici o incidano in modo analogamente significativo sulla Sua persona. Symponia è uno strumento di riflessione, non un decisore.' },
        ],
      },
      {
        h: '5. Con chi condividiamo i dati',
        blocks: [
          { t: 'p', x: 'Condividiamo i dati soltanto con i fornitori di servizi che ci aiutano a gestire Symponia; ciascuno di essi agisce sulla base di accordi che li obbligano a proteggerli:' },
          {
            t: 'ul',
            x: [
              '**Anthropic**: fornisce l’IA Claude che genera le risposte, in regime di Zero Data Retention. Si veda [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy).',
              '**Supabase**: database sicuro, autenticazione e hosting di backend per il Suo account e le Sue conversazioni.',
              '**Apple**: distribuzione tramite App Store, accesso, consegna delle notifiche push e gestione degli acquisti in-app. I dati di pagamento sono gestiti interamente da Apple.',
            ],
          },
          { t: 'p', x: 'Possiamo inoltre comunicare i dati se richiesto dalla legge, per tutelare la sicurezza, i diritti o i beni dei nostri utenti o di terzi, oppure nell’ambito di un trasferimento d’azienda; in tal caso La informeremo e continueremo a proteggere i Suoi dati.' },
        ],
      },
      {
        h: '6. Trasferimenti internazionali',
        blocks: [
          { t: 'p', x: 'Alcuni dei nostri fornitori (tra cui Anthropic e Apple) trattano dati al di fuori del Regno Unito e dello SEE, anche negli Stati Uniti. Quando i dati sono trasferiti a livello internazionale, ci basiamo su garanzie adeguate riconosciute dal diritto del Regno Unito e dell’UE, quali l’International Data Transfer Agreement del Regno Unito o il relativo Addendum e le Clausole contrattuali tipo della Commissione europea, unitamente a tutele aggiuntive ove necessario. Può chiederci maggiori informazioni su tali garanzie.' },
        ],
      },
      {
        h: '7. Per quanto tempo conserviamo i Suoi dati',
        blocks: [
          { t: 'p', x: 'Conserviamo il Suo account e la cronologia delle Sue conversazioni finché il Suo account è attivo. Quando elimina il Suo account (scheda Profilo, sezione Account, “elimina account”) o ci chiede di cancellare i Suoi dati, li eliminiamo dai nostri sistemi attivi e vengono rimossi dai backup ordinari entro un breve periodo. I contenuti trasmessi ad Anthropic non sono da questa conservati, in forza delle condizioni ZDR. I dati locali sul Suo dispositivo vengono rimossi quando elimina l’app. Possiamo conservare più a lungo informazioni limitate solo se la legge lo richiede (ad esempio la documentazione essenziale delle transazioni).' },
          { t: 'p', x: 'Se ci chiede di cancellare i dati associati al Suo account, daremo seguito alla Sua richiesta entro 30 giorni.' },
        ],
      },
      {
        h: '8. Come proteggiamo i Suoi dati',
        blocks: [
          { t: 'p', x: 'Adottiamo misure tecniche e organizzative per proteggere i Suoi dati, tra cui la cifratura in transito, i controlli di accesso e il ricorso a fornitori di infrastruttura affidabili. Nessun metodo di trasmissione o conservazione è completamente sicuro, ma lavoriamo per proteggere le Sue informazioni e per reagire rapidamente se qualcosa va storto, anche informando Lei e l’autorità competente laddove la legge lo richieda.' },
        ],
      },
      {
        h: '9. I Suoi diritti',
        id: 'gdpr',
        blocks: [
          { t: 'p', x: 'Se si trova nel Regno Unito o nel SEE, Le spettano i seguenti diritti sui Suoi dati personali ai sensi del GDPR del Regno Unito e del GDPR dell’UE:' },
          {
            t: 'ul',
            x: [
              '**Accesso**: ottenere una copia dei dati personali che deteniamo sul Suo conto;',
              '**Rettifica**: far correggere i dati inesatti;',
              '**Cancellazione**: ottenere la cancellazione dei Suoi dati (“diritto all’oblio”);',
              '**Limitazione**: chiederci di limitare l’uso dei Suoi dati;',
              '**Portabilità**: ricevere i Suoi dati in un formato portabile e leggibile da dispositivo automatico;',
              '**Opposizione**: opporsi a un trattamento fondato sul nostro legittimo interesse;',
              '**Revoca del consenso**: in qualsiasi momento, laddove ci basiamo sul Suo consenso, senza pregiudicare il trattamento già effettuato.',
            ],
          },
          { t: 'p', x: 'Per esercitare uno di questi diritti, scriva a [hello@symponia.io](mailto:hello@symponia.io). Non Le addebiteremo alcun costo né La tratteremo diversamente per aver esercitato i Suoi diritti. Se non è soddisfatto del modo in cui trattiamo i Suoi dati, può presentare reclamo all’Information Commissioner’s Office del Regno Unito ([ico.org.uk](https://ico.org.uk)) o all’autorità di controllo competente nel SEE.' },
        ],
      },
      {
        h: '10. Marketing',
        blocks: [
          { t: 'p', x: 'Inviamo email di marketing solo se ha prestato il Suo consenso. Ogni email di marketing contiene un link di cancellazione e può revocare il consenso in qualsiasi momento utilizzandolo oppure scrivendo a [hello@symponia.io](mailto:hello@symponia.io). La rinuncia alle comunicazioni di marketing non incide sui messaggi di servizio necessari alla gestione del Suo account.' },
        ],
      },
      {
        h: '11. Cookie e sito web',
        blocks: [
          { t: 'p', x: 'Il nostro sito utilizza esclusivamente i cookie e l’archiviazione locale strettamente necessari al funzionamento del sito e alla memorizzazione di preferenze di base. Non utilizziamo cookie pubblicitari né di tracciamento tra siti. Se in futuro introdurremo strumenti di analisi, aggiorneremo la presente informativa e, ove richiesto, Le chiederemo prima il consenso.' },
        ],
      },
      {
        h: '12. Minori',
        blocks: [
          { t: 'p', x: 'Symponia è destinata agli adulti. Non è rivolta a persone di età inferiore ai 18 anni e non raccogliamo consapevolmente dati personali di minori. Se ritiene che un minore ci abbia fornito dati personali, ci contatti all’indirizzo [hello@symponia.io](mailto:hello@symponia.io) e provvederemo a cancellarli.' },
        ],
      },
      {
        h: '13. Modifiche alla presente informativa',
        blocks: [
          { t: 'p', x: 'Potremo aggiornare di volta in volta la presente Informativa sulla privacy. Aggiorneremo la data di “Ultimo aggiornamento” sopra riportata e, in caso di modifiche sostanziali, adotteremo misure ragionevoli per portarle alla Sua attenzione. L’uso continuato di Symponia dopo l’entrata in vigore delle modifiche comporta l’accettazione dell’informativa aggiornata.' },
        ],
      },
      {
        h: '14. Contatti',
        blocks: [
          { t: 'p', x: 'Per qualsiasi domanda o richiesta in materia di privacy, contatti il nostro team privacy all’indirizzo [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Politica sui rimborsi',
    metaDesc: 'Come funzionano rimborsi, disdette e diritti dei consumatori per gli abbonamenti Symponia acquistati sull’App Store.',
    kicker: 'Note legali',
    title: 'Politica sui rimborsi',
    updated: 'Ultimo aggiornamento: luglio 2026',
    intro:
      'Symponia è gestita da Boroto Ltd. Gli abbonamenti sono venduti e gestiti da Apple tramite acquisto in-app. Poiché il pagamento è gestito da Apple, i rimborsi vanno richiesti ad Apple, che li decide secondo le proprie politiche. Questa pagina spiega come funziona ed espone i Suoi diritti di consumatore. Nulla di quanto qui riportato limita i Suoi diritti previsti dalla legge.',
    sections: [
      {
        h: '1. Provare Symponia gratuitamente',
        blocks: [
          { t: 'p', x: 'I nuovi utenti ricevono un credito gratuito limitato, così da poter conoscere Symponia prima di decidere se abbonarsi. La invitiamo a utilizzarlo prima dell’acquisto.' },
        ],
      },
      {
        h: '2. Come richiedere un rimborso',
        blocks: [
          { t: 'p', x: 'Tutti gli acquisti avvengono tramite il Suo Apple ID: i rimborsi sono quindi gestiti da Apple e non da Boroto Ltd. Per richiederne uno:' },
          {
            t: 'ul',
            x: [
              'vada su [reportaproblem.apple.com](https://reportaproblem.apple.com) e acceda con il Suo Apple ID; oppure',
              'sul Suo dispositivo, apra Impostazioni, tocchi il Suo nome e utilizzi la cronologia degli acquisti per segnalare un problema.',
            ],
          },
          { t: 'p', x: 'Apple esamina ogni richiesta secondo i propri criteri e decide se concedere il rimborso. Siamo lieti di aiutarLa nei limiti del possibile, ma non possiamo emettere direttamente rimborsi dell’App Store né garantire la decisione di Apple.' },
        ],
      },
      {
        h: '3. Disdire l’abbonamento',
        blocks: [
          { t: 'p', x: 'Può disdire in qualsiasi momento nelle impostazioni del Suo Apple ID (Impostazioni, il Suo nome, Abbonamenti). Se disdice, l’abbonamento non si rinnoverà e Lei manterrà l’accesso fino al termine del periodo già pagato. La disdetta non comporta di per sé un rimborso per il periodo in corso, e le sessioni non utilizzate non vengono riportate al periodo successivo. L’eliminazione dell’app non comporta la disdetta dell’abbonamento.' },
        ],
      },
      {
        h: '4. I Suoi diritti di consumatore nel Regno Unito o nell’UE',
        blocks: [
          { t: 'p', x: 'Se è un consumatore nel Regno Unito o nell’UE, di norma dispone di un diritto di recesso di 14 giorni dall’acquisto di contenuti digitali, con diritto al rimborso. Tale diritto può però venir meno una volta iniziata la fornitura del contenuto digitale, qualora Lei abbia espressamente acconsentito a ciò e riconosciuto di perdere il diritto di recesso. Quando avvia un abbonamento e inizia a utilizzare le sessioni o le riflessioni quotidiane, il contenuto digitale è fornito immediatamente, il che può far venir meno il diritto di recesso di 14 giorni per i contenuti già forniti.' },
          { t: 'p', x: 'Nulla di tutto ciò Le sottrae i diritti previsti dalla legge. Se il Servizio è difettoso, non conforme alla descrizione o non prestato con ragionevole diligenza e perizia, potrebbe avere diritto a un rimedio ai sensi del Consumer Rights Act 2015 (o della normativa equivalente del Paese in cui risiede), indipendentemente dalla procedura di rimborso standard di Apple. Se ritiene che sia il Suo caso, ci contatti e La aiuteremo.' },
        ],
      },
      {
        h: '5. Variazioni di prezzo',
        blocks: [
          { t: 'p', x: 'Se modifichiamo il prezzo dell’abbonamento, il nuovo prezzo non si applicherà a un periodo di fatturazione già pagato. Ove richiesto, Apple Le chiederà di confermare un aumento di prezzo prima che diventi efficace; se non acconsente, l’abbonamento non si rinnoverà al nuovo prezzo.' },
        ],
      },
      {
        h: '6. Contatti',
        blocks: [
          { t: 'p', x: 'Se riscontra un problema con un pagamento, un abbonamento o il Servizio, scriva a [hello@symponia.io](mailto:hello@symponia.io) e faremo del nostro meglio per risolverlo.' },
        ],
      },
    ],
  },

  eula: {
    metaTitle: 'Contratto di licenza con l’utente finale',
    metaDesc: 'EULA standard di Apple per l’app iOS Symponia. Regola la licenza d’uso dell’applicazione scaricata dall’App Store.',
    kicker: 'Note legali',
    titleL1: 'Licensed Application',
    titleL2: 'End User License Agreement',
    sub: 'Apple Standard EULA',
    note: 'Il contratto riportato di seguito è il contratto di licenza standard di Apple per le applicazioni concesse in licenza ed è riprodotto nell’originale inglese di Apple, perché si tratta del contratto di Apple e non del nostro. Fa fede unicamente il testo inglese.',
  },

  credits: {
    metaTitle: 'Prezzi',
    metaDesc: 'Prezzi di Symponia: si inizia con 10 sessioni gratuite, poi un abbonamento mensile da 350 sessioni. Il prezzo è indicato nell’App Store.',
    kicker: 'Prezzi',
    h1: 'Scelga la Sua profondità',
    lead: 'Inizi gratuitamente. Passi al mensile quando se la sente.',
    free: {
      k: 'Nuovi arrivi',
      price: 'Gratuito',
      sub: '10 sessioni di riflessione gratuite per provare Symponia',
      body: 'Nomini i suoi sette animali archetipici, riceva il ritratto della sua costellazione e usi 10 sessioni di riflessione gratuite. Nessun impegno.',
      cta: 'Scarica su App Store',
    },
    monthly: {
      badge: 'Consigliato',
      k: 'Symponia Mensile',
      price: 'Nell’App Store',
      sub: 'al mese · 350 sessioni di riflessione',
      bullets: [
        '350 sessioni nelle modalità Archetipi, La mia giornata e Conversazione',
        'Riflessioni quotidiane gratuite, fino a 10 al giorno, non scalate dalle sessioni',
        'Nuovo credito ogni mese, le sessioni non vengono riportate',
        'Apple stabilisce il prezzo per il suo Paese, veda l’App Store',
        'Disdetta in qualsiasi momento dalle impostazioni dell’ID Apple',
      ],
      cta: 'Disponibile nell’app',
    },
    how: {
      h2: 'Come funziona',
      items: [
        { t: 'Una sessione per riflessione', d: 'Ogni scambio con Symponia consuma una sessione. Le riflessioni quotidiane sono gratuite e non vengono scalate dal Suo credito.' },
        { t: 'Azzeramento mensile', d: 'Le Sue 350 sessioni mensili vengono riassegnate a ogni rinnovo. Le sessioni non utilizzate non si riportano al mese successivo.' },
        { t: 'Acquisto dentro l’app', d: 'Tutti gli acquisti avvengono nell’app iOS Symponia tramite l’acquisto in-app di Apple.' },
        { t: 'Pagamento sicuro tramite Apple', d: 'Tutti i pagamenti sono gestiti da Apple. Non vediamo né conserviamo mai i dati della Sua carta.' },
      ],
    },
    contact: 'Ha domande sugli abbonamenti o sulla fatturazione? Ci contatti a [hello@symponia.io](mailto:hello@symponia.io). Per tutti i dettagli, consulti le nostre [Condizioni del servizio](/terms#tokens).',
  },
};
