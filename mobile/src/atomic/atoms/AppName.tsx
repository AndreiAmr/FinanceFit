import React from 'react';
import { Box, Flex, Text, useTheme } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { authenticationLocales } from '../../templates/Auth/texts/authentication.locales';
import { PigIcon } from '../../assets/icons/pig';
import { RFValue } from 'react-native-responsive-fontsize';

export const AppName = () => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[theme.colors.info[500], theme.colors.purple[600]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Box alignItems="center" py={RFValue(30)}>
        <Flex flexDirection="row" alignItems="center">
          <PigIcon />
          <Text
            fontSize={RFValue(28)}
            fontFamily="Roboto"
            fontWeight="bold"
            color="white"
          >
            {authenticationLocales.appName.title}
          </Text>
        </Flex>
        <Text
          fontFamily="Roboto"
          fontWeight="regular"
          fontSize={RFValue(14)}
          marginTop={-2}
          color="white"
        >
          {authenticationLocales.appName.description}
        </Text>
      </Box>
    </LinearGradient>
  );
};
