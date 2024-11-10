import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';
import { spacing } from '../../../theme/spacing';

type Props = TextInputProps & {
  marginTop?: keyof typeof spacing.vertical;
  leftAddon?: JSX.Element;
  isError?: boolean;
};

export const Input = ({ marginTop, leftAddon, isError, ...rest }: Props) => {
  return (
    <S.Container isError={isError} marginTop={marginTop}>
      {leftAddon}
      <S.Input {...rest} />
    </S.Container>
  );
};
