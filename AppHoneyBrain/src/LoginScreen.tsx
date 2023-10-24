// screens/LoginScreen.tsx

import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import MainNavigator from '../Nav/MainNavigator';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => (
  <View style={GlobalStyles.container}>
    <Text style={GlobalStyles.title}>Connectez-vous</Text>
    <TextInput placeholder="Email" style={{ ...GlobalStyles.button, marginBottom: 10 }} />
    <TextInput placeholder="Mot de passe" secureTextEntry style={{ ...GlobalStyles.button, marginBottom: 20 }} />
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('Main')}>
      <Text style={GlobalStyles.buttonText}>Connexion</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{ ...GlobalStyles.button, backgroundColor: GlobalStyles.lightGray }} onPress={() => navigation.navigate('Main')}>
      <Text style={GlobalStyles.buttonText}>Accéder sans connexion</Text>
    </TouchableOpacity>
  </View>
);

export default LoginScreen;
