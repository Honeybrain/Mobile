// screens/WelcomeScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => (
  <View style={GlobalStyles.container}>
    <Image source={require('../assets/honeybrainlogo.png')} resizeMode="contain" style={{ width: 200, height: 200 }} />
    <Text style={GlobalStyles.title}>Bienvenue sur l'app HoneyBrain!</Text>
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={GlobalStyles.buttonText}>Login</Text>
    </TouchableOpacity>
  </View>
);

export default WelcomeScreen;
