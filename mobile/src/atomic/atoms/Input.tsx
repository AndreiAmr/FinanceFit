import React from 'react';
import { Flex, Text, Input as RBInput, Box } from 'native-base';

import { RFValue } from 'react-native-responsive-fontsize';

type InputProps = {
  label: string;
  value: string;
  placeholder: string;
  handleChange(value: string): void;
  hideContent?: boolean;
  icon?: JSX.Element;
  error?: string;
};

export const Input = ({
  label,
  value,
  placeholder,
  handleChange,
  hideContent,
  icon,
  error,
}: InputProps) => {
  return (
    <Flex>
      <Text
        fontFamily="Roboto"
        fontWeight={'medium'}
        _android={{
          fontWeight: 'bold',
        }}
        color={error ? 'danger.600' : 'info.700'}
      >
        {label}
      </Text>
      <RBInput
        borderRadius={6}
        borderWidth={0.7}
        leftElement={<Box marginLeft={2}>{icon}</Box>}
        h={`${RFValue(30)}px`}
        _focus={{
          borderColor: error ? 'danger.300' : 'info.700',
          backgroundColor: 'white',
        }}
        borderColor={error ? 'danger.300' : 'info.700'}
        backgroundColor={'white'}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        secureTextEntry={hideContent}
        color="coolGray.500"
        textTransform="none"
        _hover={{}}
      />
      {error && (
        <Text
          fontFamily="Roboto"
          fontWeight="regular"
          fontSize={`${RFValue(8)}px`}
          color="danger.600"
        >
          {error}
        </Text>
      )}
    </Flex>
  );
};
