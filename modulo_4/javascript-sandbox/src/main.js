import "./style.css";

// Buttons
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

// Turn
const turnElement = document.querySelector(".numero-turno");
const turnInput = document.getElementById("custom-turn");

const incrementarTurno = () => {
  if (turnElement && typeof turnElement === HTMLParagraphElement) {
    turnElement.innerHTML = parseInt(turno.innerHTML) + 1;
    turnElement.innerHTML = turnElement.padStart(2, "0");
  }
};

const reducirTurno = () => {
  if (turnElement && typeof turnElement === HTMLParagraphElement) {
    turnElement.innerHTML = parseInt(turno.innerHTML) - 1;
    turnElement.innerHTML = turnElement.padStart(2, "0");
  }
};

const reiniciarTurno = () => {
  if (turnElement && typeof turnElement === HTMLParagraphElement) {
    turnElement.innerHTML = "00";
  }
};

const deshabilitarBotones = () => {
  if (
    turnElement &&
    typeof turnElement === HTMLParagraphElement &&
    prevButton &&
    typeof prevButton === HTMLButtonElement &&
    resetButton &&
    typeof resetButton === HTMLButtonElement
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
  return 0 < numero < 99 ? true : false;
};

const mostrarTurnoInput = () => {
  if (
    turnInput &&
    typeof turnInput === HTMLInputElement &&
    turnElement &&
    typeof turnElement === HTMLParagraphElement
  ) {
    let numInput = parseInt(turnInput.value);
    comprobarInputPositivo(numInput)
      ? (turnElement.innerHTML = turnInput.value)
      : alert("El turno debe ser un número entre 0 y 99");
    turnInput.value = "";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (
    nextButton &&
    typeof nextButton === HTMLButtonElement &&
    prevButton &&
    typeof prevButton === HTMLButtonElement &&
    resetButton &&
    typeof resetButton === HTMLButtonElement
  ) {
    nextButton.addEventListener("click", incrementarTurno);
    prevButton.addEventListener("click", reducirTurno);
    resetButton.addEventListener("click", reiniciarTurno);
  }

  if (turnInput && typeof turnInput === HTMLInputElement) {
    turnInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") mostrarTurnoInput();
    });
  }
});
