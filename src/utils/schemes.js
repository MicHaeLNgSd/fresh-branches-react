import * as yup from 'yup';

const curDate = new Date();
const curYear = curDate.getFullYear();
const curMonth = curDate.getMonth();
const adultYear = curYear - 18;

export const REG_VALIDATION_SCHEMA = yup.object({
  login: yup.string().min(2).max(64).required(),
  name: yup.string().min(2).max(64).required(),
  surname: yup.string().min(2).max(64),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(16)
    .matches(/(?=.*[A-Z].*)/, 'Password must contains A-Z')
    .matches(/(?=.*[a-z].*)/, 'Password must contains a-z')
    .matches(/(?=.*\d.*)/, 'Password must contains digit')
    .required(),
  confirmPass: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
  dateOfBirth: yup
    .date()
    .min(new Date(1900, 0, 1))
    .max(new Date(adultYear, curMonth), 'You must be adult')
    .required(),
});
