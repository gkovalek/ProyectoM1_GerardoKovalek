# Generador de Paletas Interactivo

Proyecto Integrador M1 - Full Stack (Henry) - Gerardo Kovalek

## Descripción
Aplicación web estática que genera paletas de colores aleatorias para uso en propuestas de branding, mostrando cada color con su código HEX.

## Cómo usar
1. Elegí el tamaño de paleta (6, 8 o 9 colores) en el select.
2. Click en el botón "Generar Paleta".
3. Se muestran los colores generados, cada uno con su código HEX visible.

## Decisiones técnicas
- HTML, CSS y JavaScript puro, sin frameworks, según el stack pedido en la consigna.
- Formatos de color: se genera en HSL (más fácil de controlar para conseguir colores vivos y legibles) y se muestra en HEX (formato estándar que se copia/pega en herramientas de diseño).
- Rangos usados en la generación: hue aleatorio 0-360°, saturación 60-90%, luminosidad 45-65%, para evitar colores demasiado apagados o demasiado oscuros/claros.
- La conversión de HSL a HEX se resuelve creando un elemento temporal en el DOM, asignándole el color en formato HSL vía CSS, y leyendo el RGB equivalente con `getComputedStyle` — evita reimplementar a mano la fórmula matemática completa de conversión.
- Accesibilidad: label asociado al select (`for`/`id`), foco visible personalizado (`:focus-visible`), fondo semitransparente detrás del código HEX para asegurar contraste de texto sin importar qué color le toque a cada swatch, y `aria-live="polite"` en el mensaje de confirmación para que lectores de pantalla lo anuncien.
- El código fuente (`index.html`, `css/`, `js/`) vive en la raíz del repositorio (no dentro de `Desarrollo/`) para que GitHub Pages funcione con la configuración más simple ("Deploy from a branch: main / root"), sin necesidad de GitHub Actions.

## Cómo correr el proyecto localmente
1. Cloná el repositorio: `git clone https://github.com/gkovalek/ProyectoM1_GerardoKovalek.git`
2. Abrí el archivo `index.html` directo en el navegador (doble click) — no requiere instalación ni servidor, es HTML/CSS/JS estático.

## Cómo desplegar (GitHub Pages)
1. Hacer push de los cambios a la rama `main`.
2. En el repo de GitHub: Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `/ (root)` → Save.
3. GitHub genera automáticamente la URL pública en 1-2 minutos.

## Demo
https://gkovalek.github.io/ProyectoM1_GerardoKovalek/
