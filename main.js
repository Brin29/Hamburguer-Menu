const $btnHam = document.getElementById("btn-ham");
const $btnClose = document.getElementById("btn-close");
const $enlaces = document.getElementById("enlaces");


function transicion(){
  $enlaces.classList.toggle("hidden")
} 

$btnClose.addEventListener("click", transicion);

$btnHam.addEventListener("click", transicion);

document.querySelectorAll("a").forEach(el => {
  el.addEventListener("click" , transicion)})