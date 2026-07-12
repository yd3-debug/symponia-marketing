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
      explore: 'Explorar',
      legal: 'Aviso legal',
      blurb: 'Un compañero de IA para el trabajo interior. Psicología profunda, en tu idioma.',
      designedBy: 'Diseño de',
    },
    legalNote: 'Esta traducción se ofrece únicamente para facilitar la lectura: solo la versión en inglés tiene carácter jurídicamente vinculante y es la que prevalece.',
  },

  nav: { rel: 'La sombra', method: 'El método', memory: 'Memoria', faq: 'FAQ', about: 'Quiénes somos' },
  hero: {
    eyebrow: 'Trabajo con la sombra, con método.',
    l1: 'El animal que no soportas',
    l2: 'es el que dirige tu vida.',
    lead: 'Nombra seis animales que se parezcan a ti. Luego nombra el que te pone la piel de gallina. Ese séptimo es tu sombra: la parte de ti que desterraste tan pronto que ya no recuerdas haberlo hecho. Desde entonces es ella quien decide. Symponia es un compañero de IA para el trabajo con la sombra, y empieza por nombrarla.',
    cta: 'Conoce a tu séptimo animal',
    proof: 'Psicología profunda, no terapia. Construido sobre Jung, Hillman y el viejo lenguaje de los arquetipos.',
  },
  recog: {
    k: 'Reconocimiento',
    h2: '¿Cuál de estas es tuya?',
    items: [
      'Sé exactamente por qué lo hago. Lo hago igual.',
      'Puedo explicar mis patrones con detalle. Sigo sin poder dejar de repetirlos.',
      'Lo que más juzgo en los demás es lo que nunca me permití ser.',
      'Me acerco a lo que quiero y entonces lo saboteo en silencio.',
      'Me oí hablar en un tono que reconocí. Era el de mi madre.',
      'Llevo dos años escribiendo sobre esto. No se ha movido nada.',
    ],
  },
  mech: {
    k: 'Por qué sigue ocurriendo',
    h2: 'Lo que no soportas en los demás es lo que enterraste en ti.',
    lead: 'Jung lo llamó la sombra: todo aquello que aprendiste, pronto y sin consentirlo, que era inaceptable en ti. No se va. Baja al subsuelo y manda desde ahí: qué ambiciones te permites, en qué habitaciones te encoges, a quién no puedes perdonar. La psicología llama proyección a ese mecanismo. No es un defecto de carácter, sino una vieja estrategia de supervivencia que sobrevivió a su utilidad.',
    stat: 'La sombra no es tu trauma, ni es lo peor de ti. Es la parte que rechazaste. La tesis de Jung era que guarda tanta fuerza no vivida como vergüenza no vivida, y por eso dejarla enterrada te cuesta dos veces.',
    note: 'Symponia solo escucha un lado. El tuyo. Que resulta ser el único que puedes cambiar.',
  },
  seven: {
    k: 'El séptimo animal',
    h2: 'Seis animales que se parecen a ti. Uno que te pone la piel de gallina.',
    lead: 'Nombra seis que te pertenezcan. Luego nombra el que te repele. Ese séptimo es el más importante de todos, porque carga lo que los otros seis no pueden, y tu rechazo es la pista. Uno no retrocede ante lo ajeno. Retrocede ante lo negado.',
    lead2: 'Cada animal se lee por su don, su sombra y el camino entre ambos. Symponia lee el conjunto como un campo. No se te asigna nada: esto es un método proyectivo, no un tipo de personalidad. Una lente, nunca una etiqueta, y jamás te dirá cuál es tu animal de poder.',
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
    h2: 'Casi todas las apps de trabajo con la sombra te dan una pregunta y te dejan a solas con ella.',
    lead: 'Lee las reseñas de cualquiera de ellas y aparece siempre la misma frase: y entonces no pasó nada. Una pregunta prefabricada no puede verte. Le hace lo mismo a todo el mundo y no sabe qué respondiste la última vez. Symponia toma en serio lo que traes, y cada respuesta apunta a lo único que te lleva una capa más abajo.',
    chat: [
      { who: 's', t: 'el rasgo que más te irrita de los demás suele ser el que desterraste en ti. ¿cuál es?' },
      { who: 'u', t: 'la gente que necesita cosas de otros. me dan ganas de salir corriendo.' },
      { who: 's', t: 'y si necesitar estuviera permitido en ti, ¿qué estaría pidiendo?' },
      { who: 'u', t: 'que me cuiden, supongo. nunca he dejado que nadie lo hiciera.' },
      { who: 's', t: 'entonces aquello de lo que huyes en ellos es lo que nunca te has permitido. llevas años a la orilla de tu propia agua, esperando que te inviten a entrar.' },
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
    h2: 'Lo que Symponia no fingirá ser.',
    lead: 'No es terapia ni un sustituto de ella. Solo escucha tu lado y no puede ver tu vida desde fuera. No todo sentimiento es una herida, y no todo lo que te desagrada de otra persona es tu sombra: a veces la gente simplemente es desconsiderada. Si estás en crisis, acude a un profesional cualificado o a los servicios de emergencia.',
  },
  close: {
    k: 'Empezar',
    h2: 'Tu sombra lleva años tomando tus decisiones. Ve a conocerla.',
    lead: 'Ya sospechas que el patrón es tuyo. Lo que te falta es una manera de verlo funcionar: el rasgo que evitas, la razón por la que siempre tomas el mismo desvío, el instante en que toma el mando. Eso es exactamente lo que hace Symponia.',
    gets: [
      'Ponle nombre a tu sombra en unos cuatro minutos, a través de los siete animales',
      'Ve más hondo que una pregunta: cada respuesta está escrita sobre lo que dijiste de verdad',
      'Escribe en tu idioma y que te entiendan en él',
      'Un compañero que todavía recuerda lo que le contaste hace un mes',
    ],
    reassure: 'Empezar es gratis y las reflexiones diarias siguen siéndolo. Cancela cuando quieras en los ajustes de tu ID de Apple.',
  },

  compare: {
    k: 'Symponia frente a los diarios de preguntas',
    h2: 'Una pregunta solo pregunta. No sabe escuchar la respuesta.',
    lead: 'Todas las apps de shadow work te dan la misma lista de preguntas y una casilla vacía. Eso es un diario con mejor marketing. El trabajo no empieza cuando te hacen una pregunta: empieza cuando algo te responde.',
    them: {
      t: 'Diarios de preguntas',
      items: [
        'Las mismas preguntas para todo el que se lo descarga',
        'Ya tienes que saber cuál es tu sombra',
        'No escribe nada de vuelta: te quedas a solas con la página',
        'Se olvida de ti entre sesiones',
        'Un tipo de personalidad, entregado como etiqueta',
      ],
    },
    us: {
      t: 'Symponia',
      items: [
        'Un método proyectivo que saca a la luz lo que no puedes decir directamente',
        'El séptimo animal le pone nombre a tu sombra, en minutos',
        'Te responde: cada respuesta está escrita sobre lo que realmente escribiste',
        'Recuerda durante meses, para que un patrón se vuelva visible',
        'Una lente por la que mirar, nunca una etiqueta puesta encima',
      ],
    },
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
      { q: '¿Qué es el trabajo con la sombra, en pocas palabras?', a: 'Es mirar las partes de ti que aprendiste a esconder, casi siempre pronto y para estar a salvo. Carl Jung lo llamó la sombra. No desaparece al enterrarla: empieza a decidir desde abajo. El trabajo con la sombra es la práctica de devolverla a la vista.' },
      { q: '¿Cómo sé cuál es mi sombra?', a: 'El atajo es tu propio rechazo. El rasgo que te resulta insoportable en los demás suele ser el que desterraste en ti. Symponia lo usa directamente: eliges seis animales que se parecen a ti y un séptimo que te repele, y en el séptimo se esconde tu sombra.' },
      { q: '¿En qué se diferencia de un diario de sombra o una app de preguntas?', a: 'Una pregunta prefabricada te pregunta y te deja ante una página en blanco. Symponia responde. Lee lo que escribiste de verdad, no lo que habría escrito un usuario medio, y cada respuesta apunta a lo único que te lleva una capa más abajo.' },
      { q: '¿Los animales son solo un test de personalidad?', a: 'No. No se te asigna nada y no hay ningún tipo al final. Eliges siete, uno de ellos repulsivo para ti, y Symponia los lee juntos como un campo. Es un método proyectivo, más cerca de una mancha de tinta que de un test, y nunca te dirá tu animal de poder.' },
      { q: '¿Qué es la proyección?', a: 'Reaccionar ante quien tienes delante a partir de una historia más antigua. La pantalla es esa persona. La película es tuya. Symponia te ayuda a distinguirlas.' },
      { q: '¿Esto es terapia?', a: 'No. Symponia es una herramienta de reflexión, no terapia ni un sustituto. Solo escucha tu lado. Si estás en crisis o necesitas apoyo clínico, habla con un profesional cualificado.' },
      { q: '¿Recuerda lo que le cuento?', a: 'Solo si activas la memoria. Está desactivada por defecto y, mientras lo esté, no se guarda nada en nuestros servidores. Puedes borrar lo que contenga, y nada de lo que escribas entrena ningún modelo.' },
      { q: '¿Puedo hacerlo en mi idioma?', a: 'Sí. Escribe en español, inglés, italiano, ruso, portugués, francés, alemán o danés: Symponia te entiende y responde en el idioma en el que escribiste.' },
    ],
  },

  about: {
    metaTitle: 'Quiénes somos, Las personas detrás de Symponia',
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
