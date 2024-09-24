import { puntuacion, setPuntuacion, MIN_CARTA, MAX_CARTA } from "./model";
import {
  mePlantoButton,
  muestraPuntuacion,
  elementStyleBlock,
  mostrarCarta,
  gameOver,
  mostrarMensajeVictoria,
} from "./ui";

export const generarRandomCarta = () => {
  let newCarta = Math.floor(Math.random() * MAX_CARTA) + MIN_CARTA;
  if (newCarta > 7) newCarta += 2;
  return newCarta;
};

export const comprobarPuntuacionCarta = (carta) => {
  if (carta === 10 || carta === 11 || carta === 12) carta = 0.5;
  carta = carta;
};

export const dameCarta = () => {
  let randomCarta = generarRandomCarta();
  mostrarCarta(randomCarta);
  comprobarPuntuacionCarta(randomCarta);
  setPuntuacion(puntuacion + randomCarta);
  muestraPuntuacion();
  mostrarMensajeVictoria();
  elementStyleBlock(mePlantoButton);
  gameOver();
};
