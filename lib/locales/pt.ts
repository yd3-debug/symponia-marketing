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
      blurb: 'Um companheiro de IA para o trabalho interior. Psicologia profunda, no seu idioma.',
      designedBy: 'Design de',
    },
    legalNote: 'Esta tradução é disponibilizada apenas para facilitar a leitura: só a versão em inglês tem força vinculativa e é a que prevalece.',
  },

  nav: { rel: 'A sombra', method: 'O método', memory: 'Memória', faq: 'FAQ', about: 'Sobre' },
  hero: {
    eyebrow: 'Trabalho com a sombra, com método.',
    l1: 'O animal que você não suporta',
    l2: 'é o que comanda a sua vida.',
    lead: 'Nomeie seis animais que se pareçam com você. Depois nomeie aquele que te arrepia. Esse sétimo é a sua sombra: a parte de você que exilou tão cedo que nem lembra mais de ter feito isso. Desde então é ela que decide. A Symponia é um companheiro de IA para o trabalho com a sombra, e começa por lhe dar um nome.',
    cta: 'Conheça o seu sétimo animal',
    proof: 'Psicologia profunda, não terapia. Construída sobre Jung, Hillman e a antiga linguagem dos arquétipos.',
  },
  recog: {
    k: 'Reconhecimento',
    h2: 'Qual destas é a sua?',
    items: [
      'Sei exatamente porque o faço. Faço à mesma.',
      'Consigo explicar os meus padrões ao pormenor. Continuo sem conseguir deixar de os repetir.',
      'Aquilo que julgo com mais dureza nos outros é o que nunca me permiti ser.',
      'Chego perto do que quero e depois sabotã-o em silêncio.',
      'Ouvi-me falar num tom que reconheci. Era o da minha mãe.',
      'Escrevo sobre isto há dois anos. Nada se moveu.',
    ],
  },
  mech: {
    k: 'Porque continua a acontecer',
    h2: 'O que não suporta nos outros é o que enterrou em si.',
    lead: 'Jung chamou-lhe a sombra: tudo aquilo que aprendeu, cedo e sem consentir, ser inaceitável em si. Não desaparece. Desce para o subsolo e manda a partir de lá, que ambições se permite, em que salas se encolhe, quem não consegue perdoar. A psicologia chama projeção a esse mecanismo. Não é um defeito de carácter, mas uma velha estratégia de sobrevivência que sobreviveu à sua utilidade.',
    stat: 'A sombra não é o seu trauma, nem é o pior de si. É a parte que recusou. A tese de Jung era que ela guarda tanta força não vivida quanto vergonha não vivida, e é por isso que deixá-la enterrada lhe custa duas vezes.',
    note: 'A Symponia só ouve um lado. O seu. Que é justamente o único que pode mudar.',
  },
  seven: {
    k: 'O sétimo animal',
    h2: 'Seis animais que se parecem consigo. Um que te arrepia.',
    lead: 'Nomeie seis que pertencem a você. Depois nomeie aquele que te repele. Esse sétimo é o mais importante de todos, porque carrega o que os outros seis não conseguem, e a sua repulsa é a pista. Não se recua perante o que nos é estranho. Recua-se perante o que foi renegado.',
    lead2: 'Cada animal é lido pelo seu dom, pela sua sombra e pelo caminho entre ambos. A Symponia lê o conjunto como um campo. Nada é atribuído a você: isto é um método projetivo, não um tipo de personalidade. Uma lente, nunca um rótulo, e nunca vai te dizer qual é o seu animal de poder.',
  },
  attune: {
    k: 'Antes dos animais',
    h2: 'Umas quantas perguntas sem respostas certas.',
    lead: 'O que te traz aqui. O traço que mais te irrita nos outros. A história que contas sobre ti. Curtas, incómodas, honestas. É assim que Symponia te fica a conhecer antes de dizer uma palavra.',
  },
  langs: {
    k: 'Nove idiomas',
    h2: 'Escreva no seu idioma. Ela responde no mesmo.',
    lead: 'Sua vida interior não acontece no seu segundo idioma. Escreva para a Symponia em português, sueco, inglês, italiano, russo, francês, alemão, espanhol ou dinamarquês, e ela entende e responde no idioma em que você escreveu. Não é tradução automática colada por cima: cada tela, cada notificação e a própria voz são escritas como se tivessem nascido naquele idioma.',
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
    h2: 'Quase todas as apps de trabalho com a sombra dão uma pergunta a você e te deixam sozinho com ela.',
    lead: 'Leia as avaliações de qualquer uma delas e a mesma frase reaparece sempre: e depois não aconteceu nada. Uma pergunta pré-fabricada não consegue te ver. Faz a mesma pergunta a toda a gente e não sabe o que respondeu da última vez. A Symponia leva a sério o que traz, e cada resposta aponta à única coisa que te leva uma camada mais fundo.',
    chat: [
      { who: 's', t: 'o traço que mais o irrita nos outros costuma ser o que exilou em si. qual é?' },
      { who: 'u', t: 'pessoas que precisam dos outros. dá-me vontade de fugir.' },
      { who: 's', t: 'e se precisar fosse permitido em si, o que estaria a pedir?' },
      { who: 'u', t: 'que cuidassem de mim, suponho. nunca deixei ninguém fazê-lo.' },
      { who: 's', t: 'então aquilo de que foge neles é o que nunca se permitiu. está há anos à beira da sua própria água, à espera de ser convidado a entrar.' },
    ],
  },
  mem: {
    k: 'Memória',
    h2: 'Symponia lembra-se. Só se tu deixares.',
    lead: 'Não devias ter de te apresentar de novo todas as terças-feiras. Mas aquilo que mais precisas de dizer é, muitas vezes, o que menos queres guardado. As duas coisas são verdade, por isso, as duas ficam nas tuas mãos.',
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
    h2: 'O que a Symponia não fingirá ser.',
    lead: 'Não é terapia nem um substituto dela. Ouve apenas o seu lado e não consegue ver a sua vida de fora. Nem todo o sentimento é uma ferida, e nem tudo o que lhe desagrada noutra pessoa é a sua sombra: às vezes as pessoas são apenas desconsideradas. Se estiver em crise, contacte um profissional qualificado ou os serviços de emergência.',
  },
  close: {
    k: 'Começar',
    h2: 'A sua sombra decide por si há anos. Vá conhecê-la.',
    lead: 'Já desconfia de que o padrão é seu. O que falta para você é uma forma de o ver a funcionar: o traço que evita, a razão pela qual você sempre faz a mesma curva, o instante em que ele assume o comando. É exatamente isso que a Symponia faz.',
    gets: [
      'Dê nome à sua sombra em cerca de quatro minutos, através dos sete animais',
      'Reflexão ilimitada, nada para contar e nenhum saldo para racionar',
      'Sua semana de humor: como você chegou, como saiu e a diferença',
      'Nove idiomas, escritos como se tivessem nascido em cada um',
    ],
    reassure: 'Sete dias grátis. Depois, reflexão ilimitada. Cancele quando quiser nos ajustes do seu ID Apple.',
  },

  compare: {
    k: 'A Symponia e os diários de perguntas',
    h2: 'Uma pergunta é só uma pergunta. Não sabe ouvir a resposta.',
    lead: 'Todas as apps de shadow work dão-lhe a mesma lista de perguntas e uma caixa vazia. Isso é um diário com melhor marketing. O trabalho não começa quando lhe fazem uma pergunta, começa quando algo lhe responde.',
    them: {
      t: 'Diários de perguntas',
      items: [
        'As mesmas perguntas para todos os que descarregam',
        'Já tem de saber qual é a sua sombra',
        'Não escreve nada de volta, fica sozinho com a página',
        'Esquece-se de si entre sessões',
        'Um tipo de personalidade, entregue como rótulo',
      ],
    },
    us: {
      t: 'Symponia',
      items: [
        'Um método projetivo que faz emergir o que não consegue dizer diretamente',
        'O sétimo animal dá nome à sua sombra, em minutos',
        'Responde a você: cada resposta é escrita sobre o que escreveu de facto',
        'Lembra por meses, para que um padrão se torne visível',
        'Uma lente por onde olhar, nunca um rótulo colado em você',
      ],
    },
  },

  founder: {
    k: 'Onde tudo começou',
    h2: 'Feita por um osteopata e pela mulher que lhe deu uma forma que se segura na mão.',
    lead: 'Symponia começou com o Dr. Alessandro Biletta, osteopata que passou a carreira a trabalhar no lugar onde o corpo e a mente se encontram em silêncio. Depois de anos a ouvir pessoas para viver, ficou certo de uma coisa: por baixo de cada história, as pessoas procuram uma forma de se reconhecerem. Encontrou a resposta na psicologia profunda, em Jung, em Hillman, na velha linguagem dos arquétipos.',
    quote: 'E se pudesses encontrar-te através daquilo que já se parece contigo?',
    lead2: 'Yekta Dastranj esteve presente nessas conversas. Percebeu a ideia assim que a ouviu, e sentiu-a muito antes de pensar em como a construir. Tornou-se cofundadora e transformou a visão em algo que se abre numa terça-feira à noite e a que se volta.',
    cta: 'Ler a nossa história',
  },

  faq: {
    k: 'Perguntas',
    h2: 'Perguntas frequentes',
    items: [
      { q: 'O que é o trabalho com a sombra, em palavras simples?', a: 'É olhar para as partes de si que aprendeu a esconder, quase sempre cedo e para se manter seguro. Carl Jung chamou-lhe a sombra. Não desaparece quando a enterra: começa a decidir a partir de baixo. O trabalho com a sombra é a prática de a trazer de volta à vista.' },
      { q: 'Como descubro qual é a minha sombra?', a: 'O atalho é a sua própria repulsa. O traço que acha insuportável nos outros é muitas vezes o que exilou em si. A Symponia usa isso diretamente: escolhe seis animais que se parecem consigo e um sétimo que o repele, e é no sétimo que a sua sombra se esconde.' },
      { q: 'Em que é diferente de um diário de sombra ou de uma app de perguntas?', a: 'Uma pergunta pré-fabricada pergunta e deixa-o diante de uma página em branco. A Symponia responde. Lê o que escreveu de facto, não o que um usuário médio teria escrito, e cada resposta aponta à única coisa que te leva uma camada mais fundo.' },
      { q: 'Os animais são só um teste de personalidade?', a: 'Não. Nada é atribuído a você e não há nenhum tipo no fim. Escolhe sete, incluindo um que o repele, e a Symponia lê-os em conjunto como um campo. É um método projetivo, mais próximo de uma mancha de Rorschach do que de um teste, e nunca lhe dirá o seu animal de poder.' },
      { q: 'O que é a projeção?', a: 'Reagir à pessoa à sua frente a partir de uma história mais antiga. O tela é ela. O filme é seu. A Symponia ajuda-o a distingui-los.' },
      { q: 'Isto é terapia?', a: 'Não. A Symponia é uma ferramenta de reflexão, não é terapia nem um substituto. Ouve apenas o seu lado. Se estiver em crise ou precisar de apoio clínico, fale com um profissional qualificado.' },
      { q: 'Lembra-se do que lhe conto?', a: 'Só se ativar a memória. Está desligada por predefinição e, enquanto estiver, nada é guardado nos nossos servidores. Pode apagar o que ela contém, e nada do que escreve treina qualquer modelo.' },
      { q: 'Posso fazê-lo na minha língua?', a: 'Sim. Escreva em português, inglês, italiano, russo, francês, alemão, espanhol ou dinamarquês: a a Symponia entende e responde no idioma em que você escreveu.' },
    ],
  },

  about: {
    metaTitle: 'Sobre, As pessoas por detrás de Symponia',
    metaDesc: 'Symponia foi criada pelo Dr. Alessandro Biletta e por Yekta Dastranj, um filósofo da vida interior e a pessoa que deu à visão uma forma que se segura na mão.',
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
