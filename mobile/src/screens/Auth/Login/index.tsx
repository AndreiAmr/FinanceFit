import React from 'react';

import * as S from './styles';
import { Input } from '../../../atomic/atoms/Input';
import { Text } from '../../../atomic/atoms/Text';
import { loginTexts } from './texts/login.texts';
import { useLogin } from './useLogin';
import { EmailIcon } from '../../../assets/icons/email';
import { ChainIcon } from '../../../assets/icons/chain';
import { Button } from '../../../atomic/atoms/Button';
import { EAlignment } from '../../../atomic/atoms/Button/styles';

import { WritingIcon } from '@/src/assets/icons/writing';
import 'react-native-gesture-handler';
import { Modal } from '@/src/atomic/atoms/Modal';
import { CTAModel } from '@/src/models/CTA';
import { AppName } from '@/src/atomic/atoms/AppName';
import { InformationIcon } from '@/src/assets/icons/Information';

export const Login = () => {
  const {
    theme,
    values,
    errors,
    modalContent,
    handleChange,
    handleSubmit,
    bottomSheetRef,
    handleCloseModal,
  } = useLogin();

  return (
    <S.Container>
      <AppName />
      <S.ContentContainer>
        <S.ContentWrapper>
          <Text fontFamily="medium" size="md" color={theme.colors.blue[500]}>
            {loginTexts.title}
          </Text>
          <Text size="xs" color={theme.colors.gray[700]}>
            {loginTexts.subtitle}
          </Text>
          <S.TitleSpacing />
          <Input
            placeholder={loginTexts.emailPlaceholder}
            leftAddon={<EmailIcon error={!!errors.email} />}
            value={values.email}
            onChangeText={handleChange('email')}
            autoCapitalize="none"
            isError={!!errors.email}
          />
          <Input
            placeholder={loginTexts.passwordPlaceholder}
            leftAddon={<ChainIcon error={!!errors.password} />}
            marginTop="xs"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
            isError={!!errors.password}
            autoCapitalize="none"
          />
          <Button
            color={theme.colors.purple[600]}
            marginTop="lg"
            radius="md"
            label="Acessar o app"
            labelProps={{
              fontFamily: 'regular',
              color: theme.colors.singletons.white,
              size: 'sm',
            }}
            alignment={EAlignment.CENTER}
            onPress={() => handleSubmit()}
          />
          <Button
            alignment={EAlignment.LEFT}
            label="Crie sua conta agora!"
            marginTop="xs"
            leftAddon={<WritingIcon />}
            labelProps={{
              fontFamily: 'regular',
              size: 'sm',
              color: theme.colors.gray[600],
            }}
          />
        </S.ContentWrapper>

        <S.ForgotPasswordWrapper>
          <Button
            alignment={EAlignment.LEFT}
            label="Esqueceu sua senha ?"
            leftAddon={<InformationIcon />}
            labelProps={{
              fontFamily: 'regular',
              size: 'sm',
              color: theme.colors.blue[500],
            }}
          />
        </S.ForgotPasswordWrapper>
      </S.ContentContainer>
      <Modal
        ref={bottomSheetRef}
        {...modalContent}
        primaryButton={new CTAModel('Entendi', handleCloseModal)}
      />
    </S.Container>
  );
};
