import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const ContentContainer = styled(SafeAreaView)`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.inline.lg}px;
`;

export const ContentWrapper = styled.View`
  width: 75%;
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.vertical.lg};
  padding-top: 120px;
  padding-right: ${({ theme }) => theme.spacing.inline.lg};
  gap: 5px;
`;
