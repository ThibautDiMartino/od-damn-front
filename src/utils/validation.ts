const passwordErrors = (password: string): string => {
  const oneNumber = !/[0-9]{1,}/g.test(password) && "one number, ";
  const oneUpperCase = !/[A-Z]{1,}/g.test(password) && "one uppercase letter, ";
  const oneLowerCase = !/[a-z]{1,}/g.test(password) && "one lowercase letter, ";
  const oneSpecial =
    !/[@#§!-/%*]{1,}/g.test(password) && "one special character (@#§!-/%*), ";
  const atLeast8Char = !(password.length >= 8) && "8 charaters, ";
  return `${oneNumber}${oneUpperCase}${oneLowerCase}${oneSpecial}${atLeast8Char}`;
};

export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#&!-*$%ù£+~|=]).{8,12}$/;
export const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z0-9]+[.-]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}$/;
const authValidator = { passwordErrors };
export default authValidator;
