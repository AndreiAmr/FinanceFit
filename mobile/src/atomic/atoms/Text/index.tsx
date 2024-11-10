import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import * as S from './styles';
import { fonts } from '../../../theme/fonts';

export type TextProps = RNTextProps & {
  fontFamily?: keyof typeof fonts.family;
  size?: keyof typeof fonts.sizes;
  color?: string;
};

export const Text = ({
  fontFamily = 'regular',
  size = 'md',
  color,
  ...rest
}: TextProps) => {
  return <S.Text fontFamily={fontFamily} size={size} color={color} {...rest} />;
};
