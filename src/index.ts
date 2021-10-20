let num1: string = document.getElementById("num1");
let num2: string = document.getElementById("num2");
let btn = document.getElementById("btn");
let resultado: boolean;

btn.addEventListener("click", () => {
  let numUno: number = Number(num1.value);
  let numDos: number = Number(num2.value);

  resultado = numUno > numDos;
  console.log(resultado);
});
