import styled, { css } from 'styled-components/native';
import { spacing } from '../../../theme/spacing';
import { radius as radiusTheme } from '../../../theme/radius';

export enum EAlignment {
  CENTER = 'center',
  LEFT = 'flex-start',
  RIGHT = 'flex-end',
}

type Props = {
  marginTop?: keyof typeof spacing.vertical;
  radius?: keyof typeof radiusTheme;
  color?: string;
  alignment: EAlignment;
};

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({ alignment }) => alignment};
  background-color: ${({ color }) => color};
  height: 40px;
  gap: 6px;
  ${({ theme, marginTop }) =>
    marginTop &&
    css`
      margin-top: ${theme.spacing.vertical[marginTop]}px;
    `}
  ${({ theme, radius }) =>
    radius &&
    css`
      border-radius: ${theme.radius[radius]}px;
    `};
`;
