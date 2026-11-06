/*
  Envío de respuestas anónimas a una planilla de Google, para analizarlas después.
  No se manda ningún dato de la persona: solo un número de partida al azar,
  el recorrido, la pregunta que le tocó, qué respondió y si estuvo bien, mal o no supo.

  Para activarlo, pegá en URL_PLANILLA la dirección de la aplicación web de Apps Script
  (ver planilla-respuestas.gs). Si queda vacía, no se manda nada.
*/
const URL_PLANILLA = "https://script.google.com/macros/s/AKfycbwrSgp4To5Dw6uh3J1oi9_l9SgdktCEjQJRbm8EyS9lLeoskWK-HEhwJs7WjBRxu7JT/exec";

const CLAVE_PENDIENTES = "camino-privacidad:pendientes";

// Número de partida al azar, para saber qué respuestas son de la misma persona sin saber quién es
function nuevaPartida() {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
}

function leerPendientes() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE_PENDIENTES) || "[]");
  } catch (error) {
    return [];
  }
}

function guardarPendientes(lista) {
  try {
    localStorage.setItem(CLAVE_PENDIENTES, JSON.stringify(lista.slice(-500)));
  } catch (error) {
    // Sin almacenamiento disponible: se pierde lo que no se pudo mandar
  }
}

// Manda las respuestas que quedaron pendientes (por ejemplo, si se cortó internet)
let enviando = false;
async function enviarPendientes() {
  if (!URL_PLANILLA || enviando) return;
  const pendientes = leerPendientes();
  if (!pendientes.length) return;
  enviando = true;
  try {
    // "no-cors" y texto plano: así Google lo acepta desde cualquier página
    await fetch(URL_PLANILLA, { method: "POST", mode: "no-cors", body: JSON.stringify(pendientes) });
    const quedan = leerPendientes().slice(pendientes.length);
    guardarPendientes(quedan);
  } catch (error) {
    // Sin conexión: se vuelve a intentar con la próxima respuesta
  } finally {
    enviando = false;
  }
}

// Anota una respuesta y la manda
function registrarRespuesta(fila) {
  if (!URL_PLANILLA) return;
  const pendientes = leerPendientes();
  pendientes.push(fila);
  guardarPendientes(pendientes);
  enviarPendientes();
}

window.addEventListener("load", enviarPendientes);
