import type { Dict } from './types';

// Deutsch. Symponia wird durchgehend als Name geführt, nie als „sie“, „es“ oder
// „der“ — so bleibt das Genus über alle Strings hinweg konsistent.
// Die Leserin oder der Leser wird durchgehend geduzt.

export const de: Dict = {
  shell: {
    nav: { how: 'So funktioniert es', modes: 'Modi', about: 'Über uns', credits: 'Preise', faq: 'FAQ' },
    badge: { top: 'Laden im', bottom: 'App Store' },
    footer: {
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      refunds: 'Erstattungen',
      eula: 'EULA',
      credits: 'Preise',
      contact: 'Kontakt',
      rights: 'Symponia von Boroto Ltd',
      built: 'Gebaut von YD',
      explore: 'Entdecken',
      legal: 'Rechtliches',
      blurb: 'Ein KI-Begleiter für die innere Arbeit. Tiefenpsychologie, in deiner Sprache.',
      designedBy: 'Gestaltet von',
    },
    legalNote: 'Diese Übersetzung wird ausschließlich zur besseren Verständlichkeit bereitgestellt; rechtlich verbindlich ist allein die englische Fassung.',
  },

  nav: { rel: 'Beziehungen', method: 'Die Methode', memory: 'Gedächtnis', faq: 'FAQ', about: 'Über uns' },
  hero: {
    eyebrow: 'Tiefenpsychologie. Keine Therapie.',
    l1: 'Diesen Streit hattest du schon.',
    l2: 'Mit jemand anderem.',
    lead: 'Gleicher Streit, neues Gesicht. Symponia ist ein KI-Begleiter für die innere Arbeit. Du nennst sechs Tiere, in denen du dich wiedererkennst, und ein siebtes, vor dem es dich schaudert. Dem siebten weichst du aus — und meistens ist genau dieses Tier das, was deine Beziehungen führt.',
    cta: 'Die Methode ansehen',
    proof: 'App-Store-Bewertung, Zahl der Menschen, die Symponia nutzen, und ein ehrlicher Satz aus der Psychotherapie oder von einem jungianischen Analytiker.',
  },
  recog: {
    k: 'Wiedererkennen',
    h2: 'Welcher dieser Sätze ist deiner?',
    items: [
      'Wir hatten genau diesen Streit schon viermal. Andere Worte, dieselbe Wunde.',
      'Ich habe jemanden völlig anderen gewählt. Nach sechs Monaten ist es dieselbe Beziehung.',
      'Sobald mir jemand nahekommt, finde ich einen Grund zu gehen.',
      'Ich habe in einer Stimme geschimpft, die ich wiedererkannt habe. Es war die meiner Mutter.',
      'Ich kann meinen Bindungsstil bis ins Detail erklären. Aufhören kann ich trotzdem nicht.',
      'Wenn mich jemand fragt, was ich brauche, bin ich wie leer gefegt.',
    ],
  },
  mech: {
    k: 'Warum es sich wiederholt',
    h2: 'Dein Gegenüber ist nicht das Problem. Es ist die Leinwand.',
    lead: 'Die Geschichte, die du dir über die andere Person erzählst, ist meistens eine Geschichte über dich. In der Psychologie heißt das Projektion, und es ist kein Charakterfehler. Es ist eine alte Überlebensstrategie, die ihren Zweck längst überlebt hat. Was du an anderen nicht erträgst, ist sehr oft das, was du in dir selbst verbannt hast.',
    stat: 'Gottman fand heraus, dass 69 % dessen, worüber Paare streiten, nie gelöst wird. Die Paare, die bleiben, sind nicht die, die es gelöst haben. Es sind die, die endlich verstanden haben, worum es eigentlich ging.',
    note: 'Symponia hört immer nur eine Seite. Deine. Und das ist zufällig die einzige, die du ändern kannst. Das hier ist keine Paartherapie. Es ist die Arbeit, die du in die Beziehung mitbringst.',
  },
  seven: {
    k: 'Das siebte Tier',
    h2: 'Sechs Tiere, die sich wie du anfühlen. Eines, vor dem es dich schaudert.',
    lead: 'Nenne sechs, die zu dir gehören. Dann nenne das eine, das dich abstößt. Dieses siebte ist das wichtigste von allen, denn es trägt, was die anderen sechs nicht tragen können.',
    lead2: 'Jedes Tier wird über seine Gabe gelesen, über seinen Schatten und über den Weg dazwischen. Symponia liest alle sieben als ein einziges Feld — auch die Art, wie du liebst, schützt, zurückhältst und dich öffnest. Zugewiesen wird dir nichts. Das ist eine Linse, kein Etikett, und Symponia wird dir nie dein Krafttier verkünden.',
  },
  attune: {
    k: 'Vor den Tieren',
    h2: 'Ein paar Fragen ohne richtige Antworten.',
    lead: 'Was dich herführt. Die Eigenschaft, die dich an anderen am meisten reizt. Die Geschichte, die du über dich selbst erzählst. Kurz, unbequem, ehrlich. So lernt Symponia dich kennen, noch bevor ein einziges Wort fällt.',
  },
  langs: {
    k: 'Jede Sprache',
    h2: 'Schreib in deiner Sprache. Die Antwort kommt in derselben.',
    lead: 'Dein Innenleben findet nicht in deiner Zweitsprache statt. Schreib Symponia auf Deutsch, Italienisch, Russisch, Portugiesisch, Französisch, Spanisch, Dänisch oder Englisch — Symponia versteht dich und antwortet in der Sprache, in der du geschrieben hast.',
  },
  modes: {
    k: 'Drei Wege hinein',
    items: [
      { t: 'Triff deine Archetypen', d: 'Deine sieben Tiere, als ein einziges Feld gelesen. Die Gabe, der Schatten und der Weg dazwischen.' },
      { t: 'Sprich über deinen Tag', d: 'Nicht, was passiert ist. Sondern wie er sich angefühlt hat und was er aufgerührt hat.' },
      { t: 'Einfach reden', d: 'Keine Struktur, keine Frage vorweg. Für die Abende, an denen du nicht weißt, wo du anfangen sollst.' },
    ],
  },
  answer: {
    k: 'Der Unterschied',
    h2: 'Die meisten Apps geben dir eine Frage — und lassen dich damit allein.',
    lead: 'Lies die Bewertungen irgendeiner App für Schattenarbeit, und derselbe Satz taucht immer wieder auf: und dann passierte nichts. Symponia nimmt an, was du mitbringst, in seinem ganzen Gewicht, und jede Antwort setzt auf genau einen Punkt, der dich eine Schicht tiefer führt. Manchmal eine Frage. Manchmal ein Bild, das du nicht mehr weglegen kannst.',
    chat: [
      { who: 's', t: 'die eigenschaft, die dich an anderen am meisten reizt, ist meist die, die du in dir selbst verbannt hast. welche ist es bei ihr?' },
      { who: 'u', t: 'sie ist so bedürftig. ich will nur noch weglaufen.' },
      { who: 's', t: 'und wenn bedürftigkeit auch dir erlaubt wäre — worum würde sie bitten?' },
      { who: 'u', t: 'darum, umsorgt zu werden, vermutlich. ich habe das nie jemandem erlaubt.' },
      { who: 's', t: 'dann ist das, wovor du bei ihr fliehst, genau das, was du dir selbst nie zugestanden hast. du stehst seit jahren am ufer deines eigenen wassers und wartest darauf, hineingebeten zu werden.' },
    ],
  },
  mem: {
    k: 'Gedächtnis',
    h2: 'Symponia erinnert sich. Nur wenn du es willst.',
    lead: 'Du solltest dich nicht jeden Dienstag neu vorstellen müssen. Aber das, was du am dringendsten sagen musst, ist oft genau das, was du am wenigsten gespeichert haben willst. Beides stimmt. Also entscheidest du über beides.',
    items: [
      { t: 'Standardmäßig aus', d: 'Das Gedächtnis bleibt aus, bis du es einschaltest. Solange es aus ist, wird auf unseren Servern überhaupt nichts gespeichert.' },
      { t: 'Jederzeit abschalten', d: 'Schalte es aus, wann immer du willst — auch mitten im Gespräch.' },
      { t: 'Löschen', d: 'Lösche, was gespeichert ist. Ein Tippen. Kein „Bist du sicher?“, das dir ein schlechtes Gewissen macht.' },
      { t: 'Kein Training', d: 'Nichts, was du schreibst, trainiert irgendein Modell. Kontinuität, keine Überwachung.' },
    ],
    pill: 'Standardmäßig aus. Ist das Gedächtnis aus, wird nichts gespeichert.',
  },
  limits: {
    k: 'Ehrliche Grenzen',
    h2: 'Was Symponia nicht vorgibt zu sein.',
    lead: 'Keine Therapie. Keine Paarberatung. Symponia hört nur deine Seite und kann die Beziehung, in der du lebst, nicht sehen. Nicht jedes Gefühl ist eine Wunde, und manchmal ist dein Gegenüber einfach rücksichtslos. Wenn du in einer Krise steckst, wende dich an eine qualifizierte Fachperson oder an den Notruf.',
  },
  close: {
    k: 'Anfangen',
    h2: 'Du kannst diesen Streit kein drittes Mal führen.',
    lead: 'Du ahnst längst, dass das Muster deins ist. Was fehlt, ist eine Möglichkeit, ihm bei der Arbeit zuzusehen: der Zug, den du meidest, der Grund, warum du immer dasselbe Gesicht wählst, der Moment, in dem er das Steuer übernimmt. Genau das tut Symponia.',
    gets: [
      'Benenne das Muster, das deine Beziehungen auswählt',
      'Begegne dem siebten Tier — dem Teil von dir, dem du ausweichst',
      'Schreib in deiner Sprache und werde darin verstanden',
      'Ein Begleiter, der sich noch erinnert, was du ihm vor einem Monat erzählt hast',
    ],
    reassure: 'Der Einstieg ist kostenlos, und die täglichen Reflexionen bleiben es. Jederzeit kündbar in den Einstellungen deiner Apple-ID.',
  },

  compare: {
    k: 'Symponia und die Prompt-Tagebücher',
    h2: 'Ein Prompt stellt die Frage. Hören kann er die Antwort nicht.',
    lead: 'Jede Shadow-Work-App auf dem Markt gibt dir dieselbe Liste von Fragen und ein leeres Feld. Das ist ein Tagebuch mit besserem Marketing. Die Arbeit beginnt nicht, wenn dir eine Frage gestellt wird — sie beginnt, wenn dir etwas antwortet.',
    them: {
      t: 'Prompt-Tagebücher',
      items: [
        'Dieselben Fragen für alle, die es herunterladen',
        'Du musst schon wissen, was dein Schatten ist',
        'Schreibt nichts zurück — du bleibst allein mit der Seite',
        'Vergisst dich zwischen den Sitzungen',
        'Ein Persönlichkeitstyp, überreicht als Etikett',
      ],
    },
    us: {
      t: 'Symponia',
      items: [
        'Eine projektive Methode, die zutage fördert, was du nicht direkt sagen kannst',
        'Das siebte Tier benennt deinen Schatten, in Minuten',
        'Antwortet dir: jede Erwiderung ist auf das geschrieben, was du wirklich geschrieben hast',
        'Erinnert sich über Monate, sodass ein Muster sichtbar wird',
        'Eine Linse zum Hindurchsehen, nie ein Etikett auf dir',
      ],
    },
  },

  founder: {
    k: 'Wie es begann',
    h2: 'Entstanden bei einem Osteopathen — und bei der Frau, die daraus etwas gemacht hat, das man in der Hand halten kann.',
    lead: 'Symponia begann mit Dr. Alessandro Biletta, einem Osteopathen, der sein Berufsleben dort verbracht hat, wo Körper und Seele einander leise begegnen. Nach Jahren, in denen er Menschen zugehört hat, war er sich einer Sache sicher: Unter jeder Geschichte suchen Menschen nach einem Weg, sich selbst wiederzuerkennen. Seine Antwort fand er in der Tiefenpsychologie — bei Jung, bei Hillman, in der alten Sprache der Archetypen.',
    quote: 'Was, wenn du dir selbst durch die Dinge begegnen könntest, die sich ohnehin schon nach dir anfühlen?',
    lead2: 'Yekta Dastranj war bei diesen Gesprächen dabei. Sie hat die Idee in dem Moment verstanden, in dem sie sie hörte — und gespürt, lange bevor sie darüber nachdachte, wie man sie baut. Sie wurde Mitgründerin und machte aus der Vision etwas, das du an einem Dienstagabend öffnen und zu dem du zurückkehren kannst.',
    cta: 'Unsere Geschichte lesen',
  },

  faq: {
    k: 'Fragen',
    h2: 'Häufige Fragen',
    items: [
      { q: 'Kann innere Arbeit meine Beziehungen wirklich verändern?', a: 'Oft ja. Du kannst dein Gegenüber nicht dazu bringen, diese Arbeit zu tun. Aber das meiste, worauf du bei der anderen Person reagierst, ist etwas, das du in dir selbst noch nicht angesehen hast — und dieser Teil liegt bei dir.' },
      { q: 'Was ist Projektion, ganz einfach gesagt?', a: 'Du reagierst auf die Person vor dir, aber aus einer älteren Geschichte heraus. Die Leinwand ist dein Gegenüber. Der Film gehört dir. Symponia hilft dir zu erkennen, was gerade was ist.' },
      { q: 'Warum wähle ich immer wieder denselben Menschentyp?', a: 'Weil vertraut und sicher nicht dasselbe sind. Dein Nervensystem geht auf das zu, was es wiedererkennt. Das Muster zu benennen ist das, was seinen Griff lockert.' },
      { q: 'Ist das Therapie oder Paarberatung?', a: 'Nein. Symponia ist ein Werkzeug zur Reflexion und hört immer nur deine Seite. Wenn du in einer Krise steckst oder klinische Hilfe brauchst, sprich bitte mit einer qualifizierten Fachperson.' },
      { q: 'Sind die Tiere nur ein Persönlichkeitstest?', a: 'Nein. Zugewiesen wird dir nichts. Du wählst sieben, darunter eines, das dich abstößt, und Symponia liest sie zusammen als ein Feld. Symponia wird dir nicht sagen, wer du bist.' },
      { q: 'Erinnert Symponia sich an das, was ich erzähle?', a: 'Nur wenn du das Gedächtnis einschaltest. Standardmäßig ist es aus, und solange es aus ist, wird auf unseren Servern nichts gespeichert. Du kannst jederzeit löschen, was gespeichert ist, und nichts, was du schreibst, trainiert irgendein Modell.' },
      { q: 'Kann ich in meiner eigenen Sprache schreiben?', a: 'Ja. Schreib in jeder Sprache — Symponia versteht dich und antwortet in derselben.' },
    ],
  },

  about: {
    metaTitle: 'Über uns — Die Menschen hinter Symponia',
    metaDesc: 'Symponia wurde von Dr. Alessandro Biletta und Yekta Dastranj gebaut — einem Philosophen des Innenlebens und der Frau, die der Vision eine Form gegeben hat, die man in der Hand halten kann.',
    k: 'Die Menschen hinter Symponia',
    h1a: 'Hör dich wieder',
    h1b: 'selbst.',
    lead: 'Die Welt war nie lauter. Irgendwo unter dem Lärm ist die Stimme verstummt, der du früher vertraut hast. Symponia wurde gebaut, um dir den Weg zurück zu ihr zu öffnen. Nicht, um dich zu reparieren. Nicht, um dir Ratschläge zu geben. Nur, um zuzuhören und zurückzugeben, was zu hören war.',
    beganK: 'Wie es begann',
    began: [
      'Symponia begann mit Dr. Alessandro Biletta, einem Osteopathen, der sein Leben dort verbracht hat, wo Körper und Seele einander leise begegnen. Nach Jahren, in denen er Menschen zugehört hat, war er sich einer Sache sicher: Unter jeder Geschichte suchen Menschen nach einem Weg, sich selbst wiederzuerkennen.',
      'Seine Antwort fand er in der Tiefenpsychologie. Bei Jung, bei Hillman, in der alten Sprache der Archetypen. Und er stellte die Frage, die zur Seele von Symponia werden sollte.',
      'Es wuchs, wie die besten Ideen wachsen. Langsam, im Gespräch. In langen Abenden über das Innere, über Verbundenheit, über das, was es braucht, um an einen ruhigeren Ort in sich selbst zurückzufinden.',
      'Yekta Dastranj war Teil dieser Gespräche. Sie hat die Idee in dem Moment verstanden, in dem sie sie hörte, und sie gespürt, lange bevor sie darüber nachdachte, wie man sie baut. Sie wurde Mitgründerin und gab der Vision eine Form, die du in der Hand halten, öffnen und zu der du jeden Tag zurückkehren kannst.',
    ],
    quote: 'Was, wenn du dir selbst durch die Dinge begegnen könntest, die sich ohnehin schon nach dir anfühlen?',
    people: [
      {
        name: 'Dr. Alessandro Biletta',
        role: 'Gründer',
        bio: 'Das philosophische Herz von Symponia. Osteopath und lebenslanger Schüler des Innenlebens. Alessandro ist überzeugt, dass echtes Verstehen lange beginnt, bevor jemand nach einer Lösung greift. Die Archetypen-Methode im Zentrum von Symponia ist seine.',
      },
      {
        name: 'Yekta Dastranj',
        role: 'Mitgründerin',
        bio: 'Diejenige, die es zum Leben erweckt hat. Wo Alessandro die Philosophie sah, sah Yekta die Erfahrung. Sie hat geformt, wie Symponia sich in deinen Händen anfühlt — überzeugt davon, dass etwas so Persönliches einfach, privat und zutiefst menschlich bleiben muss.',
      },
    ],
    believeK: 'Woran wir glauben',
    beliefs: [
      'Dass man mit dem Verstehen seiner selbst nicht auf eine Krise warten sollte.',
      'Dass die richtige Technologie Stille schaffen kann, statt sie zu füllen.',
      'Und dass ein Begleiter nichts Stärkeres tun kann, als dir einen Gedanken zurückzugeben, den du längst hattest — aber nie laut auszusprechen gewagt hast.',
    ],
    closing: [
      'Symponia ist keine Therapie und wird nie so tun, als wäre es das. Symponia ist ein Denkraum. Ein Spiegel, der nicht wegsieht.',
      'Wir haben es für alle gemacht, die je geahnt haben, dass mehr in ihnen steckt, als sie je die Ruhe hatten zu hören.',
    ],
    outroA: 'Schön, dass du da bist.',
    outroB: 'Wir haben auf dich gewartet.',
  },
};

export default de;
