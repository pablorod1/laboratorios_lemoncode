import "./style.css";

const turno = document.querySelector(".numero-turno");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const resetButton = document.getElementById("resetButton");
const turnoInput = document.getElementById("custom-turn");

const incrementarTurno = () => {
  if (turno && turno instanceof HTMLParagraphElement) {
    let numTurno = 0;
    numTurno = parseInt(turno.innerHTML) + 1;
    turno.textContent = numTurno.toString().padStart(2, "0");
    deshabilitarBotones();
  }
};

const reducirTurno = () => {
  if (turno && turno instanceof HTMLParagraphElement) {
    let numTurno = 0;
    numTurno = parseInt(turno.innerHTML) - 1;
    turno.textContent = numTurno.toString().padStart(2, "0");
    deshabilitarBotones();
  }
};

const reiniciarTurno = () => {
  if (turno && turno instanceof HTMLParagraphElement) {
    turno.innerHTML = "00";
    deshabilitarBotones();
  }
};

const deshabilitarBotones = () => {
  if (
    turno &&
    turno instanceof HTMLElement &&
    prevButton &&
    prevButton instanceof HTMLButtonElement &&
    resetButton &&
    resetButton instanceof HTMLButtonElement
  ) {
    if (turno.innerHTML === "00") {
      prevButton.classList.add("disabled");
      resetButton.classList.add("disabled");
    } else {
      resetButton.classList.remove("disabled");
      prevButton.classList.remove("disabled");
    }
  }
};

const comprobarInputPositivo = (numero) => {
  if (numero > 0 && numero < 99) return true;
  return false;
};

const mostrarTurnoInput = () => {
  if (
    turnoInput &&
    turnoInput instanceof HTMLInputElement &&
    turno &&
    turno instanceof HTMLElement
  ) {
    let numInput = parseInt(turnoInput.value);
    if (comprobarInputPositivo(numInput)) {
      turno.innerHTML = turnoInput.value;
    } else {
      alert("El turno debe ser un número entre 0 y 99");
    }
    turnoInput.value = "";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (
    nextButton &&
    nextButton instanceof HTMLButtonElement &&
    prevButton &&
    prevButton instanceof HTMLButtonElement &&
    resetButton &&
    resetButton instanceof HTMLButtonElement
  ) {
    nextButton.addEventListener("click", incrementarTurno);
    prevButton.addEventListener("click", reducirTurno);
    resetButton.addEventListener("click", reiniciarTurno);
  }

  if (turnoInput && turnoInput instanceof HTMLInputElement) {
    turnoInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        mostrarTurnoInput();
      }
    });
  }
});
