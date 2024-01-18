import "./ignoreWarnings";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Nav/AppNavigator';
import './src/i18n.tsx';
import { ThemeProvider } from './NightMode/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import '@stardazed/streams-polyfill';
import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding'; // Requires peer dependency `text-encoding`
polyfillEncoding();

export default function App()  {
  return (
    <AuthProvider>
      <NavigationContainer>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </AuthProvider>
  );
}
