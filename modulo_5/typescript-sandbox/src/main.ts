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
  if (puntuacionElement && puntuacionElement instanceof HTMLParagraphElement)
    puntuacionElement.textContent = `Puntuación: ${puntuacion}`;
  if (
    mePlantoButton &&
    mePlantoButton instanceof HTMLButtonElement &&
    puntuacion > 0
  )
    mePlantoButton.style.display = "block";
};

const setPuntuacion = (carta: number) => {
  if (carta === 10 || carta === 11 || carta === 12) carta = 0.5;
  puntuacion += carta;
};

const generarRandomCarta = () => {
  return Math.floor(Math.random() * maxCarta) + minCarta;
};

const comprobarCartaMayorASiete = (carta: number) => {
  if (carta > 7) return (carta += 2);
  return carta;
};

const mostrarCarta = (carta: number) => {
  if (cartasContainer && cartasContainer instanceof HTMLDivElement) {
    const cartaElement = document.createElement("img");
    cartaElement.setAttribute("src", `${carta}.jpg`);
    cartaElement.setAttribute("class", "carta-img");
    cartasContainer.append(cartaElement);
  }
};

const dameCarta = () => {
  let carta = generarRandomCarta();
  carta = comprobarCartaMayorASiete(carta);
  mostrarCarta(carta);
  setPuntuacion(carta);
  muestraPuntuacion();
  gameOver();
};

const gameOver = () => {
  if (
    puntuacion > 7.5 &&
    dameCartaButton &&
    dameCartaButton instanceof HTMLButtonElement &&
    gameOverElement &&
    gameOverElement instanceof HTMLDivElement
  ) {
    dameCartaButton.style.opacity = "0.5";
    dameCartaButton.style.pointerEvents = "none";
    gameOverElement.style.display = "flex";
  }
};

const comprobarPuntuacion = () => {
  if (puntuacion <= 4) {
    return "Has sido muy conservador";
  } else if (puntuacion <= 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion <= 6 || puntuacion <= 7) {
    return "Casi casi...";
  } else if (puntuacion === 7.5) {
    return "¡Lo has clavado!¡Enhorabuena!";
  }
  return "";
};

const mostrarMensajeMePlanto = () => {
  const mensaje = comprobarPuntuacion();
  if (resultado && resultado instanceof HTMLParagraphElement)
    resultado.textContent = mensaje;
  if (dameCartaButton && dameCartaButton instanceof HTMLButtonElement) {
    dameCartaButton.style.pointerEvents = "none";
    dameCartaButton.style.opacity = "0.5";
  }

  if (mePlantoButton && mePlantoButton instanceof HTMLButtonElement) {
    mePlantoButton.style.pointerEvents = "none";
    mePlantoButton.style.opacity = "0.5";
  }
  if (reiniciarButton && reiniciarButton instanceof HTMLButtonElement)
    reiniciarButton.style.display = "block";

  if (
    futuroButton &&
    futuroButton instanceof HTMLButtonElement &&
    puntuacion < 7.5
  ) {
    futuroButton.style.display = "block";
    futuroButton.style.pointerEvents = "auto";
  }
};

const reiniciarJuego = () => {
  puntuacion = 0;
  muestraPuntuacion();
  if (
    resultado &&
    resultado instanceof HTMLParagraphElement &&
    resultado2 &&
    resultado2 instanceof HTMLParagraphElement
  ) {
    resultado.textContent = "";
    resultado2.textContent = "";
  }

  if (dameCartaButton && dameCartaButton instanceof HTMLButtonElement) {
    dameCartaButton.style.pointerEvents = "auto";
    dameCartaButton.style.opacity = "1";
  }

  if (mePlantoButton && mePlantoButton instanceof HTMLButtonElement) {
    mePlantoButton.style.pointerEvents = "auto";
    mePlantoButton.style.opacity = "1";
    mePlantoButton.style.display = "none";
  }

  if (futuroButton && futuroButton instanceof HTMLButtonElement) {
    futuroButton.style.display = "none";
    futuroButton.style.opacity = "1";
    futuroButton.style.pointerEvents = "auto";
  }

  if (reiniciarButton && reiniciarButton instanceof HTMLButtonElement)
    reiniciarButton.style.display = "none";
  if (gameOverElement && gameOverElement instanceof HTMLDivElement)
    gameOverElement.style.display = "none";
  if (cartasContainer && cartasContainer instanceof HTMLDivElement)
    cartasContainer.innerHTML = "";
};

const queHubieraPasado = () => {
  if (resultado && resultado instanceof HTMLParagraphElement)
    resultado.textContent = "";
  const futuraCarta = generarRandomCarta();
  comprobarCartaMayorASiete(futuraCarta);
  mostrarCarta(futuraCarta);
  setPuntuacion(futuraCarta);
  muestraPuntuacion();
  if (resultado2 && resultado2 instanceof HTMLParagraphElement)
    resultado2.textContent = comprobarMensajeFuturo();
  if (futuroButton && futuroButton instanceof HTMLButtonElement) {
    futuroButton.style.opacity = "0.5";
    futuroButton.style.pointerEvents = "none";
  }
};

const comprobarMensajeFuturo = () => {
  if (puntuacion < 7.5) return "Confía mas en ti mismo la próxima vez";
  return "Hubieras perdido, bien hecho";
};

const initGame = () => {
  muestraPuntuacion();
  if (reiniciarButton && reiniciarButton instanceof HTMLButtonElement)
    reiniciarButton.style.display = "none";
  if (gameOverElement && gameOverElement instanceof HTMLDivElement)
    gameOverElement.style.display = "none";
  if (mePlantoButton && mePlantoButton instanceof HTMLButtonElement)
    mePlantoButton.style.display = "none";
  if (futuroButton && futuroButton instanceof HTMLButtonElement)
    futuroButton.style.display = "none";

  if (dameCartaButton && dameCartaButton instanceof HTMLButtonElement)
    dameCartaButton.addEventListener("click", dameCarta);

  if (mePlantoButton && mePlantoButton instanceof HTMLButtonElement)
    mePlantoButton.addEventListener("click", mostrarMensajeMePlanto);

  if (futuroButton && futuroButton instanceof HTMLButtonElement)
    futuroButton.addEventListener("click", queHubieraPasado);

  if (reiniciarButton && reiniciarButton instanceof HTMLButtonElement)
    reiniciarButton.addEventListener("click", reiniciarJuego);
  if (
    reiniciarGameOverButton &&
    reiniciarGameOverButton instanceof HTMLButtonElement
  )
    reiniciarGameOverButton.addEventListener("click", reiniciarJuego);
};

document.addEventListener("DOMContentLoaded", initGame);
