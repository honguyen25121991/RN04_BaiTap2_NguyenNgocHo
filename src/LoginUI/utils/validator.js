export const checkRequired = value => {
  if (value.trim()) {
    return '';
  }
  return 'Không được bỏ trống';
};

export const emailValidation = email => {
  const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (REGEX_EMAIL.test(email)) {
    return '';
  }
  return 'Email không hợp lệ';
};

export const letterValidation = ({value, input}) => {
  const REGEX_LETTER = /^[A-Za-z]+$/;
  if (REGEX_LETTER.test(value)) {
    return '';
  }
  return `${input} chỉ có phép kí tự chữ cái`;
};
export const numberValidation = ({value, input}) => {
  const REGEX_NUMBER = /^[0-9]+$/;
  if (REGEX_NUMBER.test(value)) {
    return '';
  }
  return `${input} chỉ có phép kí tự số`;
};

export const rangeValidation = ({value, input, min, max}) => {
  const valueCount = value.trim().length;
  if (valueCount >= min && valueCount <= max) {
    return '';
  }
  return `${input} yêu cầu tối thiểu ${min} kí tự và tối đa ${max} kí tự`;
};
