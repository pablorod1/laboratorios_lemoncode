import { puntuacion, setPuntuacion, MIN_CARTA, MAX_CARTA } from "./model";
import {
  mePlantoButton,
  muestraPuntuacion,
  elementStyleBlock,
  mostrarCarta,
  gameOver,
  mostrarMensajeVictoria,
} from "./ui";

export const dameCarta = () => {
  let randomCarta = Math.floor(Math.random() * MAX_CARTA) + MIN_CARTA;
  if (randomCarta > 7) randomCarta += 2;
  mostrarCarta(randomCarta);
  if (randomCarta === 10 || randomCarta === 11 || randomCarta === 12)
    randomCarta = 0.5;
  setPuntuacion(puntuacion + randomCarta);
  muestraPuntuacion();
  mostrarMensajeVictoria();
  elementStyleBlock(mePlantoButton);
  gameOver();
};
