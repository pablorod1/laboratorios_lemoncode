import { isValidIBAN, electronicFormatIBAN } from "ibantools";
import { Banco } from "./model";

const MYREGEX =
  /^ES\d{2}[\s-]?(?<codigoBanco>\d{4})[\s-]?(?<codigoSucursal>\d{4})[\s-]?(?<digitoControl>\d{2})[\s-]?(?<numeroCuenta>\d{10})$/;

export const estaBienFormadoIBAN = (iban: string): boolean => {
  if (!iban) {
    throw new Error("No se ha introducido un iban");
  }
  return MYREGEX.test(iban);
};

export const validaIBAN = (iban: string): boolean => {
  const formattedIBAN = electronicFormatIBAN(iban);
  if (!formattedIBAN) {
    throw new Error("No se ha introducido ningún IBAN");
  }
  return isValidIBAN(formattedIBAN);
};

export const extraerInfoIBAN = (iban: string) => {
  const coincidencia = MYREGEX.exec(iban);
  if (coincidencia) {
    const { codigoBanco, codigoSucursal, digitoControl, numeroCuenta } =
      coincidencia.groups as any;

    return {
      codigoBanco,
      codigoSucursal,
      digitoControl,
      numeroCuenta,
    };
  }

  throw new Error("No se pudo extraer información del IBAN");
};

export const obtenerNombreBanco = (
  codigoBanco: string,
  listaBancos: Banco[]
): string => {
  const bancoABuscar = listaBancos.find(
    (banco) => banco.codigo === codigoBanco
  );

  if (bancoABuscar) {
    return bancoABuscar.nombre;
  }

  return "No se ha encontrado el banco";
};
