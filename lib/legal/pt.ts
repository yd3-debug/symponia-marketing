import type { LegalDict } from './types';

// Português europeu. Tradução de ./en.ts: o texto inglês continua a ser a
// versão juridicamente vinculativa, tal como avisa shell.legalNote no topo de
// cada página legal. A lei aplicável é a de Inglaterra e do País de Gales, pelo
// que todas as referências britânicas (Consumer Rights Act 2015, ICO, 999,
// Samaritans) são mantidas e não substituídas por equivalentes portugueses.
// Nos textos legais o tratamento é sempre formal (terceira pessoa).

export const pt: LegalDict = {
  terms: {
    metaTitle: 'Termos de Serviço',
    metaDesc: 'Os termos que regem a utilização da aplicação e do site Symponia, operados pela Boroto Ltd.',
    kicker: 'Informação legal',
    title: 'Termos de Serviço',
    updated: 'Última atualização: julho de 2026',
    intro:
      'Os presentes Termos de Serviço (os «Termos») regem o seu acesso e a sua utilização da aplicação móvel Symponia e deste site (em conjunto, o «Serviço»). O Serviço é operado pela Boroto Ltd, sociedade registada em Inglaterra e no País de Gales («Boroto», «nós» ou «nosso»). Leia atentamente estes Termos. Ao descarregar, aceder ou utilizar o Serviço, aceita ficar vinculado por eles. Se não concordar, não utilize o Serviço.',
    sections: [
      {
        h: '1. Quem somos e como nos contactar',
        blocks: [
          { t: 'p', x: 'O Serviço é prestado pela Boroto Ltd, sociedade registada em Inglaterra e no País de Gales. Pode contactar-nos a qualquer momento através de [hello@symponia.io](mailto:hello@symponia.io). O nosso número de registo comercial e a morada da sede social constam dos nossos registos societários publicados e estão disponíveis mediante pedido.' },
        ],
      },
      {
        h: '2. Elegibilidade e idade',
        blocks: [
          { t: 'p', x: 'Tem de ter, pelo menos, **18 anos de idade** para criar uma conta e utilizar Symponia. Ao utilizar o Serviço, confirma que tem 18 anos ou mais e que dispõe de capacidade legal para celebrar estes Termos. Symponia destina-se a adultos e não foi concebida para crianças nem se dirige a elas.' },
        ],
      },
      {
        h: '3. A sua conta',
        blocks: [
          { t: 'p', x: 'Para utilizar determinadas funcionalidades, tem de criar uma conta e iniciar sessão. Compromete-se a fornecer informações exatas, a manter as suas credenciais de acesso em segurança e a ser responsável por toda a atividade realizada na sua conta. Informe-nos prontamente através de [hello@symponia.io](mailto:hello@symponia.io) se considerar que a sua conta foi acedida sem a sua autorização. Pode eliminar a sua conta a qualquer momento a partir da aplicação (separador Perfil, secção Conta, «eliminar conta»).' },
        ],
      },
      {
        h: '4. O que é Symponia',
        blocks: [
          { t: 'p', x: 'Symponia é uma ferramenta assistida por IA para reflexão pessoal e autoexploração. As suas funcionalidades incluem:' },
          {
            t: 'ul',
            x: [
              'Três modos: Arquétipo, O Meu Dia e Conversa;',
              'Um exercício de arquétipos animais e uma síntese dos seus resultados;',
              'Reflexões diárias personalizadas;',
              'Acesso, baseado em sessões, às conversas com a aplicação.',
            ],
          },
          { t: 'p', x: 'Podemos acrescentar, alterar ou remover funcionalidades pontualmente, com vista a melhorar o Serviço.' },
        ],
      },
      {
        h: '5. Symponia não é um serviço médico nem um serviço de apoio em crise',
        blocks: [
          { t: 'p', x: 'Symponia **não é um serviço médico, terapêutico, psiquiátrico, psicológico ou de aconselhamento** e não substitui o acompanhamento profissional. Nada na aplicação, e nada gerado por Symponia, constitui aconselhamento profissional, diagnóstico ou tratamento, nem deve ser tomado como tal.' },
          { t: 'p', x: 'Symponia não pode ajudar numa emergência e não presta apoio em situações de crise. **Se estiver em crise, ou se pensar que pode fazer mal a si próprio ou a outra pessoa, contacte imediatamente os serviços de emergência da sua zona ou um profissional qualificado.** No Reino Unido, pode ligar para o 999 ou contactar gratuitamente os Samaritans através do 116 123.' },
        ],
      },
      {
        h: '6. Conteúdos gerados por IA',
        blocks: [
          { t: 'p', x: 'As respostas de Symponia são geradas por inteligência artificial. A IA pode estar errada, ser incompleta ou induzir em erro, e as suas respostas podem não ser adequadas à sua situação. É responsável pela forma como interpreta aquilo que Symponia produz e como age em consequência, devendo usar o seu próprio discernimento e procurar aconselhamento profissional qualificado sempre que tal se justifique. Não garantimos que qualquer resultado seja exato, fiável ou adequado a uma finalidade específica.' },
        ],
      },
      {
        h: '7. Subscrições, preços e renovação automática',
        id: 'tokens',
        blocks: [
          { t: 'p', x: '**Saldo gratuito.** Os novos utilizadores recebem um saldo gratuito limitado, para poderem experimentar Symponia antes de subscrever.' },
          { t: 'p', x: '**Symponia Mensal (£12.99 por mês).** A subscrição dá acesso a 350 sessões de reflexão por mês de calendário. Em cada renovação é atribuído um novo saldo de 350 sessões; as sessões não utilizadas não transitam para o mês seguinte. As reflexões diárias são gratuitas e não são descontadas das suas sessões.' },
          { t: 'p', x: '**Faturação e renovação.** As subscrições são vendidas e processadas pela Apple através de compra integrada na aplicação (In-App Purchase) e são faturadas ao seu Apple ID. A sua subscrição renova-se automaticamente ao preço então em vigor no final de cada período de faturação, salvo se a cancelar com, pelo menos, 24 horas de antecedência em relação ao fim desse período. Pode gerir ou cancelar a sua subscrição a qualquer momento nas definições do seu Apple ID (Definições, o seu nome, Subscrições). Eliminar a aplicação não cancela a subscrição.' },
          { t: 'p', x: '**Pagamento.** O pagamento é cobrado pela Apple. Nunca vemos nem armazenamos os dados do seu cartão de pagamento. Os preços são apresentados na aplicação e podem ser alterados; comunicaremos as alterações de preço conforme exigido, e nenhuma alteração afetará um período de faturação já pago.' },
        ],
      },
      {
        h: '8. Cancelamento e reembolsos',
        blocks: [
          { t: 'p', x: 'Pode cancelar a sua subscrição a qualquer momento, conforme descrito acima, mantendo o acesso até ao final do período que já pagou. As compras são efetuadas através da Apple e os reembolsos são tratados pela Apple, ao abrigo das suas políticas. Para todos os detalhes, incluindo os seus direitos legais enquanto consumidor, consulte a nossa [Política de Reembolsos](/refunds). Nada nestes Termos afeta os seus direitos legais ao abrigo do Consumer Rights Act 2015 ou de outra legislação de defesa do consumidor aplicável.' },
        ],
      },
      {
        h: '9. Utilização aceitável',
        blocks: [
          { t: 'p', x: 'Compromete-se a não:' },
          {
            t: 'ul',
            x: [
              'utilizar o Serviço para quaisquer fins ilícitos, lesivos ou fraudulentos;',
              'fazer engenharia inversa, descompilar, recolher dados de forma automatizada (scraping) ou tentar extrair o código-fonte, os prompts ou os modelos subjacentes ao Serviço, exceto na medida em que esta restrição seja proibida por lei;',
              'utilizar o Serviço para assediar, maltratar, ameaçar ou prejudicar-se a si próprio ou a terceiros;',
              'deturpar a sua identidade ou a sua idade, ou utilizar a conta de outra pessoa sem autorização;',
              'utilizar bots, scripts ou outros meios automatizados para aceder ao Serviço ou gerar sessões;',
              'interferir com o Serviço ou os seus sistemas, perturbá-los ou tentar aceder-lhes sem autorização.',
            ],
          },
          { t: 'p', x: 'Podemos suspender ou cessar o acesso se violar estes Termos ou se utilizar o Serviço de uma forma que crie risco de dano para si, para terceiros ou para nós.' },
        ],
      },
      {
        h: '10. Propriedade intelectual',
        blocks: [
          { t: 'p', x: 'O Serviço, incluindo o software de Symponia, o modelo dos arquétipos animais, os prompts, os textos, o design e a marca, é propriedade da Boroto Ltd ou dos seus licenciadores e está protegido pela legislação de propriedade intelectual. Concedemos-lhe uma licença limitada, pessoal, não exclusiva, intransmissível e revogável para utilizar o Serviço para uso pessoal e não comercial, em conformidade com estes Termos. Não pode copiar, distribuir nem criar obras derivadas a partir do Serviço sem a nossa autorização escrita.' },
          { t: 'p', x: 'As reflexões e conversas que cria são suas. Não reivindicamos a propriedade dos seus conteúdos pessoais. Concede-nos uma licença limitada para tratar esses conteúdos apenas na medida necessária para operar e prestar-lhe o Serviço, conforme descrito na nossa [Política de Privacidade](/privacy).' },
        ],
      },
      {
        h: '11. Serviços de terceiros',
        blocks: [
          { t: 'p', x: 'O Serviço assenta em terceiros, incluindo a Apple (distribuição, início de sessão e pagamentos), a Anthropic (a IA Claude que gera as respostas) e a Supabase (alojamento seguro). A utilização da aplicação está igualmente sujeita ao [Licensed Application End User License Agreement](/eula) da Apple. Não somos responsáveis pelos serviços de terceiros, aplicando-se os respetivos termos e políticas de privacidade às partes da experiência que lhes dizem respeito.' },
        ],
      },
      {
        h: '12. Disponibilidade e alterações ao Serviço',
        blocks: [
          { t: 'p', x: 'Procuramos manter Symponia disponível, mas não garantimos que funcione de forma ininterrupta, segura ou isenta de erros. O Serviço pode estar indisponível durante operações de manutenção ou por motivos alheios ao nosso controlo, e podemos modificá-lo, suspendê-lo ou descontinuá-lo, no todo ou em parte. Caso descontinuemos uma funcionalidade paga, agiremos de forma justa e em conformidade com os seus direitos enquanto consumidor.' },
        ],
      },
      {
        h: '13. Suspensão e cessação',
        blocks: [
          { t: 'p', x: 'Pode deixar de utilizar o Serviço e eliminar a sua conta a qualquer momento. Podemos suspender ou pôr fim ao seu acesso se violar estes Termos, se tal for exigido por lei ou se deixar de ser razoavelmente possível continuar a prestar-lhe o Serviço. As disposições que, pela sua natureza, devam subsistir à cessação (incluindo as relativas a propriedade intelectual, exclusões de garantia, limitação de responsabilidade e lei aplicável) mantêm-se em vigor.' },
        ],
      },
      {
        h: '14. Exclusões de garantia',
        blocks: [
          { t: 'p', x: 'Salvo quanto às responsabilidades que expressamente assumimos nestes Termos e a quaisquer direitos que lhe assistam ao abrigo do direito do consumo e que não possam ser excluídos, o Serviço é prestado «tal como está» e «conforme disponível», não prestando nós quaisquer garantias, expressas ou implícitas, quanto ao Serviço, aos seus conteúdos ou a qualquer resultado gerado por IA.' },
        ],
      },
      {
        h: '15. A nossa responsabilidade perante si',
        blocks: [
          { t: 'p', x: 'Nada nestes Termos limita ou exclui a nossa responsabilidade quando tal seja ilícito. Isto inclui a responsabilidade por morte ou danos pessoais causados pela nossa negligência, por fraude ou declarações fraudulentas, e qualquer outra responsabilidade que não possa ser limitada ou excluída ao abrigo da lei aplicável, incluindo os seus direitos legais enquanto consumidor.' },
          { t: 'p', x: 'Sem prejuízo do parágrafo anterior, e na medida máxima permitida por lei: não somos responsáveis por perdas ou danos que não fossem previsíveis, por perdas resultantes da confiança depositada em conteúdos gerados por IA, nem por perdas indiretas ou consequenciais; e a nossa responsabilidade total perante si, por todas as reclamações decorrentes do Serviço ou com ele relacionadas, em qualquer período de 12 meses, não excederá o mais elevado dos seguintes montantes: (a) o valor total que nos pagou, ou pagou à Apple, pelo Serviço nesse período, ou (b) £100. Prestamos o Serviço apenas para uso pessoal e não somos responsáveis por perdas comerciais.' },
        ],
      },
      {
        h: '16. Indemnização',
        blocks: [
          { t: 'p', x: 'Aceita ser responsável por, e reembolsar-nos de, perdas e custos razoáveis que soframos e que resultem da utilização indevida do Serviço por si ou do incumprimento destes Termos, na medida em que lhe sejam imputáveis. Isto não limita os seus direitos enquanto consumidor.' },
        ],
      },
      {
        h: '17. Alterações a estes Termos',
        blocks: [
          { t: 'p', x: 'Podemos atualizar estes Termos pontualmente, por exemplo para refletir alterações ao Serviço ou à lei. Alteraremos a data de «Última atualização» acima e, quando as alterações forem substanciais, tomaremos medidas razoáveis para as trazer ao seu conhecimento. Se continuar a utilizar o Serviço depois de as alterações produzirem efeitos, aceita os Termos atualizados. Se não concordar, deve deixar de utilizar o Serviço, podendo cancelar e eliminar a sua conta.' },
        ],
      },
      {
        h: '18. Lei aplicável e foro competente',
        blocks: [
          { t: 'p', x: 'Estes Termos, e qualquer litígio deles decorrente ou com eles relacionado, regem-se pela lei de Inglaterra e do País de Gales. Os litígios ficam sujeitos à jurisdição exclusiva dos tribunais de Inglaterra e do País de Gales, salvo se residir noutra parte do Reino Unido, caso em que pode intentar a ação na sua nação de residência; os consumidores conservam a proteção conferida pelas normas imperativas do seu país de residência.' },
        ],
      },
      {
        h: '19. Disposições gerais',
        blocks: [
          { t: 'p', x: 'Se alguma parte destes Termos for considerada inexequível, as restantes mantêm-se em vigor. O facto de não exercermos uma disposição não constitui renúncia à mesma. Não pode transmitir os seus direitos ao abrigo destes Termos sem o nosso consentimento; nós podemos transmitir os nossos, desde que os seus direitos não sejam prejudicados. Estes Termos, em conjunto com a nossa [Política de Privacidade](/privacy), a [Política de Reembolsos](/refunds) e o [EULA](/eula), constituem o acordo integral entre si e nós relativamente ao Serviço.' },
        ],
      },
      {
        h: '20. Contacto',
        blocks: [
          { t: 'p', x: 'Tem dúvidas sobre estes Termos? Escreva-nos para [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: 'Política de Privacidade',
    metaDesc: 'Como a Boroto Ltd recolhe, utiliza e protege os seus dados pessoais quando utiliza Symponia.',
    kicker: 'Informação legal',
    title: 'Política de Privacidade',
    updated: 'Última atualização: julho de 2026',
    intro:
      'Esta Política de Privacidade explica como a Boroto Ltd («Boroto», «nós» ou «nosso») recolhe, utiliza, partilha e protege os seus dados pessoais quando utiliza a aplicação e o site Symponia. Symponia é um espaço de reflexão privada, pelo que recolhemos o mínimo possível e nunca vendemos os seus dados.',
    sections: [
      {
        h: '1. Quem somos (responsável pelo tratamento)',
        blocks: [
          { t: 'p', x: 'A Boroto Ltd é a responsável pelo tratamento dos seus dados pessoais. Estamos registados em Inglaterra e no País de Gales. Pode contactar-nos sobre qualquer assunto relativo a esta política através de [hello@symponia.io](mailto:hello@symponia.io). O nosso número de registo comercial e a morada da sede social constam dos nossos registos societários publicados e estão disponíveis mediante pedido.' },
        ],
      },
      {
        h: '2. Os dados pessoais que recolhemos',
        blocks: [
          { t: 'p', x: '**Informações que nos fornece durante a configuração inicial e a utilização:**' },
          {
            t: 'ul',
            x: [
              'o seu primeiro nome e, se optar por partilhá-lo, o seu género;',
              'os seus sete arquétipos animais e as suas respostas às perguntas de sintonização;',
              'a sua preferência de frequência de ressonância;',
              'as mensagens e reflexões que escreve em cada modo;',
              'as suas preferências de notificações e a indicação de se aceita receber, ocasionalmente, atualizações por email.',
            ],
          },
          { t: 'p', x: '**Informações de conta e informações técnicas:**' },
          {
            t: 'ul',
            x: [
              'os dados de conta necessários para iniciar a sua sessão e manter os seus dados seguros;',
              'o seu saldo de sessões (tokens) e o estado da sua subscrição;',
              'informações técnicas e de diagnóstico limitadas (como a versão da aplicação e informações básicas do dispositivo), utilizadas para manter o Serviço a funcionar e em segurança.',
            ],
          },
          { t: 'p', x: '**Informações de compra:** quando subscreve, a Apple processa o seu pagamento. Recebemos da Apple a confirmação do estado da sua subscrição, mas nunca recebemos nem armazenamos os dados do seu cartão de pagamento.' },
          { t: 'p', x: 'Algumas informações são também armazenadas localmente no seu dispositivo (por exemplo, os seus arquétipos, as suas preferências e o histórico de conversas em cada modo). Os dados locais são removidos quando elimina a aplicação.' },
          { t: 'p', x: 'Não partilhe informações que não queira ver registadas e tenha especial cuidado com dados de categorias especiais (como informações sobre a sua saúde, as suas convicções ou a sua sexualidade). Quando tais informações surgem naquilo que escreve, tratamo-las apenas para lhe prestar o Serviço, com base no seu consentimento explícito, que pode retirar eliminando os conteúdos em causa ou a sua conta.' },
        ],
      },
      {
        h: '3. Como e porquê utilizamos os seus dados, e os nossos fundamentos legais',
        blocks: [
          { t: 'p', x: 'Ao abrigo da legislação de proteção de dados do Reino Unido e da UE, temos de dispor de um fundamento legal para utilizar os seus dados pessoais. Baseamo-nos nos seguintes:' },
          {
            t: 'ul',
            x: [
              '**Execução do contrato consigo**: para criar e gerir a sua conta, gerar respostas personalizadas de Symponia, entregar a sua reflexão diária, manter uma sessão durante uma conversa e confirmar a sua subscrição junto da Apple.',
              '**O seu consentimento**: para enviar notificações push ou emails de marketing ocasionais (apenas se o autorizar) e para tratar quaisquer dados de categorias especiais contidos naquilo que escreve. Pode retirar o consentimento a qualquer momento.',
              '**Os nossos interesses legítimos**: para manter o Serviço seguro e operacional, prevenir utilizações indevidas e fraudes e melhorar a fiabilidade, de uma forma que não prevalece sobre os seus direitos.',
              '**Obrigação legal**: para cumprir a legislação que nos é aplicável, por exemplo em matéria fiscal e de resposta a pedidos legítimos das autoridades.',
            ],
          },
          { t: 'p', x: 'Não utilizamos os seus dados para publicidade ou segmentação publicitária e não vendemos os seus dados pessoais.' },
        ],
      },
      {
        h: '4. Como Symponia utiliza a IA',
        blocks: [
          { t: 'p', x: 'Para gerar respostas reflexivas, o texto que envia, juntamente com o seu primeiro nome, o seu género (se o tiver indicado), os seus arquétipos e a sua frequência de ressonância, é enviado para a API Claude da Anthropic. Este tratamento decorre ao abrigo de condições de Zero Data Retention (ZDR): a Anthropic não conserva o conteúdo das suas conversas depois de gerar uma resposta, nem o utiliza para treinar ou melhorar os seus modelos.' },
          { t: 'p', x: 'Symponia gera conteúdos automaticamente, mas não toma decisões exclusivamente automatizadas que produzam efeitos jurídicos sobre si ou que o afetem de forma similarmente significativa. Symponia é uma ferramenta de reflexão, não uma instância de decisão.' },
        ],
      },
      {
        h: '5. Com quem partilhamos dados',
        blocks: [
          { t: 'p', x: 'Só partilhamos dados com os prestadores de serviços que nos ajudam a operar Symponia, atuando cada um deles ao abrigo de contratos que os obrigam a protegê-los:' },
          {
            t: 'ul',
            x: [
              '**Anthropic**: fornece a IA Claude que gera as respostas, ao abrigo de condições de Zero Data Retention. Ver [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy).',
              '**Supabase**: base de dados segura, autenticação e alojamento de backend da sua conta e das suas conversas.',
              '**Apple**: distribuição na App Store, início de sessão, entrega de notificações push e processamento das compras integradas na aplicação. Os dados de pagamento são tratados exclusivamente pela Apple.',
            ],
          },
          { t: 'p', x: 'Podemos ainda divulgar dados se tal for exigido por lei, para proteger a segurança, os direitos ou o património dos nossos utilizadores ou de terceiros, ou no âmbito de uma transmissão da empresa, caso em que o informaremos e continuaremos a proteger os seus dados.' },
        ],
      },
      {
        h: '6. Transferências internacionais',
        blocks: [
          { t: 'p', x: 'Alguns dos nossos prestadores (incluindo a Anthropic e a Apple) tratam dados fora do Reino Unido e do EEE, nomeadamente nos Estados Unidos. Sempre que os dados são transferidos internacionalmente, baseamo-nos em garantias adequadas reconhecidas pelo direito do Reino Unido e da UE, como o UK International Data Transfer Agreement ou o respetivo Adendo e as Cláusulas Contratuais-Tipo da Comissão Europeia, acompanhadas de proteções adicionais sempre que necessário. Pode pedir-nos mais informações sobre estas garantias.' },
        ],
      },
      {
        h: '7. Durante quanto tempo conservamos os seus dados',
        blocks: [
          { t: 'p', x: 'Conservamos a sua conta e o seu histórico de conversas enquanto a sua conta estiver ativa. Quando elimina a sua conta (separador Perfil, secção Conta, «eliminar conta») ou nos pede que apaguemos os seus dados, eliminamo-los dos nossos sistemas em produção, sendo removidos das cópias de segurança de rotina num curto prazo. Os conteúdos enviados para a Anthropic não são por ela conservados, ao abrigo das condições de ZDR. Os dados locais no seu dispositivo são removidos quando elimina a aplicação. Só conservamos informações limitadas durante mais tempo quando a lei o exige (por exemplo, registos básicos de transações).' },
          { t: 'p', x: 'Se nos pedir que eliminemos os dados associados à sua conta, daremos seguimento ao seu pedido no prazo de 30 dias.' },
        ],
      },
      {
        h: '8. Como protegemos os seus dados',
        blocks: [
          { t: 'p', x: 'Utilizamos medidas técnicas e organizativas para proteger os seus dados, incluindo cifragem em trânsito, controlos de acesso e prestadores de infraestrutura reputados. Nenhum método de transmissão ou de armazenamento é totalmente seguro, mas trabalhamos para proteger as suas informações e para reagir com rapidez caso algo corra mal, incluindo notificando-o a si e à autoridade competente sempre que a lei o exija.' },
        ],
      },
      {
        h: '9. Os seus direitos',
        id: 'gdpr',
        blocks: [
          { t: 'p', x: 'Se residir no Reino Unido ou no EEE, assistem-lhe os seguintes direitos sobre os seus dados pessoais, ao abrigo do RGPD do Reino Unido e do RGPD da UE:' },
          {
            t: 'ul',
            x: [
              '**Acesso**: obter uma cópia dos dados pessoais que detemos sobre si;',
              '**Retificação**: obter a correção de dados inexatos;',
              '**Apagamento**: obter a eliminação dos seus dados («direito a ser esquecido»);',
              '**Limitação**: pedir-nos que limitemos a forma como utilizamos os seus dados;',
              '**Portabilidade**: receber os seus dados num formato portátil e legível por máquina;',
              '**Oposição**: opor-se ao tratamento baseado nos nossos interesses legítimos;',
              '**Retirada do consentimento**: a qualquer momento, quando nos baseamos no seu consentimento, sem afetar o tratamento anterior.',
            ],
          },
          { t: 'p', x: 'Para exercer qualquer um destes direitos, escreva para [hello@symponia.io](mailto:hello@symponia.io). Não lhe cobraremos nada nem o trataremos de forma diferente por exercer os seus direitos. Se não estiver satisfeito com a forma como tratamos os seus dados, pode apresentar reclamação junto do Information Commissioner’s Office do Reino Unido ([ico.org.uk](https://ico.org.uk)) ou junto da autoridade de controlo do seu país no EEE.' },
        ],
      },
      {
        h: '10. Marketing',
        blocks: [
          { t: 'p', x: 'Só enviamos emails de marketing se o tiver autorizado. Todos os emails de marketing incluem uma ligação para cancelar a subscrição e pode deixar de os receber a qualquer momento, utilizando essa ligação ou escrevendo para [hello@symponia.io](mailto:hello@symponia.io). Deixar de receber comunicações de marketing não afeta as mensagens de serviço necessárias à gestão da sua conta.' },
        ],
      },
      {
        h: '11. Cookies e o site',
        blocks: [
          { t: 'p', x: 'O nosso site utiliza apenas os cookies e o armazenamento local estritamente necessários para que o site funcione e para memorizar preferências básicas. Não utilizamos cookies de publicidade nem de rastreio entre sites. Se, no futuro, passarmos a utilizar ferramentas de análise, atualizaremos esta política e, quando exigido, pediremos previamente o seu consentimento.' },
        ],
      },
      {
        h: '12. Crianças',
        blocks: [
          { t: 'p', x: 'Symponia destina-se a adultos. Não se dirige a menores de 18 anos e não recolhemos conscientemente dados pessoais de crianças. Se considerar que uma criança nos forneceu dados pessoais, contacte-nos através de [hello@symponia.io](mailto:hello@symponia.io) e eliminaremos esses dados.' },
        ],
      },
      {
        h: '13. Alterações a esta política',
        blocks: [
          { t: 'p', x: 'Podemos atualizar esta Política de Privacidade pontualmente. Alteraremos a data de «Última atualização» acima e, quando as alterações forem substanciais, tomaremos medidas razoáveis para as trazer ao seu conhecimento. A continuação da utilização de Symponia depois de as alterações produzirem efeitos significa que aceita a política atualizada.' },
        ],
      },
      {
        h: '14. Contacto',
        blocks: [
          { t: 'p', x: 'Para qualquer questão ou pedido em matéria de privacidade, contacte a nossa equipa de privacidade através de [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Política de Reembolsos',
    metaDesc: 'Como funcionam os reembolsos, os cancelamentos e os seus direitos de consumidor nas subscrições Symponia compradas na App Store.',
    kicker: 'Informação legal',
    title: 'Política de Reembolsos',
    updated: 'Última atualização: julho de 2026',
    intro:
      'Symponia é operada pela Boroto Ltd. As subscrições são vendidas e processadas pela Apple através de compra integrada na aplicação. Uma vez que é a Apple que trata do pagamento, os reembolsos são pedidos à Apple e por ela decididos, ao abrigo das suas políticas. Esta página explica como isso funciona e expõe os seus direitos enquanto consumidor. Nada aqui limita os seus direitos legais.',
    sections: [
      {
        h: '1. Experimentar Symponia gratuitamente',
        blocks: [
          { t: 'p', x: 'Os novos utilizadores recebem um saldo gratuito limitado, para poderem conhecer Symponia antes de decidirem subscrever. Recomendamos que o utilize antes de comprar.' },
        ],
      },
      {
        h: '2. Como pedir um reembolso',
        blocks: [
          { t: 'p', x: 'Todas as compras são efetuadas através do seu Apple ID, pelo que é a Apple, e não a Boroto Ltd, que processa os reembolsos. Para pedir um reembolso:' },
          {
            t: 'ul',
            x: [
              'aceda a [reportaproblem.apple.com](https://reportaproblem.apple.com) e inicie sessão com o seu Apple ID; ou',
              'no seu dispositivo, abra as Definições, toque no seu nome e utilize o histórico de compras para comunicar um problema.',
            ],
          },
          { t: 'p', x: 'A Apple analisa cada pedido segundo os seus próprios critérios e decide se concede o reembolso. Teremos todo o gosto em ajudar no que estiver ao nosso alcance, mas não podemos emitir reembolsos da App Store diretamente nem garantir a decisão da Apple.' },
        ],
      },
      {
        h: '3. Cancelar a sua subscrição',
        blocks: [
          { t: 'p', x: 'Pode cancelar a qualquer momento nas definições do seu Apple ID (Definições, o seu nome, Subscrições). Se cancelar, a sua subscrição não se renovará e manterá o acesso até ao final do período que já pagou. O cancelamento não dá, por si só, direito a reembolso do período em curso, e as sessões não utilizadas não transitam para o mês seguinte. Eliminar a aplicação não cancela a subscrição.' },
        ],
      },
      {
        h: '4. Os seus direitos enquanto consumidor no Reino Unido ou na UE',
        blocks: [
          { t: 'p', x: 'Se for consumidor no Reino Unido ou na UE, dispõe normalmente de um direito de livre resolução de 14 dias quanto à compra de conteúdos digitais, com direito a reembolso. Contudo, esse direito pode cessar a partir do momento em que o fornecimento do conteúdo digital tenha início, desde que tenha dado o seu consentimento expresso para tal e reconhecido que perde o direito de livre resolução. Ao iniciar uma subscrição e ao começar a utilizar sessões ou reflexões diárias, o conteúdo digital é fornecido de imediato, o que pode fazer cessar o direito de resolução de 14 dias quanto ao conteúdo já fornecido.' },
          { t: 'p', x: 'Nada disto afasta os seus direitos legais. Se o Serviço apresentar defeito, não corresponder à descrição ou não for prestado com a diligência e a competência razoáveis, pode ter direito a uma solução ao abrigo do Consumer Rights Act 2015 (ou da lei equivalente do país onde reside), independentemente do processo de reembolso habitual da Apple. Se considerar que é este o seu caso, contacte-nos e ajudaremos.' },
        ],
      },
      {
        h: '5. Alterações de preço',
        blocks: [
          { t: 'p', x: 'Se alterarmos o preço da subscrição, o novo preço não se aplicará a um período de faturação que já tenha pago. Quando exigido, a Apple pedir-lhe-á que confirme um aumento de preço antes de este produzir efeitos; se não concordar, a sua subscrição não se renovará ao novo preço.' },
        ],
      },
      {
        h: '6. Contacte-nos',
        blocks: [
          { t: 'p', x: 'Se tiver algum problema com um pagamento, uma subscrição ou o Serviço, escreva para [hello@symponia.io](mailto:hello@symponia.io) e faremos os possíveis por resolvê-lo.' },
        ],
      },
    ],
  },

  eula: {
    metaTitle: 'Contrato de Licença de Utilizador Final',
    metaDesc: 'EULA padrão da Apple para a aplicação iOS Symponia. Rege a sua licença de utilização da aplicação descarregada da App Store.',
    kicker: 'Informação legal',
    titleL1: 'Licensed Application',
    titleL2: 'End User License Agreement',
    sub: 'Apple Standard EULA',
    note: 'O contrato que se segue é o contrato de licença padrão da Apple para aplicações licenciadas e é reproduzido no inglês original da Apple, por se tratar de um contrato da própria Apple e não nosso. Apenas o texto em inglês tem força vinculativa.',
  },

  credits: {
    metaTitle: 'Preços',
    metaDesc: 'Preços de Symponia: comece com um saldo gratuito e siga por £12.99 por mês com 350 sessões de reflexão.',
    kicker: 'Preços',
    h1: 'Escolha a sua profundidade',
    lead: 'Comece gratuitamente. Passe ao plano mensal quando quiser.',
    free: {
      k: 'Recém-chegados',
      price: 'Gratuito',
      sub: 'Um pequeno saldo gratuito para explorar Symponia',
      body: 'Escolha os seus sete arquétipos animais, receba o retrato da sua constelação e experimente algumas sessões de reflexão. Sem compromisso.',
      cta: 'Descarregar na App Store',
    },
    monthly: {
      badge: 'Recomendado',
      k: 'Symponia Mensal',
      sub: 'por mês · 350 sessões de reflexão',
      bullets: [
        '350 sessões entre os modos Arquétipo, O Meu Dia e Conversa',
        'Reflexões diárias gratuitas (não são descontadas das sessões)',
        'Saldo novo todos os meses, as sessões não transitam',
        'Cancele quando quiser nas definições do seu Apple ID',
      ],
      cta: 'Disponível na aplicação',
    },
    how: {
      h2: 'Como funciona',
      items: [
        { t: 'Uma sessão por reflexão', d: 'Cada troca com Symponia consome uma sessão. As reflexões diárias são gratuitas e não são descontadas do seu saldo.' },
        { t: 'Reposição mensal', d: 'As suas 350 sessões mensais são repostas em cada renovação. As sessões não utilizadas não transitam.' },
        { t: 'Compra dentro da aplicação', d: 'Todas as compras são feitas dentro da aplicação iOS Symponia, através da compra integrada da Apple.' },
        { t: 'Pagamento seguro através da Apple', d: 'Todos os pagamentos são processados pela Apple. Nunca vemos nem armazenamos os dados do seu cartão.' },
      ],
    },
    contact: 'Tem dúvidas sobre subscrições ou faturação? Contacte-nos através de [hello@symponia.io](mailto:hello@symponia.io). Consulte os nossos [Termos de Serviço](/terms#tokens) para todos os detalhes.',
  },
};
