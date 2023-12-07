import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Nav/AppNavigator';
import { ThemeProvider } from './NightMode/ThemeContext';

export default function App()  {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
