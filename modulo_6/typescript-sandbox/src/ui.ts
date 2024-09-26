import { puntuacion, setNuevaPuntuacion } from "./model";

import {
  comprobarPuntuacion,
  comprobarMensajeFuturo,
  dameCarta,
} from "./motor";

export const dameCartaButton = document.getElementById("dame-carta");
export const mePlantoButton = document.getElementById("planto");
export const reiniciarButton = document.getElementById("reiniciar");
export const futuroButton = document.getElementById("futuro");
export const reiniciarGameOverButton = document.getElementById(
  "reiniciar-game-over"
);
export const puntuacionElement = document.getElementById("puntuacion");
export const gameOverElement = document.getElementById("game-over");
export const resultado = document.getElementById("resultado");
export const resultado2 = document.getElementById("resultado2");
export const cartasContainer = document.getElementById("cartas-container");

export const muestraPuntuacion = () => {
  if (puntuacionElement)
    puntuacionElement.textContent = `Puntuación: ${puntuacion}`;
  if (mePlantoButton && puntuacion > 0) mePlantoButton.style.display = "block";
};

export const mostrarCarta = (carta: number) => {
  if (cartasContainer) {
    const cartaElement = document.createElement("img");
    cartaElement.setAttribute("src", `${carta}.jpg`);
    cartaElement.setAttribute("class", "carta-img");
    cartasContainer.append(cartaElement);
  }
};

export const gameOver = () => {
  if (puntuacion > 7.5 && dameCartaButton && gameOverElement) {
    dameCartaButton.style.opacity = "0.5";
    dameCartaButton.style.pointerEvents = "none";
    gameOverElement.style.display = "flex";
  }
};

export const mostrarMensajeMePlanto = () => {
  const mensaje = comprobarPuntuacion();
  if (resultado) resultado.textContent = mensaje;
  if (dameCartaButton) {
    dameCartaButton.style.pointerEvents = "none";
    dameCartaButton.style.opacity = "0.5";
  }

  if (mePlantoButton) {
    mePlantoButton.style.pointerEvents = "none";
    mePlantoButton.style.opacity = "0.5";
  }
  if (reiniciarButton) reiniciarButton.style.display = "block";

  if (futuroButton && puntuacion < 7.5) {
    futuroButton.style.display = "block";
    futuroButton.style.pointerEvents = "auto";
  }
};

export const reiniciarJuego = () => {
  setNuevaPuntuacion(0);
  muestraPuntuacion();
  if (resultado && resultado2) {
    resultado.textContent = "";
    resultado2.textContent = "";
  }

  if (dameCartaButton) {
    dameCartaButton.style.pointerEvents = "auto";
    dameCartaButton.style.opacity = "1";
  }

  if (mePlantoButton) {
    mePlantoButton.style.pointerEvents = "auto";
    mePlantoButton.style.opacity = "1";
    mePlantoButton.style.display = "none";
  }

  if (futuroButton) {
    futuroButton.style.display = "none";
    futuroButton.style.opacity = "1";
    futuroButton.style.pointerEvents = "auto";
  }

  if (reiniciarButton) reiniciarButton.style.display = "none";
  if (gameOverElement) gameOverElement.style.display = "none";
  if (cartasContainer) cartasContainer.innerHTML = "";
};

export const queHubieraPasado = () => {
  if (resultado) resultado.textContent = "";
  const futuraCarta = dameCarta();
  mostrarCarta(futuraCarta);
  muestraPuntuacion();
  if (resultado2) resultado2.textContent = comprobarMensajeFuturo();
  if (futuroButton) {
    futuroButton.style.opacity = "0.5";
    futuroButton.style.pointerEvents = "none";
  }
};

const dameCartaResultado = () => {
  let carta = dameCarta();
  mostrarCarta(carta);
  muestraPuntuacion();
  gameOver();
};

export const initGame = () => {
  muestraPuntuacion();
  if (reiniciarButton) reiniciarButton.style.display = "none";
  if (gameOverElement) gameOverElement.style.display = "none";
  if (mePlantoButton) mePlantoButton.style.display = "none";
  if (futuroButton) futuroButton.style.display = "none";

  if (dameCartaButton)
    dameCartaButton.addEventListener("click", dameCartaResultado);

  if (mePlantoButton)
    mePlantoButton.addEventListener("click", mostrarMensajeMePlanto);

  if (futuroButton) futuroButton.addEventListener("click", queHubieraPasado);

  if (reiniciarButton)
    reiniciarButton.addEventListener("click", reiniciarJuego);
  if (reiniciarGameOverButton)
    reiniciarGameOverButton.addEventListener("click", reiniciarJuego);
};
