const visorFirtsValue = document.getElementById("firtsValue");
const visorSecondValue = document.getElementById("secondValue");
const buttoms = document.querySelectorAll(".numero");
const buttomsOpera = document.querySelectorAll(".operador");

const calculadora = new Calculadora();
console.log(calculadora.sumar(2, 3));

console.log(buttomsOpera);

const display = new Visor(visorFirtsValue, visorSecondValue);

buttoms.forEach((boton) => {
  boton.addEventListener("click", () => display.addNumber(boton.innerHTML));
});

console.log(buttoms);

buttomsOpera.forEach((boton) => {
  boton.addEventListener("click", () => display.computar(boton.value));
});
console.log(buttomsOpera);
//});
//buttoms.map(buttoms => { buttoms.addEventListener('click', () => visor .addNumber (buttoms.////innerHTML))})
