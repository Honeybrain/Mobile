import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/HomeScreen';
import SettingsScreen from '../src/SettingsScreen';
import IpScreen from '../src/IpScreen';
import ContainerScreen from '../src/ContainerScreen';
import EnteringConnections from "../src/ECSCreen"
import NavBar from './NavBar';

const Stack = createStackNavigator();

const MainNavigator: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: true, // Afficher l'en-tête
      header: () => <Stack.Screen name="NavBar" component={NavBar} />, // Utiliser NavBar comme en-tête personnalisé
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Ip" component={IpScreen} />
    <Stack.Screen name="Container" component={ContainerScreen} />
    <Stack.Screen name="EC" component={EnteringConnections} />
  </Stack.Navigator>
);

export default MainNavigator;
