import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import { Text, TextProps } from '../Text';
import { radius as radiusTheme } from '../../../theme/radius';
import { spacing } from '../../../theme/spacing';

type Props = TouchableOpacityProps & {
  label: string;
  labelProps: TextProps;
  radius?: keyof typeof radiusTheme;
  marginTop?: keyof typeof spacing.vertical;
  color?: string;
  alignment: S.EAlignment;
  leftAddon?: JSX.Element;
};

export const Button = ({
  label,
  radius,
  labelProps,
  marginTop,
  leftAddon,
  ...rest
}: Props) => {
  return (
    <S.Container radius={radius} marginTop={marginTop} {...rest}>
      {leftAddon}
      <Text {...labelProps}>{label}</Text>
    </S.Container>
  );
};
