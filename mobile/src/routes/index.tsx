import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Auth/Login';
import { LoadingScreen } from '../screens/LoadingScreen';
import { RoutesEnum } from './types';
import { ErrorScreen } from '../screens/Error';

const RootStack = createNativeStackNavigator({
  screens: {
    Login,
    LoadingScreen,
    ErrorScreen,
  },
  screenOptions: {
    headerShown: false,
  },

  initialRouteName: RoutesEnum.Login,
});

export const Routes = createStaticNavigation(RootStack);
