import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationScreen} from '../../screens/Authentication';

const Stack = createNativeStackNavigator();

const AuthenticationRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Authentication" component={AuthenticationScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationRoutes;
