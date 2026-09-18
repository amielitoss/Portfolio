import { translations, setLanguage } from "./translations.js";

const roles = [
  "Web Developer",
  "Frontend Developer",
  "Aspiring Fullstack Developer",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];
  const typingElement = document.getElementById("typing-text");

  if (!isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, 100);
}

typeEffect();

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });
  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

setupRevealAnimations();

function hamburgerMenu() {
  const hamburger = document.getElementById("hamburger");
  const links = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    links.classList.toggle("open");
  });

  links.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      hamburger.classList.remove("open");
      links.classList.remove("open");
    }
  });
}

hamburgerMenu();


function showMoreProj() {
  const extraProj = document.querySelector(".extra-projects");
  const showBtn = document.querySelector(".show-more-btn");

  showBtn.addEventListener("click", () => {
    extraProj.classList.toggle("hidden");
    const currentLang = localStorage.getItem("preferredLanguage") || "en";

    if (extraProj.classList.contains("hidden")) {
      showBtn.textContent = translations[currentLang].showMoreBtn;
    } else {
      showBtn.textContent = translations[currentLang].showLessBtn;
    }
  });
}

showMoreProj();

async function handleContactForm(event) {
  event.preventDefault();
  try {
    const formData = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const currentLang = localStorage.getItem("preferredLanguage") || "en";
    const statusMessage = document.getElementById("form-status");

    if (response.ok) {
      statusMessage.textContent = translations[currentLang].formSuccess;
      statusMessage.classList.add('success');
      event.target.reset();
    } else {
      statusMessage.textContent = translations[currentLang].formError;
      statusMessage.classList.add('error');
    }
  } catch (error) {
    console.error("Unexpected error. Please try again later.", error);
  }
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", handleContactForm);
}

setupContactForm();

function languageSelect() {
    const selectLang = document.getElementById('lang-select');
    selectLang.value = localStorage.getItem("preferredLanguage") || "en";
    selectLang.addEventListener('change', () => {
        setLanguage(selectLang.value);
});
};

languageSelect();