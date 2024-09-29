import { Carta, Tablero } from "./model";

const barajarCartas = (cartas: Carta[]): Carta[] => {
  return cartas.sort(() => Math.random() - 0.5);
};

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  const cartaSeleccionada = tablero.cartas[indice];

  const cartasVolteadas = tablero.cartas.filter(
    (carta) => carta.estaVuelta && !carta.encontrada
  );

  return (
    !cartaSeleccionada.encontrada &&
    !cartaSeleccionada.estaVuelta &&
    cartasVolteadas.length < 2
  );
};

const voltearCarta = (tablero: Tablero, indice: number): void => {
  const carta = tablero.cartas[indice];

  if (!carta.encontrada && !carta.estaVuelta) carta.estaVuelta = true;
  else if (!carta.encontrada && carta.estaVuelta) carta.estaVuelta = false;
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;

  const todasEncontradas = tablero.cartas.every((carta) => carta.encontrada);

  if (todasEncontradas) tablero.estadoPartida = "PartidaCompleta";
};

const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  voltearCarta(tablero, indiceA);
  voltearCarta(tablero, indiceB);
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.estadoPartida === "PartidaCompleta";
};

export const iniciarPartida = (tablero: Tablero): void => {
  barajarCartas(tablero.cartas);
};
