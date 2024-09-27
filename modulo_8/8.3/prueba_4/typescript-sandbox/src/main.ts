import "./style.css";

const images = [
  "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true",
  "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true",
];

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("cards-container");

  if (cardsContainer && cardsContainer instanceof HTMLDivElement) {
    const imgContainers = cardsContainer.querySelectorAll(".img-container");

    imgContainers.forEach((container) => {
      const img = container.querySelector("#img");
      if (container && container instanceof HTMLDivElement) {
        container.addEventListener("click", () => {
          const randomImg = Math.floor(Math.random() * images.length);
          container.style.transform = "rotateY(180deg)";
          container.style.background = "purple";
          container.style.pointerEvents = "none";
          if (img && img instanceof HTMLImageElement) {
            setTimeout(() => {
              img.src = images[randomImg];
            }, 100);
          }
        });
      }
    });
  }
});
