import {
  comprobarCartaMayorASiete,
  comprobarPuntuacion,
  generarRandomCarta,
} from "./motor";

import { vi } from "vitest";

describe("generarRandomCarta", () => {
  it("Debe generar una carta entre 1 y 12, excluyendo 8 y 9", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    const carta = generarRandomCarta();

    expect(carta).toBe(6);
  });

  it("Si carta mayor a 7 tiene que devolver carta + 2", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.7);

    const carta = comprobarCartaMayorASiete(generarRandomCarta()); // 0.7 * 10 + 1 = 8

    expect(carta).toBeGreaterThan(7);
    expect(carta).toBe(10); // 8 + 2
  });

  it("Si carta menor o igual a 7 carta es igual a carta", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.4);

    const carta = comprobarCartaMayorASiete(generarRandomCarta()); // 0.4 * 10 + 1 = 5

    expect(carta).toBe(5); // Carta 5
  });
});

describe("comprobarPuntuacion", () => {
  it("La puntuación es menor o igual a 4 y devuelve Has sido muy conservador", () => {
    const puntuacion = 2;

    const resultado = comprobarPuntuacion(puntuacion);

    expect(resultado).toBe("Has sido muy conservador");
  });

  it("Devuelve 'Te ha entrado el canguelo' si la puntuación es mayor a 4 y menor a 5", () => {
    const puntuacion = 5;

    const resultado = comprobarPuntuacion(puntuacion);

    expect(resultado).toBe("Te ha entrado el canguelo eh?");
  });

  it("Devuelve 'Casi casi...' si la puntuación es mayor a 5 y menor a 7", () => {
    const puntuacion = 7;

    const resultado = comprobarPuntuacion(puntuacion);

    expect(resultado).toBe("Casi casi...");
  });

  it("Devuelve '¡Lo has clavado!¡Enhorabuena!' si la puntuación es igual a 7.5", () => {
    const puntuacion = 7.5;

    const resultado = comprobarPuntuacion(puntuacion);

    expect(resultado).toBe("¡Lo has clavado!¡Enhorabuena!");
  });
});
