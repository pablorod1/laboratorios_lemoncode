import "./style.css";

interface Carta {
  idFoto: number;
  imagen: string;
}

const cartas: Carta[] = [
  {
    idFoto: 1,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true",
  },
  {
    idFoto: 1,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true",
  },

  {
    idFoto: 2,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true",
  },
  {
    idFoto: 2,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true",
  },

  {
    idFoto: 3,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true",
  },
  {
    idFoto: 3,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/3.png?raw=true",
  },

  {
    idFoto: 4,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true",
  },
  {
    idFoto: 4,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/4.png?raw=true",
  },

  {
    idFoto: 5,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true",
  },
  {
    idFoto: 5,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/5.png?raw=true",
  },

  {
    idFoto: 6,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true",
  },
  {
    idFoto: 6,
    imagen:
      "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/6.png?raw=true",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const cartasContainer = document.getElementById("cartas-container");

  cartas.forEach((carta: Carta, index: number) => {
    const cartaElement = document.createElement("div");
    const imgElement = document.createElement("img");
    if (
      cartaElement &&
      cartaElement instanceof HTMLDivElement &&
      imgElement &&
      imgElement instanceof HTMLImageElement
    ) {
      cartaElement.setAttribute("data-indice-id", index.toString());
      cartaElement.setAttribute("class", "carta");
      imgElement.setAttribute("data-image-id", index.toString());
      imgElement.setAttribute("class", "img");
      cartaElement.appendChild(imgElement);
    }

    if (cartasContainer && cartasContainer instanceof HTMLDivElement)
      cartasContainer?.appendChild(cartaElement);
  });

  if (cartasContainer && cartasContainer instanceof HTMLDivElement) {
    const cartasElements = cartasContainer.querySelectorAll(".carta");

    cartasElements.forEach((carta) => {
      const cartaImg = carta.querySelector(".img");
      if (cartaImg && cartaImg instanceof HTMLImageElement) {
        const indexCarta = cartaImg.getAttribute("data-image-id");
        console.log(indexCarta);
        carta.addEventListener("click", () => {
          if (cartaImg && cartaImg instanceof HTMLImageElement && indexCarta) {
            cartaImg.src = cartas[parseInt(indexCarta)].imagen;
          }
        });
      }
    });
  }
});
