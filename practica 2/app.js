//variables
const caja = document.querySelector("#caja");
const texto = document.querySelector("#texto");


//evento
caja.addEventListener("click", cambiarColor);


//funcion cambiar color
function cambiarColor(){
  caja.classList.toggle("bg-primary");
  caja.classList.toggle('bg-success');
  texto.classList.toggle('text-warning');
  texto.classList.toggle('text-white');
}