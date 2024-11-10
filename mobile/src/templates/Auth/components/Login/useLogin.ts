import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginTexts } from './texts/loginValidations.texts';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../../../store/authenticationModule/modules/login/loginActions';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(loginTexts.emailInvalid)
    .required(loginTexts.emailRequired),
  password: yup.string().required(loginTexts.passwordRequired),
});

export const useLogin = () => {
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (val) => {
      dispatch(loginActions.getLoginAsync(val));
    },
    validateOnChange: true,
  });

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};
