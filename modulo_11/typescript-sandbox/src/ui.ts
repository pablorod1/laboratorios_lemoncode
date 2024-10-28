import { bancos } from "./model";
import {
  estaBienFormadoIBAN,
  extraerInfoIBAN,
  obtenerNombreBanco,
  validaIBAN,
} from "./motor";

const obtenerValorInput = (): string => {
  const ibanElement = document.getElementById("input-IBAN");
  if (ibanElement && ibanElement instanceof HTMLInputElement) {
    return ibanElement.value;
  }
  return "";
};

const comprobarFormatoIban = (): string => {
  const iban = obtenerValorInput();
  return estaBienFormadoIBAN(iban)
    ? "El IBAN está bien formado"
    : "El IBAN no está bien formado";
};

const comprobarValidezIBAN = (): string => {
  const iban = obtenerValorInput();
  return validaIBAN(iban) ? "El IBAN es válido" : "El IBAN no es válido";
};

const obtenerInfoIBAN = () => {
  const iban = obtenerValorInput();
  return extraerInfoIBAN(iban);
};

const mostrarDatosIBAN = () => {
  const bienFormadoElement = document.getElementById("bien-formado");
  if (bienFormadoElement && bienFormadoElement instanceof HTMLParagraphElement)
    bienFormadoElement.innerHTML = `<strong>${comprobarFormatoIban()}</strong>`;

  const esValidoElement = document.getElementById("es-valido");
  if (esValidoElement && esValidoElement instanceof HTMLParagraphElement)
    esValidoElement.innerHTML = `<strong>${comprobarValidezIBAN()}</strong>`;

  const nombreBancoElement = document.getElementById("nombre-banco");
  if (
    nombreBancoElement &&
    nombreBancoElement instanceof HTMLParagraphElement
  ) {
    const strongElement = document.createElement("strong");
    strongElement.innerHTML = "Banco: ";
    nombreBancoElement.innerHTML = obtenerNombreBanco(
      obtenerInfoIBAN().codigoBanco,
      bancos
    );
    nombreBancoElement.prepend(strongElement);
  }

  const codigoSucursalElement = document.getElementById("codigo-sucursal");
  if (
    codigoSucursalElement &&
    codigoSucursalElement instanceof HTMLParagraphElement
  ) {
    const strongElement = document.createElement("strong");
    strongElement.innerHTML = "Código de sucursal: ";
    codigoSucursalElement.innerHTML = obtenerInfoIBAN().codigoSucursal;
    codigoSucursalElement.prepend(strongElement);
  }

  const digitoControlElement = document.getElementById("digito-control");
  if (
    digitoControlElement &&
    digitoControlElement instanceof HTMLParagraphElement
  ) {
    const strongElement = document.createElement("strong");
    strongElement.innerHTML = "Dígito de control: ";
    digitoControlElement.innerHTML = obtenerInfoIBAN().digitoControl;
    digitoControlElement.prepend(strongElement);
  }

  const numeroCuentaElement = document.getElementById("numero-cuenta");
  if (
    numeroCuentaElement &&
    numeroCuentaElement instanceof HTMLParagraphElement
  ) {
    const strongElement = document.createElement("strong");
    strongElement.innerHTML = "Número de cuenta: ";
    numeroCuentaElement.innerHTML = obtenerInfoIBAN().numeroCuenta;
    numeroCuentaElement.prepend(strongElement);
  }
};

export const handleBuscar = () => {
  const botonBuscar = document.getElementById("boton-buscar");
  if (botonBuscar && botonBuscar instanceof HTMLButtonElement) {
    botonBuscar.addEventListener("click", () => {
      mostrarDatosIBAN();
    });
  }
};
