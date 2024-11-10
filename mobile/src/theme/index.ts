import { colors } from './colors';
import { fonts } from './fonts';
import { radius } from './radius';
import { spacing } from './spacing';

export const theme = {
  colors,
  spacing,
  fonts,
  radius,
};

export type ThemeType = typeof theme;
