// screens/HomeScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={GlobalStyles.container}>
    <Text style={GlobalStyles.title}>Accueil HoneyBrain</Text>
    {/* Ajoutez ici le contenu de votre page d'accueil */}
    <NavBar navigation={navigation} />
  </View>
);

export default HomeScreen;
