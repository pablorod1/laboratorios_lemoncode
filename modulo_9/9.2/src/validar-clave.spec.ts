import { commonPasswords } from "./model";
import { validarClave } from "./validar-clave";

describe("validarClave", () => {
  it(`devuelve false y el error que corresponde si:
      - no tiene al menos una mayúscula
    `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "pablo1_1";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos una mayúscula",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve false y el error que corresponde si:
    - no tiene al menos una minúscula
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "PABLO1_1";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos una minúscula",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve false y el error que corresponde si:
    - no tiene al menos un número
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "PABLOpablo_";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos un número",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve false y el error que corresponde si:
    - no tiene al menos un caracter especial
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "PABLOpablo1";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave debe tener al menos un caracter especial",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve false y el error que corresponde si:
    - no tiene al menos 8 caracteres de longitud
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "PABp_1";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave debe tener 8 caracteres como mínimo",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve false y el error que corresponde si:
    - contiene el nombre de usuario
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "User_123";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave no puede contener el nombre de usuario",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve false y el error que corresponde si:
    - contiene palabras comunes
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "pablo_Password1";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: false,
      error: "La clave no puede ser una palabra común",
    };

    expect(resultado).toEqual(expected);
  });

  it(`devuelve true si:
    - tiene mayúsculas y minúsculas
    - tiene números
    - tiene caracteres especiales
    - tiene mínimo 8 caracteres de longitud
    - no contiene el nombre de usuario
    - no contiene palabras comunes del array
  `, () => {
    const palabrasComunes = commonPasswords;
    const nombreUsuario = "user";
    const clave = "Pablo_123";

    const resultado = validarClave(nombreUsuario, clave, palabrasComunes);

    const expected = {
      esValida: true,
    };

    expect(resultado).toEqual(expected);
  });
});
