import { ModalProps } from '@/src/atomic/atoms/Modal';
import { loginActions } from '@/src/store/authenticationModule/modules/login/loginActions';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useFormik } from 'formik';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components/native';
import * as yup from 'yup';
import { loginModalMessages, loginTexts } from './texts/login.texts';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(loginTexts.invalidEmail)
    .required(loginTexts.emailRequired),
  password: yup.string().required(loginTexts.passwordRequired),
});

export const useLogin = () => {
  const theme = useTheme();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const dispatch = useDispatch();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: ({ email, password }) => {
      dispatch(
        loginActions.getLoginAsync({
          email,
          password,
        }),
      );
    },
    validateOnChange: false,
  });
  const [modalContent, setModalContent] = useState<ModalProps>();

  const handleOpenModal = useCallback(() => {
    bottomSheetRef.current?.present();
  }, [bottomSheetRef]);

  const handleCloseModal = useCallback(() => {
    bottomSheetRef.current?.close();
  }, [bottomSheetRef]);

  useEffect(() => {
    if (errors.email) {
      console.log('ola2');
      setModalContent({
        ...loginModalMessages,
        title: errors.email,
      });
      handleOpenModal();
      return;
    }

    if (errors.password) {
      setModalContent({
        ...loginModalMessages,
        title: errors.password,
      });
      handleOpenModal();
      return;
    }
  }, [errors, handleOpenModal]);

  return {
    theme,
    values,
    errors,
    modalContent,
    bottomSheetRef,
    handleChange,
    handleSubmit,
    handleCloseModal,
  };
};
