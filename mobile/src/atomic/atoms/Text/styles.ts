import styled from 'styled-components/native';
import { fonts } from '../../../theme/fonts';

type Props = {
  fontFamily: keyof typeof fonts.family;
  size: keyof typeof fonts.sizes;
  color?: string;
};

export const Text = styled.Text<Props>`
  font-family: ${({ theme, fontFamily }) => theme.fonts.family[fontFamily]};
  font-size: ${({ theme, size }) => theme.fonts.sizes[size]}px;
  color: ${({ color }) => color};
`;
