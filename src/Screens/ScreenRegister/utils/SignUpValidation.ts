import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email:yup.string().email().required(),
  password:  yup.string().required().min(6),
});