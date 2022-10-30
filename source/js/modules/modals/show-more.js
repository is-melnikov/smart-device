const aboutButton = document.querySelector('.about__button');
const aboutDescriptions = document.querySelectorAll('.about__description');

const showMore = () => {
  aboutButton.classList.remove('about__button--nojs');

  aboutDescriptions.forEach((aboutDescription) => {
    aboutDescription.classList.remove('about__description--nojs');
    aboutDescription.classList.add('about__description--hidden');
  });

  aboutButton.addEventListener('click', function () {
    aboutDescriptions.forEach((aboutDescription) => {
      if (aboutDescription.classList.contains('about__description--hidden')) {
        aboutDescription.classList.remove('about__description--hidden');
        aboutButton.textContent = 'Свернуть';
      } else {
        aboutDescription.classList.add('about__description--hidden');
        aboutButton.textContent = 'Подробнее';
      }
    });
  });
};

export {showMore};
