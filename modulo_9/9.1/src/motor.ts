import {
  ResultadoLineaTicket,
  LineaTicket,
  TipoIva,
  TicketFinal,
  ResultadoTotalTicket,
  TotalPorTipoIva,
} from "./model";

const comprobarTipoIVA = (tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      return 0.21;

    case "reducido":
      return 0.1;

    case "superreducidoA":
      return 0.05;

    case "superreducidoB":
      return 0.04;

    case "superreducidoC":
      return 0;

    case "sinIva":
      return 0;
    default:
      return 0;
  }
};

const simplificarDosDecimales = (numero: number): number => {
  return parseFloat(numero.toFixed(2));
};

export const calculaLineasTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  if (!lineasTicket) {
    throw new Error("No se ha introducido ningún ticket");
  }

  let lineas: ResultadoLineaTicket[] = [];
  for (let i = 0; i < lineasTicket.length; i++) {
    const nombre = lineasTicket[i].producto.nombre;
    const cantidad = lineasTicket[i].cantidad;
    const tipoIva = lineasTicket[i].producto.tipoIva;
    const precio = lineasTicket[i].producto.precio;

    const precioSinIva = precio * cantidad;

    const iva =
      precioSinIva *
      simplificarDosDecimales(
        comprobarTipoIVA(lineasTicket[i].producto.tipoIva)
      );
    const precioConIva = precioSinIva + iva;

    lineas.push({
      nombre,
      cantidad,
      precioSinIva,
      tipoIva,
      precioConIva,
    });
  }

  return lineas;
};

export const calculaResultadoTotalTicket = (
  lineasTicketResultado: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  if (!lineasTicketResultado) {
    throw new Error("No se ha introducido ningún ticket");
  }

  let totalConIva = 0;
  let totalSinIva = 0;
  let totalIva = 0;
  for (let i = 0; i < lineasTicketResultado.length; i++) {
    totalConIva += lineasTicketResultado[i].precioConIva;
    totalSinIva += lineasTicketResultado[i].precioSinIva;
  }

  totalIva = simplificarDosDecimales(totalConIva - totalSinIva);

  return {
    totalSinIva,
    totalConIva,
    totalIva,
  };
};

export const calcularTotalPorTipoIva = (
  lineasTicketResultado: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  if (!lineasTicketResultado) {
    throw new Error("No se ha introducido ningún ticket");
  }

  const totalPorTipoIva: { [key: string]: number } = {};

  // Acumulamos los totales por tipo de IVA
  for (let i = 0; i < lineasTicketResultado.length; i++) {
    const { tipoIva, precioConIva } = lineasTicketResultado[i];

    if (!totalPorTipoIva[tipoIva]) {
      totalPorTipoIva[tipoIva] = 0;
    }

    totalPorTipoIva[tipoIva] += precioConIva;
  }

  // Convertimos el objeto acumulado en un array de TotalPorTipoIva
  return Object.entries(totalPorTipoIva).map(([tipoIva, cuantia]) => ({
    tipoIva: tipoIva as TipoIva,
    cuantia,
  }));
};

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  if (!lineasTicket) {
    throw new Error("No se ha introducido ningún ticket");
  }

  const lineas = calculaLineasTicket(lineasTicket);
  const total = calculaResultadoTotalTicket(lineas);
  const desgloseIva = calcularTotalPorTipoIva(lineas);

  return {
    lineas,
    total,
    desgloseIva,
  };
};
