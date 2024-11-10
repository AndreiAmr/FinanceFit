import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationRoutes from './Authentication';

import { GenericLoadScreen } from '../screens/GenericLoad';
import { RoutesEnum } from './types';
import { HomeTemplate } from '../templates/App/Home';
import { GenericErrorScreen } from '../screens/GenericError';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Auth">
      <Stack.Screen name={RoutesEnum.Auth} component={AuthenticationRoutes} />
      <Stack.Screen name={RoutesEnum.Home} component={HomeTemplate} />
      <Stack.Screen
        name={RoutesEnum.GenericLoader}
        component={GenericLoadScreen}
      />
      <Stack.Screen
        name={RoutesEnum.GenericError}
        component={GenericErrorScreen}
      />
    </Stack.Navigator>
  );
};

export default Routes;
