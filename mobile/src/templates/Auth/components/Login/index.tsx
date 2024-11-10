import { Box } from 'native-base';
import React from 'react';
import { Input } from '@atoms/Input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useLogin } from './useLogin';
import { EnvelopeIcon } from '@assets/icons/envelope';
import { SecurityIcon } from '@assets/icons/security';
import { LinearGradientButton } from '@/src/atomic/atoms/LinearGradientButton';
import { loginTexts } from './texts/loginValidations.texts';

export const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useLogin();

  return (
    <Box marginTop={`${RFValue(10)}px`}>
      <Input
        label={loginTexts.inputs.emailLabel}
        value={values.email}
        handleChange={handleChange('email')}
        placeholder={loginTexts.inputs.emailPlaceholder}
        icon={<EnvelopeIcon />}
        error={errors.email}
      />
      <Box h="10px" />
      <Input
        label={loginTexts.inputs.passwordLabel}
        value={values.password}
        handleChange={handleChange('password')}
        placeholder={loginTexts.inputs.passwordPlaceholder}
        hideContent
        icon={<SecurityIcon />}
        error={errors.password}
      />
      <Box h="15px" />

      <LinearGradientButton label="Acessar o app" onPress={handleSubmit} />
    </Box>
  );
};
