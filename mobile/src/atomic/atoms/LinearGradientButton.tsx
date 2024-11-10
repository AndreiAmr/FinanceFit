import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text, useTheme } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

type LinearGradienteButtonProps = {
  label: string;
  onPress(): void;
};

export const LinearGradientButton = ({
  label,
  onPress,
}: LinearGradienteButtonProps) => {
  const theme = useTheme();

  return (
    <LinearGradient
      colors={[theme.colors.info[500], theme.colors.purple[600]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        height: RFValue(35),
        width: '100%',
        borderRadius: 6,
      }}
    >
      <Button
        backgroundColor="#ffffff00"
        padding={0}
        w="100%"
        height="100%"
        onPress={onPress}
      >
        <Text
          textAlign="center"
          color="white"
          fontFamily="Roboto"
          fontWeight="medium"
        >
          {label}
        </Text>
      </Button>
    </LinearGradient>
  );
};
