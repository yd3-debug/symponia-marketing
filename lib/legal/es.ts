import type { LegalDict } from './types';

// Español (peninsular). Traducción de ./en.ts: el texto inglés sigue siendo la
// versión jurídicamente vinculante, tal como advierte shell.legalNote en la
// cabecera de cada página legal. La ley aplicable es la de Inglaterra y Gales,
// de modo que todas las referencias británicas (Consumer Rights Act 2015, ICO,
// 999, Samaritans) se mantienen sin sustituirlas por equivalentes españoles.
// En los textos legales se trata siempre de «usted».

export const es: LegalDict = {
  terms: {
    metaTitle: 'Términos del servicio',
    metaDesc: 'Los términos que rigen el uso de la app y el sitio web de Symponia, operados por Boroto Ltd.',
    kicker: 'Legal',
    title: 'Términos del servicio',
    updated: 'Última actualización: julio de 2026',
    intro:
      'Los presentes Términos del servicio (los “Términos”) rigen su acceso y uso de la aplicación móvil Symponia y de este sitio web (conjuntamente, el “Servicio”). El Servicio es operado por Boroto Ltd, sociedad registrada en Inglaterra y Gales (“Boroto”, “nosotros” o “nuestro”). Le rogamos que lea atentamente estos Términos. Al descargar el Servicio, acceder a él o utilizarlo, usted acepta quedar vinculado por ellos. Si no los acepta, no utilice el Servicio.',
    sections: [
      {
        h: '1. Quiénes somos y cómo contactar con nosotros',
        blocks: [
          { t: 'p', x: 'El Servicio lo presta Boroto Ltd, sociedad registrada en Inglaterra y Gales. Puede escribirnos en cualquier momento a [hello@symponia.io](mailto:hello@symponia.io). Nuestro número de registro mercantil y el domicilio social constan en nuestros documentos societarios publicados y están disponibles a petición.' },
        ],
      },
      {
        h: '2. Requisitos de acceso y edad',
        blocks: [
          { t: 'p', x: 'Para crear una cuenta y utilizar Symponia debe tener al menos **18 años**. Al utilizar el Servicio, usted confirma que tiene 18 años o más y que posee capacidad legal para obligarse por estos Términos. Symponia está destinada a personas adultas y no está diseñada ni dirigida a menores.' },
        ],
      },
      {
        h: '3. Su cuenta',
        blocks: [
          { t: 'p', x: 'Para utilizar determinadas funciones debe crear una cuenta e iniciar sesión. Usted se compromete a facilitar información veraz, a mantener seguras sus credenciales de acceso y a responder de toda la actividad que se realice desde su cuenta. Avísenos sin demora en [hello@symponia.io](mailto:hello@symponia.io) si cree que alguien ha accedido a su cuenta sin su permiso. Puede eliminar su cuenta en cualquier momento desde la propia app (pestaña Perfil, sección Cuenta, “eliminar cuenta”).' },
        ],
      },
      {
        h: '4. Qué es Symponia',
        blocks: [
          { t: 'p', x: 'Symponia es una herramienta asistida por inteligencia artificial para la reflexión personal y la exploración de uno mismo. Entre sus funciones se incluyen:' },
          {
            t: 'ul',
            x: [
              'tres modos: Arquetipo, Mi día y Conversación;',
              'un ejercicio de arquetipos animales y una síntesis de sus resultados;',
              'reflexiones diarias personalizadas;',
              'acceso por sesiones a las conversaciones con la app.',
            ],
          },
          { t: 'p', x: 'Podremos añadir, modificar o retirar funciones cada cierto tiempo para mejorar el Servicio.' },
        ],
      },
      {
        h: '5. Symponia no es un servicio médico ni un servicio de emergencia',
        blocks: [
          { t: 'p', x: 'Symponia **no es un servicio médico, terapéutico, psiquiátrico, psicológico ni de asesoramiento (counselling)**, y no sustituye a la atención profesional. Nada de lo que hay en la app, ni nada de lo que Symponia genere, constituye asesoramiento profesional, diagnóstico o tratamiento, y no debe utilizarse como tal.' },
          { t: 'p', x: 'Symponia no puede ayudar en una emergencia y no ofrece atención en situaciones de crisis. **Si se encuentra en crisis, o cree que puede hacerse daño a sí mismo o a otra persona, contacte de inmediato con los servicios de emergencia de su zona o con un profesional cualificado.** En el Reino Unido puede llamar al 999 o contactar gratuitamente con Samaritans en el 116 123.' },
        ],
      },
      {
        h: '6. Contenido generado por IA',
        blocks: [
          { t: 'p', x: 'Las respuestas de Symponia las genera una inteligencia artificial. La IA puede equivocarse, ser incompleta o inducir a error, y sus respuestas pueden no ajustarse a su situación. Usted es responsable de cómo interpreta lo que Symponia produce y de las decisiones que tome a partir de ello, y debe emplear su propio criterio y buscar asesoramiento profesional cualificado cuando proceda. No garantizamos que ningún resultado sea exacto, fiable o apto para una finalidad concreta.' },
        ],
      },
      {
        h: '7. Suscripciones, precios y renovación automática',
        id: 'tokens',
        blocks: [
          { t: 'p', x: '**Saldo gratuito.** Los nuevos usuarios reciben un saldo gratuito limitado para poder probar Symponia antes de suscribirse.' },
          { t: 'p', x: '**Symponia Mensual (£12.99 al mes).** La suscripción incluye 350 sesiones de reflexión por mes natural. En cada renovación se concede un nuevo saldo de 350 sesiones; las sesiones no utilizadas no se acumulan para el periodo siguiente. Las reflexiones diarias son gratuitas y no se descuentan de sus sesiones.' },
          { t: 'p', x: '**Facturación y renovación.** Las suscripciones las vende y gestiona Apple mediante compra integrada (In-App Purchase) y se cargan a su Apple ID. Su suscripción se renueva automáticamente al precio vigente en ese momento al final de cada periodo de facturación, salvo que la cancele al menos 24 horas antes de que finalice el periodo. Puede gestionar o cancelar su suscripción en cualquier momento en los ajustes de su Apple ID (Ajustes, su nombre, Suscripciones). Eliminar la app no cancela su suscripción.' },
          { t: 'p', x: '**Pago.** El cobro lo realiza Apple. Nosotros nunca vemos ni almacenamos los datos de su tarjeta de pago. Los precios se muestran en la app y pueden variar; comunicaremos los cambios de precio en la medida exigida, y ningún cambio afectará a un periodo de facturación ya abonado.' },
        ],
      },
      {
        h: '8. Cancelación y reembolsos',
        blocks: [
          { t: 'p', x: 'Puede cancelar su suscripción en cualquier momento según lo descrito más arriba, y conservará el acceso hasta el final del periodo que ya haya abonado. Las compras se realizan a través de Apple, y los reembolsos los gestiona Apple conforme a sus políticas. Encontrará todos los detalles, incluidos sus derechos legales como consumidor, en nuestra [Política de reembolsos](/refunds). Nada de lo dispuesto en estos Términos afecta a sus derechos legales conforme a la Consumer Rights Act 2015 ni a otra normativa de consumo aplicable.' },
        ],
      },
      {
        h: '9. Uso aceptable',
        blocks: [
          { t: 'p', x: 'Usted se compromete a no:' },
          {
            t: 'ul',
            x: [
              'utilizar el Servicio con fines ilícitos, lesivos o fraudulentos;',
              'aplicar ingeniería inversa, descompilar, extraer datos mediante scraping o intentar obtener el código fuente, los prompts o los modelos que hay detrás del Servicio, salvo en la medida en que la ley prohíba esta restricción;',
              'utilizar el Servicio para acosar, insultar, amenazar o dañarse a sí mismo o a otras personas;',
              'falsear su identidad o su edad, o utilizar la cuenta de otra persona sin su permiso;',
              'utilizar bots, scripts u otros medios automatizados para acceder al Servicio o generar sesiones;',
              'interferir en el Servicio o en sus sistemas, alterarlos o intentar acceder a ellos sin autorización.',
            ],
          },
          { t: 'p', x: 'Podremos suspender o cancelar el acceso si usted incumple estos Términos o utiliza el Servicio de un modo que suponga riesgo de daño para usted, para terceros o para nosotros.' },
        ],
      },
      {
        h: '10. Propiedad intelectual',
        blocks: [
          { t: 'p', x: 'El Servicio, incluidos el software de Symponia, el marco de arquetipos animales, los prompts, los textos, el diseño y la marca, es titularidad de Boroto Ltd o de sus licenciantes y está protegido por la normativa de propiedad intelectual e industrial. Le concedemos una licencia limitada, personal, no exclusiva, intransferible y revocable para utilizar el Servicio con fines personales y no comerciales, de acuerdo con estos Términos. No puede copiar, distribuir ni crear obras derivadas del Servicio sin nuestro permiso por escrito.' },
          { t: 'p', x: 'Las reflexiones y conversaciones que usted crea son suyas. No reclamamos la titularidad de su contenido personal. Usted nos concede una licencia limitada para tratar ese contenido únicamente en la medida necesaria para operar y prestarle el Servicio, tal como se describe en nuestra [Política de privacidad](/privacy).' },
        ],
      },
      {
        h: '11. Servicios de terceros',
        blocks: [
          { t: 'p', x: 'El Servicio se apoya en terceros, entre ellos Apple (distribución, inicio de sesión y pagos), Anthropic (la IA Claude que genera las respuestas) y Supabase (alojamiento seguro). El uso de la app está sujeto además al [Licensed Application End User License Agreement](/eula) de Apple. No somos responsables de los servicios de terceros, y a las partes de la experiencia que ellos prestan se les aplican sus propios términos y políticas de privacidad.' },
        ],
      },
      {
        h: '12. Disponibilidad y cambios en el Servicio',
        blocks: [
          { t: 'p', x: 'Procuramos mantener Symponia disponible, pero no garantizamos que funcione de forma ininterrumpida, segura o libre de errores. El Servicio puede no estar disponible durante las tareas de mantenimiento o por causas ajenas a nuestro control, y podemos modificarlo, suspenderlo o interrumpirlo total o parcialmente. Si interrumpimos una función de pago, actuaremos de manera justa y conforme a sus derechos como consumidor.' },
        ],
      },
      {
        h: '13. Suspensión y terminación',
        blocks: [
          { t: 'p', x: 'Puede dejar de utilizar el Servicio y eliminar su cuenta cuando quiera. Podremos suspender o poner fin a su acceso si incumple estos Términos, si la ley lo exige o si seguir prestándole el Servicio no resulta razonablemente posible. Las cláusulas que por su naturaleza deban subsistir tras la terminación (incluidas las relativas a propiedad intelectual, exclusión de garantías, limitación de responsabilidad y ley aplicable) seguirán vigentes.' },
        ],
      },
      {
        h: '14. Exclusión de garantías',
        blocks: [
          { t: 'p', x: 'Salvo por las obligaciones que asumimos expresamente en estos Términos y por los derechos que le corresponden conforme a la normativa de consumo y que no pueden excluirse, el Servicio se presta “tal cual” y “según disponibilidad”, y no ofrecemos garantía alguna, expresa o implícita, sobre el Servicio, sus contenidos o cualquier resultado generado por IA.' },
        ],
      },
      {
        h: '15. Nuestra responsabilidad frente a usted',
        blocks: [
          { t: 'p', x: 'Nada de lo dispuesto en estos Términos limita ni excluye nuestra responsabilidad cuando hacerlo sería contrario a Derecho. Esto incluye la responsabilidad por fallecimiento o lesiones personales causados por nuestra negligencia, por dolo o declaraciones fraudulentas, y cualquier otra responsabilidad que no pueda limitarse ni excluirse conforme a la ley aplicable, incluidos sus derechos legales como consumidor.' },
          { t: 'p', x: 'Con sujeción al párrafo anterior, y en la máxima medida permitida por la ley: no respondemos de las pérdidas o daños que no fueran previsibles, de las pérdidas derivadas de que usted se haya basado en contenido generado por IA, ni de los daños indirectos o consecuentes; y nuestra responsabilidad total frente a usted por todas las reclamaciones derivadas del Servicio o relacionadas con él, en cualquier periodo de 12 meses, no excederá de la mayor de las siguientes cantidades: (a) el importe total que usted nos haya pagado a nosotros o a Apple por el Servicio en ese periodo, o (b) £100. Prestamos el Servicio únicamente para uso personal y no respondemos de pérdidas empresariales.' },
        ],
      },
      {
        h: '16. Indemnidad',
        blocks: [
          { t: 'p', x: 'Usted se compromete a responder de las pérdidas y costes razonables que suframos como consecuencia del uso indebido que haga del Servicio o del incumplimiento de estos Términos, y a resarcirnos por ellos, en la medida en que le sean imputables. Esto no limita sus derechos como consumidor.' },
        ],
      },
      {
        h: '17. Cambios en estos Términos',
        blocks: [
          { t: 'p', x: 'Podremos actualizar estos Términos cada cierto tiempo, por ejemplo para reflejar cambios en el Servicio o en la ley. Modificaremos la fecha de “Última actualización” que figura arriba y, cuando los cambios sean sustanciales, adoptaremos medidas razonables para ponerlos en su conocimiento. Si sigue utilizando el Servicio después de que los cambios surtan efecto, acepta los Términos actualizados. Si no está de acuerdo, debe dejar de utilizar el Servicio y puede cancelar la suscripción y eliminar su cuenta.' },
        ],
      },
      {
        h: '18. Ley aplicable y jurisdicción',
        blocks: [
          { t: 'p', x: 'Estos Términos y cualquier controversia derivada de ellos o relacionada con ellos se rigen por la legislación de Inglaterra y Gales. Las controversias se someterán a la jurisdicción exclusiva de los tribunales de Inglaterra y Gales, salvo que, si usted reside en otra nación del Reino Unido, podrá interponer acciones en su nación de residencia, y salvo que los consumidores conservan la protección de las normas imperativas de su país de residencia.' },
        ],
      },
      {
        h: '19. Disposiciones generales',
        blocks: [
          { t: 'p', x: 'Si alguna parte de estos Términos resultara inexigible, el resto seguirá en vigor. El hecho de que no exijamos el cumplimiento de una disposición no supone renuncia a la misma. Usted no puede ceder sus derechos en virtud de estos Términos sin nuestro consentimiento; nosotros sí podremos ceder los nuestros siempre que sus derechos no se vean perjudicados. Estos Términos, junto con nuestra [Política de privacidad](/privacy), nuestra [Política de reembolsos](/refunds) y el [EULA](/eula), constituyen el acuerdo íntegro entre usted y nosotros en relación con el Servicio.' },
        ],
      },
      {
        h: '20. Contacto',
        blocks: [
          { t: 'p', x: '¿Tiene preguntas sobre estos Términos? Escríbanos a [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  privacy: {
    metaTitle: 'Política de privacidad',
    metaDesc: 'Cómo Boroto Ltd recoge, utiliza y protege sus datos personales cuando usted usa Symponia.',
    kicker: 'Legal',
    title: 'Política de privacidad',
    updated: 'Última actualización: julio de 2026',
    intro:
      'Esta Política de privacidad explica cómo Boroto Ltd (“Boroto”, “nosotros” o “nuestro”) recoge, utiliza, comunica y protege sus datos personales cuando usted usa la app y el sitio web de Symponia. Symponia es un espacio de reflexión privada: recogemos lo mínimo posible y nunca vendemos sus datos.',
    sections: [
      {
        h: '1. Quiénes somos (responsable del tratamiento)',
        blocks: [
          { t: 'p', x: 'Boroto Ltd es el responsable del tratamiento de sus datos personales. Estamos registrados en Inglaterra y Gales. Puede dirigirse a nosotros para cualquier cuestión relativa a esta política en [hello@symponia.io](mailto:hello@symponia.io). Nuestro número de registro mercantil y el domicilio social constan en nuestros documentos societarios publicados y están disponibles a petición.' },
        ],
      },
      {
        h: '2. Los datos personales que recogemos',
        blocks: [
          { t: 'p', x: '**Información que usted nos facilita durante la configuración inicial y el uso de la app:**' },
          {
            t: 'ul',
            x: [
              'su nombre y, si decide compartirlo, su género;',
              'sus siete arquetipos animales y sus respuestas a las preguntas de sintonización;',
              'su preferencia de frecuencia de resonancia;',
              'los mensajes y las reflexiones que escribe en cada modo;',
              'sus preferencias de notificaciones y si acepta recibir correos ocasionales de actualización.',
            ],
          },
          { t: 'p', x: '**Información de la cuenta e información técnica:**' },
          {
            t: 'ul',
            x: [
              'los datos de la cuenta necesarios para iniciar sesión y mantener seguros sus datos;',
              'su saldo de sesiones (tokens) y el estado de su suscripción;',
              'información técnica y de diagnóstico limitada (como la versión de la app y datos básicos del dispositivo), utilizada para mantener el Servicio en funcionamiento y seguro.',
            ],
          },
          { t: 'p', x: '**Información sobre las compras:** cuando usted se suscribe, Apple procesa su pago. Recibimos de Apple la confirmación del estado de su suscripción, pero nunca recibimos ni almacenamos los datos de su tarjeta de pago.' },
          { t: 'p', x: 'Parte de la información se almacena también localmente en su dispositivo (por ejemplo, sus arquetipos, sus preferencias y el historial de conversaciones en cada modo). Los datos locales se eliminan cuando usted borra la app.' },
          { t: 'p', x: 'Le rogamos que no comparta información que no desee registrar y que tenga especial cuidado con las categorías especiales de datos (como los relativos a su salud, sus creencias o su sexualidad). Cuando esa información aparezca en lo que usted escribe, la tratamos únicamente para prestarle el Servicio, sobre la base de su consentimiento explícito, que puede retirar eliminando el contenido correspondiente o su cuenta.' },
        ],
      },
      {
        h: '3. Cómo y por qué usamos sus datos, y nuestras bases jurídicas',
        blocks: [
          { t: 'p', x: 'Conforme a la normativa de protección de datos del Reino Unido y de la UE, debemos contar con una base jurídica para utilizar sus datos personales. Nos basamos en las siguientes:' },
          {
            t: 'ul',
            x: [
              '**Ejecución de nuestro contrato con usted**: para crear y gestionar su cuenta, generar respuestas personalizadas de Symponia, entregarle su reflexión diaria, mantener una sesión durante una conversación y confirmar su suscripción con Apple.',
              '**Su consentimiento**: para enviarle notificaciones push o correos comerciales ocasionales (solo si usted lo acepta) y para tratar cualquier categoría especial de datos contenida en lo que escribe. Puede retirar el consentimiento en cualquier momento.',
              '**Nuestro interés legítimo**: para mantener el Servicio seguro y operativo, prevenir usos indebidos y fraudes y mejorar su fiabilidad, de un modo que no prevalezca sobre sus derechos.',
              '**Obligación legal**: para cumplir las leyes que nos resultan aplicables, por ejemplo en materia fiscal y al responder a requerimientos lícitos.',
            ],
          },
          { t: 'p', x: 'No usamos sus datos para publicidad ni para segmentación publicitaria, y no vendemos sus datos personales.' },
        ],
      },
      {
        h: '4. Cómo usa Symponia la IA',
        blocks: [
          { t: 'p', x: 'Para generar respuestas reflexivas, el texto que usted envía, junto con su nombre, su género (si lo ha indicado), sus arquetipos y su frecuencia de resonancia, se envía a la API de Claude de Anthropic. Este tratamiento se realiza bajo condiciones de Zero Data Retention (ZDR): Anthropic no conserva el contenido de sus conversaciones después de generar una respuesta y no lo utiliza para entrenar ni mejorar sus modelos.' },
          { t: 'p', x: 'Symponia genera contenido de forma automática, pero no adopta decisiones basadas únicamente en un tratamiento automatizado que produzcan efectos jurídicos sobre usted o le afecten significativamente de modo similar. Symponia es una herramienta de reflexión, no un decisor.' },
        ],
      },
      {
        h: '5. Con quién compartimos los datos',
        blocks: [
          { t: 'p', x: 'Solo compartimos datos con los proveedores de servicios que nos ayudan a operar Symponia; cada uno de ellos actúa al amparo de contratos que les obligan a protegerlos:' },
          {
            t: 'ul',
            x: [
              '**Anthropic**: proporciona la IA Claude que genera las respuestas, bajo condiciones de Zero Data Retention. Véase [anthropic.com/legal/privacy](https://www.anthropic.com/legal/privacy).',
              '**Supabase**: base de datos segura, autenticación y alojamiento del backend para su cuenta y sus conversaciones.',
              '**Apple**: distribución en la App Store, inicio de sesión, envío de notificaciones push y gestión de las compras integradas. Los datos de pago los gestiona íntegramente Apple.',
            ],
          },
          { t: 'p', x: 'También podremos comunicar datos si así lo exige la ley, para proteger la seguridad, los derechos o los bienes de nuestros usuarios o de terceros, o en el marco de una transmisión de empresa, en cuyo caso se lo comunicaremos y seguiremos protegiendo sus datos.' },
        ],
      },
      {
        h: '6. Transferencias internacionales',
        blocks: [
          { t: 'p', x: 'Algunos de nuestros proveedores (entre ellos Anthropic y Apple) tratan datos fuera del Reino Unido y del EEE, incluido en Estados Unidos. Cuando los datos se transfieren internacionalmente, nos apoyamos en garantías adecuadas reconocidas por el Derecho del Reino Unido y de la UE, como el International Data Transfer Agreement del Reino Unido o su Adenda y las Cláusulas Contractuales Tipo de la Comisión Europea, junto con protecciones adicionales cuando resulten necesarias. Puede solicitarnos más información sobre estas garantías.' },
        ],
      },
      {
        h: '7. Cuánto tiempo conservamos sus datos',
        blocks: [
          { t: 'p', x: 'Conservamos su cuenta y su historial de conversaciones mientras su cuenta esté activa. Cuando usted elimina su cuenta (pestaña Perfil, sección Cuenta, “eliminar cuenta”) o nos pide que suprimamos sus datos, los borramos de nuestros sistemas activos y se eliminan de las copias de seguridad ordinarias en un plazo breve. El contenido enviado a Anthropic no es conservado por esta empresa, en virtud de las condiciones de ZDR. Los datos locales de su dispositivo se eliminan cuando borra la app. Solo podremos conservar información limitada durante más tiempo cuando la ley lo exija (por ejemplo, registros básicos de las transacciones).' },
          { t: 'p', x: 'Si nos pide que eliminemos los datos asociados a su cuenta, atenderemos su solicitud en un plazo de 30 días.' },
        ],
      },
      {
        h: '8. Cómo protegemos sus datos',
        blocks: [
          { t: 'p', x: 'Aplicamos medidas técnicas y organizativas para proteger sus datos, entre ellas el cifrado en tránsito, los controles de acceso y el uso de proveedores de infraestructura de confianza. Ningún método de transmisión o almacenamiento es completamente seguro, pero trabajamos para proteger su información y para reaccionar con rapidez si algo va mal, incluida la notificación a usted y a la autoridad competente cuando la ley lo exija.' },
        ],
      },
      {
        h: '9. Sus derechos',
        id: 'gdpr',
        blocks: [
          { t: 'p', x: 'Si se encuentra en el Reino Unido o en el EEE, le asisten los siguientes derechos sobre sus datos personales en virtud del RGPD del Reino Unido y del RGPD de la UE:' },
          {
            t: 'ul',
            x: [
              '**Acceso**: obtener una copia de los datos personales que tenemos sobre usted;',
              '**Rectificación**: que se corrijan los datos inexactos;',
              '**Supresión**: que se eliminen sus datos (“derecho al olvido”);',
              '**Limitación**: pedirnos que limitemos el uso que hacemos de sus datos;',
              '**Portabilidad**: recibir sus datos en un formato portátil y legible por máquina;',
              '**Oposición**: oponerse a un tratamiento basado en nuestro interés legítimo;',
              '**Retirada del consentimiento**: en cualquier momento, cuando nos basemos en su consentimiento, sin que ello afecte al tratamiento anterior.',
            ],
          },
          { t: 'p', x: 'Para ejercer cualquiera de estos derechos, escriba a [hello@symponia.io](mailto:hello@symponia.io). No le cobraremos nada ni le trataremos de forma distinta por ejercerlos. Si no está conforme con la manera en que tratamos sus datos, puede presentar una reclamación ante la Information Commissioner’s Office del Reino Unido ([ico.org.uk](https://ico.org.uk)) o ante la autoridad de control que le corresponda en el EEE.' },
        ],
      },
      {
        h: '10. Comunicaciones comerciales',
        blocks: [
          { t: 'p', x: 'Solo enviamos correos comerciales si usted los ha aceptado previamente. Todos los correos comerciales incluyen un enlace para darse de baja, y puede oponerse en cualquier momento utilizándolo o escribiendo a [hello@symponia.io](mailto:hello@symponia.io). Darse de baja de las comunicaciones comerciales no afecta a los mensajes de servicio necesarios para gestionar su cuenta.' },
        ],
      },
      {
        h: '11. Cookies y sitio web',
        blocks: [
          { t: 'p', x: 'Nuestro sitio web utiliza únicamente las cookies y el almacenamiento local estrictamente necesarios para que el sitio funcione y para recordar preferencias básicas. No utilizamos cookies publicitarias ni de seguimiento entre sitios. Si en el futuro incorporamos herramientas de analítica, actualizaremos esta política y, cuando sea preceptivo, le pediremos antes su consentimiento.' },
        ],
      },
      {
        h: '12. Menores',
        blocks: [
          { t: 'p', x: 'Symponia está destinada a personas adultas. No se dirige a menores de 18 años y no recogemos conscientemente datos personales de menores. Si cree que un menor nos ha facilitado datos personales, contacte con nosotros en [hello@symponia.io](mailto:hello@symponia.io) y los eliminaremos.' },
        ],
      },
      {
        h: '13. Cambios en esta política',
        blocks: [
          { t: 'p', x: 'Podremos actualizar esta Política de privacidad cada cierto tiempo. Modificaremos la fecha de “Última actualización” que figura arriba y, cuando los cambios sean sustanciales, adoptaremos medidas razonables para ponerlos en su conocimiento. El uso continuado de Symponia después de que los cambios surtan efecto supone que usted acepta la política actualizada.' },
        ],
      },
      {
        h: '14. Contacto',
        blocks: [
          { t: 'p', x: 'Para cualquier consulta o solicitud en materia de privacidad, contacte con nuestro equipo de privacidad en [hello@symponia.io](mailto:hello@symponia.io).' },
        ],
      },
    ],
  },

  refunds: {
    metaTitle: 'Política de reembolsos',
    metaDesc: 'Cómo funcionan los reembolsos, las cancelaciones y sus derechos como consumidor en las suscripciones de Symponia compradas en la App Store.',
    kicker: 'Legal',
    title: 'Política de reembolsos',
    updated: 'Última actualización: julio de 2026',
    intro:
      'Symponia es operada por Boroto Ltd. Las suscripciones las vende y gestiona Apple mediante compra integrada (In-App Purchase). Puesto que el pago lo gestiona Apple, los reembolsos se solicitan a Apple y es Apple quien los decide conforme a sus políticas. Esta página explica cómo funciona y expone sus derechos como consumidor. Nada de lo aquí dispuesto limita sus derechos legales.',
    sections: [
      {
        h: '1. Probar Symponia gratis',
        blocks: [
          { t: 'p', x: 'Los nuevos usuarios reciben un saldo gratuito limitado para que puedan conocer Symponia antes de decidir si se suscriben. Le animamos a utilizarlo antes de comprar.' },
        ],
      },
      {
        h: '2. Cómo solicitar un reembolso',
        blocks: [
          { t: 'p', x: 'Todas las compras se realizan a través de su Apple ID, por lo que es Apple, y no Boroto Ltd, quien gestiona los reembolsos. Para solicitar uno:' },
          {
            t: 'ul',
            x: [
              'vaya a [reportaproblem.apple.com](https://reportaproblem.apple.com) e inicie sesión con su Apple ID; o',
              'en su dispositivo, abra Ajustes, toque su nombre y utilice el historial de compras para informar de un problema.',
            ],
          },
          { t: 'p', x: 'Apple revisa cada solicitud conforme a sus propios criterios y decide si concede el reembolso. Le ayudaremos con mucho gusto en lo que podamos, pero no podemos emitir directamente reembolsos de la App Store ni garantizar la decisión de Apple.' },
        ],
      },
      {
        h: '3. Cancelar su suscripción',
        blocks: [
          { t: 'p', x: 'Puede cancelar en cualquier momento en los ajustes de su Apple ID (Ajustes, su nombre, Suscripciones). Si cancela, su suscripción no se renovará y conservará el acceso hasta el final del periodo que ya haya abonado. La cancelación no da lugar por sí sola a un reembolso del periodo en curso, y las sesiones no utilizadas no se acumulan para el periodo siguiente. Eliminar la app no cancela su suscripción.' },
        ],
      },
      {
        h: '4. Sus derechos como consumidor en el Reino Unido o en la UE',
        blocks: [
          { t: 'p', x: 'Si es usted consumidor en el Reino Unido o en la UE, normalmente dispone de un derecho de desistimiento de 14 días respecto de la compra de contenido digital, con derecho a reembolso. No obstante, este derecho puede extinguirse una vez iniciado el suministro del contenido digital, cuando usted haya dado su consentimiento expreso a ello y haya reconocido que pierde el derecho de desistimiento. Cuando inicia una suscripción y empieza a usar sesiones o reflexiones diarias, el contenido digital se suministra de inmediato, lo que puede extinguir el derecho de desistimiento de 14 días respecto del contenido ya facilitado.' },
          { t: 'p', x: 'Nada de esto le priva de sus derechos legales. Si el Servicio es defectuoso, no se corresponde con la descripción o no se presta con la diligencia y pericia razonables, puede tener derecho a un remedio conforme a la Consumer Rights Act 2015 (o a la normativa equivalente del lugar donde resida), con independencia del proceso de reembolso estándar de Apple. Si cree que es su caso, contacte con nosotros y le ayudaremos.' },
        ],
      },
      {
        h: '5. Cambios de precio',
        blocks: [
          { t: 'p', x: 'Si modificamos el precio de la suscripción, el nuevo precio no se aplicará a un periodo de facturación que ya haya abonado. Cuando sea preceptivo, Apple le pedirá que confirme una subida de precio antes de que surta efecto; si no la acepta, su suscripción no se renovará al nuevo precio.' },
        ],
      },
      {
        h: '6. Contacto',
        blocks: [
          { t: 'p', x: 'Si tiene un problema con un pago, con una suscripción o con el Servicio, escríbanos a [hello@symponia.io](mailto:hello@symponia.io) y haremos todo lo posible por resolverlo.' },
        ],
      },
    ],
  },

  eula: {
    metaTitle: 'Contrato de licencia de usuario final',
    metaDesc: 'EULA estándar de Apple para la app iOS de Symponia. Rige su licencia de uso de la aplicación descargada desde la App Store.',
    kicker: 'Legal',
    titleL1: 'Licensed Application',
    titleL2: 'End User License Agreement',
    sub: 'Apple Standard EULA',
    note: 'El contrato que figura a continuación es el contrato de licencia estándar de Apple para aplicaciones licenciadas y se reproduce en el inglés original de Apple, porque se trata del contrato de la propia Apple y no del nuestro. Solo el texto en inglés tiene carácter vinculante.',
  },

  credits: {
    metaTitle: 'Precios',
    metaDesc: 'Precios de Symponia: empiece con un saldo gratuito y siga por £12.99 al mes con 350 sesiones de reflexión.',
    kicker: 'Precios',
    h1: 'Elija su profundidad',
    lead: 'Empiece gratis. Pase al plan mensual cuando lo desee.',
    free: {
      k: 'Recién llegados',
      price: 'Gratis',
      sub: 'Un pequeño saldo gratuito para explorar Symponia',
      body: 'Nombre sus siete arquetipos animales, reciba el retrato de su constelación y pruebe unas cuantas sesiones de reflexión. Sin compromiso.',
      cta: 'Descargar en la App Store',
    },
    monthly: {
      badge: 'Recomendado',
      k: 'Symponia Mensual',
      sub: 'al mes · 350 sesiones de reflexión',
      bullets: [
        '350 sesiones entre los modos Arquetipo, Mi día y Conversación',
        'Reflexiones diarias gratuitas (no se descuentan de las sesiones)',
        'Saldo nuevo cada mes: las sesiones no se acumulan',
        'Cancele cuando quiera desde los ajustes de su Apple ID',
      ],
      cta: 'Disponible en la app',
    },
    how: {
      h2: 'Cómo funciona',
      items: [
        { t: 'Una sesión por reflexión', d: 'Cada intercambio con Symponia consume una sesión. Las reflexiones diarias son gratuitas y no se descuentan de su saldo.' },
        { t: 'Reinicio mensual', d: 'Sus 350 sesiones mensuales se renuevan en cada renovación. Las sesiones no utilizadas no se acumulan.' },
        { t: 'Compra dentro de la app', d: 'Todas las compras se realizan dentro de la app iOS de Symponia mediante la compra integrada de Apple.' },
        { t: 'Pago seguro a través de Apple', d: 'Todos los pagos los gestiona Apple. Nunca vemos ni almacenamos los datos de su tarjeta.' },
      ],
    },
    contact: '¿Tiene preguntas sobre las suscripciones o la facturación? Escríbanos a [hello@symponia.io](mailto:hello@symponia.io). Consulte nuestros [Términos del servicio](/terms#tokens) para conocer todos los detalles.',
  },
};
