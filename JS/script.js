document.addEventListener("DOMContentLoaded", () => {
  // ===== HERO SLIDER =====
  const heroSlides = document.querySelectorAll(".hero-slide");
  let heroIndex = 0;

  function showHeroSlides() {
    heroSlides.forEach((slide) => slide.classList.remove("active"));
    heroSlides[heroIndex].classList.add("active");
    heroIndex = (heroIndex + 1) % heroSlides.length;
    setTimeout(showHeroSlides, 5000);
  }

  showHeroSlides();
});
// ===== MENU LATERAL (RESPONSIVO) =====
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  // Troca o ícone ☰ ↔ ✖
  if (menuToggle.textContent === "☰") {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle.textContent = "☰";
  });
});

// ===== SLIDER DO CALENDÁRIO PREVENTIVO =====
document.querySelectorAll(".calendar-card").forEach((card) => {
  const sliderInner = card.querySelector(".slider-inner");

  // Dados das imagens do calendário
  const slidesData = [
    {
      img: "IMG/janbranco.jpg",
      webp: "IMG/janbranco.webp",
      title: "Janeiro Branco",
      text: "Conscientização sobre saúde mental e emocional dos pets.",
      borderStyle: "#ffffffff",
      solid: true,
    },
    {
      img: "IMG/fevroxo.jpg",
      webp: "IMG/fevroxo.webp",
      title: "Fevereiro Roxo",
      text: "Saúde e Bem-Estar do Idoso: cuidados especiais para pets idosos.",
      border: "#8E66E1ff",
    },
    {
      img: "IMG/maramarelo.jpg",
      webp: "IMG/maramarelo.webp",
      title: "Março Amarelo",
      text: "Prevenção de doenças renais em pets.",
      border: "#FEDE00ff",
    },
    {
      img: "IMG/abrilaranja.jpg",
      webp: "IMG/abrilaranja.webp",
      title: "Abril Laranja",
      text: "Prevenção da saúde bucal dos pets.",
      border: "#f6af2bff",
    },
    {
      img: "IMG/maiovioleta.jpg",
      webp: "IMG/maiovioleta.webp",
      title: "Maio Violeta",
      text: "Prevenção das doenças oculares em pets.",
      border: "#9E579Fff",
    },
    {
      img: "IMG/junmarron.jpg",
      webp: "IMG/junmarron.webp",
      title: "Junho Marron",
      text: "Prevenção das doenças da gripe.",
      border: "#93705eff",
    },
    {
      img: "IMG/julhdourado.jpg",
      webp: "IMG/julhdourado.webp",
      title: "Julho Dourado",
      text: "Conscientização da vacinação e prevenção em pets.",
      border: "#d8bb47ff",
    },
    {
      img: "IMG/agoverde.jpg",
      webp: "IMG/agoverde.webp",
      title: "Agosto Verde",
      text: "Prevenção da Raiva.",
      border: "#518f53ff",
    },
    {
      img: "IMG/setvermelho.jpg",
      webp: "IMG/setvermelho.webp",
      title: "Setembro Vermelho",
      text: "Prevenção de doenças cardíacas em pets.",
      border: "#C70A25ff",
    },
    {
      img: "IMG/outrosa.jpg",
      webp: "IMG/outrosa.webp",
      title: "Outubro Rosa",
      text: "Prevenção do câncer de mama em pets.",
      border: "#F771ACff",
    },
    {
      img: "IMG/novazul.jpg",
      webp: "IMG/novazul.webp",
      title: "Novembro Azul",
      text: "Prevenção do câncer de próstata e testículo em pets.",
      border: "#0093CCff",
    },
    {
      img: "IMG/dezlilas.jpg",
      webp: "IMG/dezlilas.webp",
      title: "Dezembro Lilás",
      text: "Prevenção da obesidade em pets.",
      border: "#B077F6ff",
    },
  ];

  // Monta os slides dentro do calendário
  slidesData.forEach((slide, index) => {
    const slideEl = document.createElement("div");
    slideEl.classList.add("calendar-slide");
    if (index === 0) slideEl.classList.add("active");

    slideEl.innerHTML = `
      <picture>
        <source srcset="${slide.webp}" type="image/webp">
        <img src="${slide.img}" alt="${slide.title}">
      </picture>
      <div class="overlay-content">
        <h3>${slide.title}</h3>
      </div>
      <p class="slide-text">${slide.text}</p>
    `;

    sliderInner.appendChild(slideEl);
  });

  const slides = card.querySelectorAll(".calendar-slide");
  const prevBtn = card.querySelector(".slider-prev");
  const nextBtn = card.querySelector(".slider-next");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove("active"));
    slides[index].classList.add("active");

    // aplica a cor da borda do slide atual no card
    card.style.border = `4px solid ${slidesData[index].border}`;

    currentIndex = index;
  }

  prevBtn.addEventListener("click", () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  });

  nextBtn.addEventListener("click", () => {
    showSlide((currentIndex + 1) % slides.length);
  });

  setInterval(() => {
    showSlide((currentIndex + 1) % slides.length);
  }, 4000);

  // inicializa com a borda do primeiro
  showSlide(0);
});

