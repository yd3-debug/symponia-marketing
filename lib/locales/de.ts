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

  nav: { rel: 'Der Schatten', method: 'Die Methode', memory: 'Gedächtnis', faq: 'FAQ', about: 'Über uns' },
  hero: {
    eyebrow: 'Schattenarbeit, mit Methode.',
    l1: 'Das Tier, das du nicht ausstehen kannst,',
    l2: 'lenkt dein Leben.',
    lead: 'Nenne sechs Tiere, die sich wie du anfühlen. Dann nenne das eine, bei dem sich dir alles zusammenzieht. Dieses siebte ist dein Schatten — der Teil von dir, den du so früh verbannt hast, dass du dich nicht mehr daran erinnerst. Seither trifft er deine Entscheidungen. Symponia ist ein KI-Begleiter für Schattenarbeit, der damit beginnt, ihn zu benennen.',
    cta: 'Triff dein siebtes Tier',
    proof: 'Tiefenpsychologie, keine Therapie. Auf der Grundlage von Jung, Hillman und der alten Sprache der Archetypen.',
  },
  recog: {
    k: 'Wiedererkennen',
    h2: 'Welcher dieser Sätze gehört dir?',
    items: [
      'Ich weiß genau, warum ich es tue. Ich tue es trotzdem.',
      'Ich kann meine Muster im Detail erklären. Ich kann sie trotzdem nicht lassen.',
      'Was ich an anderen am härtesten verurteile, habe ich mir selbst nie erlaubt.',
      'Ich komme dem nahe, was ich will, und sabotiere es dann still.',
      'Ich hörte mich in einem Tonfall sprechen, den ich kannte. Es war der meiner Mutter.',
      'Ich schreibe seit zwei Jahren darüber Tagebuch. Nichts hat sich bewegt.',
    ],
  },
  mech: {
    k: 'Warum es immer wieder geschieht',
    h2: 'Was du an anderen nicht erträgst, hast du in dir begraben.',
    lead: 'Jung nannte es den Schatten: alles, wovon du früh und ungefragt gelernt hast, es sei an dir nicht annehmbar. Es verschwindet nicht. Es geht unter die Oberfläche und regiert von dort — welche Ziele du dir zugestehst, in welchen Räumen du kleiner wirst, wem du nicht verzeihen kannst. Den Mechanismus nennt die Psychologie Projektion. Er ist kein Charakterfehler, sondern eine alte Überlebensstrategie, die ihren Zweck überlebt hat.',
    stat: 'Der Schatten ist nicht dein Trauma, und er ist nicht das Schlechteste an dir. Er ist der Teil, den du abgelehnt hast. Jungs These war, dass er ebenso viel ungelebte Kraft enthält wie ungelebte Scham — weshalb es dich doppelt kostet, ihn begraben zu lassen.',
    note: 'Symponia hört immer nur eine Seite. Deine. Das ist zufällig die einzige, die du ändern kannst.',
  },
  seven: {
    k: 'Das siebte Tier',
    h2: 'Sechs Tiere, die sich wie du anfühlen. Eines, bei dem es dich schüttelt.',
    lead: 'Nenne sechs, die dir gehören. Dann nenne das eine, das dich abstößt. Dieses siebte ist das wichtigste von allen, denn es trägt, was die anderen sechs nicht tragen können — und dein Widerwille ist der Hinweis. Man schaudert nicht vor dem Fremden. Man schaudert vor dem Verleugneten.',
    lead2: 'Jedes Tier wird auf seine Gabe gelesen, auf seinen Schatten und auf den Weg dazwischen. Symponia liest das ganze Feld zusammen. Dir wird nichts zugewiesen: das hier ist eine projektive Methode, kein Persönlichkeitstyp. Eine Linse, kein Etikett — und es wird dir niemals dein Krafttier nennen.',
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
    h2: 'Die meisten Schattenarbeit-Apps geben dir eine Frage und lassen dich damit allein.',
    lead: 'Lies die Rezensionen irgendeiner davon, und derselbe Satz taucht immer wieder auf: und dann passierte nichts. Eine vorgefertigte Frage kann dich nicht sehen. Sie stellt allen dieselbe Frage und weiß nicht, was du beim letzten Mal geantwortet hast. Symponia nimmt ernst, was du bringst, und jede Antwort zielt auf das eine, das dich eine Schicht tiefer führt.',
    chat: [
      { who: 's', t: 'die Eigenschaft, die dich an anderen am meisten reizt, ist meist die, die du in dir verbannt hast. welche ist es?' },
      { who: 'u', t: 'Menschen, die etwas von anderen brauchen. ich will dann nur weg.' },
      { who: 's', t: 'und wenn Brauchen in dir erlaubt wäre — worum würde es bitten?' },
      { who: 'u', t: 'darum, umsorgt zu werden, nehme ich an. ich habe das nie jemanden tun lassen.' },
      { who: 's', t: 'dann ist das, wovor du bei ihnen fliehst, genau das, was du dir nie gestattet hast. du stehst seit Jahren am Ufer deines eigenen Wassers und wartest darauf, hineingebeten zu werden.' },
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
    lead: 'Keine Therapie und kein Ersatz dafür. Es hört nur deine Seite und kann dein Leben nicht von außen sehen. Nicht jedes Gefühl ist eine Wunde, und nicht alles, was dir an anderen missfällt, ist dein Schatten — manchmal sind Menschen schlicht rücksichtslos. Wenn du in einer Krise steckst, wende dich an eine qualifizierte Fachkraft oder den Notruf.',
  },
  close: {
    k: 'Anfangen',
    h2: 'Dein Schatten trifft seit Jahren deine Entscheidungen. Begegne ihm.',
    lead: 'Du ahnst längst, dass das Muster deins ist. Was fehlt, ist eine Möglichkeit, ihm bei der Arbeit zuzusehen — der Zug, den du meidest, der Grund, warum du immer dieselbe Abzweigung nimmst, der Moment, in dem er das Steuer übernimmt. Genau das tut Symponia.',
    gets: [
      'Benenne deinen Schatten in etwa vier Minuten, über die sieben Tiere',
      'Geh tiefer als eine Frage — jede Antwort ist auf das geschrieben, was du wirklich gesagt hast',
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
    h2: 'FAQ',
    items: [
      { q: 'Was ist Schattenarbeit, einfach gesagt?', a: 'Schattenarbeit heißt, auf die Teile von dir zu schauen, die du früh gelernt hast zu verbergen — meist, um sicher zu sein. Carl Jung nannte das den Schatten. Er verschwindet nicht, wenn du ihn vergräbst; er beginnt, von unten deine Entscheidungen zu treffen. Schattenarbeit ist die Praxis, ihn wieder sichtbar zu machen.' },
      { q: 'Wie finde ich heraus, was mein Schatten ist?', a: 'Die Abkürzung ist dein eigener Widerwille. Die Eigenschaft, die du an anderen unerträglich findest, ist sehr oft die, die du in dir verbannt hast. Symponia nutzt genau das: du wählst sechs Tiere, die sich wie du anfühlen, und ein siebtes, das dich abstößt — und im siebten versteckt sich dein Schatten.' },
      { q: 'Wie unterscheidet sich das von einem Schattenarbeit-Tagebuch?', a: 'Eine vorgefertigte Frage stellt eine Frage und lässt dich mit einer leeren Seite allein. Symponia antwortet. Es liest, was du tatsächlich geschrieben hast, nicht was ein Durchschnittsnutzer geschrieben hätte, und jede Erwiderung zielt auf das eine, das dich eine Schicht tiefer führt.' },
      { q: 'Sind die Tiere nur ein Persönlichkeitstest?', a: 'Nein. Dir wird nichts zugewiesen, und am Ende steht kein Typ. Du wählst sieben, darunter eines, das dich abstößt, und Symponia liest sie zusammen als Feld. Es ist eine projektive Methode — dem Rorschach näher als einem Quiz — und es wird dir nie dein Krafttier nennen.' },
      { q: 'Was ist Projektion?', a: 'Auf den Menschen vor dir mit einer älteren Geschichte zu reagieren. Die Leinwand sind sie. Der Film ist deiner. Symponia hilft dir zu bemerken, was was ist.' },
      { q: 'Ist das Therapie?', a: 'Nein. Symponia ist ein Werkzeug zur Selbstreflexion, keine Therapie und kein Ersatz dafür. Es hört immer nur deine Seite. Wenn du in einer Krise steckst oder klinische Unterstützung brauchst, wende dich bitte an eine qualifizierte Fachkraft.' },
      { q: 'Erinnert es sich an das, was ich erzähle?', a: 'Nur wenn du das Gedächtnis einschaltest. Es ist standardmäßig aus, und solange es aus ist, wird nichts auf unseren Servern gespeichert. Du kannst löschen, was es hält, und nichts, was du schreibst, trainiert irgendein Modell.' },
      { q: 'Kann ich Schattenarbeit in meiner Sprache machen?', a: 'Ja. Schreib auf Deutsch, Englisch, Italienisch, Russisch, Portugiesisch, Französisch, Spanisch oder Dänisch — Symponia versteht dich und antwortet in der Sprache, in der du geschrieben hast.' },
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
