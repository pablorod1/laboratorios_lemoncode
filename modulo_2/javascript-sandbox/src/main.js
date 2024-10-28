import "./style.css";

const amigos = 6;
const ticket = 120;
const bebidas = 18;

const totalADividir = ticket - bebidas;
const totalPorAmigo = totalADividir / amigos;
console.log(`Precio por comensal ${totalPorAmigo}€`);
