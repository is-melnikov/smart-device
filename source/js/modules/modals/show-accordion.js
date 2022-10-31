const navigationAccordion = document.querySelector('.footer-navigation');
const contactsAccordion = document.querySelector('.footer-contacts');
const navigationList = document.querySelector('.footer-navigation__list');
const contactsList = document.querySelector('.footer-contacts__list');
const navigationTitle = document.querySelector('.footer-navigation__title');
const contactsTitle = document.querySelector('.footer-contacts__title');

const showAccordion = () => {
  navigationAccordion.classList.remove('footer-navigation--nojs');
  contactsAccordion.classList.remove('footer-contacts--nojs');
  navigationList.classList.add('footer-navigation__list--hidden');
  contactsList.classList.add('footer-contacts__list--hidden');

  const onNavigationClick = () => {
    if (navigationList.classList.contains('footer-navigation__list--hidden')) {
      navigationList.classList.remove('footer-navigation__list--hidden');
      navigationAccordion.classList.add('footer-navigation--open');
      contactsAccordion.classList.remove('footer-contacts--open');
      contactsList.classList.add('footer-contacts__list--hidden');
    } else {
      navigationList.classList.add('footer-navigation__list--hidden');
      navigationAccordion.classList.remove('footer-navigation--open');
    }
  };

  const onContactsClick = () => {
    if (contactsList.classList.contains('footer-contacts__list--hidden')) {
      contactsList.classList.remove('footer-contacts__list--hidden');
      contactsAccordion.classList.add('footer-contacts--open');
      navigationAccordion.classList.remove('footer-navigation--open');
      navigationList.classList.add('footer-navigation__list--hidden');
    } else {
      contactsList.classList.add('footer-contacts__list--hidden');
      contactsAccordion.classList.remove('footer-contacts--open');
    }
  };

  navigationTitle.addEventListener('click', onNavigationClick);
  navigationTitle.addEventListener('keydown', onNavigationClick);
  contactsTitle.addEventListener('click', onContactsClick);
  contactsTitle.addEventListener('keydown', onContactsClick);
};

export {showAccordion};
