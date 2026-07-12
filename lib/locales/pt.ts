import type { Dict } from './types';

// Português europeu. Tratamento por «tu» em todo o ficheiro.

export const pt: Dict = {
  shell: {
    nav: { how: 'Como funciona', modes: 'Modos', about: 'Sobre', credits: 'Preços', faq: 'FAQ' },
    badge: { top: 'Descarregar na', bottom: 'App Store' },
    footer: {
      privacy: 'Privacidade',
      terms: 'Termos',
      refunds: 'Reembolsos',
      eula: 'EULA',
      credits: 'Preços',
      contact: 'Contacto',
      rights: 'Symponia da Boroto Ltd',
      built: 'Criado por YD',
      explore: 'Explorar',
      legal: 'Informação legal',
      blurb: 'Um companheiro de IA para o trabalho interior. Psicologia profunda, na sua língua.',
    },
    legalNote: 'Esta tradução é disponibilizada apenas para facilitar a leitura: só a versão em inglês tem força vinculativa e é a que prevalece.',
  },

  nav: { rel: 'Relações', method: 'O método', memory: 'Memória', faq: 'FAQ', about: 'Sobre' },
  hero: {
    eyebrow: 'Psicologia profunda. Não é terapia.',
    l1: 'Já tiveste esta discussão',
    l2: 'antes. Com outra pessoa.',
    lead: 'A mesma discussão, outro rosto. Symponia é uma companheira de IA para o trabalho interior. Escolhes seis animais que se parecem contigo e um sétimo que te arrepia. O sétimo é aquele que evitas — e costuma ser o que manda nas tuas relações.',
    cta: 'Ver o método',
    proof: 'Avaliação na App Store, número de pessoas e uma frase honesta de um psicoterapeuta ou analista junguiano.',
  },
  recog: {
    k: 'Reconhecimento',
    h2: 'Qual destas é a tua?',
    items: [
      'Já tivemos esta discussão exata quatro vezes. Palavras diferentes, a mesma ferida.',
      'Escolhi alguém completamente diferente. Seis meses depois, é a mesma relação.',
      'Assim que a outra pessoa se aproxima, arranjo uma razão para ir embora.',
      'Respondi-lhe torto com uma voz que reconheci. Era a da minha mãe.',
      'Sei explicar o meu estilo de vinculação ao pormenor. Continuo sem conseguir mudá-lo.',
      'Quando me perguntam do que preciso, fico em branco.',
    ],
  },
  mech: {
    k: 'Porque é que continua a acontecer',
    h2: 'O problema não é o teu par. É o ecrã.',
    lead: 'A história que contas sobre a outra pessoa costuma ser, afinal, uma história sobre ti. Os psicólogos chamam-lhe projeção, e não é um defeito de carácter. É uma velha estratégia de sobrevivência que durou mais do que a sua utilidade. Aquilo que não suportas em quem tens à frente é, muitas vezes, aquilo que exilaste em ti.',
    stat: 'Gottman descobriu que 69% daquilo por que os casais discutem nunca chega a ser resolvido. Os casais que duram não são os que resolveram. São os que finalmente perceberam do que aquilo falava.',
    note: 'Symponia ouve sempre um lado só. O teu. Que é, por acaso, o único que podes mudar. Isto não é terapia de casal. É o trabalho que levas para o casal.',
  },
  seven: {
    k: 'O sétimo animal',
    h2: 'Seis animais que se parecem contigo. Um que te causa repulsa.',
    lead: 'Escolhe seis que te pertençam. Depois escolhe aquele que te repele. Esse sétimo é o mais importante de todos, porque guarda aquilo que os outros seis não conseguem carregar.',
    lead2: 'Cada animal é lido pelo seu dom, pela sua sombra e pelo caminho entre os dois. Symponia lê o conjunto inteiro como um só campo — incluindo a forma como amas, proteges, guardas e te abres. Nada te é atribuído. Isto é uma lente, não um rótulo, e nunca te vai dizer qual é o teu animal espiritual.',
  },
  attune: {
    k: 'Antes dos animais',
    h2: 'Umas quantas perguntas sem respostas certas.',
    lead: 'O que te traz aqui. O traço que mais te irrita nos outros. A história que contas sobre ti. Curtas, incómodas, honestas. É assim que Symponia te fica a conhecer antes de dizer uma palavra.',
  },
  langs: {
    k: 'Qualquer língua',
    h2: 'Escreve na tua língua. Symponia responde nela.',
    lead: 'A tua vida interior não acontece na tua segunda língua. Escreve a Symponia em português, italiano, russo, francês, alemão, espanhol, dinamarquês ou inglês, e Symponia compreende e responde na língua em que escreveste.',
  },
  modes: {
    k: 'Três formas de entrar',
    items: [
      { t: 'Conhece os teus arquétipos', d: 'Os teus sete animais, lidos como um só campo. O dom, a sombra e o caminho entre eles.' },
      { t: 'Fala sobre o teu dia', d: 'Não o que aconteceu. A textura daquilo que aconteceu, e o que te mexeu por dentro.' },
      { t: 'Fala, simplesmente', d: 'Sem estrutura, sem perguntas de partida. Para as noites em que não sabes por onde começar.' },
    ],
  },
  answer: {
    k: 'A diferença',
    h2: 'A maioria das apps dá-te uma pergunta e depois desaparece.',
    lead: 'Lê as avaliações de qualquer app de trabalho com a sombra e a mesma frase repete-se: e depois não aconteceu nada. Symponia recebe aquilo que trazes com todo o peso que tem, e cada resposta assenta numa única coisa que te leva uma camada mais fundo. Às vezes uma pergunta. Às vezes uma imagem que já não consegues largar.',
    chat: [
      { who: 's', t: 'o traço que mais te irrita nos outros costuma ser aquele que exilaste em ti. qual é, nela?' },
      { who: 'u', t: 'ela é tão carente. dá-me vontade de fugir.' },
      { who: 's', t: 'e se a carência te fosse permitida, o que é que ela estaria a pedir?' },
      { who: 'u', t: 'que cuidassem de mim, suponho. nunca deixei ninguém fazer isso.' },
      { who: 's', t: 'então aquilo de que foges nela é aquilo que nunca te permitiste. há anos que estás à beira da tua própria água, à espera de que te convidem a entrar.' },
    ],
  },
  mem: {
    k: 'Memória',
    h2: 'Symponia lembra-se. Só se tu deixares.',
    lead: 'Não devias ter de te apresentar de novo todas as terças-feiras. Mas aquilo que mais precisas de dizer é, muitas vezes, o que menos queres guardado. As duas coisas são verdade — por isso, as duas ficam nas tuas mãos.',
    items: [
      { t: 'Desligada à partida', d: 'A memória está desligada até seres tu a ligá-la. Com ela desligada, não fica nada guardado nos nossos servidores.' },
      { t: 'Desliga quando quiseres', d: 'Podes desligá-la a qualquer momento, mesmo a meio de uma conversa.' },
      { t: 'Apaga', d: 'Deita fora tudo o que ficou guardado. Um toque. Sem aquele «tens a certeza?» a tentar demover-te.' },
      { t: 'Nunca serve para treinar', d: 'Nada do que escreves treina o modelo de quem quer que seja. Continuidade, não vigilância.' },
    ],
    pill: 'Desligada à partida. Com a memória desligada, não fica nada guardado.',
  },
  limits: {
    k: 'Limites honestos',
    h2: 'O que Symponia não vai fingir ser.',
    lead: 'Não é terapia. Não é terapia de casal. Ouve apenas o teu lado e não consegue ver a relação em que estás. Nem todo o sentimento é uma ferida e, às vezes, a outra pessoa está apenas a ser pouco cuidadosa. Se estiveres em crise, procura um profissional qualificado ou os serviços de emergência da tua zona.',
  },
  close: {
    k: 'Começar',
    h2: 'Pode deixar de ter esta discussão pela terceira vez.',
    lead: 'Já desconfia de que o padrão é seu. O que lhe falta é uma forma de o ver a funcionar: o traço que evita, a razão por que escolhe sempre o mesmo rosto, o instante em que ele assume o comando. É exatamente isso que a Symponia faz.',
    gets: [
      'Dê um nome ao padrão que escolhe as suas relações',
      'Conheça o sétimo animal — a parte de si que evita',
      'Escreva na sua língua e seja compreendido nela',
      'Um companheiro que ainda se lembra do que lhe contou há um mês',
    ],
    reassure: 'Começar é gratuito e as reflexões diárias continuam gratuitas. Cancele quando quiser nas definições do seu ID Apple.',
  },

  founder: {
    k: 'Onde tudo começou',
    h2: 'Feita por um osteopata e pela mulher que lhe deu uma forma que se segura na mão.',
    lead: 'Symponia começou com o Dr. Alessandro Biletta, osteopata que passou a carreira a trabalhar no lugar onde o corpo e a mente se encontram em silêncio. Depois de anos a ouvir pessoas para viver, ficou certo de uma coisa: por baixo de cada história, as pessoas procuram uma forma de se reconhecerem. Encontrou a resposta na psicologia profunda — em Jung, em Hillman, na velha linguagem dos arquétipos.',
    quote: 'E se pudesses encontrar-te através daquilo que já se parece contigo?',
    lead2: 'Yekta Dastranj esteve presente nessas conversas. Percebeu a ideia assim que a ouviu, e sentiu-a muito antes de pensar em como a construir. Tornou-se cofundadora e transformou a visão em algo que se abre numa terça-feira à noite e a que se volta.',
    cta: 'Ler a nossa história',
  },

  faq: {
    k: 'Perguntas',
    h2: 'FAQ',
    items: [
      { q: 'O trabalho interior pode mesmo mudar as minhas relações?', a: 'Muitas vezes, pode. Não consegues obrigar o teu par a fazer o trabalho. Mas grande parte daquilo a que reages na outra pessoa é algo que ainda não olhaste em ti — e essa parte é tua para mover.' },
      { q: 'O que é a projeção, em palavras simples?', a: 'É reagires a quem tens à frente a partir de uma história muito mais antiga. O ecrã é o teu par. O filme é teu. Symponia ajuda-te a distinguir um do outro.' },
      { q: 'Porque é que escolho sempre o mesmo tipo de pessoa?', a: 'Porque familiar e seguro não são a mesma coisa. O teu sistema nervoso caminha para aquilo que reconhece. Dar nome ao padrão é o que lhe afrouxa a força.' },
      { q: 'Isto é terapia ou terapia de casal?', a: 'Não. Symponia é uma ferramenta de reflexão e ouve sempre apenas o teu lado. Se estiveres em crise ou precisares de apoio clínico, fala com um profissional qualificado.' },
      { q: 'Os animais são só um teste de personalidade?', a: 'Não. Nada te é atribuído. Escolhes sete, incluindo um que te repele, e Symponia lê-os em conjunto, como um campo. Não te vai dizer quem tu és.' },
      { q: 'Symponia lembra-se do que lhe digo?', a: 'Só se ligares a memória. Está desligada à partida e, com ela desligada, não fica nada guardado nos nossos servidores. Podes apagar o que ficou guardado, e nada do que escreves treina o modelo de quem quer que seja.' },
      { q: 'Posso escrever na minha língua?', a: 'Podes. Escreve em qualquer língua e Symponia compreende e responde nessa mesma língua.' },
    ],
  },

  about: {
    metaTitle: 'Sobre — As pessoas por detrás de Symponia',
    metaDesc: 'Symponia foi criada pelo Dr. Alessandro Biletta e por Yekta Dastranj — um filósofo da vida interior e a pessoa que deu à visão uma forma que se segura na mão.',
    k: 'As pessoas por detrás de Symponia',
    h1a: 'Volta a ouvir',
    h1b: 'a tua voz.',
    lead: 'O mundo nunca esteve tão barulhento. Algures por baixo do ruído, a voz em que confiavas ficou calada. Symponia foi criada para te ajudar a encontrar o caminho de volta a ela. Não para te consertar. Não para te aconselhar. Apenas para ouvir, e devolver aquilo que ouve.',
    beganK: 'Onde tudo começou',
    began: [
      'Symponia começou com o Dr. Alessandro Biletta, osteopata que passou a vida a trabalhar no lugar onde o corpo e a mente se encontram em silêncio. Depois de anos a ouvir pessoas para viver, ficou certo de uma coisa: por baixo de cada história, as pessoas procuram uma forma de se reconhecerem.',
      'Encontrou a resposta na psicologia profunda. Em Jung, em Hillman, na velha linguagem dos arquétipos. E fez a pergunta que viria a ser a alma de Symponia.',
      'A ideia cresceu como crescem as melhores ideias. Devagar, em conversa. Longas conversas sobre o mundo interior, sobre a ligação, sobre o que é preciso para regressar a um lugar mais calmo dentro de nós.',
      'Yekta Dastranj fez parte dessas conversas. Percebeu a ideia assim que a ouviu, e sentiu-a muito antes de pensar em como a construir. Tornou-se cofundadora e deu à visão uma forma que se pode segurar, abrir e a que se pode voltar todos os dias.',
    ],
    quote: 'E se pudesses encontrar-te através daquilo que já se parece contigo?',
    people: [
      {
        name: 'Dr. Alessandro Biletta',
        role: 'Fundador',
        bio: 'O coração filosófico de Symponia. Osteopata e estudioso da vida interior desde sempre, Alessandro chegou à convicção de que a compreensão verdadeira começa muito antes de alguém ir à procura de uma solução. O método dos arquétipos que está no centro de Symponia é dele.',
      },
      {
        name: 'Yekta Dastranj',
        role: 'Cofundadora',
        bio: 'Foi ela quem lhe deu vida. Onde Alessandro via a filosofia, Yekta via a experiência. Deu forma ao modo como Symponia se sente nas mãos, certa de que uma coisa tão pessoal devia manter-se simples, privada e profundamente humana.',
      },
    ],
    believeK: 'Aquilo em que acreditamos',
    beliefs: [
      'Que perceber quem somos não devia ter de esperar por uma crise.',
      'Que a tecnologia certa pode criar silêncio, em vez de o preencher.',
      'E que a coisa mais poderosa que uma companheira pode fazer é devolver-te um pensamento que já era teu, mas que nunca te atreveste a dizer em voz alta.',
    ],
    closing: [
      'Symponia não é terapia, e nunca vai fingir que é. É um espaço para pensar. Um espelho que não desvia o olhar.',
      'Fizemo-la para quem alguma vez pressentiu que há mais em si do que aquilo que teve sossego para ouvir.',
    ],
    outroA: 'Chegaste.',
    outroB: 'Estávamos à tua espera.',
  },
};

export default pt;
