// screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};
console.disableYellowBox = true; 

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => (
  <View style={GlobalStyles.container}>
    <Image source={require('../assets/honeybrainlogo.png')} resizeMode="contain" style={{ width: 125, height: 125 }} />
    <Text style={GlobalStyles.title}>Bienvenue sur l'application HoneyBrain!</Text>
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={GlobalStyles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>
);

export default WelcomeScreen;