// Carousel Data
const houses = [
    {
      id: 1,
      title: "Casa de Bambu Moderna",
      description:
        "Uma residência inovadora construída inteiramente com bambu certificado, oferecendo design contemporâneo e máxima sustentabilidade.",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop",
      features: ["Bambu Certificado", "Energia Solar", "Captação de Chuva", "Ventilação Natural"],
      location: "São Paulo, SP",
      sustainability: {
        energyEfficiency: 85,
        waterSaving: 60,
        co2Reduction: 70,
      },
    },
    {
      id: 2,
      title: "Residência com Tijolo Ecológico",
      description:
        "Casa familiar construída com tijolos ecológicos, proporcionando excelente isolamento térmico e conforto durante todo o ano.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      features: ["Tijolo Ecológico", "Telhado Verde", "Aquecimento Solar", "Jardim Vertical"],
      location: "Curitiba, PR",
      sustainability: {
        energyEfficiency: 78,
        waterSaving: 45,
        co2Reduction: 65,
      },
    },
    {
      id: 3,
      title: "Casa de Terra Crua",
      description:
        "Construção tradicional com técnicas modernas, utilizando adobe e superadobe para criar um ambiente naturalmente climatizado.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
      features: ["Adobe", "Superadobe", "Bioconstrução", "Permacultura"],
      location: "Brasília, DF",
      sustainability: {
        energyEfficiency: 90,
        waterSaving: 55,
        co2Reduction: 80,
      },
    },
    {
      id: 4,
      title: "Residência Steel Frame",
      description:
        "Casa moderna com estrutura metálica leve, construção rápida e alta eficiência energética com isolamento térmico avançado.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop",
      features: ["Steel Frame", "Isolamento Térmico", "Painéis Solares", "Smart Home"],
      location: "Florianópolis, SC",
      sustainability: {
        energyEfficiency: 82,
        waterSaving: 50,
        co2Reduction: 60,
      },
    },
    {
      id: 5,
      title: "Casa Container Sustentável",
      description:
        "Inovadora residência feita com containers reutilizados, demonstrando como a arquitetura sustentável pode ser criativa e funcional.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      features: ["Container Reutilizado", "Energia Eólica", "Horta Urbana", "Reciclagem de Água"],
      location: "Rio de Janeiro, RJ",
      sustainability: {
        energyEfficiency: 75,
        waterSaving: 70,
        co2Reduction: 85,
      },
    },
  ]
  
  // Carousel State
  let currentIndex = 0
  let isAutoPlaying = true
  let autoPlayInterval
  
  // DOM Elements
  const carouselImg = document.getElementById("carousel-img")
  const carouselTitle = document.getElementById("carousel-title")
  const carouselDescription = document.getElementById("carousel-description")
  const locationBadge = document.getElementById("location-badge")
  const featuresList = document.getElementById("features-list")
  const energyValue = document.getElementById("energy-value")
  const waterValue = document.getElementById("water-value")
  const co2Value = document.getElementById("co2-value")
  const energyProgress = document.getElementById("energy-progress")
  const waterProgress = document.getElementById("water-progress")
  const co2Progress = document.getElementById("co2-progress")
  const currentSlideSpan = document.getElementById("current-slide")
  const totalSlidesSpan = document.getElementById("total-slides")
  const prevBtn = document.getElementById("prev-btn")
  const nextBtn = document.getElementById("next-btn")
  const dotsContainer = document.getElementById("carousel-dots")
  
  // Initialize Carousel
  function initCarousel() {
    totalSlidesSpan.textContent = houses.length
    updateCarousel()
    startAutoPlay()
  
    // Event Listeners
    prevBtn.addEventListener("click", goToPrevious)
    nextBtn.addEventListener("click", goToNext)
  
    // Dots event listeners
    const dots = dotsContainer.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index))
    })
  
    // Pause auto-play on hover
    const carouselCard = document.querySelector(".carousel-card")
    carouselCard.addEventListener("mouseenter", stopAutoPlay)
    carouselCard.addEventListener("mouseleave", startAutoPlay)
  }
  
  // Update Carousel Content
  function updateCarousel() {
    const currentHouse = houses[currentIndex]
  
    // Update image and basic info
    carouselImg.src = currentHouse.image
    carouselImg.alt = currentHouse.title
    carouselTitle.textContent = currentHouse.title
    carouselDescription.textContent = currentHouse.description
    locationBadge.textContent = currentHouse.location
  
    // Update features
    featuresList.innerHTML = ""
    currentHouse.features.forEach((feature) => {
      const span = document.createElement("span")
      span.className = "feature-badge"
      span.textContent = feature
      featuresList.appendChild(span)
    })
  
    // Update sustainability metrics
    const { energyEfficiency, waterSaving, co2Reduction } = currentHouse.sustainability
  
    energyValue.textContent = `${energyEfficiency}%`
    waterValue.textContent = `${waterSaving}%`
    co2Value.textContent = `${co2Reduction}%`
  
    // Animate progress bars
    setTimeout(() => {
      energyProgress.style.width = `${energyEfficiency}%`
      waterProgress.style.width = `${waterSaving}%`
      co2Progress.style.width = `${co2Reduction}%`
    }, 100)
  
    // Update counter and dots
    currentSlideSpan.textContent = currentIndex + 1
    updateDots()
  }
  
  // Update Dots
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex)
    })
  }
  
  // Navigation Functions
  function goToPrevious() {
    currentIndex = (currentIndex - 1 + houses.length) % houses.length
    updateCarousel()
    stopAutoPlay()
  }
  
  function goToNext() {
    currentIndex = (currentIndex + 1) % houses.length
    updateCarousel()
    stopAutoPlay()
  }
  
  function goToSlide(index) {
    currentIndex = index
    updateCarousel()
    stopAutoPlay()
  }
  
  // Auto-play Functions
  function startAutoPlay() {
    if (!isAutoPlaying) {
      isAutoPlaying = true
      autoPlayInterval = setInterval(() => {
        goToNext()
      }, 5000)
    }
  }
  
  function stopAutoPlay() {
    isAutoPlaying = false
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval)
      autoPlayInterval = null
    }
  }
  
  // Smooth Scrolling for Navigation Links
  function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]')
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetSection = document.querySelector(targetId)
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    initCarousel()
    initSmoothScrolling()
  })
  
  // Handle window resize
  window.addEventListener("resize", () => {
    // Reset progress bars on resize to ensure proper animation
    setTimeout(updateCarousel, 100)
  })
  