/*
  Camino de la privacidad: contenido del juego.
  Acá están las secciones, las 50 preguntas con sus explicaciones,
  los recorridos, el glosario y los niveles de la licencia final.
  En cada partida se mezclan las 50 y se eligen algunas al azar.

  Marcas que se pueden usar en los textos:
    <<palabra>> o <<palabra|clave>>  palabra del glosario (se toca para ver qué significa)
    [[A > B]]                         ruta de menú del celular
    `x`                               texto técnico
    {{x}}                             enlace falso
*/

const SECCIONES = {
  // Nivel básico (preguntas 1 a 20)
  1: "Permisos de las apps",
  2: "Tus datos",
  3: "Navegación y cuentas",
  4: "Situaciones de riesgo",
  // Nivel desafío (preguntas 21 a 50)
  5: "Mensajes y llamadas falsas",
  6: "Compras y plata",
  7: "Redes sociales",
  8: "Celular y wifi",
  9: "Si algo sale mal",
};

// Cada pregunta tiene su número (n), la sección, la letra correcta,
// un consejo para recordar y las opciones (de 2 a 4) con el porqué de cada una.
// "contexto" y "mensaje" son opcionales: sirven para mostrar lo que te escriben o te dicen.
// Las opciones "No sé" llevan nose: true.
const PREGUNTAS = [
  // ---------- 1. Permisos de las apps ----------
  {
    n: 1, seccion: 1, correcta: "c",
    consejo: "Dale a cada app solo los permisos que necesita para funcionar.",
    texto: "Instalás una app de fotos y te pide permiso para usar tus fotos, la cámara, tus contactos y tu ubicación. ¿Qué hacés?",
    opciones: {
      a: { texto: "Acepto todo, si no la app no anda.", porque: "No es así. Podés rechazar los <<permisos>> de a uno y casi siempre la app sigue funcionando." },
      b: { texto: "Acepto todo, porque la bajé de la tienda oficial.", porque: "Que esté en la tienda oficial no quiere decir que pida solo lo que necesita." },
      c: { texto: "Acepto fotos y cámara. Contactos y ubicación, no.", porque: "Una app de fotos solo necesita tus fotos y la cámara. Tus contactos y el lugar donde estás no tienen nada que ver con sacar fotos." },
    },
  },
  {
    n: 2, seccion: 1, correcta: "b",
    consejo: "Elegí la ubicación «solo mientras usás la app».",
    texto: "Una app te pregunta si puede usar tu ubicación «todo el tiempo» o «solo mientras usás la app». ¿Cuál es la diferencia?",
    opciones: {
      a: { texto: "Ninguna, es lo mismo.", porque: "No es lo mismo: con «solo mientras usás la app», sabe dónde estás únicamente cuando la tenés abierta." },
      b: { texto: "Con «todo el tiempo» sabe dónde estás aunque no la estés usando.", porque: "Con ese permiso, la app puede seguir tus pasos todo el día, incluso con el celular en el bolsillo. Casi siempre conviene elegir «solo mientras usás la app»." },
      c: { texto: "Con «todo el tiempo» la app anda más rápido.", porque: "No tiene nada que ver con la velocidad: solo cambia cuándo puede saber dónde estás." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 3, seccion: 1, correcta: "a",
    consejo: "Antes de darle tus contactos a una app, pensá si de verdad los necesita.",
    texto: "Le das permiso a una app para ver tus contactos. ¿Qué puede ver?",
    opciones: {
      a: { texto: "Toda tu agenda: nombres, números y mails. Y la puede copiar.", porque: "Puede leer todo lo que guardaste de tus contactos, y muchas apps lo suben a sus servidores. Tus contactos nunca dieron permiso para eso." },
      b: { texto: "Solo los nombres, no los números.", porque: "También ve los números, los mails y cualquier otro dato que tengas guardado." },
      c: { texto: "Nada, solo los usa para mostrarlos en la app.", porque: "Muchas apps copian la agenda entera, y después no sabés qué hacen con ella." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 4, seccion: 1, correcta: "b",
    consejo: "Si ves el puntito de color sin estar usando la cámara o el micrófono, fijate qué app es.",
    texto: "¿Cómo te das cuenta de que una app está usando la cámara o el micrófono?",
    opciones: {
      a: { texto: "No hay forma de saberlo.", porque: "Sí hay forma: el celular muestra un aviso cada vez que una app los usa." },
      b: { texto: "Aparece un puntito de color arriba en la pantalla.", porque: "En iPhone es verde (cámara) o naranja (micrófono); en Android, desde la versión 12, aparece un ícono verde. Si lo ves sin estar usándolos, fijate qué app es." },
      c: { texto: "El celular vibra o hace un ruido.", porque: "No vibra ni suena: el aviso es solo ese puntito en la pantalla." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 5, seccion: 1, correcta: "a",
    consejo: "Revisá cada tanto qué apps tienen permiso de ubicación, cámara y micrófono.",
    texto: "¿Alguna vez revisaste qué apps pueden usar tu ubicación, tu cámara o tu micrófono?",
    opciones: {
      a: { texto: "Sí, lo reviso cada tanto.", porque: "Bien hecho. Las apps se actualizan y a veces piden <<permisos>> nuevos, así que conviene revisarlos cada tanto." },
      b: { texto: "Nunca, o una vez hace mucho.", porque: "Seguro tenés apps con permisos que ya no necesitan. Revisarlos lleva un par de minutos." },
      c: { texto: "No sé dónde se ve eso.", nose: true, rotulo: "Dónde se ve", porque: "En Android, abrí Configuración y buscá [[Administrador de permisos]]. En iPhone, entrá a [[Configuración > Privacidad y seguridad]]." },
    },
  },

  // ---------- 2. Tus datos ----------
  {
    n: 6, seccion: 2, correcta: "c",
    consejo: "Tus datos valen, aunque no tengas nada que ocultar.",
    contexto: "Un amigo te dice:",
    mensaje: "No me importan mis datos, no tengo nada que ocultar.",
    texto: "¿Tiene razón?",
    opciones: {
      a: { texto: "Sí. Si no hacés nada malo, no pasa nada.", porque: "El riesgo no depende de hacer algo malo: tus datos valen igual, y se pueden usar para estafarte." },
      b: { texto: "Sí. Solo les interesan los datos de los famosos.", porque: "Les interesan los datos de todos. Por eso muchas apps son gratis: el negocio son tus datos." },
      c: { texto: "No. Con los datos arman un perfil de cada persona, que se vende o se puede filtrar.", porque: "No se trata de ocultar algo malo. Con lo que hacés en el celular se arma un <<perfil>> tuyo que se usa para venderte cosas y, si hay una <<filtración>>, para estafarte." },
    },
  },
  {
    n: 7, seccion: 2, correcta: "a",
    consejo: "En los carteles de cookies, tocá «Rechazar» o «Solo necesarias».",
    texto: "Entrás a una página y aparece un cartel sobre <<cookies>>. ¿Qué te conviene tocar?",
    opciones: {
      a: { texto: "«Rechazar» o «Solo necesarias», si aparece.", porque: "La página sigue funcionando igual y les das menos datos a las empresas de publicidad." },
      b: { texto: "«Aceptar todas», así se va rápido.", porque: "«Aceptar todas» incluye las cookies que siguen lo que hacés de página en página para mostrarte publicidad." },
      c: { texto: "«Aceptar», porque si no la página no anda.", porque: "Casi siempre la página funciona igual: las cookies necesarias se mantienen." },
      d: { texto: "No sé qué son las cookies.", nose: true, rotulo: "Qué son las cookies", porque: "Son archivitos que las páginas guardan en tu navegador. Algunas hacen que la página funcione y otras registran lo que mirás." },
    },
  },
  {
    n: 8, seccion: 2, correcta: "b",
    consejo: "Si no querés que tus fotos digan dónde las sacaste, desactivá la ubicación en la cámara.",
    texto: "¿Una foto puede guardar el lugar exacto donde la sacaste?",
    opciones: {
      a: { texto: "No, una foto es solo la imagen.", porque: "Además de la imagen, el archivo guarda datos escondidos." },
      b: { texto: "Sí, si la cámara tenía la ubicación activada.", porque: "Las fotos guardan datos ocultos (<<metadatos>>): la fecha, el modelo del celular y, a veces, el lugar exacto. Se puede desactivar en la configuración de la cámara." },
      c: { texto: "Solo si le pongo la ubicación cuando la publico.", porque: "La ubicación puede ir dentro del archivo aunque no la agregues. Si mandás la foto como documento o por mail, viaja con ella." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 9, seccion: 2, correcta: "a",
    consejo: "Si no querés que una foto circule, no la mandes.",
    texto: "Mandás una foto de «ver una vez». ¿Alguien la puede guardar igual?",
    opciones: {
      a: { texto: "Sí, sacándole una foto a la pantalla con otro celular.", porque: "Aunque la app la borre o no deje hacer capturas, nada impide fotografiar la pantalla. Si no querés que circule, no la mandes." },
      b: { texto: "No, se borra para siempre después de verla.", porque: "Se borra de la app, pero alguien pudo guardarla antes." },
      c: { texto: "No, porque la app no deja hacer capturas.", porque: "Bloquear las <<capturas|captura>> no impide sacarle una foto a la pantalla con otro celular." },
    },
  },

  // ---------- 3. Navegación y cuentas ----------
  {
    n: 10, seccion: 3, correcta: "c",
    consejo: "El candado no alcanza: mirá bien la dirección de la página.",
    texto: "Una página tiene un candado al lado de la dirección. ¿Qué quiere decir?",
    opciones: {
      a: { texto: "Que es confiable y no es una estafa.", porque: "Muchas páginas de estafa también tienen candado." },
      b: { texto: "Que la página no guarda tus datos.", porque: "La página recibe todo lo que le mandes y lo puede guardar." },
      c: { texto: "Que lo que mandás viaja protegido, pero la página igual puede ser falsa.", porque: "El candado (<<https>>) quiere decir que la conexión está <<cifrada>>: nadie puede leer en el camino lo que mandás. Pero las páginas falsas también lo tienen. Para saber si es la verdadera, mirá bien la dirección." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 11, seccion: 3, correcta: "a",
    consejo: "El modo incógnito no te hace invisible.",
    texto: "¿Qué hace el <<modo incógnito>> del navegador?",
    opciones: {
      a: { texto: "No guarda el historial en tu celular o tu compu.", porque: "Pero no te hace invisible: el wifi, tu compañía de internet y las páginas donde iniciás sesión igual ven lo que hacés." },
      b: { texto: "Hace que nadie pueda ver qué páginas visitás.", porque: "Solo evita que quede guardado en tu celular o tu compu. El wifi o tu compañía de internet igual pueden ver a qué páginas entrás." },
      c: { texto: "Te protege de virus y de páginas falsas.", porque: "No te protege de virus ni de páginas falsas." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 12, seccion: 3, correcta: "b",
    consejo: "Usá contraseñas largas, por ejemplo cuatro palabras al azar.",
    texto: "¿Cuál de estas contraseñas es más difícil de adivinar?",
    opciones: {
      a: { texto: "Juan2005!", mono: true, porque: "Un nombre con un año es lo primero que prueban, y esos datos suelen estar en tus redes." },
      b: { texto: "mate-lluvia-tren-azul", mono: true, porque: "Lo que más cuenta es el largo: cuatro palabras al azar suman más de 20 letras y son fáciles de recordar." },
      c: { texto: "P@ssw0rd", mono: true, porque: "Cambiar letras por símbolos es un truco viejo que los programas ya prueban." },
    },
  },
  {
    n: 13, seccion: 3, correcta: "c",
    consejo: "Usá una contraseña distinta en cada cuenta importante.",
    texto: "¿Usás la misma contraseña en varias cuentas?",
    opciones: {
      a: { texto: "Sí, la misma en casi todas.", porque: "Si se filtra en una página, la prueban en todas tus cuentas. Una sola <<filtración>> puede abrirlas todas." },
      b: { texto: "La misma, pero con algún cambio.", porque: "Los programas también prueban los cambios obvios, como agregar un número al final." },
      c: { texto: "No, cada cuenta importante tiene la suya.", porque: "Si se filtra una contraseña, no les sirve para tus otras cuentas. Un <<gestor de contraseñas>>, como el de Google o el del iPhone, las recuerda por vos." },
    },
  },
  {
    n: 14, seccion: 3, correcta: "a",
    consejo: "Activá la verificación en dos pasos, empezando por tu mail.",
    texto: "¿Tenés activada la <<verificación en dos pasos>> en tus cuentas importantes?",
    opciones: {
      a: { texto: "Sí, en las importantes.", porque: "Aunque alguien consiga tu contraseña, necesita un código o un <<PIN|pin>> que solo tenés vos. En WhatsApp está en [[Ajustes > Cuenta > Verificación en dos pasos]]." },
      b: { texto: "En algunas sí y en otras no.", porque: "Activala en las demás, empezando por el mail: con el mail se recuperan todas las otras cuentas." },
      c: { texto: "No.", porque: "Es de las protecciones que más sirven, y se activa en un minuto." },
      d: { texto: "No sé qué es.", nose: true, rotulo: "Qué es", porque: "Es un segundo paso para entrar a tu cuenta: además de la contraseña, te piden un código." },
    },
  },

  // ---------- 4. Situaciones de riesgo ----------
  {
    n: 15, seccion: 4, correcta: "c",
    consejo: "Nunca pases un código que te llega por SMS, aunque te lo pida un conocido.",
    contexto: "Un contacto te escribe:",
    mensaje: "Te llegó un código por SMS por error, ¿me lo pasás?",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Se lo paso, es alguien que conozco.", porque: "Que lo conozcas no importa: su cuenta puede estar robada, y el que te escribe es otra persona." },
      b: { texto: "Le pregunto para qué lo quiere.", porque: "Te van a dar una excusa creíble. Ese código no se pasa nunca, a nadie." },
      c: { texto: "No se lo paso y lo llamo por teléfono para avisarle.", porque: "Ese código sirve para abrir tu WhatsApp en otro celular: si lo pasás, te roban la cuenta. Seguramente a tu contacto ya le robaron la suya." },
    },
  },
  {
    n: 16, seccion: 4, correcta: "b",
    consejo: "Si un mensaje te apura con un link, no lo toques: revisá tu cuenta desde la app.",
    contexto: "Te escriben por Instagram:",
    mensaje: "Tu cuenta será eliminada en 24 horas. Apelá acá: {{enlace}}",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Entro rápido al link para no perder la cuenta.", porque: "El link lleva a una página falsa que te pide la contraseña para robártela." },
      b: { texto: "No toco el link y reviso mi cuenta desde la app.", porque: "El apuro de «24 horas» es una trampa clásica. Si hubiera un problema de verdad, lo verías en la configuración de la app, no en un mensaje con un link." },
      c: { texto: "Me fijo si la cuenta que me escribe tiene el logo oficial.", porque: "Cualquiera puede poner un logo oficial como foto de perfil." },
    },
  },
  {
    n: 17, seccion: 4, correcta: "d",
    consejo: "Ningún sorteo de verdad necesita la foto de tu DNI.",
    texto: "Un sorteo en redes te pide tu nombre, tu DNI, tu dirección y una foto del DNI. ¿Qué hacés?",
    opciones: {
      a: { texto: "Participo, total es un sorteo.", porque: "«Es solo un sorteo» es justo lo que quieren que pienses." },
      b: { texto: "Participo si la cuenta tiene muchos seguidores.", porque: "Los seguidores se compran, y las cuentas se roban." },
      c: { texto: "Mando los datos, pero no la foto.", porque: "Tu nombre, tu DNI y tu dirección juntos ya sirven para estafas." },
      d: { texto: "No participo: ningún sorteo necesita la foto de mi DNI.", porque: "Muchos sorteos falsos existen solo para juntar datos. Con la foto de tu DNI pueden intentar sacar créditos o abrir cuentas a tu nombre." },
    },
  },
  {
    n: 18, seccion: 4, correcta: "a",
    consejo: "Bajá apps solo de la tienda oficial.",
    texto: "Un amigo te pasa una app paga, pero «gratis», para instalar con un archivo <<.apk|apk>>. ¿Qué puede pasar?",
    opciones: {
      a: { texto: "Que traiga un programa escondido que te robe datos.", porque: "Para «liberarla», alguien cambió la app, y nadie sabe qué más le agregó. Bajá apps solo de la <<tienda oficial>>." },
      b: { texto: "Nada, es la misma app sin pagar.", porque: "No es la misma app: alguien la modificó para que no pida pago." },
      c: { texto: "Nada, porque me la pasó un amigo.", porque: "Tu amigo seguramente no sabe qué tiene adentro." },
    },
  },
  {
    n: 19, seccion: 4, correcta: "c",
    consejo: "Si publican una foto tuya sin permiso, pedí que la borren y, si no, denunciala.",
    texto: "Alguien sube una foto tuya sin tu permiso. ¿Qué podés hacer?",
    opciones: {
      a: { texto: "Nada: la sacó él, así que la puede publicar.", porque: "Que la haya sacado él no le da derecho a publicarla." },
      b: { texto: "Nada: una vez publicada, ya no se puede bajar.", porque: "Las redes sociales dejan denunciar las fotos publicadas sin permiso, y las bajan." },
      c: { texto: "Pedirle que la borre y, si no lo hace, denunciarla.", porque: "Tu imagen es tuya: en Argentina, para publicarla necesitan tu <<consentimiento>>, salvo pocas excepciones (artículo 53 del Código Civil y Comercial). Si es grave, pedí ayuda a un docente o a un adulto de confianza." },
      d: { texto: "Subir una foto de él, para que sepa lo que se siente.", porque: "Así el problema crece, y vos harías lo mismo que él." },
    },
  },
  {
    n: 20, seccion: 4, correcta: "b",
    consejo: "Si circula un chat privado, no lo reenvíes y pedí que lo borren.",
    texto: "En el grupo del curso alguien comparte la <<captura>> de un chat privado de un compañero. ¿Qué hacés?",
    opciones: {
      a: { texto: "Nada, yo no la compartí.", porque: "Si nadie dice nada, sigue circulando." },
      b: { texto: "Pido que la borren y, si sigue, aviso a un docente.", porque: "Frenar la difusión protege a tu compañero. Difundir un chat privado puede ser delito si perjudica o puede perjudicar a alguien (artículo 155 del Código Penal)." },
      c: { texto: "No la reenvío, pero me río como los demás.", porque: "Reaccionar o comentar también ayuda a que se difunda." },
    },
  },

  // ---------- 5. Mensajes y llamadas falsas ----------
  {
    n: 21, seccion: 5, correcta: "c",
    consejo: "Si alguien te pide plata por mensaje, confirmá llamando a su número de siempre.",
    contexto: "A tu mamá le llega este mensaje de un número que no tiene agendado:",
    mensaje: "Hola ma, cambié de número. ¿Me podés transferir $80.000? Es urgente, después te explico.",
    texto: "¿Qué le conviene hacer?",
    opciones: {
      a: { texto: "Transferir rápido, porque es urgente.", porque: "El apuro es parte de la trampa: no te deja pensar. Así funciona la estafa del «cambié de número»." },
      b: { texto: "Preguntarle por mensaje algo que solo sabría su hijo.", porque: "Ayuda, pero no alcanza: muchas respuestas se pueden averiguar mirando las redes. Lo más seguro es llamar al número de siempre." },
      c: { texto: "Llamar al número de siempre de su hijo para confirmar.", porque: "Es la estafa del «cambié de número»: alguien se hace pasar por un familiar. Con una llamada al número de siempre se descubre enseguida." },
    },
  },
  {
    n: 22, seccion: 5, correcta: "a",
    consejo: "Si te llaman «del banco», cortá y llamá vos al número oficial.",
    contexto: "Te llaman diciendo que son del banco:",
    mensaje: "Detectamos un movimiento raro en tu cuenta. Para frenarlo, decinos el código que te acaba de llegar por SMS.",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Corto y llamo yo al número que está atrás de mi tarjeta o en la app del banco.", porque: "Ningún banco te pide códigos por teléfono. Si cortás y llamás vos al número oficial, sabés que del otro lado está el banco de verdad." },
      b: { texto: "Les paso el código, así frenan el movimiento.", porque: "Con ese código entran a tu cuenta. Ningún banco te pide códigos, claves ni datos de la tarjeta por teléfono." },
      c: { texto: "Les pregunto mis datos, para ver si de verdad son del banco.", porque: "Los estafadores muchas veces ya tienen tu nombre, tu DNI y hasta parte de tu tarjeta, por alguna <<filtración>>. Que los sepan no prueba nada." },
    },
  },
  {
    n: 23, seccion: 5, correcta: "c",
    consejo: "Para ver un envío, escribí vos la dirección de la página oficial.",
    contexto: "Te llega este SMS:",
    mensaje: "Tu paquete está retenido por falta de pago. Pagá $350 para recibirlo: {{correo-envios.info/pago}}",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Pago, total son solo $350.", porque: "No buscan los $350: buscan los datos de tu tarjeta, para después hacer compras con ella." },
      b: { texto: "Entro al link para ver si el paquete es mío.", porque: "El link lleva a una página falsa, armada para que pongas tus datos." },
      c: { texto: "Busco el envío en la página oficial del correo, escribiendo yo la dirección.", porque: "Si de verdad tenés un paquete, lo vas a ver ahí. Escribir la dirección vos te asegura que no entrás a una página falsa." },
    },
  },
  {
    n: 24, seccion: 5, correcta: "b",
    consejo: "Mirá cómo termina la dirección antes de la primera barra «/».",
    texto: "Tu <<billetera virtual>> es «mibilletera.com». Te llega un mail que dice ser de ellos. ¿Cuál de estas direcciones es de verdad de tu billetera?",
    opciones: {
      a: { texto: "mibilletera.com.seguridad-cuenta.net", mono: true, porque: "Empieza igual, pero lo que manda es el final: termina en «seguridad-cuenta.net», que es otra página." },
      b: { texto: "mibilletera.com/ayuda", mono: true, porque: "Lo que importa es cómo termina la dirección antes de la primera barra «/». Acá es «mibilletera.com», y lo que sigue después de la barra es solo una sección de la página." },
      c: { texto: "mibilletera-ayuda.com", mono: true, porque: "Es otra página: el guion la convierte en una dirección distinta, y cualquiera puede comprarla." },
    },
  },
  {
    n: 25, seccion: 5, correcta: "a",
    consejo: "Nunca instales una app porque te lo pide alguien que te llamó.",
    contexto: "Te llaman de «soporte técnico»:",
    mensaje: "Tu celular tiene un virus. Para arreglarlo, instalá esta app que nos deja ver tu pantalla.",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Corto: ningún soporte de verdad te llama para pedirte eso.", porque: "Las empresas no te llaman para avisarte que tenés un virus. Si te piden instalar una app para ver tu pantalla, es una estafa." },
      b: { texto: "La instalo, así me lo arreglan.", porque: "Con esa app pueden ver y manejar tu celular: tus mensajes, tus códigos y la app del banco." },
      c: { texto: "La instalo, pero no abro la app del banco mientras tanto.", porque: "Igual pueden ver todo lo que aparece en la pantalla, como los códigos que te llegan, y abrir las apps ellos." },
    },
  },
  {
    n: 26, seccion: 5, correcta: "b",
    consejo: "Acordá con tu familia una palabra clave para emergencias.",
    contexto: "Te llega un audio con la voz de tu hermano, desde un número que no conocés:",
    mensaje: "Soy yo, se me rompió el celu. Necesito plata ya, después te explico.",
    texto: "¿Podés confiar porque es su voz?",
    opciones: {
      a: { texto: "Sí: si es su voz, es él.", porque: "Hoy una voz se puede copiar con <<inteligencia artificial>>, a partir de unos segundos de audio sacados de las redes." },
      b: { texto: "No: una voz se puede copiar. Lo llamo a su número de siempre.", porque: "Con unos segundos de audio, hay programas de <<inteligencia artificial>> que imitan la voz de cualquiera. Llamalo a su número de siempre. Una buena idea es tener una palabra clave en la familia para estos casos." },
      c: { texto: "Sí, si el audio es largo.", porque: "Un programa puede armar un audio largo con la voz copiada." },
    },
  },

  // ---------- 6. Compras y plata ----------
  {
    n: 27, seccion: 6, correcta: "c",
    consejo: "Desconfiá de los precios muy bajos con pago solo por transferencia.",
    texto: "Una cuenta de Instagram vende zapatillas originales a mitad de precio. Solo aceptan transferencia y te apuran: «¡Quedan 2 pares!». ¿Qué hacés?",
    opciones: {
      a: { texto: "Compro rápido, antes de que se terminen.", porque: "El apuro está puesto para que no pienses. «Quedan pocos» es un truco muy usado." },
      b: { texto: "Compro, porque tiene muchos seguidores y buenos comentarios.", porque: "Los seguidores se compran, y los comentarios los puede escribir la misma persona desde otras cuentas." },
      c: { texto: "No compro: precio muy bajo, solo transferencia y apuro son señales de estafa.", porque: "Una transferencia no se puede cancelar: si no te mandan nada, perdiste la plata. Comprá en tiendas conocidas o con un medio de pago que te proteja." },
    },
  },
  {
    n: 28, seccion: 6, correcta: "a",
    consejo: "Antes de entregar algo que vendiste, fijate que la plata esté en tu cuenta.",
    texto: "Vendés tu bici usada por internet. El comprador te manda el comprobante de la transferencia y te pide que se la mandes hoy. ¿Qué hacés?",
    opciones: {
      a: { texto: "Me fijo en la app de mi banco que la plata haya entrado.", porque: "Lo único que vale es ver la plata en tu cuenta. Hasta que no la ves, no entregues nada." },
      b: { texto: "Se la mando: ya tengo el comprobante.", porque: "Un comprobante es solo una imagen, y se puede armar uno falso en un minuto." },
      c: { texto: "Le pido el comprobante en PDF, que es más difícil de falsificar.", porque: "Un PDF también se puede falsificar. Lo que importa es tu cuenta, no el comprobante." },
    },
  },
  {
    n: 29, seccion: 6, correcta: "b",
    consejo: "Si te prometen duplicar tu plata, es una estafa.",
    texto: "Ves una publicidad donde un famoso dice que invirtió y duplicó su plata en una semana. ¿Qué pensás?",
    opciones: {
      a: { texto: "Que conviene invertir poquito, para probar.", porque: "Al principio te pueden mostrar «ganancias» para que pongas más plata. Después desaparecen con todo." },
      b: { texto: "Que es una estafa: nadie puede prometer duplicar la plata tan rápido.", porque: "Las inversiones de verdad no prometen ganancias seguras ni rápidas. Y ninguna te apura con «cupos limitados»." },
      c: { texto: "Que es real, porque lo recomienda un famoso.", porque: "Usan fotos y videos de famosos sin permiso, muchas veces armados con <<inteligencia artificial>>." },
    },
  },
  {
    n: 30, seccion: 6, correcta: "b",
    consejo: "Antes de pagar con QR, fijate a quién le estás pagando.",
    texto: "En un bar, para pagar hay un <<código QR|código qr>> en la mesa. Parece un sticker pegado arriba de otro. ¿Qué hacés?",
    opciones: {
      a: { texto: "Lo escaneo igual: si está en la mesa, es del bar.", porque: "Cualquiera puede pegar su propio QR encima del original para que le pagues a él." },
      b: { texto: "Le pregunto al mozo cómo pagar, o pago en la caja.", porque: "Si algo se ve raro, preguntá. Y antes de confirmar un pago con QR, fijate que el nombre de quien cobra sea el del local." },
      c: { texto: "Lo escaneo: los QR no se pueden falsificar.", porque: "Un QR es solo un dibujo que lleva a un link, y cualquiera puede hacer uno en segundos." },
    },
  },
  {
    n: 31, seccion: 6, correcta: "c",
    consejo: "En una tienda que no conocés, pagá con tarjeta de crédito.",
    texto: "Vas a comprar por primera vez en una tienda online que no conocés. ¿Cuál es la forma de pago más segura?",
    opciones: {
      a: { texto: "Transferencia, porque tiene descuento.", porque: "Si no te llega lo que compraste, la plata de una transferencia ya no vuelve." },
      b: { texto: "Depósito en efectivo.", porque: "Es como darle la plata en la mano a un desconocido: no la recuperás." },
      c: { texto: "Tarjeta de crédito, o un medio de pago con protección al comprador.", porque: "Si no te llega lo que compraste, con la tarjeta de crédito podés hacer un reclamo para que te devuelvan la plata." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 32, seccion: 6, correcta: "a",
    consejo: "Un premio de verdad no te pide plata para recibirlo.",
    contexto: "Te llega este mensaje, pero no participaste en ningún sorteo:",
    mensaje: "¡Felicitaciones! Ganaste un celular. Para recibirlo, pagá $5.000 de envío: {{premios-ya.net}}",
    texto: "¿Qué pensás?",
    opciones: {
      a: { texto: "Que es una estafa: un premio de verdad no te pide plata.", porque: "Te piden poquito para que no lo pienses. Después van a pedir más, o usar los datos de tu tarjeta." },
      b: { texto: "Que es normal: los envíos se pagan.", porque: "Si no participaste en nada, no puede haber premio." },
      c: { texto: "Que conviene pagar, total el celular vale mucho más.", porque: "No hay ningún celular: lo único real es la plata que les mandes." },
    },
  },

  // ---------- 7. Redes sociales ----------
  {
    n: 33, seccion: 7, correcta: "c",
    consejo: "Subí las historias más tarde y sin ubicación.",
    texto: "Todos los días, cuando llegás a tu casa, subís una historia con la ubicación. ¿Qué puede saber alguien que las mira?",
    opciones: {
      a: { texto: "Nada importante.", porque: "Juntando varias historias se puede saber mucho de tu rutina." },
      b: { texto: "Solo en qué ciudad vivís.", porque: "La ubicación puede mostrar tu barrio, y lo que se ve en la foto también da pistas." },
      c: { texto: "Dónde vivís y a qué hora estás ahí.", porque: "Con varias historias se arma tu rutina: dónde vivís, a qué hora llegás y cuándo no hay nadie. Subilas más tarde y sin ubicación." },
    },
  },
  {
    n: 34, seccion: 7, correcta: "a",
    consejo: "Antes de subir algo, pensá si te molestaría que lo vea cualquiera.",
    texto: "Tenés la cuenta privada y solo te siguen tus amigos. ¿Tus fotos están 100% protegidas?",
    opciones: {
      a: { texto: "No: cualquier seguidor puede sacarles una captura y compartirlas.", porque: "La cuenta privada ayuda, pero no es una caja fuerte. Cualquiera de tus seguidores puede guardar una foto y pasarla." },
      b: { texto: "Sí, solo las ven mis seguidores.", porque: "Las ven tus seguidores, pero no controlás qué hacen con ellas." },
      c: { texto: "Sí, porque la red social no deja copiar las fotos.", porque: "No deja descargarlas, pero sí sacar una <<captura>> o fotografiar la pantalla." },
    },
  },
  {
    n: 35, seccion: 7, correcta: "b",
    consejo: "Si alguien de internet te pide fotos o secretos, contale a un adulto de confianza.",
    texto: "Jugando online, alguien que dice tener tu edad te regala monedas del juego. Después te pide una foto tuya y que no le cuentes a nadie. ¿Qué hacés?",
    opciones: {
      a: { texto: "Le mando una foto, total me regaló monedas.", porque: "Los regalos sirven para que sientas que le debés algo. No le debés nada." },
      b: { texto: "No le mando nada, dejo de hablarle y le cuento a un adulto de confianza.", porque: "Regalos, pedidos de fotos y secretos son señales de <<grooming>>: un adulto que se hace pasar por alguien de tu edad. Es un delito en Argentina (artículo 131 del Código Penal). Bloquealo, denuncialo en el juego y contale a un adulto. Nunca es tu culpa." },
      c: { texto: "Le pido que primero me mande una foto de su cara.", porque: "Te puede mandar la foto de otra persona: eso no prueba quién es." },
    },
  },
  {
    n: 36, seccion: 7, correcta: "c",
    consejo: "Antes de subir una foto de alguien, preguntale.",
    texto: "Tenés una foto de un amigo en la que sale muy mal, y te parece graciosa. ¿Qué hacés antes de subirla?",
    opciones: {
      a: { texto: "La subo, es una broma.", porque: "A vos te puede parecer una broma y a él dolerle. Y una vez que circula, no se puede frenar." },
      b: { texto: "La subo, pero solo para mis mejores amigos.", porque: "Tus mejores amigos también pueden sacarle captura y pasarla." },
      c: { texto: "Le pregunto si le parece bien.", porque: "Su imagen es suya. Si te dice que no, no la subas." },
    },
  },
  {
    n: 37, seccion: 7, correcta: "a",
    consejo: "Lo que publicás hoy te puede encontrar dentro de muchos años.",
    texto: "Dentro de unos años buscás trabajo, y la empresa busca tu nombre en internet. ¿Qué puede pasar con lo que publicás hoy?",
    opciones: {
      a: { texto: "Lo pueden encontrar y tenerlo en cuenta para decidir.", porque: "Todo lo que publicás deja una <<huella digital>> que dura años. Antes de publicar, preguntate si te molestaría que lo vea un profesor o una empresa." },
      b: { texto: "Nada, lo viejo ya no aparece.", porque: "Lo viejo sigue apareciendo por años, aunque vos ya no lo veas." },
      c: { texto: "Solo pueden ver lo que publiqué este año.", porque: "Los buscadores muestran publicaciones de hace muchos años." },
    },
  },
  {
    n: 38, seccion: 7, correcta: "b",
    consejo: "Si ves una cuenta repetida de un amigo, avisale por otro lado y denunciala.",
    texto: "Te llega una solicitud de una cuenta con la foto y el nombre de una amiga, pero ya la seguís en su cuenta de siempre. ¿Qué puede ser?",
    opciones: {
      a: { texto: "Que se hizo una cuenta nueva: la acepto.", porque: "Antes de aceptar, preguntale a ella por otro lado. Si no fue ella, es una copia." },
      b: { texto: "Una cuenta falsa que copia su perfil para engañar a sus contactos.", porque: "Copian la foto y el nombre para pedirles plata o datos a sus contactos. Avisale a tu amiga por otro medio y denunciá la cuenta." },
      c: { texto: "Un error de la red social.", porque: "La red social no duplica cuentas sola: alguien la creó." },
    },
  },

  // ---------- 8. Celular y wifi ----------
  {
    n: 39, seccion: 8, correcta: "c",
    consejo: "Para el banco, usá tus datos móviles y no un wifi abierto.",
    texto: "Estás en una plaza con wifi gratis y sin contraseña, y querés entrar al <<home banking>>. ¿Qué te conviene?",
    opciones: {
      a: { texto: "Entrar igual: la página del banco tiene candado.", porque: "El candado ayuda, pero una red abierta puede ser una trampa: quien la armó puede ver qué páginas visitás e intentar mandarte a páginas falsas." },
      b: { texto: "Da igual: todas las redes son iguales.", porque: "No es lo mismo: en una red sin contraseña, lo que hacés pasa por una red que no sabés quién maneja." },
      c: { texto: "Usar los datos móviles del celular.", porque: "Tus <<datos móviles>> son una conexión solo tuya. Una red abierta la usa cualquiera, y cualquiera puede crear una con un nombre parecido. Para cosas importantes, mejor los datos." },
    },
  },
  {
    n: 40, seccion: 8, correcta: "a",
    consejo: "Cargá el celular con tu cargador o con una batería portátil.",
    texto: "En la terminal de ómnibus hay puertos USB para cargar el celular. ¿Qué es más seguro?",
    opciones: {
      a: { texto: "Usar mi propio cargador en un enchufe, o una batería portátil.", porque: "Así por el cable solo pasa electricidad. Si alguna vez usás un USB público y el celular pregunta si permitís el acceso a tus datos, tocá «No permitir»." },
      b: { texto: "Enchufar mi cable en el USB de la terminal.", porque: "Un puerto USB público puede estar modificado para intentar sacar datos del celular." },
      c: { texto: "Da igual: por un cable USB solo pasa electricidad.", porque: "Por un cable USB también pasan datos. Por eso el celular, a veces, pregunta si querés permitir el acceso." },
    },
  },
  {
    n: 41, seccion: 8, correcta: "b",
    consejo: "Configurá que solo tus contactos te puedan mandar archivos.",
    texto: "Vas en el colectivo y te aparece un aviso: un dispositivo desconocido quiere mandarte un archivo. ¿Qué hacés?",
    opciones: {
      a: { texto: "Lo acepto, para ver qué es.", porque: "Puede ser una imagen ofensiva o un archivo con un programa dañino." },
      b: { texto: "Lo rechazo y configuro que solo mis contactos me puedan mandar archivos.", porque: "Si no sabés quién es, rechazalo. En AirDrop (iPhone) o Quick Share (Android) podés elegir que solo te manden archivos tus contactos." },
      c: { texto: "Lo acepto, pero no lo abro.", porque: "Aunque no lo abras, el archivo ya queda guardado en tu celular." },
    },
  },
  {
    n: 42, seccion: 8, correcta: "c",
    consejo: "Mantené actualizados el celular y las apps.",
    texto: "Te aparece un aviso para actualizar el sistema del celular. ¿Conviene instalarlo?",
    opciones: {
      a: { texto: "No, solo cambia el diseño.", porque: "Además del diseño, las actualizaciones arreglan fallas de seguridad." },
      b: { texto: "No, las actualizaciones traen virus.", porque: "Las actualizaciones oficiales, desde la configuración del celular o la <<tienda oficial>>, son seguras. Desconfiá de las páginas web que te piden «actualizar» algo." },
      c: { texto: "Sí, porque arregla fallas que los delincuentes podrían aprovechar.", porque: "Cada actualización tapa agujeros de seguridad que ya se conocen. Instalala con wifi y con batería cargada, y actualizá también las apps." },
      d: { texto: "No sé.", nose: true },
    },
  },
  {
    n: 43, seccion: 8, correcta: "a",
    consejo: "Configurá que los mensajes no se lean con el celular bloqueado.",
    texto: "Tu celular está bloqueado, pero en la pantalla se lee el código que te llegó por SMS. ¿Qué riesgo hay?",
    opciones: {
      a: { texto: "Que alguien lea el código sin desbloquear el celular.", porque: "Con ese código pueden entrar a tus cuentas. Podés hacer que los mensajes no se lean con el celular bloqueado: en iPhone, en [[Configuración > Notificaciones > Mostrar previsualizaciones]]; en Android, buscá «pantalla de bloqueo» en Configuración." },
      b: { texto: "Ninguno: el celular está bloqueado.", porque: "La pantalla bloqueada muestra igual el mensaje, y cualquiera que la mire lo puede leer." },
      c: { texto: "Solo lo puede leer quien sepa mi PIN.", porque: "No hace falta el <<PIN|pin>>: el código se ve sin desbloquear." },
    },
  },
  {
    n: 44, seccion: 8, correcta: "b",
    consejo: "Bloqueá el celular con un PIN de 6 números o más.",
    texto: "¿Cuál de estos bloqueos de pantalla protege más tu celular?",
    opciones: {
      a: { texto: "Deslizar el dedo, sin clave.", porque: "Así cualquiera que agarre tu celular entra a todo." },
      b: { texto: "Un PIN de 6 números que no sea tu cumpleaños.", porque: "Un <<PIN|pin>> largo y que no sea una fecha es mucho más difícil de adivinar. Podés sumarle la huella del dedo o la cara para no escribirlo cada vez." },
      c: { texto: "Un patrón en forma de L.", porque: "Los patrones simples se adivinan fácil, y a veces se ven las marcas del dedo en la pantalla." },
    },
  },

  // ---------- 9. Si algo sale mal ----------
  {
    n: 45, seccion: 9, correcta: "b",
    consejo: "Si perdés el celular, bloquealo desde otro dispositivo cuanto antes.",
    texto: "Perdiste el celular. ¿Qué es lo primero que conviene hacer?",
    opciones: {
      a: { texto: "Esperar a ver si alguien lo devuelve.", porque: "Mientras esperás, alguien puede usar tus cuentas abiertas." },
      b: { texto: "Desde otro dispositivo, ubicarlo y bloquearlo con mi cuenta de Google o de Apple.", porque: "Desde otra compu o celular entrá a `google.com/android/find` (Android) o `icloud.com/find` (iPhone): podés hacerlo sonar, bloquearlo o borrarlo. Si no aparece, pedile a tu compañía de teléfono que bloquee el <<chip>>." },
      c: { texto: "Comprar otro y listo.", porque: "El celular perdido sigue con tus cuentas abiertas y tus fotos." },
    },
  },
  {
    n: 46, seccion: 9, correcta: "c",
    consejo: "Si te roban una cuenta, recuperala desde la app oficial y avisá a tus contactos.",
    texto: "Te robaron la cuenta de Instagram: te cambiaron la contraseña y el mail. ¿Qué hacés?",
    opciones: {
      a: { texto: "Me hago una cuenta nueva y me olvido de la otra.", porque: "Con tu cuenta vieja pueden estafar a tus contactos haciéndose pasar por vos." },
      b: { texto: "Le pago a alguien que me escribe diciendo que me la recupera.", porque: "Los que ofrecen recuperar cuentas a cambio de plata casi siempre son otra estafa." },
      c: { texto: "Uso la recuperación oficial de la app y aviso a mis contactos que no respondan pedidos raros.", porque: "En la pantalla de inicio tocá «¿Olvidaste tu contraseña?» o entrá a `instagram.com/hacked`. Mientras tanto, avisá por otro lado que te robaron la cuenta." },
    },
  },
  {
    n: 47, seccion: 9, correcta: "a",
    consejo: "Si se filtra una contraseña, cambiala en todas las cuentas donde la usabas.",
    texto: "Te avisan que la contraseña que usabas en una tienda online apareció en una <<filtración>>. ¿Qué hacés?",
    opciones: {
      a: { texto: "Cambio esa contraseña y la de todas las cuentas donde la repetía.", porque: "Los delincuentes prueban las contraseñas filtradas en muchas páginas. Cambiala en todas y activá la <<verificación en dos pasos>>." },
      b: { texto: "Nada, en esa tienda no compro más.", porque: "La contraseña ya la tienen otros, y la van a probar en otras páginas." },
      c: { texto: "Cambio solo la de esa tienda.", porque: "Si la repetías en otras cuentas, la van a probar ahí también." },
    },
  },
  {
    n: 48, seccion: 9, correcta: "b",
    consejo: "Si te amenazan, no pagues ni mandes nada: guardá pruebas y pedí ayuda.",
    contexto: "Alguien que no conocés te escribe:",
    mensaje: "Tengo una foto tuya. Si no me pagás, se la mando a todos tus contactos.",
    texto: "¿Qué hacés?",
    opciones: {
      a: { texto: "Le pago para que la borre.", porque: "Si pagás, casi siempre piden más. Y no hay forma de saber si la borra." },
      b: { texto: "No le mando nada, guardo capturas y le cuento a un adulto de confianza.", porque: "Es una <<extorsión>>, y es un delito. No respondas ni pagues, guardá las capturas, bloqueá la cuenta y pedí ayuda. La culpa nunca es tuya." },
      c: { texto: "Borro todo y no le cuento a nadie.", porque: "Las capturas sirven para denunciarlo. No tenés que pasar por esto sin ayuda." },
    },
  },
  {
    n: 49, seccion: 9, correcta: "c",
    consejo: "Antes de vender el celular, hacé una copia y restablecelo de fábrica.",
    texto: "Vas a vender tu celular viejo. ¿Qué tenés que hacer antes?",
    opciones: {
      a: { texto: "Borrar las fotos y listo.", porque: "Quedan tus mensajes, tus contraseñas guardadas y tus cuentas abiertas." },
      b: { texto: "Nada, el que lo compra lo va a borrar.", porque: "No sabés quién lo compra ni qué va a hacer con lo que encuentre." },
      c: { texto: "Hacer una copia de seguridad, cerrar sesión en mis cuentas y restablecerlo de fábrica.", porque: "Con la <<copia de seguridad>> no perdés nada, y al <<restablecerlo de fábrica|restablecer de fábrica>> queda como nuevo, sin tus datos. Sacale también el <<chip>> y la tarjeta de memoria." },
    },
  },
  {
    n: 50, seccion: 9, correcta: "a",
    consejo: "Activá la copia de seguridad automática de tus fotos.",
    texto: "Se te rompió el celular y no prende. ¿Qué te hubiera permitido recuperar tus fotos?",
    opciones: {
      a: { texto: "Tener activada la copia de seguridad automática.", porque: "Con la <<copia de seguridad>> automática, tus fotos se guardan en la nube (como Google Fotos o iCloud) y las recuperás en otro celular." },
      b: { texto: "Nada: las fotos se guardan solas en el chip.", porque: "El <<chip>> no guarda fotos: solo sirve para la línea." },
      c: { texto: "Mandarme las fotos a mí mismo por WhatsApp.", porque: "Sirve para alguna foto suelta, pero no para todas, y les baja la calidad." },
    },
  },
];

// Recorridos que se eligen en el inicio. En cada partida se eligen al azar
// "cantidad" preguntas entre las 50 (nunca más de 20).
const RECORRIDOS = {
  rapido: { nombre: "Recorrido rápido", cantidad: 10 },
  completo: { nombre: "Recorrido completo", cantidad: 20 },
};

// Resultados de la encuesta (completar cuando cierre).
// Porcentaje de encuestados que eligió cada opción, por número de pregunta:
//   1: { a: 12, b: 65, c: 23 },
// Con los datos cargados, cada explicación muestra cuántos eligieron esa opción.
const RESULTADOS = {
};

// "encuesta": orden original. "errores": primero las preguntas con más errores
// (solo funciona si todas las preguntas del recorrido tienen resultados).
const ORDEN = "encuesta";

const GLOSARIO = {
  "permisos": { termino: "Permisos", def: "Lo que una app te pide para usar partes de tu celular, como la cámara, el micrófono, tus fotos, tus contactos o tu ubicación. Podés aceptarlos o rechazarlos de a uno." },
  "perfil": { termino: "Perfil", def: "Todo lo que se puede saber de vos juntando tus datos: qué mirás, qué te gusta, por dónde andás y con quién hablás." },
  "filtración": { termino: "Filtración", def: "Cuando datos que tenían que ser privados quedan expuestos, por ejemplo si hackean a una empresa y se publica lo que tenía guardado." },
  "cookies": { termino: "Cookies", def: "Archivos chiquitos que las páginas guardan en tu navegador. Algunas hacen que la página funcione y otras registran lo que mirás para mostrarte publicidad." },
  "metadatos": { termino: "Metadatos", def: "Datos escondidos dentro de un archivo. En una foto pueden ser la fecha, el modelo de celular y el lugar donde la sacaste." },
  "captura": { termino: "Captura de pantalla", def: "Una foto de lo que se ve en la pantalla del celular o de la compu." },
  "https": { termino: "https", def: "Aparece al principio de la dirección de una página, junto al candado. Quiere decir que lo que mandás viaja cifrado, pero no dice si la página es honesta." },
  "cifrada": { termino: "Conexión cifrada", def: "Lo que mandás viaja codificado, como en un idioma secreto que solo entienden tu dispositivo y la página." },
  "modo incógnito": { termino: "Modo incógnito", def: "Una forma de usar el navegador sin que guarde el historial en tu dispositivo. No te vuelve invisible en internet." },
  "gestor de contraseñas": { termino: "Gestor de contraseñas", def: "Una app o función del celular que guarda tus contraseñas de forma segura y las completa por vos." },
  "verificación en dos pasos": { termino: "Verificación en dos pasos", def: "Un segundo control para entrar a tu cuenta. Además de la contraseña, te piden un código o un PIN." },
  "pin": { termino: "PIN", def: "Un número secreto corto que elegís vos." },
  "apk": { termino: "Archivo .apk", def: "El tipo de archivo con el que se instalan apps en Android. Si lo bajás de afuera de la tienda oficial, no sabés quién lo armó ni qué tiene adentro." },
  "tienda oficial": { termino: "Tienda oficial", def: "La tienda de apps que viene con tu celular, como Google Play en Android o App Store en iPhone." },
  "consentimiento": { termino: "Consentimiento", def: "Tu permiso. Que vos digas que sí." },
  "billetera virtual": { termino: "Billetera virtual", def: "Una app para guardar plata, transferir y pagar desde el celular, por ejemplo con un código QR." },
  "código qr": { termino: "Código QR", def: "Un cuadradito con dibujos que el celular lee con la cámara. Adentro tiene un link o los datos para hacer un pago." },
  "inteligencia artificial": { termino: "Inteligencia artificial", def: "Programas que aprenden de muchísimos ejemplos y pueden, entre otras cosas, escribir textos o imitar una voz o una cara." },
  "grooming": { termino: "Grooming", def: "Cuando un adulto contacta a un chico o a una chica por internet, muchas veces haciéndose pasar por alguien de su edad, para ganarse su confianza y pedirle fotos o un encuentro. Es un delito." },
  "huella digital": { termino: "Huella digital", def: "Todo lo que queda de vos en internet: lo que publicás, lo que comentás y lo que otros suben sobre vos." },
  "home banking": { termino: "Home banking", def: "La página o la app de tu banco, donde ves tu cuenta y hacés transferencias." },
  "datos móviles": { termino: "Datos móviles", def: "El internet que te da tu compañía de teléfono a través del chip, sin usar wifi." },
  "chip": { termino: "Chip (tarjeta SIM)", def: "La tarjetita de tu compañía de teléfono. Con ella recibís llamadas y SMS, incluso los códigos para entrar a tus cuentas." },
  "copia de seguridad": { termino: "Copia de seguridad", def: "Una copia de tus fotos, contactos y mensajes guardada en otro lugar, como la nube, para recuperarlos si perdés el celular o se rompe." },
  "restablecer de fábrica": { termino: "Restablecer de fábrica", def: "Borrar todo lo que tiene el celular para que quede como recién comprado." },
  "extorsión": { termino: "Extorsión", def: "Cuando alguien te amenaza para obligarte a darle plata, fotos u otra cosa. Es un delito." },
};

// Niveles de la licencia final, según el porcentaje de aciertos
const NIVELES = [
  { min: 0.9, nombre: "Escudo total", frase: "Casi ninguna trampa te toma por sorpresa." },
  { min: 0.7, nombre: "Radar encendido", frase: "Detectás la mayoría de las trampas. Repasá las que se te escaparon." },
  { min: 0.4, nombre: "En práctica", frase: "Vas bien, pero algunas trampas todavía te pueden sorprender." },
  { min: 0, nombre: "Permiso de aprendiz", frase: "Hay varias cosas nuevas para aprender. Para eso está el camino." },
];

// Consejos que se muestran si alguien no tuvo ningún error
const CONSEJOS_BASE = [15, 14, 12];
