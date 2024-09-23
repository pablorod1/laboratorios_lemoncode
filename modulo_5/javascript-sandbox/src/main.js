import "./style.css";

let puntuacion = 0;
const minCarta = 1;
const maxCarta = 10;
const dameCartaButton = document.getElementById("dame-carta");
const mePlantoButton = document.getElementById("planto");
const reiniciarButton = document.getElementById("reiniciar");
const futuroButton = document.getElementById("futuro");
const reiniciarGameOverButton = document.getElementById("reiniciar-game-over");
const puntuacionElement = document.getElementById("puntuacion");
const gameOverElement = document.getElementById("game-over");
const resultado = document.getElementById("resultado");
const resultado2 = document.getElementById("resultado2");
const cartasContainer = document.getElementById("cartas-container");

const muestraPuntuacion = () => {
  puntuacionElement.textContent = `Puntuación: ${puntuacion}`;
};

const dameCarta = () => {
  let randomCarta = Math.floor(Math.random() * maxCarta) + minCarta;
  if (randomCarta > 7) randomCarta += 2;
  mostrarCarta(randomCarta);
  if (randomCarta === 10 || randomCarta === 11 || randomCarta === 12)
    randomCarta = 0.5;
  puntuacion += randomCarta;
  muestraPuntuacion();
  mePlantoButton.style.display = "block";
  gameOver();
};

const mostrarCarta = (carta) => {
  if (cartasContainer) {
    const cartaElement = document.createElement("img");
    cartaElement.setAttribute("src", `${carta}.jpg`);
    cartaElement.setAttribute("class", "carta-img");
    cartasContainer.append(cartaElement);
  }
};

const gameOver = () => {
  if (puntuacion > 7.5) {
    dameCartaButton.style.opacity = 0.5;
    dameCartaButton.style.pointerEvents = "none";
    gameOverElement.style.display = "flex";
  }
};

const mostrarMensajeMePlanto = () => {
  let mensaje = "";
  if (puntuacion <= 4) {
    mensaje = "Has sido muy conservador";
  } else if (puntuacion <= 5) {
    mensaje = "Te ha entrado el canguelo eh?";
  } else if (puntuacion <= 6 || puntuacion <= 7) {
    mensaje = "Casi casi...";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Lo has clavado!¡Enhorabuena!";
  }
  console.log(mensaje);
  resultado.textContent = mensaje;
  dameCartaButton.style.pointerEvents = "none";
  dameCartaButton.style.opacity = 0.5;
  mePlantoButton.style.pointerEvents = "none";
  mePlantoButton.style.opacity = 0.5;
  reiniciarButton.style.display = "block";
  futuroButton.style.display = "block";
  futuroButton.style.pointerEvents = "auto";
};

const reiniciarJuego = () => {
  puntuacion = 0;
  muestraPuntuacion();
  resultado.textContent = "";
  resultado2.textContent = "";
  dameCartaButton.style.pointerEvents = "auto";
  dameCartaButton.style.opacity = 1;
  mePlantoButton.style.pointerEvents = "auto";
  mePlantoButton.style.opacity = 1;
  mePlantoButton.style.display = "none";
  futuroButton.style.display = "none";
  futuroButton.style.opacity = 1;
  futuroButton.style.pointerEvents = "auto";
  reiniciarButton.style.display = "none";
  gameOverElement.style.display = "none";
  cartasContainer.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  reiniciarButton.style.display = "none";
  gameOverElement.style.display = "none";
  mePlantoButton.style.display = "none";
  futuroButton.style.display = "none";

  dameCartaButton?.addEventListener("click", () => dameCarta());

  mePlantoButton?.addEventListener("click", () => mostrarMensajeMePlanto());

  if (puntuacion === 7.5) {
    futuroButton.style.pointerEvents = "none";
    futuroButton.style.opacity = 0.5;
  } else {
    futuroButton?.addEventListener("click", () => {
      resultado.textContent = "";
      let randomCarta = Math.floor(Math.random() * maxCarta) + minCarta;
      if (randomCarta > 7) randomCarta += 2;
      mostrarCarta(randomCarta);
      if (randomCarta === 10 || randomCarta === 11 || randomCarta === 12)
        randomCarta = 0.5;
      puntuacion += randomCarta;
      muestraPuntuacion();
      if (puntuacion < 7.5) {
        resultado2.textContent = "Confía más en ti mismo la próxima vez";
      } else {
        resultado2.textContent = "Hubieras perdido, bien hecho";
      }
      futuroButton.style.opacity = 0.5;
      futuroButton.style.pointerEvents = "none";
    });
  }

  reiniciarButton?.addEventListener("click", () => reiniciarJuego());
  reiniciarGameOverButton?.addEventListener("click", () => reiniciarJuego());
});
