import { comprobarPuntuacionMensaje, generarRandomCarta } from "./motor";
import { MIN_CARTA, MAX_CARTA } from "./model";

// Mockear todas las funciones de `ui.js` que no son relevantes para el test
vi.mock("./ui", () => ({
  mePlantoButton: {},
  muestraPuntuacion: vi.fn(),
  elementStyleBlock: vi.fn(),
  mostrarCarta: vi.fn(),
  gameOver: vi.fn(),
  mostrarMensajeVictoria: vi.fn(),
}));

describe("generarRandomCarta", () => {
  it("Debe generar una carta entre 1 y 12, excluyendo 8 y 9", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    const carta = generarRandomCarta();

    expect(carta).toBeGreaterThanOrEqual(MIN_CARTA);
    expect(carta).toBeLessThanOrEqual(MAX_CARTA);
  });

  it("Si carta mayor a 7 tiene que devolver carta + 2", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.7);

    const carta = generarRandomCarta(); // Carta 8

    expect(carta).toBeGreaterThan(7);
    expect(carta).toBe(10); // Carta 8 + 2
  });

  it("Si carta menor o igual a 7 carta es igual a carta", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.4);

    const carta = generarRandomCarta(); // Carta 5

    expect(carta).toBe(5); // Carta 5
  });
});

describe("comprobarPuntuacionMensaje", () => {
  it("La puntuación es menor o igual a 4 y devuelve Has sido muy conservador", () => {
    const puntuacion = 4;

    const resultado = comprobarPuntuacionMensaje(puntuacion);

    expect(resultado).toBe("Has sido muy conservador");
  });

  it("Devuelve 'Te ha entrado el canguelo' si la puntuación es mayor a 4 y menor a 5", () => {
    const puntuacion = 5;

    const resultado = comprobarPuntuacionMensaje(puntuacion);

    expect(resultado).toBe("Te ha entrado el canguelo eh?");
  });

  it("Devuelve 'Casi casi...' si la puntuación es mayor a 5 y menor a 7", () => {
    const puntuacion = 7;

    const resultado = comprobarPuntuacionMensaje(puntuacion);

    expect(resultado).toBe("Casi casi...");
  });

  it("Devuelve '¡Lo has clavado!¡Enhorabuena!' si la puntuación es igual a 7.5", () => {
    const puntuacion = 7.5;

    const resultado = comprobarPuntuacionMensaje(puntuacion);

    expect(resultado).toBe("¡Lo has clavado!¡Enhorabuena!");
  });
});
