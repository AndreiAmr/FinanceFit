import { Box, Flex } from 'native-base';
import React, { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { AppName } from '../../atomic/atoms/AppName';
import { SwitchContext } from '../../atomic/molecules/SwitchContext';
import { Login } from './components/Login';
import { ForgotPassword } from './components/ForgotPassword';
import { Signup } from './components/Signup';

export const AuthTemplate = () => {
  const [currentContext, setCurrentContext] = useState<'login' | 'signup'>(
    'login'
  );
  const context = {
    login: <Login />,
    signup: <Signup />,
  };

  return (
    <Flex
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="coolGray.300"
    >
      <Box
        width={widthPercentageToDP(90)}
        bg="white"
        overflow="hidden"
        borderRadius={RFValue(8)}
      >
        <AppName />
        <Box px={`${RFValue(18)}px`} pb={30}>
          <SwitchContext
            context={currentContext}
            onChange={(prop: 'login' | 'signup') => setCurrentContext(prop)}
          />
          {context[currentContext]}
        </Box>

        <Box
          backgroundColor="#F6F6F6"
          height={RFValue(80)}
          px={`${RFValue(18)}px`}
        >
          <ForgotPassword />
        </Box>
      </Box>
    </Flex>
  );
};
