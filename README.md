# Corrección de Código

## Descripción
Este ejercicio implicaba revisar un código, identificar por qué no funcionaba y arreglarlo. A continuación, se presentan las especificaciones de lo que se hizo para corregir los problemas encontrados.

## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript

## Soluciones Implementadas

### Corrección del Enlace del Archivo JS:
El archivo JavaScript no estaba bien enlazado en el documento HTML. Se corrigió la ruta para asegurar que el archivo se cargue correctamente.

### Corrección del Enlace del Archivo CSS:
Similar al archivo JS, el archivo CSS tampoco estaba bien enlazado. Se ajustó la ruta para que el archivo CSS se cargue adecuadamente y los estilos se apliquen correctamente.

### Adición de la Sección de Ubicación en el Index:
El archivo `index.html` carecía de una sección para mostrar la ubicación. Se añadió esta sección para completar la funcionalidad esperada.

### Corrección de `querySelector` en `app.js`:
En el archivo `app.js`, los selectores `querySelector` para los elementos `name` y `blog` estaban incorrectos. Se ajustaron los selectores para que apunten a los elementos correctos en el DOM.

### Uso de Función Async para `fetch`:
La llamada a `fetch` no estaba dentro de una función `async`. Se convirtió la función en una función asíncrona (`async`) para manejar adecuadamente las promesas y el uso de `await`.

### Uso de Backticks en Lugar de Comillas Simples:
Al escribir `name`, `blog` y `location`, se usaban comillas simples en lugar de backticks, lo cual impedía la interpolación de variables. Se cambiaron las comillas simples por backticks para permitir la interpolación de variables en las cadenas de texto.
