const ABOUT_BUTTON = document.querySelector('.about__button');
const ABOUT_DESCRIPTION = document.querySelector('.about__description');

const showMore = () => {
  ABOUT_BUTTON.classList.remove('about__button--nojs');

  ABOUT_DESCRIPTION.classList.remove('about__description--nojs');
  ABOUT_DESCRIPTION.classList.add('about__description--hidden');

  ABOUT_BUTTON.addEventListener('click', function () {
    if (ABOUT_DESCRIPTION.classList.contains('about__description--hidden')) {
      ABOUT_DESCRIPTION.classList.remove('about__description--hidden');
      ABOUT_BUTTON.textContent = 'Свернуть';
    } else {
      ABOUT_DESCRIPTION.classList.add('about__description--hidden');
      ABOUT_BUTTON.textContent = 'Подробнее';
    }
  });
};

export {showMore};
