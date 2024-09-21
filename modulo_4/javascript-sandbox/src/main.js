import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // Buttons
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const resetButton = document.getElementById("resetButton");

  // Turn
  const turnElement = document.querySelector(".numero-turno");
  const turnInput = document.getElementById("custom-turn");

  prevButton?.addEventListener("click", () => {
    if (turnElement.textContent !== "00") {
      prevButton.classList.remove("disabled");
      turnElement.textContent = parseInt(turnElement.textContent) - 1;
      turnElement.textContent = turnElement.textContent.padStart(2, "0");
    } else {
      prevButton.classList.add("disabled");
      resetButton.classList.add("disabled");
    }
  });

  nextButton?.addEventListener("click", () => {
    turnElement.textContent = parseInt(turnElement.textContent) + 1;
    turnElement.textContent = turnElement.textContent.padStart(2, "0");
    if (turnElement.textContent !== "00") {
      prevButton.classList.remove("disabled");
      resetButton.classList.remove("disabled");
    }
  });

  resetButton?.addEventListener("click", () => {
    if (turnElement.textContent !== "00") {
      resetButton.classList.remove("disabled");
      prevButton.classList.remove("disabled");
      turnElement.textContent = 0;
      turnElement.textContent = turnElement.textContent.padStart(2, "0");
    } else {
      resetButton.classList.add("disabled");
      prevButton.classList.add("disabled");
    }
  });

  turnInput?.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      if (0 > turnInput.value || turnInput.value > 99) {
        turnInput.value = "";
        alert("El turno debe ser un número entre 0 y 99");
        return;
      }
      turnElement.textContent = turnInput.value;
      turnElement.textContent = turnElement.textContent.padStart(2, "0");
      if (turnElement.textContent !== "00") {
        prevButton.classList.remove("disabled");
        resetButton.classList.remove("disabled");
      }
      turnInput.value = "";
    }
  });
});
