import React from 'react';
import {UserIcon} from '../../assets/icons/user';
import {SendingEnvelopIcon} from '../../assets/icons/sending-envelope';
import {Button, Flex, Text} from 'native-base';
import {RFValue} from 'react-native-responsive-fontsize';

export enum IconEnum {
  user = 'user',
  sendingEnvelope = 'sendingEnvelope',
}

type ISwitchButton = {
  label: string;
  icon: IconEnum;
  isActive: boolean;
  activeColor: string;
  onPress(): void;
};

export const SwitchButton = ({
  label,
  icon,
  isActive,
  activeColor,
  onPress,
}: ISwitchButton) => {
  const icons = {
    user: <UserIcon isActive={isActive} />,
    sendingEnvelope: <SendingEnvelopIcon isActive={isActive} />,
  };

  return (
    <Button
      w="50%"
      bg={isActive ? activeColor : 'light.200'}
      height={`${RFValue(25)}px`}
      colorScheme="none"
      onPress={onPress}
      _android={
        isActive &&
        ({
          elevation: 5,
        } as any)
      }
      _ios={
        isActive &&
        ({
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        } as any)
      }
      p={0}>
      <Flex flexDirection="row" alignItems="center">
        {icons[icon]}
        <Text
          color={isActive ? 'white' : 'coolGray.500'}
          fontFamily="Roboto"
          fontWeight="regular"
          fontSize={`${RFValue(12)}px`}
          marginLeft={1.5}>
          {label}
        </Text>
      </Flex>
    </Button>
  );
};
