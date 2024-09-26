import "./style.css";

const turno = document.querySelector(".numero-turno");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const resetButton = document.getElementById("resetButton");
const turnoInput = document.getElementById("custom-turn") as HTMLInputElement;

const incrementarTurno = () => {
  if (turno && turno.textContent) {
    let numTurno = 0;
    numTurno = parseInt(turno.textContent) + 1;
    turno.textContent = numTurno.toString().padStart(2, "0");
    deshabilitarBotones();
  }
};

const reducirTurno = () => {
  if (turno && turno.textContent) {
    let numTurno = 0;
    numTurno = parseInt(turno.textContent) - 1;
    turno.textContent = numTurno.toString().padStart(2, "0");
    deshabilitarBotones();
    console.log(turno.textContent);
  }
};

const reiniciarTurno = () => {
  if (turno && turno.textContent) {
    turno.textContent = "00";
    deshabilitarBotones();
  }
};

const deshabilitarBotones = () => {
  if (turno && turno.textContent && prevButton && resetButton) {
    if (turno.textContent === "00") {
      prevButton.classList.add("disabled");
      resetButton.classList.add("disabled");
    } else {
      resetButton.classList.remove("disabled");
      prevButton.classList.remove("disabled");
    }
  }
};

const comprobarInputPositivo = (numero: number) => {
  if (numero > 0 && numero < 99) return true;
  return false;
};

const mostrarTurnoInput = () => {
  if (turnoInput && turnoInput.value && turno) {
    let numInput = parseInt(turnoInput.value);
    if (comprobarInputPositivo(numInput)) {
      turno.textContent = turnoInput.value;
    } else {
      alert("El turno debe ser un número entre 0 y 99");
    }
    turnoInput.value = "";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (nextButton && prevButton && resetButton) {
    nextButton.addEventListener("click", incrementarTurno);
    prevButton.addEventListener("click", reducirTurno);
    resetButton.addEventListener("click", reiniciarTurno);
  }

  if (turnoInput) {
    turnoInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        mostrarTurnoInput();
      }
    });
  }
});
