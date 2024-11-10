import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as S from './styles';
import { AppName } from '@/src/atomic/atoms/AppName';
import { useTheme } from 'styled-components/native';

export const LoadingScreen = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.SafeArea>
        <S.Header>
          <AppName />
        </S.Header>

        <S.SpinnerContent>
          <ActivityIndicator color={theme.colors.blue[600]} size="large" />
        </S.SpinnerContent>
      </S.SafeArea>
    </S.Container>
  );
};
