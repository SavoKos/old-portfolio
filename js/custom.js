// Reveal effect
const sections = document.querySelectorAll('.section');
const reveal = function (entries) {
  if (!entries[0].isIntersecting) return;
  entries[0].target.classList.remove('reveal');
  entries[0].target.classList.remove('reveal');
};
const revealObserver = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.4,
});

sections.forEach(s => {
  revealObserver.observe(s);
  s.classList.add('reveal');
});

// Blur effect on card hover
const serviceCard = document.querySelectorAll('.service-card');
const services = document.querySelector('.services');
services.addEventListener('mouseover', function (e) {
  console.log(e.relatedTarget);
  const card = e.target.closest('.service-card');
  if (card) {
    serviceCard.forEach(sc => {
      sc.style.filter = 'blur(5px)';
    });
    card.style.filter = 'blur(0px)';
  } else {
    serviceCard.forEach(sc => {
      sc.style.filter = 'blur(0px)';
      sc.style.transform = 'scale(1)';
    });
  }
});

// Home link handler
const home = document.querySelector('.home');
home.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
