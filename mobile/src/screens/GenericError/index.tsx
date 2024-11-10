import React from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';
import { Button, HStack, Text, VStack } from 'native-base';
import { RoutesEnum } from '../../routes/types';

import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PigIcon } from '../../assets/icons/pig';
import { navigate } from '@/src/routes/navigate';
interface IGenericErrorParams {
  title: string;
  description: string;
  firstButton: any;
}

type RootStackParamList = {
  GenericErrorScreen: IGenericErrorParams;
};

export const GenericErrorScreen = () => {
  const {
    params: { title, description, firstButton },
  } = useRoute<RouteProp<RootStackParamList, RoutesEnum.GenericError>>();

  return (
    <VStack
      flex={1}
      backgroundColor={'black'}
      paddingY={`${RFValue(57)}px`}
      paddingX={`${RFValue(22)}px`}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <HStack alignItems="center" marginBottom={`${RFValue(80)}px`}>
          <PigIcon />
          <Text
            color="white"
            fontSize={RFValue(20)}
            fontFamily="Roboto"
            fontWeight={'bold'}
            marginLeft={'9px'}
          >
            MyFinances
          </Text>
        </HStack>

        <Text
          color={'white'}
          fontFamily="Roboto"
          fontWeight="bold"
          fontSize={RFValue(20)}
        >
          {title}
        </Text>
        <Text
          color={'white'}
          fontFamily="Roboto"
          fontWeight="regular"
          fontSize={RFValue(16)}
        >
          {description}
        </Text>
        <VStack flex={1} />
        <Button
          color={'white'}
          onPress={() =>
            navigate({
              routeName: firstButton.route,
            })
          }
          background="white"
          borderRadius={`${RFValue(10)}px`}
        >
          <Text fontFamily="Roboto" fontWeight="medium">
            {firstButton.label}
          </Text>
        </Button>
      </SafeAreaView>
    </VStack>
  );
};
