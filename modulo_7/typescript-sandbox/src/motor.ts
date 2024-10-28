import {
  MIN_CARTA,
  MAX_CARTA,
  puntuacion,
  incrementarPuntuacion,
} from "./model";

export const setPuntuacion = (carta: number) => {
  if (carta === 10 || carta === 11 || carta === 12) carta = 0.5;
  incrementarPuntuacion(carta);
};

export const generarRandomCarta = () => {
  return Math.floor(Math.random() * MAX_CARTA) + MIN_CARTA;
};

export const comprobarCartaMayorASiete = (carta: number) => {
  if (carta > 7) return (carta += 2);
  return carta;
};

export const dameCarta = () => {
  let carta = generarRandomCarta();
  carta = comprobarCartaMayorASiete(carta);
  setPuntuacion(carta);
  return carta;
};

export const comprobarPuntuacion = (punt: number) => {
  if (punt <= 4) {
    return "Has sido muy conservador";
  } else if (punt <= 5) {
    return "Te ha entrado el canguelo eh?";
  } else if (punt <= 6 || punt <= 7) {
    return "Casi casi...";
  } else if (punt === 7.5) {
    return "¡Lo has clavado!¡Enhorabuena!";
  }
  return "";
};

export const comprobarMensajeFuturo = () => {
  if (puntuacion < 7.5) return "Confía mas en ti mismo la próxima vez";
  return "Hubieras perdido, bien hecho";
};
