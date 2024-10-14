import { LineaTicket, ResultadoLineaTicket } from "./model";
import {
  calculaLineasTicket,
  calculaResultadoTotalTicket,
  calcularTotalPorTipoIva,
  calculaTicket,
} from "./motor";

describe("calculaLineasTicket", () => {
  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = undefined;

    const resultado = () => calculaLineasTicket(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = null;

    const resultado = () => calculaLineasTicket(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("Devuelve [{nombre, cantidad, precioSinIva, tipoIva, precioConIva}]", () => {
    const productos: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];

    const resultado = calculaLineasTicket(productos);

    const expected: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4, // 2 * 2 = 4
        tipoIva: "general",
        precioConIva: 4.84, // 4 + 21% = 4.84
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60, // 20 * 3 = 60
        tipoIva: "general",
        precioConIva: 72.6, // 60 + 21% = 72.60
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6, // 1 * 6 = 6
        tipoIva: "superreducidoC",
        precioConIva: 6, // No tiene IVA, 6 * 0% = 6
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5, // 5 * 1 = 5
        tipoIva: "superreducidoA",
        precioConIva: 5.25, // 5 + 4% = 5.20
      },
    ];

    expect(resultado).toEqual(expected);
  });
});

describe("calculaResultadoTotalTicket", () => {
  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = undefined;

    const resultado = () => calculaLineasTicket(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = null;

    const resultado = () => calculaLineasTicket(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("{totalSinIva, totalConIva, totalIva} del resultado calculaLineasTicket", () => {
    const lineasTicketResultado: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4, // 2 * 2 = 4
        tipoIva: "general",
        precioConIva: 4.84, // 4 + 21% = 4.84
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60, // 20 * 3 = 60
        tipoIva: "general",
        precioConIva: 72.6, // 60 + 21% = 72.60
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6, // 1 * 6 = 6
        tipoIva: "superreducidoC",
        precioConIva: 6, // No tiene IVA, 6 * 0% = 6
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5, // 5 * 1 = 5
        tipoIva: "superreducidoA",
        precioConIva: 5.25, // 5 + 4% = 5.20
      },
    ];

    const resultado = calculaResultadoTotalTicket(lineasTicketResultado);

    const expected = {
      totalSinIva: 75,
      totalConIva: 88.69,
      totalIva: 13.69,
    };

    expect(resultado).toEqual(expected);
  });
});

describe("calculaDesgloseIva", () => {
  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = undefined;

    const resultado = () => calcularTotalPorTipoIva(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = null;

    const resultado = () => calcularTotalPorTipoIva(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("Devuelve [{tipoIva, cuantia}]", () => {
    const lineasTicketResultado: ResultadoLineaTicket[] = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4, // 2 * 2 = 4
        tipoIva: "general",
        precioConIva: 4.84, // 4 + 21% = 4.84
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60, // 20 * 3 = 60
        tipoIva: "general",
        precioConIva: 72.6, // 60 + 21% = 72.60
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6, // 1 * 6 = 6
        tipoIva: "superreducidoC",
        precioConIva: 6, // No tiene IVA, 6 * 0% = 6
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5, // 5 * 1 = 5
        tipoIva: "superreducidoA",
        precioConIva: 5.25, // 5 + 4% = 5.20
      },
    ];

    const resultado = calcularTotalPorTipoIva(lineasTicketResultado);

    const expected = [
      { tipoIva: "general", cuantia: 77.44 },
      { tipoIva: "superreducidoC", cuantia: 6 },
      { tipoIva: "superreducidoA", cuantia: 5.25 },
    ];

    expect(resultado).toEqual(expected);
  });
});

describe("calculaTicket", () => {
  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = undefined;

    const resultado = () => calculaTicket(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("devuelve un throw si no se ha introducido un ticket", () => {
    const lineasTicket: any = null;

    const resultado = () => calculaTicket(lineasTicket);

    expect(resultado).toThrow("No se ha introducido ningún ticket");
  });

  it("Devuelve un ticket con lineas, total y desgloseIva", () => {
    const productos: LineaTicket[] = [
      {
        producto: {
          nombre: "Legumbres",
          precio: 2,
          tipoIva: "general",
        },
        cantidad: 2,
      },
      {
        producto: {
          nombre: "Perfume",
          precio: 20,
          tipoIva: "general",
        },
        cantidad: 3,
      },
      {
        producto: {
          nombre: "Leche",
          precio: 1,
          tipoIva: "superreducidoC",
        },
        cantidad: 6,
      },
      {
        producto: {
          nombre: "Lasaña",
          precio: 5,
          tipoIva: "superreducidoA",
        },
        cantidad: 1,
      },
    ];

    const resultado = calculaTicket(productos);

    const expected = {
      lineas: [
        {
          nombre: "Legumbres",
          cantidad: 2,
          precioSinIva: 4, // 2 * 2 = 4
          tipoIva: "general",
          precioConIva: 4.84, // 4 + 21% = 4.84
        },
        {
          nombre: "Perfume",
          cantidad: 3,
          precioSinIva: 60, // 20 * 3 = 60
          tipoIva: "general",
          precioConIva: 72.6, // 60 + 21% = 72.60
        },
        {
          nombre: "Leche",
          cantidad: 6,
          precioSinIva: 6, // 1 * 6 = 6
          tipoIva: "superreducidoC",
          precioConIva: 6, // No tiene IVA, 6 * 0% = 6
        },
        {
          nombre: "Lasaña",
          cantidad: 1,
          precioSinIva: 5, // 5 * 1 = 5
          tipoIva: "superreducidoA",
          precioConIva: 5.25, // 5 + 4% = 5.20
        },
      ],
      total: {
        totalSinIva: 75,
        totalConIva: 88.69,
        totalIva: 13.69,
      },
      desgloseIva: [
        { tipoIva: "general", cuantia: 77.44 },
        { tipoIva: "superreducidoC", cuantia: 6 },
        { tipoIva: "superreducidoA", cuantia: 5.25 },
      ],
    };

    expect(resultado).toEqual(expected);
  });
});
