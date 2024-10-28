import { estaBienFormadoIBAN } from "./motor";

describe("estaBienFormadoIBAN", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["DE6621000418401234567891", false],
    ["ES6621 0004 1840 12 34567891", false],
    ["ES66 21 0004 1840 1234567891", false],
    ["ES66 2100 0418 40 1234 567891", false],
  ])(
    "Deberia devolver para el IBAN %s el valor %s",

    (valor: string, expected: boolean) => {
      expect(estaBienFormadoIBAN(valor)).toBe(expected);
    }
  );
});
