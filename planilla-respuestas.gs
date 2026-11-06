/*
  Código para la planilla de Google que recibe las respuestas.
  No se sube a GitHub: se pega en la planilla, en Extensiones › Apps Script.
*/
const COLUMNAS = ["Fecha y hora", "Partida", "Recorrido", "Parada", "Pregunta N.º", "Sección",
  "Pregunta", "Letra elegida", "Opción elegida", "Resultado", "Modo stand"];

function doPost(e) {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
  const filas = JSON.parse(e.postData.contents);
  filas.forEach(function (f) {
    hoja.appendRow([f.fecha, f.partida, f.recorrido, f.parada, f.pregunta, f.seccion,
      f.texto, f.letra, f.opcion, f.resultado, f.stand ? "Sí" : "No"]);
  });
  return ContentService.createTextOutput("ok");
}
