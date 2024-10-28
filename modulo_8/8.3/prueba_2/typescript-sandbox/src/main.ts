import "./style.css";

const imgContainer = document.getElementById("img-container");
const img = document.getElementById("img");

document.addEventListener("DOMContentLoaded", () => {
  if (imgContainer && imgContainer instanceof HTMLDivElement) {
    imgContainer.addEventListener("click", () => {
      imgContainer.style.transform = "rotateY(180deg)";
      imgContainer.style.background = "purple";
      if (img && img instanceof HTMLImageElement) {
        setTimeout(() => {
          img.src =
            "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true";
        }, 200);
      }
    });
  }
});
