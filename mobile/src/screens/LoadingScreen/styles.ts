import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[100]};
`;

export const Header = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray[400]};

  padding: ${({ theme }) => theme.spacing.inline.md}px
    ${({ theme }) => theme.spacing.inline.md}px;
`;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

export const SpinnerContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
