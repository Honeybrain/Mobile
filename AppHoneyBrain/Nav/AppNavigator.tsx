import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './navigationTypes';
import WelcomeScreen from '../src/WelcomeScreen';
import LoginScreen from '../src/LoginScreen';
import HomeScreen from '../src/HomeScreen';
import Loading from '../src/Loading';
import SettingsScreen from '../src/SettingsScreen';
import IpScreen from '../src/IpScreen';
import ContainerScreen from '../src/ContainerScreen';
import MainNavigator from './MainNavigator';
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Loading" component={Loading} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Ip" component={IpScreen} />
    <Stack.Screen name="Container" component={ContainerScreen} />
    <Stack.Screen name="Main" component={MainNavigator} />
  </Stack.Navigator>
  
);

export default AppNavigator;