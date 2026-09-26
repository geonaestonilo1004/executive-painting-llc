const toggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

toggle?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('.quote-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks! Connect this form to your preferred CRM, Formspree, Netlify Forms, or WordPress endpoint before going live.');
});
