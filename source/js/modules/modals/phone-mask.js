const INPUTS = document.querySelectorAll('input[data-js="phone-number"]');

const getPrefixNumber = (str) => {
  if (str === '7') {
    return '+7 (';
  }

  if (str === '9') {
    return '7 (9';
  }

  return '7 (';
};

const createMask = () => {
  INPUTS.forEach((input) => input.addEventListener('input', () => {
    const value = input.value.replace(/\D+/g, '');
    const numberLength = 11;

    let result;
    if (input.value.includes('+7') || input.value[0] === '7') {
      result = '';
    } else {
      result = '+';
    }

    for (let i = 0; i < value.length && i < numberLength; i++) {
      switch (i) {
        case 0:
          result += getPrefixNumber(value[i]);
          continue;
        case 4:
          result += ') ';
          break;
        case 7:
          result += '-';
          break;
        case 9:
          result += '-';
          break;
        default:
          break;
      }
      result += value[i];
    }
    input.value = result;
  }));
};

export {createMask};
