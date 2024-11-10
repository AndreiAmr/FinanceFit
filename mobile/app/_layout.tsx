import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../src/routes';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from '../src/store';

import { navigationRef } from '@/src/routes/navigate';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} independent>
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
