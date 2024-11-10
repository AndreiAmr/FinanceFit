import styled from 'styled-components/native';

export const Header = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[300]};
  padding: ${({ theme }) => theme.spacing.inline.md}px
    ${({ theme }) => theme.spacing.inline.lg}px;
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.inline.lg}px
    ${({ theme }) => theme.spacing.inline.lg}px;
  padding-bottom: ${({ theme }) => theme.spacing.inline.lg}px;
  gap: 3px;
`;
