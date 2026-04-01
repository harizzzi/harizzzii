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
