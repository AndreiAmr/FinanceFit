import { useFormik } from 'formik';
import * as yup from 'yup';
import { signupTexts } from './texts/signup.texts';
import { useDispatch } from 'react-redux';
import { signupActions } from '@/src/store/authenticationModule/modules/signup/signupActions';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, signupTexts.nameMinCharacters)
    .required(signupTexts.requiredField),
  email: yup
    .string()
    .email(signupTexts.invalidEmail)
    .required(signupTexts.requiredField),
  password: yup
    .string()
    .min(8, signupTexts.minCharacters)
    .required(signupTexts.requiredField),
  confirmPassword: yup
    .string()
    .min(8, signupTexts.minCharacters)
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    .required(signupTexts.requiredField),
});

export const useSignup = () => {
  const dispatch = useDispatch();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(signupActions.getSignupAsync(values));
    },
    validationSchema,
    validateOnChange: false,
  });

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
