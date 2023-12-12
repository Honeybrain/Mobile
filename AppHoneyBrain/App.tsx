import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Nav/AppNavigator';
import './src/i18n.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
