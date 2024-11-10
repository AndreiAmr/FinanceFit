import { Input } from '@/src/atomic/atoms/Input';
import { Box, VStack } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { useSignup } from './useSignup';
import { LinearGradientButton } from '@/src/atomic/atoms/LinearGradientButton';

export const Signup = () => {
  const { values, errors, handleChange, handleSubmit } = useSignup();

  return (
    <VStack marginTop={`${RFValue(27)}px`}>
      <Input
        label="Nome e sobrenome"
        placeholder="Digite aqui"
        value={values.name}
        handleChange={handleChange('name')}
        error={errors.name}
      />
      <Box h="7px" />

      <Input
        label="Email"
        placeholder="email@example.com"
        value={values.email}
        handleChange={handleChange('email')}
        error={errors.email}
      />

      <Box h="7px" />

      <Input
        label="Senha"
        placeholder="********"
        value={values.password}
        handleChange={handleChange('password')}
        error={errors.password}
        hideContent
      />
      <Box h="7px" />

      <Input
        label="Confirmar senha"
        placeholder="********"
        value={values.confirmPassword}
        handleChange={handleChange('confirmPassword')}
        error={errors.confirmPassword}
        hideContent
      />
      <Box h="15px" />

      <LinearGradientButton label="Cadastrar" onPress={handleSubmit} />
    </VStack>
  );
};
