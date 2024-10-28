import "./style.css";

const popRock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const clasica = "🎼 Clásica";
const hardRock = "🤘 Hard Rock";

const nombre1 = "The Beatles";
const fecha1 = 1960;
const activo1 = true;
const genero1 = popRock;

const nombre2 = "Queen";
const fecha2 = 1970;
const activo2 = false;
const genero2 = rock;

const nombre3 = "AC DC";
const fecha3 = 1973;
const activo3 = true;
const genero3 = hardRock;

const nombre4 = "Ludwig van Beethoven";
const fecha4 = 1770;
const activo4 = false;
const genero4 = clasica;

const nombre5 = "The Rolling Stones";
const fecha5 = 1962;
const activo5 = true;
const genero5 = rock;

const estiloTitulo =
  "font-weight: bold; font-size:large; background-color: green";

console.log(
  "%c" + nombre1,
  estiloTitulo,
  " / " + fecha1 + " / Activo: " + activo1 + " / " + genero1
);
console.log(
  "%c" + nombre2,
  estiloTitulo,
  " / " + fecha2 + " / Activo: " + activo2 + " / " + genero2
);
console.log(
  "%c" + nombre3,
  estiloTitulo,
  " / " + fecha3 + " / Activo: " + activo3 + " / " + genero3
);
console.log(
  "%c" + nombre4,
  estiloTitulo,
  " / " + fecha4 + " / Activo: " + activo4 + " / " + genero4
);
console.log(
  "%c" + nombre5,
  estiloTitulo,
  " / " + fecha5 + " / Activo: " + activo5 + " / " + genero5
);