// ===== ANIMAÇÃO EM CASCATA PARA CARDS =====
function animateCards(selector) {
  const cards = document.querySelectorAll(selector);
  const triggerBottom = window.innerHeight * 0.9;

  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom && !card.classList.contains("show")) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200); // atraso em cascata
    }
  });
}

function animateValues() {
  const boxes = document.querySelectorAll(".value-box");
  const triggerBottom = window.innerHeight * 0.85;

  boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom && !box.classList.contains("show")) {
      setTimeout(() => {
        box.classList.add("show");
      }, index * 200); // entra um de cada vez
    }
  });
}

function handleScrollAnimations() {
  animateCards(".service-item");
  animateCards(".gallery-item");
  animateCards(".team-item");
  animateValues(".value-box");
  animateCards(".testimonial-item");
  animateCards(".calendar-card");
  animateCards(".vaccine-item");
  animateCards(".about-image img");
}

window.addEventListener("scroll", handleScrollAnimations);
handleScrollAnimations();

document.addEventListener("DOMContentLoaded", () => {
  const firstCards = document.querySelectorAll(".service-item, .calendar-card");

  firstCards.forEach((card, index) => {
    if (index < 0) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 400); // efeito cascata
    }
  });

  // Também faz o hero-title e botão entrarem com fade
  const heroContent = document.querySelector(".home-content");
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add("show");
    }, 300); // pequeno delay antes de ativar
  }
});

// formulario
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os dados do formulário
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Verifica se todos os campos estão preenchidos
    if (name && email && message) {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      document.getElementById("contact-form").reset(); // Limpa o formulário
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ====== EFEITO DE APARECER NO SCROLL (FADE IN OVERLAY) ======
function toggleOverlaysOnScroll() {
  const overlays = document.querySelectorAll(
    ".gallery-overlay, .testimonial-overlay, .team-overlay"
  );

  const triggerBottom = window.innerHeight * 0.98;

  overlays.forEach((overlay) => {
    const overlayTop = overlay.getBoundingClientRect().top;
    const overlayBottom = overlay.getBoundingClientRect().bottom;

    if (overlayTop < triggerBottom && overlayBottom > 0) {
      overlay.classList.add("show");
    }
    else {
      overlay.classList.remove("show");
    }
  });
}

// ===== AVISO DE COOKIES =====
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const privacyModal = document.getElementById("privacy-modal");
  const openPrivacy = document.getElementById("open-privacy");
  const closePrivacy = document.getElementById("close-privacy");
  const closeModalBtn = document.getElementById("close-modal-btn");

  // Mostrar banner se não aceitou ainda
  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => banner.classList.add("show"), 1000);
  }

  // Aceitar cookies
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.remove("show");
  });

  // Abrir modal
  openPrivacy.addEventListener("click", (e) => {
    e.preventDefault();
    privacyModal.classList.add("show");
  });

  // Fechar modal
  [closePrivacy, closeModalBtn, privacyModal].forEach((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === el || e.target.id === "close-privacy" || e.target.id === "close-modal-btn") {
        privacyModal.classList.remove("show");
      }
    });
  });
});
