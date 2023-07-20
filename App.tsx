//@ts-nocheck
import 'react-native-gesture-handler';
import React from 'react';
import { i18n } from './src/helpers/i18n';
import {
  SafeAreaView,
} from 'react-native';

import NavigationContainer from './src/navigation/NavigationContainer';
import { AuthProvider } from './src/contexts/AuthContext';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {

  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <AuthProvider>
            <NavigationContainer />
          </AuthProvider>
        </ThemeProvider>
      </I18nextProvider>
      </SafeAreaProvider>
        );
}

export default App;
