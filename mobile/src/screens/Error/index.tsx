import React, { useCallback } from 'react';
import * as S from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppName } from '@/src/atomic/atoms/AppName';
import { Text } from '@/src/atomic/atoms/Text';
import { RoutesEnum } from '@/src/routes/types';
import { useTheme } from 'styled-components/native';
import { Button } from '@/src/atomic/atoms/Button';
import { resetNavigation } from '@/src/routes/navigate';
import { EAlignment } from '@/src/atomic/atoms/Button/styles';

type ErrorButtonProps = {
  label: string;
  route: string;
};

type IErrorScreenProps = {
  title: string;
  description: string;
  firstButton: ErrorButtonProps;
};

type RootStackParamList = {
  ErrorScreen: IErrorScreenProps;
};

type RouteProps = RouteProp<RootStackParamList, RoutesEnum.ErrorScreen>;

export const ErrorScreen = () => {
  const theme = useTheme();
  const { params } = useRoute<RouteProps>();

  const handlePress = useCallback(() => {
    resetNavigation({
      routeName: params.firstButton.route as RoutesEnum,
    });
  }, [params]);

  return (
    <S.Container>
      <S.ContentContainer>
        <AppName light />
        <S.ContentWrapper>
          <Text
            fontFamily="bold"
            size="lg"
            color={theme.colors.singletons.white}>
            {params.title}
          </Text>
          <Text fontFamily="regular" size="md" color={theme.colors.gray[100]}>
            {params.description}
          </Text>
        </S.ContentWrapper>
        <Button
          label={params.firstButton.label}
          onPress={handlePress}
          alignment={EAlignment.CENTER}
          color={theme.colors.gray[100]}
          radius="md"
          labelProps={{
            size: 'sm',
            fontFamily: 'regular',
          }}
        />
      </S.ContentContainer>
    </S.Container>
  );
};
