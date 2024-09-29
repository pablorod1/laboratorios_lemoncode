import { Carta, Tablero, tablero } from "./model";
import { iniciarPartida } from "./motor";

const iniciarButton = document.getElementById("iniciar-button");

if (iniciarButton && iniciarButton instanceof HTMLButtonElement) {
  iniciarButton.addEventListener("click", () => iniciarPartida(tablero));
}
