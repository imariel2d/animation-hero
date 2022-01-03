const modal = document.querySelector('#modal');
const buttonHeroOne = document.querySelector('#button-hero-one');
const buttonHeroTwo = document.querySelector('#button-hero-two');
const buttonHeroThree = document.querySelector('#button-hero-three');
const close = document.querySelector('.modal__content--close');

const openModal = () => {
  modal.classList.remove('hidden');
  modal.classList.add('visible');
};

const closeModal = () => {
  modal.classList.remove('visible');
  modal.classList.add('hidden');
};

buttonHeroOne.addEventListener('click', () => {
  openModal();
});

buttonHeroTwo.addEventListener('click', () => {
  openModal();
});

buttonHeroThree.addEventListener('click', () => {
  openModal();
});

close.addEventListener('click', () => {
  closeModal();
});
