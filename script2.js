const burgerButton = document.querySelector('.hamburger-icon');
const responsiveMenu = document.querySelector('.responsive');
const closeIcon = document.querySelector('.close-icon');
const links = document.querySelectorAll('.main-nav-link2');
const body = document.querySelector('body');

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
  });
}

burgerButton.addEventListener('click', () => {
  responsiveMenu.style.display = 'flex';
  body.classList.add('fixed');
});

closeIcon.addEventListener('click', () => {
  responsiveMenu.style.display = 'none';
  body.classList.remove('fixed');
});
