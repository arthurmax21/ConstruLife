  function toggleMenu() {
    const menu = document.getElementById("menu-items");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }

  const modal = document.querySelector('.modal-container')

function openModal() {
  modal.classList.add('active')
}

function closeModal() {
  modal.classList.remove('active')
}

let currentStep = 0;
const modals = document.querySelectorAll(".modal");
const modalContainer = document.querySelector(".modal-container");

function openModal() {
  currentStep = 0;
  modalContainer.classList.add("active");
  showStep(currentStep);
}

function showStep(step) {
  modals.forEach((modal, index) => {
    modal.style.display = index === step ? "flex" : "none";
  });
}

function nextStep() {
  if (currentStep < modals.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    closeModal();
  }
}

function closeModal() {
  modalContainer.classList.remove("active");
}

function finalizarSimulacao() {
  alert("Obrigado! Entraremos em contato com a melhor proposta.");
  closeModal();
}

function toggleMenu() {
  const menu = document.getElementById("menu-items");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

const sliders = document.querySelectorAll("input[type='range']");

sliders.forEach(slider => {
  slider.addEventListener("input", () => {
    const value = slider.value;
    slider.nextElementSibling.textContent = `R$ ${Number(value).toLocaleString('pt-BR')}`;
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".icon").forEach(icon => {
    if (icon.getBoundingClientRect().top < window.innerHeight) {
      icon.style.opacity = 1;
      icon.style.transform = "translateY(0)";
    }
  });
});

let rendaBrutaFamiliar = document.getElementById("rendaBruta")
let valorTotalFGTS = document.getElementById("FGTS")
// Campo com os meses do financiamento
let mesesDeFinanciamento = 360
// Variavel resultado final do financiamento após aplicar o valor do FGTS
let resultadoFinalFinanciamento
let teste = document.querySelector('#teste')

/*
    REGRAS PARA A ESCOLHA DA PORCENTAGEM DE ACORDO O VALOR DO SALARIO BRUTO
    renda em 1.509 até 3018 > 40% ?? 80%
    renda em 3019 até 4.527 > 60% ?? 60%
    renda em 4.527 até 7.545 > 30% ?? 30%
*/


// Calculo final do financiamento
function CalculoFinanciamento() {
    // Campo para guardar a porcentaem do financiamento
    let porcentagemDesconto = 0
    let valorRendaBrutaFamiliar = rendaBrutaFamiliar.value
    let valorValorTotalFGTS = valorTotalFGTS.value

    if (valorRendaBrutaFamiliar <= 1509 || valorRendaBrutaFamiliar <= 3018) {
        porcentagemDesconto = 40
    } else if (valorRendaBrutaFamiliar >= 3019 && valorRendaBrutaFamiliar <= 4527) {
        porcentagemDesconto = 60
    } else if (valorRendaBrutaFamiliar >= 4528) {
        porcentagemDesconto = 80
    }

    let rendaMinima = valorRendaBrutaFamiliar * (30 / 100);

    let resultadoFinanciamento = rendaMinima * mesesDeFinanciamento;

    let resultadoRetiradaDoFinanciamento = resultadoFinanciamento * (porcentagemDesconto / 100);

    let resultFinacimentoAntesDoFGTS = resultadoFinanciamento - resultadoRetiradaDoFinanciamento;

    resultadoFinalFinanciamento = resultFinacimentoAntesDoFGTS - valorValorTotalFGTS

    //console.log(teste.innerHTML = resultadoFinalFinanciamento)

    console.log(console.log(resultadoFinalFinanciamento))
}