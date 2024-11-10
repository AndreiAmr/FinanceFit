import { Button, Text, Flex } from 'native-base';
import React from 'react';
import { InformationIcon } from '../../../../assets/icons/Information';
import { SecurityIcon } from '../../../../assets/icons/security';
import { RFValue } from 'react-native-responsive-fontsize';
import { authenticationLocales } from '../../texts/authentication.locales';

export const ForgotPassword = () => {
  return (
    <Flex
      flex={1}
      flexDir="row"
      alignItems="center"
      justifyContent="space-between">
      <Button
        backgroundColor="#00000000"
        _pressed={{
          opacity: 0.7,
        }}>
        <Flex flexDirection="row" alignItems="center">
          <InformationIcon />
          <Text ml="4px" color="info.600" fontSize={`${RFValue(12)}px`}>
            {authenticationLocales.forgotPassword}
          </Text>
        </Flex>
      </Button>
      <Flex flexDir="row" alignItems="center">
        <Text
          fontSize={`${RFValue(12)}px`}
          fontFamily="Roboto"
          fontWeight="regular"
          color="light.400"
          mr="4px">
          {authenticationLocales.safeLogin}
        </Text>
        <SecurityIcon />
      </Flex>
    </Flex>
  );
};
