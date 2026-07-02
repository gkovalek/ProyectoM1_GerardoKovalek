# Uso de IA en el desarrollo del proyecto

Usé Claude como asistente/mentor a lo largo de todo el desarrollo, dentro de Claude Code. La decisión de trabajo, tomada desde el primer mensaje, fue que la IA **no escribiera el código del proyecto por mí** — su rol fue explicar conceptos, dar checklists de lo que había que lograr en cada paso, revisar el código que yo escribía, y señalar errores. El objetivo era aprender haciendo, no entregar un código que "no fuera mío".

A continuación, un resumen cronológico de los prompts más relevantes y cómo influyeron en el desarrollo.

## 1. Planificación inicial
**Prompt:** Compartí la consigna completa del Proyecto Integrador (incluyendo el PDF) y pedí ayuda para entender exactamente qué se pedía, aclarando que quería codear yo mismo para aprender y que no pareciera hecho por IA.

**Resultado:** La IA armó un plan de trabajo dividido en milestones (setup, HTML, CSS, JS de generación de color, render dinámico, accesibilidad, deploy, documentación), y me hizo preguntas concretas para definir alcance: qué formato de color usar (HSL + HEX vs RGBA), qué extras dejar para después (animaciones), y cómo íbamos a trabajar el código (yo tipeando todo, ella revisando).

*(capturas sugeridas: la conversación de planificación inicial)*

## 2. Setup del proyecto (Git/GitHub)
**Prompt:** Pedí los comandos para crear la estructura de carpetas e inicializar el repositorio.

**Resultado:** Me dio los comandos de PowerShell para ejecutar yo mismo (no los ejecutó ella). Tuve varios errores de tipeo/pegado (comandos que se unieron en una sola línea, `New-Item` que falló, `git add`/`commit` fallando por "not a git repository"), y en cada caso la IA me ayudó a diagnosticar la causa exacta antes de corregir.

## 3. HTML semántico
**Prompt:** Pedí el checklist de qué etiquetas usar para la estructura semántica (header, main, footer, controles).

**Resultado:** Me dio una lista de requisitos (sin escribirme el HTML completo), y cuando yo lo escribí cometí varios errores típicos de principiante: comillas de más alrededor del texto visible, un `</body>` duplicado, y etiquetas `<option>` que quedaron fuera de lugar al reordenar código. La IA fue señalando cada error puntualmente, explicando la regla general de HTML (apertura/cierre, anidación) en vez de simplemente corregirlo.

## 4. CSS y estilos
**Prompt:** Pregunté cómo elegir la fuente y los colores, sin saber bien el criterio.

**Resultado:** Me explicó el concepto de contraste (WCAG), me recomendó una paleta de colores concreta con la razón detrás (fondo oscuro para que resalten los colores generados), y usé la herramienta sugerida (webaim.org/resources/contrastchecker) como referencia.

## 5. Lógica de generación de color (JavaScript)
**Prompt:** Pedí ayuda para entender cómo generar colores aleatorios y convertirlos de HSL a HEX.

**Resultado:** Me explicó `Math.random()`, el modelo de color HSL, y me hizo escribir yo las funciones `getRandomInt` y `generateRandomHSL`. Cometí dos bugs reales que la IA detectó al revisar: me faltaba el `return` en `getRandomInt`, y en `generateRandomHSL` había puesto el mismo número como mínimo y máximo (`getRandomInt(60, 60)`), lo que hacía que la saturación nunca variara. La función de conversión HSL→HEX (que usa una técnica del DOM con `getComputedStyle`) me la dio ya resuelta, porque es una fórmula técnica estándar, no un concepto de lógica de programación que la consigna buscara evaluar.

## 6. Render dinámico y eventos
**Prompt:** Le dije que entendía la teoría pero no sabía bien qué escribir ni de dónde salían los datos en cada función.

**Resultado:** Me explicó con un ejemplo numérico concreto (trazando paso a paso qué devuelve cada función y cómo se pasa el dato a la siguiente) el flujo de datos entre `generateRandomHSL`, `hslToHex` y `createSwatch`, y los conceptos de DOM (`getElementById`, `createElement`, `appendChild`, `addEventListener`).

## 7. Debugging de errores reales
**Prompts:** Varias veces pegué capturas de errores en la consola del navegador (`Cannot set properties of null`, un error de caché de CSS que no aplicaba, un `addEventListener` duplicado por accidente).

**Resultado:** En cada caso la IA me ayudó a interpretar el mensaje de error y encontrar la causa real (elemento HTML faltante, caché del navegador, código duplicado), en vez de simplemente decirme la solución sin explicar el diagnóstico.

## 8. Deploy y documentación
**Prompt:** Pedí los pasos para desplegar en GitHub Pages y ayuda para armar la documentación final.

**Resultado:** Guía paso a paso de la configuración de GitHub Pages (Settings → Pages → Source), y para esta documentación (README y este mismo archivo) sí acepté que la IA redactara el contenido, ya que documenta el propio proceso de uso de IA y no el código evaluado del proyecto.

## Reflexión
La IA funcionó como tutor: explicó conceptos de HTML/CSS/JS que no conocía, revisó y corrigió errores reales que cometí (de sintaxis y de lógica), y se negó activamente a escribirme el código del proyecto cuando se lo pedí directamente, salvo en partes puntuales de utilidad técnica (la fórmula de conversión de color) o de documentación. El código de `index.html`, `styles.css` y `script.js` lo escribí yo, con errores incluidos que tuve que corregir.

