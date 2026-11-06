# Camino de la privacidad

Guía interactiva sobre privacidad digital para la expo del instituto. Es un recorrido de 50 preguntas sobre permisos de las apps, datos personales, cuentas, estafas, compras, redes sociales y qué hacer si algo sale mal. Si elegís una respuesta incorrecta, la página te explica por qué y te muestra la correcta.

Página online: https://enzotamayo865.github.io/Privacidad-y-seguridad-digital/

## Cómo se usa

- Abrí `index.html` en cualquier navegador. No hace falta instalar nada.
- Hay dos recorridos: el rápido (10 preguntas) y el completo (20 preguntas).
- Las preguntas salen al azar entre las 50: en cada partida te tocan otras. Primero vienen las más fáciles (de las 1 a 20) y después las más difíciles (de las 21 a 50).
- Al final aparece una "licencia de navegante" con el nivel y consejos según lo que se respondió mal.
- Para una compu o tablet del stand, activá **Modo stand** abajo de todo: no guarda el avance y vuelve al inicio si nadie la usa por 2 minutos.

## Archivos

```
index.html      estructura de la página
style.css       diseño y colores
preguntas.js    preguntas, explicaciones, recorridos, glosario y niveles
escenas.js      los celulares dibujados de cada pregunta
utilidades.js   funciones para crear elementos, dar formato a los textos y dibujar la mascota
camino.js       el mapa del camino y la tira de progreso
respuestas.js   manda cada respuesta, anónima, a una planilla de Google
juego.js        la lógica del juego (pantallas, respuestas, modo stand)
```

`planilla-respuestas.gs` no es parte de la página: es el código que se pega en la planilla de Google (Extensiones › Apps Script) para recibir las respuestas.

Todos los archivos van juntos, en la misma carpeta (sin subcarpetas). Para publicarla en GitHub alcanza con subirlos todos con "Add file › Upload files".

Para cambiar una pregunta o una explicación, alcanza con editar `preguntas.js`. Ahí también está `RECORRIDOS`, con cuántas preguntas tiene cada recorrido.

## Hecho con

HTML, CSS y JavaScript, sin librerías.
