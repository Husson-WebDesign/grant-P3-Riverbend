// JavaScript will be developed in a later phase.
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('nav ul');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}