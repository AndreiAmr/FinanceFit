import React from 'react';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { Text } from '../Text';
import { PigIcon } from '@/src/assets/icons/pig';

type AppNameProps = {
  light?: boolean;
};

export const AppName = ({ light }: AppNameProps) => {
  const theme = useTheme();
  return (
    <S.Container>
      <PigIcon />
      <Text
        fontFamily="bold"
        size="lg"
        color={light ? theme.colors.singletons.white : theme.colors.gray[700]}>
        FinanceFit
      </Text>
    </S.Container>
  );
};
