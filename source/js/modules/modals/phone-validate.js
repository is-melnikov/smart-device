const FORMS = document.querySelectorAll('form');
const INPUT_PHONE = document.querySelector('input[data-js="phone-number"]');
const SPAN_ERROR = document.querySelector('span[data-js="show-error"]');
const NUMBER_PHONE_LENGTH = 18;

const phoneValidate = () => {
  const validatePhoneLength = (inputPhone) => inputPhone.value.length >= NUMBER_PHONE_LENGTH;

  const showError = (elem) => {
    elem.classList.add('error');

    setTimeout(() => {
      elem.classList.remove('error');
    }, 2000);
  };

  FORMS.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      if (validatePhoneLength(INPUT_PHONE)) {
        return;
      }

      evt.preventDefault();

      showError(SPAN_ERROR);
    });
  });
};

export {phoneValidate};
