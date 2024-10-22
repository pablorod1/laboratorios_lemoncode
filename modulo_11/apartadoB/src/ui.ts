import { obtenerImagenes, obtenerURl } from "./motor";

const obtenerTexto = () => {
  const textarea = document.getElementById("textarea");
  if (textarea && textarea instanceof HTMLTextAreaElement) {
    return textarea.value;
  }
  return "";
};

const extraerImagenes = (texto: string) => {
  const imagenes = obtenerImagenes(texto);
  if (imagenes) {
    const urls = obtenerURl(imagenes);
    return urls;
  }
  return [];
};

const createImageElement = (texto: string) => {
  const image = document.createElement("img");
  image.src = texto;
  return image;
};

const pintarImagenes = (urls: string[]) => {
  const contenedor = document.getElementById("imagenes-container");
  if (contenedor) {
    urls.forEach((url) => {
      const elemento = createImageElement(url);
      contenedor.appendChild(elemento);
    });
  }
};

export const handleExtraer = () => {
  const buscarBoton = document.getElementById("extraer-boton");
  if (buscarBoton && buscarBoton instanceof HTMLButtonElement) {
    buscarBoton.addEventListener("click", () => {
      const texto = obtenerTexto();
      if (texto) {
        const urls = extraerImagenes(texto);
        console.log(urls);
        pintarImagenes(urls);
      }
    });
  }
};
