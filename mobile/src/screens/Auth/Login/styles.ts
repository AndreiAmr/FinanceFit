import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  justify-content: center;
  align-items: center;
  padding: 0px ${({ theme }) => theme.spacing.inline.lg}px;
  gap: 30px;
`;

export const ContentContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.singletons.white};
    border-radius: ${theme.radius.md}px;
  `}
  overflow: hidden;

  width: 100%;
`;

export const ContentWrapper = styled.View`
  ${({ theme }) => css`
    padding: ${theme.spacing.inline.lg}px;
  `}
`;

export const TitleSpacing = styled.View`
  height: ${({ theme }) => theme.spacing.vertical.lg}px;
`;

export const ForgotPasswordWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue[50]};
    padding: ${theme.spacing.vertical.lg}px ${theme.spacing.inline.lg}px;
  `}
`;
