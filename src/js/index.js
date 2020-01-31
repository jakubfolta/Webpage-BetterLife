const navLinks = document.querySelectorAll('.navigation__link');
const nav = document.getElementById('navi');
const courses = document.getElementById('courses-heading');

const popup = document.querySelector('.popup');

Array.from(navLinks).forEach(link =>
  link.addEventListener('click', () => {
    nav.checked = false;
  })
);

popup.addEventListener('click', (e) => closePopup(e))

const closePopup = (e) => {
  if (e.target.closest('.popup__content'))
    return;

  window.location.href = `#${courses}`;
}