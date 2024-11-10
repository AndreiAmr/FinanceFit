import React from 'react';
import { Routes } from '../routes';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { theme } from '../theme';
import store from '../store';
import { navigationRef } from '../routes/navigate';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export const Providers = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BottomSheetModalProvider>
            <Routes ref={navigationRef} />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
