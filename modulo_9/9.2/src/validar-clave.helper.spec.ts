import { commonPasswords } from "./model";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validar-clave.helper";

describe("tieneMayusculasYMinusculas", () => {
  it("devuelve false si la clave no tiene minúsculas", () => {
    const clave = "CLAVE";

    const resultado = tieneMayusculasYMinusculas(clave);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos una minúscula",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve false si la clave no tiene mayúsculas", () => {
    const clave = "clave";

    const resultado = tieneMayusculasYMinusculas(clave);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos una mayúscula",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve true si la clave tiene mayúsculas y minúsculas", () => {
    const clave = "Clave";

    const resultado = tieneMayusculasYMinusculas(clave);

    expect(resultado).toEqual({ esValida: true });
  });
});

describe("tieneNumeros", () => {
  it("devuelve false si la clave no tiene al menos un número", () => {
    const clave = "clave";

    const resultado = tieneNumeros(clave);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos un número",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve true si la clave tiene al menos un número", () => {
    const clave = "clave1";

    const resultado = tieneNumeros(clave);

    const expected = {
      esValida: true,
    };

    expect(resultado).toEqual(expected);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("devuelve false si la clave no contiene caracteres especiales", () => {
    const clave = "clave";

    const resultado = tieneCaracteresEspeciales(clave);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos un caracter especial",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve true si la clave contiene caracteres especiales", () => {
    const clave = "clave_";

    const resultado = tieneCaracteresEspeciales(clave);

    const expected = {
      esValida: true,
    };

    expect(resultado).toEqual(expected);
  });
});

describe("tieneLongitudMinima", () => {
  it("devuelve false si la clave tiene menos de 8 caracteres", () => {
    const clave = "1234567";

    const resultado = tieneLongitudMinima(clave);

    const expected = {
      esValida: false,
      error: "La clave debe tener 8 caracteres como mínimo",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve true si la clave tiene al menos 8 caracteres", () => {
    const clave = "12345678";

    const resultado = tieneLongitudMinima(clave);

    const expected = {
      esValida: true,
    };

    expect(resultado).toEqual(expected);
  });
});

describe("tieneNombreUsuario", () => {
  it("devuelve false si la clave contiene el nombre de usuario", () => {
    const clave = "clave1234";
    const nombre = "clave";

    const resultado = tieneNombreUsuario(nombre, clave);

    const expected = {
      esValida: false,
      error: "La clave no puede contener el nombre de usuario",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve true si la clave no contiene el nombre de usuario", () => {
    const clave = "clave1234";
    const nombre = "pablo";

    const resultado = tieneNombreUsuario(nombre, clave);

    const expected = {
      esValida: true,
    };

    expect(resultado).toEqual(expected);
  });
});

describe("tienePalabrasComunes", () => {
  it("devuelve false si la clave se encuentra en el array de palabras comunes", () => {
    const palabras = commonPasswords;
    const clave = "password";

    const resultado = tienePalabrasComunes(clave, palabras);

    const expected = {
      esValida: false,
      error: "La clave no puede ser una palabra común",
    };

    expect(resultado).toEqual(expected);
  });

  it("devuelve true si la clave no se encuentra en el array de palabras comunes", () => {
    const palabras = commonPasswords;
    const clave = "pablo";

    const resultado = tienePalabrasComunes(clave, palabras);

    const expected = {
      esValida: true,
    };

    expect(resultado).toEqual(expected);
  });
});
