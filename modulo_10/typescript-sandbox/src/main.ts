import { obtenerPersonajePorNombre, obtenerPersonajes } from "./api";
import { Personaje } from "./model";

const crearElementoImagen = (imagen: string, alt: string): HTMLImageElement => {
  const elemento = document.createElement("img");
  elemento.src = `http://localhost:3000/${imagen}`;
  elemento.alt = alt;
  return elemento;
};

const crearElementoParrafo = (texto: string): HTMLParagraphElement => {
  const elemento = document.createElement("p");
  elemento.textContent = texto;
  return elemento;
};

const crearElementoStrong = (texto: string): HTMLElement => {
  const elemento = document.createElement("strong");
  elemento.textContent = texto;
  return elemento;
};

const crearElementoInfo = (
  tituloTexto: string,
  contenidoTexto: string,
  ...clases: string[]
): HTMLDivElement => {
  const contenedor = document.createElement("div");
  contenedor.classList.add(...clases);

  const titulo = crearElementoStrong(tituloTexto);
  const contenido = crearElementoParrafo(contenidoTexto);

  contenedor.appendChild(titulo);
  contenedor.appendChild(contenido);

  return contenedor;
};

const crearElementoPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elemento = document.createElement("div");
  elemento.classList.add("personaje");

  const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
  imagen.classList.add("personaje-img");
  elemento.appendChild(imagen);

  const titulo = crearElementoParrafo(personaje.nombre);
  titulo.classList.add("personaje-nombre");
  elemento.appendChild(titulo);

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("personaje-info-container");

  infoContainer.appendChild(
    crearElementoInfo("Apodo: ", personaje.apodo, "personaje-info")
  );
  infoContainer.appendChild(
    crearElementoInfo(
      "Especialidad: ",
      personaje.especialidad,
      "personaje-info"
    )
  );
  infoContainer.appendChild(
    crearElementoInfo(
      "Habilidades: ",
      personaje.habilidades.join(", "),
      "personaje-habilidades",
      "personaje-info"
    )
  );

  if (personaje.amigo) {
    infoContainer.appendChild(
      crearElementoInfo("Amigo: ", personaje.amigo, "personaje-info")
    );
  }

  elemento.appendChild(infoContainer);

  return elemento;
};

const mostrarPersonajes = async () => {
  const personajes = await obtenerPersonajes();
  console.log(personajes);
  const listado = document.getElementById("listado-personajes");
  console.log(listado);
  if (listado) {
    personajes.forEach((personaje) => {
      const elemento = crearElementoPersonaje(personaje);
      listado.appendChild(elemento);
    });
  }
};

const handleBuscar = async () => {
  const buscador = document.getElementById("buscador");
  const buscarBoton = document.getElementById("buscar-boton");

  if (
    buscador &&
    buscador instanceof HTMLInputElement &&
    buscarBoton &&
    buscarBoton instanceof HTMLButtonElement
  ) {
    buscarBoton.addEventListener("click", async () => {
      const nombre = buscador.value;
      const personaje = await obtenerPersonajePorNombre(nombre);
      console.log(personaje);
      const listado = document.getElementById("listado-personajes");
      if (listado) {
        listado.innerHTML = "";
        const elemento = crearElementoPersonaje(personaje);
        listado.appendChild(elemento);
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarPersonajes();
  handleBuscar();
});
