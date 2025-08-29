import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastConfig } from './app/services';
import { RootStack } from './app/navigations';
import { ErrorBoundary } from './app/components';
import './app/services/config/setupGlobalErrorHandler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/redux';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ErrorBoundary>
            <NavigationContainer>
              <RootStack />
              <ToastConfig />
            </NavigationContainer>
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
