const numeroVisitasElement = document.getElementById("numero-visitas");

function incrementarContador() {
  let numeroVisitasAtual = parseInt(numeroVisitasElement.textContent);

  numeroVisitasAtual++;

  numeroVisitasElement.textContent = numeroVisitasAtual;
}

if (!localStorage.getItem("numeroVisitas")) {
  localStorage.setItem("numeroVisitas", 0);
}

let numeroVisitasInicial = parseInt(localStorage.getItem("numeroVisitas"));

numeroVisitasElement.textContent = numeroVisitasInicial;

incrementarContador();

localStorage.setItem("numeroVisitas", numeroVisitasElement.textContent);
