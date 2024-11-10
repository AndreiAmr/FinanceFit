import React from 'react';
import { Spinner, useTheme, VStack } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export const GenericLoadScreen = () => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[theme.colors.info[500], theme.colors.purple[600]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        flex: 1,
      }}
    >
      <VStack flex={1} justifyContent="center" alignItems="center">
        <Spinner color="white" size="lg" />
      </VStack>
    </LinearGradient>
  );
};
