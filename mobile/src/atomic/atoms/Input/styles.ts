import styled, { css } from 'styled-components/native';
import { spacing } from '../../../theme/spacing';

type Props = {
  marginTop?: keyof typeof spacing.vertical;
  isError?: boolean;
};

export const Container = styled.View<Props>`
  width: 100%;
  height: 35px;
  flex-direction: row;
  align-items: center;

  ${({ theme, isError }) => css`
    background-color: ${isError
      ? theme.colors.red[100]
      : theme.colors.gray[100]};
  `}

  ${({ theme, marginTop }) => css`
    border-radius: ${theme.radius.sm}px;
    padding: 0 ${theme.spacing.inline.md}px;
    gap: ${theme.spacing.inline.md}px;

    ${marginTop &&
    css`
      margin-top: ${theme.spacing.vertical[marginTop]}px;
    `}
  `}
`;
export const Input = styled.TextInput<Props>`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.sizes.sm}px;
`;
