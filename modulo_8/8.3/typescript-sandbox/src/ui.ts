import { tablero } from "./model";
import {
  iniciarPartida,
  parejaNoEncontrada,
  parejaEncontrada,
  sePuedeVoltearLaCarta,
  sonPareja,
  voltearCarta,
  esPartidaCompleta,
  incrementarIntento,
  reiniciarIntentos,
  intentos,
} from "./motor";

const iniciarButton = document.getElementById("iniciar-button");
const cartasDiv = document.querySelectorAll(".card");
const victoriaDiv = document.getElementById("victoria");
const reiniciarButton = document.getElementById("reiniciar-button");
const intentosElement = document.getElementById("intentos");

document.addEventListener("DOMContentLoaded", () => {
  if (intentosElement && intentosElement instanceof HTMLParagraphElement) {
    muestraIntentos();
  }
  if (victoriaDiv && victoriaDiv instanceof HTMLDivElement) {
    victoriaDiv.style.display = "none";
  }

  if (iniciarButton && iniciarButton instanceof HTMLButtonElement) {
    iniciarButton.addEventListener("click", () => {
      iniciarPartida(tablero);
      iniciarButton.style.animation = "none";
      iniciarButton.style.opacity = "0.5";
      iniciarButton.style.pointerEvents = "none";
      handleClickOnCarta();
    });
  }

  if (reiniciarButton && reiniciarButton instanceof HTMLButtonElement) {
    reiniciarButton.addEventListener("click", reiniciarPartida);
  }
});

const muestraIntentos = () => {
  if (intentosElement && intentosElement instanceof HTMLParagraphElement) {
    intentosElement.innerHTML = intentos.toString();
  }
};

const getIndiceCartaAttribute = (carta: HTMLDivElement) => {
  return carta.getAttribute("data-indice-array");
};

const voltearCartaAnimation = (carta: HTMLDivElement, indice: number): void => {
  const imagen = carta.querySelector("img");
  carta.style.transform = "rotateY(180deg)";
  voltearCarta(tablero, indice);
  comprobarCartasLevantadas();
  if (imagen && imagen instanceof HTMLImageElement) {
    setTimeout(() => {
      imagen.src = tablero.cartas[indice].imagen;
    }, 250);
  }
};

const reiniciarCarta = (carta: HTMLDivElement) => {
  const imagen = carta.querySelector("img");
  carta.style.transform = "rotateY(0)";
  comprobarCartasLevantadas();
  if (imagen && imagen instanceof HTMLImageElement) {
    setTimeout(() => {
      imagen.src = "";
    }, 200);
  }
};

const comprobarCartasLevantadas = () => {
  const cartasLevantadas = tablero.cartas.filter(
    (carta) => carta.estaVuelta && !carta.encontrada
  );

  return cartasLevantadas.length;
};

const mostrarMensajeCartaYaVolteada = () => {
  alert("Esta carta ya está volteada");
  comprobarCartasLevantadas();
};

const handleClickOnCarta = () => {
  let indiceA: number;
  let cartaA: HTMLDivElement;

  let indiceB: number;
  let cartaB: HTMLDivElement;

  cartasDiv.forEach((carta) => {
    if (carta && carta instanceof HTMLDivElement) {
      carta.addEventListener("click", () => {
        const indiceCartaArray = getIndiceCartaAttribute(carta);
        if (indiceCartaArray) {
          if (comprobarCartasLevantadas() === 0) {
            cartaA = carta;
            indiceA = parseInt(indiceCartaArray);
            if (tablero.cartas[indiceA].estaVuelta) {
              mostrarMensajeCartaYaVolteada();
            }
            if (sePuedeVoltearLaCarta(tablero, indiceA)) {
              voltearCartaAnimation(cartaA, indiceA);
            }
          } else if (comprobarCartasLevantadas() === 1) {
            cartaB = carta;
            indiceB = parseInt(indiceCartaArray);
            if (tablero.cartas[indiceB].estaVuelta) {
              mostrarMensajeCartaYaVolteada();
            }
            if (sePuedeVoltearLaCarta(tablero, indiceB)) {
              voltearCartaAnimation(cartaB, indiceB);
              incrementarIntento();
              muestraIntentos();
            }

            setTimeout(() => {
              if (sonPareja(indiceA, indiceB, tablero)) {
                cartaA.style.background = "green";
                cartaB.style.background = "green";
                parejaEncontrada(tablero, indiceA, indiceB);
                console.log(esPartidaCompleta(tablero));
                if (esPartidaCompleta(tablero)) {
                  if (victoriaDiv && victoriaDiv instanceof HTMLDivElement) {
                    victoriaDiv.style.display = "flex";
                  }
                }
              } else {
                parejaNoEncontrada(tablero, indiceA, indiceB);
                reiniciarCarta(cartaA);
                reiniciarCarta(cartaB);
              }
            }, 1500);
          }
        }
      });
    }
  });
};

const reiniciarPartida = () => {
  cartasDiv.forEach((carta) => {
    if (carta && carta instanceof HTMLDivElement) {
      const image = carta.querySelector("img");
      if (image && image instanceof HTMLImageElement) image.src = "";
      carta.style.transform = "rotateY(0)";
      carta.style.background = "lightblue";
    }
  });

  tablero.cartas.map((carta) => {
    carta.encontrada = false;
    carta.estaVuelta = false;
  });

  if (victoriaDiv && victoriaDiv instanceof HTMLDivElement) {
    victoriaDiv.style.display = "none";
  }
  reiniciarIntentos();
  muestraIntentos();
  iniciarPartida(tablero);
};
