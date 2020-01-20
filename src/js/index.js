const navLinks = document.querySelectorAll('.navigation__link');
const nav = document.getElementById('navi');

Array.from(navLinks).forEach(link =>
  link.addEventListener('click', () => {
    nav.checked = false;
    link[id].scrollIntoView();
  })
);