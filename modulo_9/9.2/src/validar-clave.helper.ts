import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (clave.toLowerCase() === clave) {
    return {
      esValida: false,
      error: "La clave debe tener al menos una mayúscula",
    };
  } else if (clave.toUpperCase() === clave) {
    return {
      esValida: false,
      error: "La clave debe tener al menos una minúscula",
    };
  }
  return { esValida: true };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave.match(/[0-9]/)) {
    return {
      esValida: false,
      error: "La clave debe tener al menos un número",
    };
  }
  return { esValida: true };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave.match(/[^a-zA-Z0-9]/)) {
    return {
      esValida: false,
      error: "La clave debe tener al menos un caracter especial",
    };
  }
  return { esValida: true };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe tener 8 caracteres como mínimo",
    };
  }

  return {
    esValida: true,
  };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave.toLowerCase().includes(nombreUsuario)) {
    return {
      esValida: false,
      error: "La clave no puede contener el nombre de usuario",
    };
  }
  return { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  for (let i = 0; i < commonPasswords.length; i++) {
    if (clave.toLowerCase().includes(commonPasswords[i])) {
      return {
        esValida: false,
        error: "La clave no puede ser una palabra común",
      };
    }
  }

  return {
    esValida: true,
  };
};
