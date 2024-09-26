export let puntuacion = 0;
export const setNuevaPuntuacion = (nuevaPuntuacion: number) =>
  (puntuacion = nuevaPuntuacion);
export const incrementarPuntuacion = (nuevaPuntuacion: number) =>
  (puntuacion += nuevaPuntuacion);
export const MIN_CARTA = 1;
export const MAX_CARTA = 10;
