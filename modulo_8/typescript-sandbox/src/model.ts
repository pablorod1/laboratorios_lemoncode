export interface Carta {
  idFoto: number;
  imagen: string;
  estaVuelta: boolean;
  encontrada: boolean;
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  { idFoto: 1, imagen: "1.png" },
  { idFoto: 2, imagen: "2.png" },
  { idFoto: 3, imagen: "3.png" },
  { idFoto: 4, imagen: "4.png" },
  { idFoto: 5, imagen: "5.png" },
  { idFoto: 6, imagen: "6.png" },
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  const cartasDuplicadas: Carta[] = infoCartas.flatMap((info) => [
    crearCartaInicial(info.idFoto, info.imagen),
    crearCartaInicial(info.idFoto, info.imagen),
  ]);

  return cartasDuplicadas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
