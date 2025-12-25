document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     HERO BANNER SLIDESHOW
  ================================ */
  const heroBanner = document.querySelector('.hero-banner');
  if (heroBanner) {
    const images = ['banner1.jpg', 'banner2.png'];
    let index = 0;

    setInterval(() => {
      index = (index + 1) % images.length;
      heroBanner.style.backgroundImage = `url(${images[index]})`;
    }, 5000);
  }

  /* ===============================
     FEATURE CARDS FADE-IN (STAGGERED)
  ================================ */
  const featureCards = document.querySelectorAll('.feature-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fade-in');
        }, i * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  featureCards.forEach(card => observer.observe(card));

  /* ===============================
     HAMBURGER MENU
  ================================ */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.site-nav .nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

});
// MOBILE DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (dropdownToggle) {
  dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdownToggle.parentElement.classList.toggle('open');
    }
  });
}
