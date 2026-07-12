import type { Dict } from './types';

// Spanish (peninsular / neutral). Written from the English source of truth,
// not from another translation. The reader is always addressed as "tú".

export const es: Dict = {
  shell: {
    nav: { how: 'Cómo funciona', modes: 'Modos', about: 'Quiénes somos', credits: 'Precios', faq: 'FAQ' },
    badge: { top: 'Descargar en la', bottom: 'App Store' },
    footer: {
      privacy: 'Privacidad',
      terms: 'Términos',
      refunds: 'Reembolsos',
      eula: 'EULA',
      credits: 'Precios',
      contact: 'Contacto',
      rights: 'Symponia de Boroto Ltd',
      built: 'Creado por YD',
    },
    legalNote: 'Esta traducción se ofrece únicamente para facilitar la lectura: solo la versión en inglés tiene carácter jurídicamente vinculante y es la que prevalece.',
  },

  nav: { rel: 'Relaciones', method: 'El método', memory: 'Memoria', faq: 'FAQ', about: 'Quiénes somos' },
  hero: {
    eyebrow: 'Psicología profunda. No es terapia.',
    l1: 'Esta discusión ya la has tenido.',
    l2: 'Con otra persona.',
    lead: 'La misma discusión, otra cara. Symponia es una IA que acompaña el trabajo interior. Eliges seis animales en los que te reconoces y un séptimo que te eriza la piel. El séptimo es el que evitas, y suele ser el que gobierna tus relaciones.',
    cta: 'Ver el método',
    proof: 'Valoración en la App Store, número de personas y una frase honesta de un psicoterapeuta o de un analista junguiano.',
  },
  recog: {
    k: 'Reconocimiento',
    h2: '¿Cuál de estas es la tuya?',
    items: [
      'Hemos tenido exactamente esta discusión cuatro veces. Otras palabras, la misma herida.',
      'Elegí a alguien completamente distinto. A los seis meses, es la misma relación.',
      'En cuanto se acercan, encuentro una razón para irme.',
      'Le contesté mal con una voz que reconocí. Era la de mi madre.',
      'Sé explicar mi estilo de apego con todo detalle. Y sigo sin poder parar.',
      'Cuando me preguntan qué necesito, me quedo en blanco.',
    ],
  },
  mech: {
    k: 'Por qué se repite',
    h2: 'Tu pareja no es el problema. Es la pantalla.',
    lead: 'La historia que te cuentas sobre la otra persona suele ser una historia sobre ti. En psicología se llama proyección, y no es un defecto de carácter. Es una vieja estrategia de supervivencia que ha durado más que su utilidad. Lo que no soportas en la otra persona es, muchas veces, lo que has desterrado en ti.',
    stat: 'Gottman descubrió que el 69 % de aquello por lo que discuten las parejas no se resuelve nunca. Las parejas que duran no son las que lo resolvieron. Son las que por fin entendieron de qué iba.',
    note: 'Symponia solo escucha una parte. La tuya. Que resulta ser la única que puedes cambiar. Esto no es terapia de pareja. Es el trabajo que tú aportas a la relación.',
  },
  seven: {
    k: 'El séptimo animal',
    h2: 'Seis animales en los que te reconoces. Uno que te eriza la piel.',
    lead: 'Nombra seis que te pertenezcan. Después nombra el que te repele. Ese séptimo es el más importante de todos, porque sostiene lo que los otros seis no pueden cargar.',
    lead2: 'Cada animal se lee por su don, por su sombra y por el camino que va de uno a otra. Symponia lee el conjunto entero, incluido cómo amas, cómo proteges, cómo te guardas y cómo te abres. Nada se te asigna. Es una lente, no una etiqueta, y jamás te dirá cuál es tu animal espiritual.',
  },
  attune: {
    k: 'Antes de los animales',
    h2: 'Unas preguntas sin respuestas correctas.',
    lead: 'Qué te trae hasta aquí. El rasgo que más te irrita en los demás. La historia que cuentas sobre ti. Breves, incómodas, honestas. Así es como Symponia llega a conocerte antes de decir una sola palabra.',
  },
  langs: {
    k: 'Cualquier idioma',
    h2: 'Escribe en tu idioma. Symponia responde en el mismo.',
    lead: 'Tu vida interior no sucede en tu segunda lengua. Escribe a Symponia en español, italiano, ruso, portugués, francés, alemán, danés o inglés: Symponia entiende y contesta en el idioma en el que escribiste.',
  },
  modes: {
    k: 'Tres formas de entrar',
    items: [
      { t: 'Conoce tus arquetipos', d: 'Tus siete animales, leídos como un solo campo. El don, la sombra y el camino entre ambos.' },
      { t: 'Repasa tu día', d: 'No lo que pasó. La textura real de lo que pasó, y lo que removió.' },
      { t: 'Habla, sin más', d: 'Sin estructura ni sugerencias. Para las noches en que no sabes por dónde empezar.' },
    ],
  },
  answer: {
    k: 'La diferencia',
    h2: 'Casi todas las apps te lanzan una pregunta y te dejan a solas con ella.',
    lead: 'Lee las reseñas de cualquier app de trabajo con la sombra y verás repetirse la misma frase: y luego no pasó nada. Symponia sostiene lo que traes con todo su peso, y cada respuesta se posa sobre una sola cosa, la que te lleva una capa más adentro. A veces una pregunta. A veces una imagen que ya no puedes soltar.',
    chat: [
      { who: 's', t: 'el rasgo que más te irrita en los demás suele ser el que desterraste en ti. ¿cuál es, en ella?' },
      { who: 'u', t: 'es tan dependiente. me dan ganas de salir corriendo.' },
      { who: 's', t: 'y si en ti la dependencia estuviera permitida, ¿qué estaría pidiendo?' },
      { who: 'u', t: 'que me cuiden, supongo. nunca se lo he permitido a nadie.' },
      { who: 's', t: 'entonces aquello de lo que huyes en ella es lo que nunca te has concedido. llevas años a la orilla de tu propia agua, esperando una invitación para entrar.' },
    ],
  },
  mem: {
    k: 'Memoria',
    h2: 'Symponia recuerda. Solo si tú se lo pides.',
    lead: 'No deberías tener que volver a presentarte cada martes. Pero lo que más necesitas decir suele ser lo que menos quieres que quede guardado. Las dos cosas son ciertas, así que las dos las decides tú.',
    items: [
      { t: 'Apagada por defecto', d: 'La memoria está apagada hasta que tú la enciendes. Apagada, no se guarda absolutamente nada en nuestros servidores.' },
      { t: 'Apágala', d: 'Desactívala cuando quieras, incluso a mitad de una conversación.' },
      { t: 'Bórrala', d: 'Elimina lo que Symponia guarda. Un toque. Sin segundas preguntas ni intentos de hacerte sentir culpable.' },
      { t: 'Nunca sirve para entrenar', d: 'Nada de lo que escribes entrena el modelo de nadie. Continuidad, no vigilancia.' },
    ],
    pill: 'Apagada por defecto. Con la memoria apagada no se guarda nada.',
  },
  limits: {
    k: 'Límites honestos',
    h2: 'Lo que Symponia nunca fingirá ser.',
    lead: 'No es terapia. No es terapia de pareja. Symponia solo escucha tu parte y no puede ver la relación en la que estás. No todo sentimiento es una herida, y a veces la otra persona simplemente está siendo desconsiderada. Si estás pasando por una crisis, acude a un profesional cualificado o a los servicios de emergencia de tu zona.',
  },
  price: {
    k: 'Precio',
    lead: '350 sesiones de reflexión al mes. Las reflexiones diarias son siempre gratuitas. Empiezas con unas cuantas sesiones gratis y cancelas cuando quieras desde los ajustes de tu ID de Apple. Nada oculto, y nada pensado para complicarte la salida.',
  },

  founder: {
    k: 'Dónde empezó',
    h2: 'Creada por un osteópata y por la mujer que le dio una forma que puedes sostener.',
    lead: 'Symponia empezó con el Dr. Alessandro Biletta, un osteópata que ha pasado su carrera trabajando ahí donde el cuerpo y la mente se encuentran en silencio. Después de años escuchando a la gente para ganarse la vida, llegó a una certeza. Debajo de cada historia, las personas buscan una manera de reconocerse. Encontró su respuesta en la psicología profunda: en Jung, en Hillman, en el viejo lenguaje de los arquetipos.',
    quote: '¿Y si pudieras encontrarte contigo a través de aquello en lo que ya te reconoces?',
    lead2: 'Yekta Dastranj estuvo en esas conversaciones. Entendió la idea en cuanto la oyó, y la sintió mucho antes de pensar en cómo construirla. Se convirtió en cofundadora y transformó la visión en algo que puedes abrir un martes por la noche y a lo que puedes volver.',
    cta: 'Lee nuestra historia',
  },

  faq: {
    k: 'Preguntas',
    h2: 'Preguntas frecuentes',
    items: [
      { q: '¿El trabajo interior puede cambiar de verdad mis relaciones?', a: 'A menudo, sí. No puedes obligar a la otra persona a hacer su trabajo. Pero casi todo aquello a lo que reaccionas en ella es algo que aún no has mirado en ti, y esa parte sí puedes moverla.' },
      { q: '¿Qué es la proyección, en palabras llanas?', a: 'Reaccionar ante la persona que tienes delante a partir de una historia mucho más antigua. La pantalla es tu pareja. La película es tuya. Symponia te ayuda a distinguir una de otra.' },
      { q: '¿Por qué elijo siempre el mismo tipo de persona?', a: 'Porque familiar y seguro no son lo mismo. Tu sistema nervioso se dirige hacia lo que reconoce. Ponerle nombre al patrón es lo que afloja su agarre.' },
      { q: '¿Esto es terapia o terapia de pareja?', a: 'No. Symponia es una herramienta de reflexión. Solo escucha tu parte. Si estás pasando por una crisis o necesitas apoyo clínico, habla con un profesional cualificado.' },
      { q: '¿Los animales son un test de personalidad?', a: 'No. Nada se te asigna. Eliges siete, incluido uno que te repele, y Symponia los lee juntos como un mismo campo. No va a decirte quién eres.' },
      { q: '¿Recuerda lo que le cuento?', a: 'Solo si enciendes la memoria. Está apagada por defecto y, apagada, no se guarda nada en nuestros servidores. Puedes borrar lo que Symponia guarda, y nada de lo que escribes entrena el modelo de nadie.' },
      { q: '¿Puedo escribir en mi idioma?', a: 'Sí. Escribe en el idioma que quieras: Symponia entiende y contesta en el mismo.' },
    ],
  },

  about: {
    metaTitle: 'Quiénes somos — Las personas detrás de Symponia',
    metaDesc: 'Symponia nació de la mano del Dr. Alessandro Biletta y de Yekta Dastranj: un filósofo de la vida interior y la persona que dio a esa visión una forma que puedes sostener.',
    k: 'Las personas detrás de Symponia',
    h1a: 'Vuelve a escuchar',
    h1b: 'tu propia voz.',
    lead: 'El mundo nunca ha sido tan ruidoso. En algún lugar por debajo del ruido, la voz en la que confiabas se ha ido quedando callada. Symponia existe para ayudarte a volver a ella. No para arreglarte. No para aconsejarte. Solo para escuchar y devolverte lo que oye.',
    beganK: 'Dónde empezó',
    began: [
      'Symponia empezó con el Dr. Alessandro Biletta, un osteópata que ha pasado la vida trabajando ahí donde el cuerpo y la mente se encuentran en silencio. Después de años escuchando a la gente para ganarse la vida, llegó a una certeza. Debajo de cada historia, las personas buscan una manera de reconocerse.',
      'Encontró su respuesta en la psicología profunda. En Jung, en Hillman, en el viejo lenguaje de los arquetipos. Y se hizo la pregunta que acabaría siendo el alma de Symponia.',
      'Creció como crecen las mejores ideas. Despacio, conversando. Charlas largas sobre el mundo interior, sobre el vínculo, sobre lo que hace falta para volver a un lugar más calmado dentro de uno mismo.',
      'Yekta Dastranj formó parte de esas conversaciones. Entendió la idea en cuanto la oyó, y la sintió mucho antes de pensar en cómo construirla. Se convirtió en cofundadora y le dio a la visión una forma que puedes sostener, abrir y a la que puedes volver cada día.',
    ],
    quote: '¿Y si pudieras encontrarte contigo a través de aquello en lo que ya te reconoces?',
    people: [
      {
        name: 'Dr. Alessandro Biletta',
        role: 'Fundador',
        bio: 'El corazón filosófico de Symponia. Osteópata y estudioso incansable de la vida interior, Alessandro llegó a creer que la comprensión verdadera empieza mucho antes de que nadie busque una solución. El método de los arquetipos que está en el centro de Symponia es suyo.',
      },
      {
        name: 'Yekta Dastranj',
        role: 'Cofundadora',
        bio: 'Quien lo trajo a la vida. Donde Alessandro veía la filosofía, Yekta veía la experiencia. Dio forma a lo que se siente al tener Symponia entre las manos, convencida de que algo tan íntimo debía seguir siendo sencillo, privado y profundamente humano.',
      },
    ],
    believeK: 'En qué creemos',
    beliefs: [
      'Que entenderte a ti mismo no debería tener que esperar a una crisis.',
      'Que la tecnología, cuando está bien hecha, puede crear silencio en lugar de llenarlo.',
      'Y que lo más poderoso que puede hacer una compañía es devolverte un pensamiento que ya era tuyo, pero que nunca te habías atrevido a decir en voz alta.',
    ],
    closing: [
      'Symponia no es terapia, y nunca fingirá serlo. Es un espacio para pensar. Un espejo que no aparta la mirada.',
      'La hicimos para cualquiera que haya intuido alguna vez que hay más dentro de sí de lo que ha tenido la calma suficiente para escuchar.',
    ],
    outroA: 'Nos alegra que estés aquí.',
    outroB: 'Te estábamos esperando.',
  },
};

export default es;
