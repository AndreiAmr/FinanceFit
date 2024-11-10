import React from 'react';
import {Box, Flex, useTheme} from 'native-base';

import {IconEnum, SwitchButton} from '../atoms/SwitchButton';
import {RFValue} from 'react-native-responsive-fontsize';

type ContextValue = 'login' | 'signup';

type SwitchContextProps = {
  context: ContextValue;
  onChange(value: ContextValue): void;
};

export const SwitchContext = ({context, onChange}: SwitchContextProps) => {
  const theme = useTheme();

  return (
    <Flex>
      <Flex flexDir="row" marginTop={RFValue(30)}>
        <SwitchButton
          label="Login"
          icon={IconEnum.user}
          activeColor={theme.colors.info[500]}
          isActive={context === 'login'}
          onPress={() => onChange('login')}
        />
        <Box w={1} />
        <SwitchButton
          label="Cadastre-se"
          icon={IconEnum.sendingEnvelope}
          activeColor={theme.colors.purple[600]}
          isActive={context === 'signup'}
          onPress={() => onChange('signup')}
        />
      </Flex>
    </Flex>
  );
};
