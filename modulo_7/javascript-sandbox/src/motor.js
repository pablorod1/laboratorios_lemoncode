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

export const comprobarPuntuacionMensaje = (punt) => {
  if (punt <= 4) {
    return "Has sido muy conservador";
  } else if (punt <= 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (punt <= 6 || punt <= 7) {
    return "Casi casi...";
  } else if (punt === 7.5) {
    return "¡Lo has clavado!¡Enhorabuena!";
  }
};

export const dameCarta = () => {
  let randomCarta = generarRandomCarta();
  comprobarPuntuacionCarta(randomCarta);
  mostrarCarta(randomCarta);
  setPuntuacion(puntuacion + randomCarta);
  muestraPuntuacion();
  mostrarMensajeVictoria();
  elementStyleBlock(mePlantoButton);
  gameOver();
};
