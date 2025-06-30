let renda = document.getElementById("rendaBruta")
let FGTS = document.getElementById("FGTS")

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

