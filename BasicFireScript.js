// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Scroll reveal
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.toggle('active', el.getBoundingClientRect().top < window.innerHeight - 80);
  });
}
window.addEventListener('scroll', reveal);
reveal();

// Active step dot highlight on scroll
const stepDots = document.querySelectorAll('.step-dot');
const stepCards = document.querySelectorAll('.step-card');

window.addEventListener('scroll', () => {
  let current = 0;
  stepCards.forEach((card, i) => {
    if (card.getBoundingClientRect().top < window.innerHeight * 0.5) current = i;
  });
  stepDots.forEach((dot, i) => {
    dot.classList.toggle('active-dot', i === current);
  });
});

// Modal
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('closeModal');

document.querySelectorAll('.step-img').forEach(wrap => {
  wrap.addEventListener('click', () => {
    const img = wrap.querySelector('img');
    modalImg.src = img.src;
    captionText.textContent = img.alt;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Back to top
const backBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
