import "./style.css";

function barajarArray(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generar un número aleatorio entre 0 y i
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiar elementos array[i] y array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Ejemplo de uso
const miArray = [1, 2, 3, 4, 5, 6];
console.log(barajarArray(miArray));
