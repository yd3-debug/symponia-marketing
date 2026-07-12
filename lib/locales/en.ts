import type { Dict } from './types';

// English is the source of truth. Every other locale is a translation of this
// file, not of another translation. Change copy here first.

export const en: Dict = {
  shell: {
    nav: { how: 'How it works', modes: 'Modes', about: 'About', credits: 'Pricing', faq: 'FAQ' },
    badge: { top: 'Download on the', bottom: 'App Store' },
    footer: {
      privacy: 'Privacy',
      terms: 'Terms',
      refunds: 'Refunds',
      eula: 'EULA',
      credits: 'Pricing',
      contact: 'Contact',
      rights: 'Symponia by Boroto Ltd',
      built: 'Built by YD',
      explore: 'Explore',
      legal: 'Legal',
      blurb: 'An AI companion for inner work. Depth psychology, in your own language.',
      designedBy: 'Designed by',
    },
    legalNote: '',
  },

  nav: { rel: 'The shadow', method: 'The method', memory: 'Memory', faq: 'FAQ', about: 'About' },
  hero: {
    eyebrow: 'Shadow work, with a method.',
    l1: 'The animal you cannot stand',
    l2: 'is the one running your life.',
    lead: 'Name six animals that feel like you. Then name the one that makes your skin crawl. That seventh is your shadow: the part of yourself you exiled so early you no longer remember doing it. It has been making your decisions ever since. Symponia is an AI companion for shadow work that starts by naming it.',
    cta: 'Meet your seventh animal',
    proof: 'Depth psychology, not therapy. Built on Jung, Hillman and the old language of archetypes.',
  },
  recog: {
    k: 'Recognition',
    h2: 'Which one of these is yours?',
    items: [
      'I know exactly why I do it. I do it anyway.',
      'I can explain my patterns in detail. I still cannot stop repeating them.',
      'The thing I judge hardest in other people is the thing I never let myself be.',
      'I get close to what I want, then quietly sabotage it.',
      'I heard myself speak in a voice I recognised. It was my mother’s.',
      'I have journalled about this for two years. Nothing has moved.',
    ],
  },
  mech: {
    k: 'Why it keeps happening',
    h2: 'What you cannot stand in others is what you buried in yourself.',
    lead: 'Jung called it the shadow: everything you learned, early and without consenting, was unacceptable about you. It does not leave. It goes underground and runs things from there, which ambitions you allow yourself, which rooms you shrink in, which people you cannot forgive. Psychologists call the mechanism projection. It is not a character flaw. It is an old survival strategy that outlived its usefulness.',
    stat: 'The shadow is not your trauma, and it is not the worst of you. It is the part you refused. Jung’s claim was that it holds as much of your unlived strength as it does your unlived shame, which is why leaving it buried costs you twice.',
    note: 'Symponia only ever hears one side. Yours. That happens to be the only side you can change.',
  },
  seven: {
    k: 'The seventh animal',
    h2: 'Six animals that feel like you. One that makes your skin crawl.',
    lead: 'Name six that belong to you. Then name the one that repels you. That seventh is the most important of all, because it holds what the other six cannot carry, and your revulsion is the tell. You do not recoil from what is foreign to you. You recoil from what is disowned.',
    lead2: 'Each animal is read for its gift, its shadow, and the path between them. Symponia reads the whole set together. Nothing is assigned to you: this is a projective method, not a personality type. It is a lens, not a label, and it will never tell you your spirit animal.',
  },
  attune: {
    k: 'Before the animals',
    h2: 'A few questions with no right answers.',
    lead: 'What brings you here. The trait that irritates you most in others. The story you tell about yourself. Short, uncomfortable, honest. This is how Symponia comes to know you before it says a word.',
  },
  langs: {
    k: 'Any language',
    h2: 'Write in your own language. It answers in kind.',
    lead: 'Your inner life does not happen in your second language. Write to Symponia in Italian, Russian, Portuguese, French, German, Spanish, Danish or English, and it understands and replies in the language you wrote in.',
  },
  modes: {
    k: 'Three ways in',
    items: [
      { t: 'Meet your archetypes', d: 'Your seven animals, read as one field. The gift, the shadow, and the path between them.' },
      { t: 'Talk through your day', d: 'Not what happened. The actual texture of it, and what it stirred.' },
      { t: 'Just talk', d: 'No structure, no prompt. For the nights you do not know where to begin.' },
    ],
  },
  answer: {
    k: 'The difference',
    h2: 'Most shadow work apps hand you a prompt and leave you alone with it.',
    lead: 'Read the reviews of any of them and the same sentence keeps surfacing: and then nothing happened. A prompt cannot see you. It asks the same question of everyone and has no idea what you answered last time. Symponia meets what you bring at its full weight, and every reply lands on the one thing that takes you a layer deeper.',
    chat: [
      { who: 's', t: 'the trait that irritates you most in other people is usually the one you exiled in yourself. what is it?' },
      { who: 'u', t: 'people who need things from others. it makes me want to run.' },
      { who: 's', t: 'and if needing were allowed in you, what would it be asking for?' },
      { who: 'u', t: 'to be looked after, i suppose. i have never let anyone do that.' },
      { who: 's', t: 'then the thing you flee in them is the thing you have never permitted yourself. you have been standing at the edge of your own water for years, waiting to be invited in.' },
    ],
  },
  mem: {
    k: 'Memory',
    h2: 'It remembers. Only if you tell it to.',
    lead: 'You should not have to reintroduce yourself every Tuesday. But the thing you most need to say is often the thing you least want stored. Both are true, so both are yours to control.',
    items: [
      { t: 'Off by default', d: 'Memory is off until you turn it on. With it off, nothing is stored on our servers at all.' },
      { t: 'Turn it off', d: 'Switch it off whenever you want, including in the middle of a conversation.' },
      { t: 'Delete', d: 'Remove what it holds. One tap. No are-you-sure guilt trip.' },
      { t: 'Never trained on', d: 'Nothing you write trains anyone’s model. Continuity, not surveillance.' },
    ],
    pill: 'Off by default. Nothing stored when memory is off.',
  },
  limits: {
    k: 'Honest limits',
    h2: 'What Symponia will not pretend to be.',
    lead: 'Not therapy, and not a substitute for it. It hears only your side and cannot see your life from the outside. Not every feeling is a wound, and not everything you dislike in someone else is your shadow, sometimes people are simply being inconsiderate. If you are in crisis, contact a qualified professional or your local emergency services.',
  },
  close: {
    k: 'Begin',
    h2: 'Your shadow has been making your decisions for years. Meet it.',
    lead: 'You already suspect the pattern is yours. What you do not have is a way to watch it work: the trait you avoid, the reason you keep making the same turn, the moment it takes the wheel. That is the whole of what Symponia does.',
    gets: [
      'Name your shadow in about four minutes, through the seven animals',
      'Go deeper than a prompt, every reply is written for what you actually said',
      'Write in your own language and be understood in it',
      'A companion that still remembers what you told it last month',
    ],
    reassure: 'Free to start, and daily reflections stay free. Cancel any time in your Apple ID settings.',
  },

  compare: {
    k: 'Symponia vs. the prompt journals',
    h2: 'A prompt asks the question. It cannot hear the answer.',
    lead: 'Every shadow work app on the market gives you the same list of prompts and an empty box. That is a diary with better marketing. The work does not begin when you are asked a question, it begins when something answers you back.',
    them: {
      t: 'Prompt journals',
      items: [
        'The same prompts for everyone who downloads it',
        'You have to already know what your shadow is',
        'Writes nothing back, you are alone with the page',
        'Forgets you between sessions',
        'A personality type, handed to you as a label',
      ],
    },
    us: {
      t: 'Symponia',
      items: [
        'A projective method that surfaces what you cannot state directly',
        'The seventh animal names your shadow for you, in minutes',
        'Answers you, each reply written for what you actually wrote',
        'Remembers across months, so a pattern becomes visible',
        'A lens you look through, never a label put on you',
      ],
    },
  },

  founder: {
    k: 'Where it began',
    h2: 'Built by an osteopath, and the woman who gave it a form you can hold.',
    lead: 'Symponia began with Dr. Alessandro Biletta, an osteopath who spent his career working where the body and the mind quietly meet. After years of listening to people for a living, he became certain of one thing. Beneath every story, people are looking for a way to recognise themselves. He found his answer in depth psychology, in Jung, in Hillman, in the old language of archetypes.',
    quote: 'What if you could meet yourself through the things that already feel like you?',
    lead2: 'Yekta Dastranj was there for those conversations. She understood the idea the moment she heard it, and felt it long before she thought about how to build it. She became co-founder, and turned the vision into something you can open on a Tuesday night and return to.',
    cta: 'Read our story',
  },

  faq: {
    k: 'Questions',
    h2: 'FAQ',
    items: [
      { q: 'What is shadow work, in plain English?', a: 'Shadow work means looking at the parts of yourself you learned to hide, usually early, usually to stay safe. Carl Jung called this the shadow. It does not disappear when you bury it; it starts making your decisions from underground. Shadow work is the practice of bringing it back into view.' },
      { q: 'How do I find out what my shadow is?', a: 'The shortcut is your own revulsion. The trait you find unbearable in other people is very often the one you exiled in yourself. Symponia uses this directly: you choose six animals that feel like you and a seventh that repels you, and the seventh is where your shadow is hiding.' },
      { q: 'How is this different from a shadow work journal or prompt app?', a: 'A prompt asks a question and leaves you alone with a blank page. Symponia answers. It reads what you actually wrote, not what an average user might have written, and each reply is aimed at the one thing that takes you a layer deeper.' },
      { q: 'Are the animals just a personality quiz?', a: 'No. Nothing is assigned to you and there is no type at the end. You choose seven, including one that repels you, and Symponia reads them together as a field. It is a projective method, closer in spirit to an inkblot than to a quiz, and it will never tell you your spirit animal.' },
      { q: 'What is projection?', a: 'Reacting to the person in front of you based on an older story. The screen is them. The film is yours. Symponia helps you notice which is which.' },
      { q: 'Is this therapy?', a: 'No. Symponia is a reflective tool for inner work, not therapy and not a substitute for it. It only ever hears your side. If you are in crisis or need clinical support, please speak to a qualified professional.' },
      { q: 'Does it remember what I tell it?', a: 'Only if you turn memory on. It is off by default, and with it off nothing is stored on our servers. You can delete what it holds, and nothing you write trains anyone’s model.' },
      { q: 'Can I do shadow work in my own language?', a: 'Yes. Write in English, Italian, Russian, Portuguese, French, German, Spanish or Danish, and Symponia understands and replies in the language you wrote in.' },
    ],
  },

  about: {
    metaTitle: 'About: The people behind Symponia',
    metaDesc: 'Symponia was built by Dr. Alessandro Biletta and Yekta Dastranj: a philosopher of the inner life, and the one who gave the vision a form you can hold.',
    k: 'The people behind Symponia',
    h1a: 'Hear yourself',
    h1b: 'again.',
    lead: 'The world has never been louder. Somewhere beneath the noise, the voice you used to trust has gone quiet. Symponia was built to help you find your way back to it. Not to fix you. Not to advise you. Only to listen, and to reflect what it hears.',
    beganK: 'Where it began',
    began: [
      'Symponia started with Dr. Alessandro Biletta, an osteopath who has spent his life working where the body and the mind quietly meet. After years of listening to people for a living, he became certain of one thing. Beneath every story, people are looking for a way to recognise themselves.',
      'He found his answer in depth psychology. In Jung, in Hillman, in the old language of archetypes. And he asked the question that would become the soul of Symponia.',
      'It grew the way the best ideas do. Slowly, in conversation. Long talks about the inner self, about connection, about what it takes to return to a calmer place within yourself.',
      'Yekta Dastranj was part of those conversations. She understood the idea the moment she heard it, and she felt it long before she thought about how to build it. She became co-founder and gave the vision a form you can hold, open, and return to every day.',
    ],
    quote: 'What if you could meet yourself through the things that already feel like you?',
    people: [
      {
        name: 'Dr. Alessandro Biletta',
        role: 'Founder',
        bio: 'The philosophical heart of Symponia. An osteopath and a lifelong student of the inner life, Alessandro came to believe that real understanding begins long before anyone reaches for a solution. The archetype method at the centre of Symponia is his.',
      },
      {
        name: 'Yekta Dastranj',
        role: 'Co-founder',
        bio: 'The one who brought it to life. Where Alessandro saw the philosophy, Yekta saw the experience. She shaped how Symponia feels in your hands, certain that something this personal should stay simple, private, and deeply human.',
      },
    ],
    believeK: 'What we believe',
    beliefs: [
      'That understanding yourself should not have to wait for a crisis.',
      'That the right kind of technology can create silence rather than fill it.',
      'And that the most powerful thing a companion can do is hand you back a thought you already had, but had never dared to say aloud.',
    ],
    closing: [
      'Symponia is not therapy, and it will never pretend to be. It is a thinking space. A mirror that does not flinch.',
      'We made it for anyone who has ever sensed there is more to them than they have had the quiet to hear.',
    ],
    outroA: 'Welcome.',
    outroB: 'We have been waiting for you.',
  },
};

export default en;
