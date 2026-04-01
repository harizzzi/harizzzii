// ===========================
// NAVBAR SCROLL
// ===========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===========================
// SCROLL REVEAL
// ===========================
function reveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top;
    el.classList.toggle('active', top < window.innerHeight - 80);
  });
}
window.addEventListener('scroll', reveal);
reveal();

// ===========================
// FILTER TABS
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const certSections = document.querySelectorAll('.cert-section');
const certCards = document.querySelectorAll('.cert-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    if (filter === 'all') {
      certSections.forEach(s => s.classList.remove('hidden'));
      certCards.forEach(c => {
        c.style.display = '';
      });
    } else {
      certSections.forEach(s => {
        const hasMatch = [...s.querySelectorAll('.cert-card')].some(
          c => c.dataset.category === filter
        );
        s.classList.toggle('hidden', !hasMatch);
      });
      certCards.forEach(c => {
        c.style.display = c.dataset.category === filter ? '' : 'none';
      });
    }

    // re-run reveal after filter
    setTimeout(reveal, 50);
  });
});

// ===========================
// MODAL
// ===========================
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementById('closeModal');

document.querySelectorAll('.clickable-img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    captionText.textContent = img.alt;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

// Also allow clicking anywhere on cert-card to open
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    if (img) img.click();
  });
});

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
