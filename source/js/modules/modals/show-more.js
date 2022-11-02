const ABOUT_BUTTON = document.querySelector('.about__button');
const ABOUT_DESCRIPTIONS = document.querySelectorAll('.about__description');

const showMore = () => {
  ABOUT_BUTTON.classList.remove('about__button--nojs');

  ABOUT_DESCRIPTIONS.forEach((aboutDescription) => {
    aboutDescription.classList.remove('about__description--nojs');
    aboutDescription.classList.add('about__description--hidden');
  });

  ABOUT_BUTTON.addEventListener('click', function () {
    ABOUT_DESCRIPTIONS.forEach((aboutDescription) => {
      if (aboutDescription.classList.contains('about__description--hidden')) {
        aboutDescription.classList.remove('about__description--hidden');
        ABOUT_BUTTON.textContent = 'Свернуть';
      } else {
        aboutDescription.classList.add('about__description--hidden');
        ABOUT_BUTTON.textContent = 'Подробнее';
      }
    });
  });
};

export {showMore};
