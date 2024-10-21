import { Personaje } from "./model";

const API_URL = "http://localhost:3000/personajes";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los personajes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const obtenerPersonajePorNombre = async (
  nombre: string
): Promise<Personaje> => {
  try {
    const response = await fetch(`${API_URL}?nombre_like=${nombre}`);
    if (!response.ok) {
      throw new Error("Error al obtener el personaje");
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    throw error;
  }
};
