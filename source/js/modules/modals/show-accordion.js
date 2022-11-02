const NAVIGATION_ACCORDION = document.querySelector('.footer-navigation');
const CONTACTS_ACCORDION = document.querySelector('.footer-contacts');
const NAVIGATION_LIST = document.querySelector('.footer-navigation__list');
const CONTACTS_LIST = document.querySelector('.footer-contacts__list');
const NAVIGATION_TITLE = document.querySelector('.footer-navigation__title');
const CONTACTS_TITLE = document.querySelector('.footer-contacts__title');

const showAccordion = () => {
  NAVIGATION_ACCORDION.classList.remove('footer-navigation--nojs');
  CONTACTS_ACCORDION.classList.remove('footer-contacts--nojs');
  NAVIGATION_LIST.classList.add('footer-navigation__list--hidden');
  CONTACTS_LIST.classList.add('footer-contacts__list--hidden');

  const onNavigationClick = () => {
    if (NAVIGATION_LIST.classList.contains('footer-navigation__list--hidden')) {
      NAVIGATION_LIST.classList.remove('footer-navigation__list--hidden');
      NAVIGATION_ACCORDION.classList.add('footer-navigation--open');
      CONTACTS_ACCORDION.classList.remove('footer-contacts--open');
      CONTACTS_LIST.classList.add('footer-contacts__list--hidden');
    } else {
      NAVIGATION_LIST.classList.add('footer-navigation__list--hidden');
      NAVIGATION_ACCORDION.classList.remove('footer-navigation--open');
    }
  };

  const onContactsClick = () => {
    if (CONTACTS_LIST.classList.contains('footer-contacts__list--hidden')) {
      CONTACTS_LIST.classList.remove('footer-contacts__list--hidden');
      CONTACTS_ACCORDION.classList.add('footer-contacts--open');
      NAVIGATION_ACCORDION.classList.remove('footer-navigation--open');
      NAVIGATION_LIST.classList.add('footer-navigation__list--hidden');
    } else {
      CONTACTS_LIST.classList.add('footer-contacts__list--hidden');
      CONTACTS_ACCORDION.classList.remove('footer-contacts--open');
    }
  };

  NAVIGATION_TITLE.addEventListener('click', onNavigationClick);
  NAVIGATION_TITLE.addEventListener('keydown', onNavigationClick);
  CONTACTS_TITLE.addEventListener('click', onContactsClick);
  CONTACTS_TITLE.addEventListener('keydown', onContactsClick);
};

export {showAccordion};
