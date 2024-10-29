let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-image');
  const totalSlides = slides.length;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-bar li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-bar li a[href="#${id}"]`);

      if (entry.isIntersecting) {

        navLinks.forEach((link) => link.classList.remove("active"));
        navLink.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);


sections.forEach((section) => observer.observe(section));


navLinks.forEach((nav) =>
  nav.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  })
);


const navbar = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('back');
  } else {
    navbar.classList.remove('back');
  }
});
