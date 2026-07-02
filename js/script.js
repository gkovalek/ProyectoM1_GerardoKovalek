function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateRandomHSL() {
const h = getRandomInt(0, 360);
const s = getRandomInt(60, 90);
const l = getRandomInt(45, 65);
return { h: h, s: s, l: l };  
}

function hslToHex(h, s, l) {
  const temp = document.createElement('div');
  temp.style.color = `hsl(${h}, ${s}%, ${l}%)`;
  document.body.appendChild(temp);
  const rgb = getComputedStyle(temp).color;
  document.body.removeChild(temp);
  const [r, g, b] = rgb.match(/\d+/g).map(Number);
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

const generateBtn = document.getElementById('generate-btn');
const sizeSelect = document.getElementById('palette-size');
const paletteContainer = document.getElementById('palette');

function createSwatch(hexColor) {
  const swatch = document.createElement('div');
  swatch.className = 'color-swatch';
  swatch.style.backgroundColor = hexColor;  

  const code = document.createElement('span');
  code.className = 'color-code';
  code.textContent = hexColor;               

  swatch.appendChild(code);
  return swatch;
}

function renderPalette(size) {
  paletteContainer.innerHTML = '';

  for (let i = 0; i < size; i++) {
    const hsl = generateRandomHSL();              
    const hex = hslToHex(hsl.h, hsl.s, hsl.l);      
    const swatch = createSwatch(hex);           
    paletteContainer.appendChild(swatch);
  }
}

generateBtn.addEventListener('click', () => {
  const size = parseInt(sizeSelect.value);
  renderPalette(size);
});