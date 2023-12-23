import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Nav/AppNavigator';

import '@stardazed/streams-polyfill';
import { polyfill as polyfillEncoding } from 'react-native-polyfill-globals/src/encoding'; // Requires peer dependency `text-encoding`
polyfillEncoding();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
