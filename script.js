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

const speakersContainer = document.querySelector('.speakers-container');
function generateSpeaker({
  image, alt, title, type, description,
}) {
  return `
  <div class="speaker-container">
    <img src="${image}" alt="${alt}">
    <div class="wrapper">
        <h3>${title}</h3>
        <h6>${type}</h6>
        <hr class='line-2'
        <p>${description}</p>
    </div>
  </div>
  `;
}

const speakers = [
  {
    image: 'img/speaker_01.png',
    alt: 'picture of Mustanski Brian',
    title: 'Mustanski Brian',
    type: 'Professor of Robotics at Massachutes Tech',
    description: 'Mustanski studies Robotics production, and published his seminal book in 2016',
  },
  {
    image: 'img/speaker_02.png',
    alt: 'picture of Mustanski Brian',
    title: 'Mustanski Brian',
    type: 'Professor of Robotics at Massachutes Tech',
    description: 'Mustanski studies Robotics production, and published his seminal book in 2016',
  },
  {
    image: 'img/speaker_03.png',
    alt: 'picture of Mustanski Brian',
    title: 'Mustanski Brian',
    type: 'Professor of Robotics at Massachutes Tech',
    description: 'Mustanski studies Robotics production, and published his seminal book in 2016',
  },
  {
    image: 'img/speaker_04.png',
    alt: 'picture of Mustanski Brian',
    title: 'Mustanski Brian',
    type: 'Professor of Robotics at Massachutes Tech',
    description: 'Mustanski studies Robotics production, and published his seminal book in 2016',
  },
  {
    image: 'img/speaker_05.png',
    alt: 'picture of Mustanski Brian',
    title: 'Mustanski Brian',
    type: 'Professor of Robotics at Massachutes Tech',
    description: 'Mustanski studies Robotics production, and published his seminal book in 2016',
  },
  {
    image: 'img/speaker_06.png',
    alt: 'picture of Mustanski Brian',
    title: 'Mustanski Brian',
    type: 'Professor of Robotics at Massachutes Tech',
    description: 'Mustanski studies Robotics production, and published his seminal book in 2016',
  },
];

const more = document.getElementById('more');
const less = document.getElementById('less');
more.addEventListener('click', () => {
  const htmlProducts = speakers.map((product) => generateSpeaker(product)).join('');
  speakersContainer.innerHTML = htmlProducts;
  more.style.display = 'none';
  less.style.display = 'flex';
});

less.addEventListener('click', () => {
  const htmlProducts = speakers.slice(0, 2).map((product) => generateSpeaker(product)).join('');
  speakersContainer.innerHTML = htmlProducts;
  more.style.display = 'flex';
  less.style.display = 'none';
});

const htmlProducts = speakers.slice(0, 2).map((product) => generateSpeaker(product)).join('');
speakersContainer.innerHTML = htmlProducts;

if (window.screen.width >= 768) {
  const htmlProducts = speakers.map((product) => generateSpeaker(product)).join('');
  speakersContainer.innerHTML = htmlProducts;
}
