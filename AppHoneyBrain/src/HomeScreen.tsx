// screens/HomeScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

const HomeScreen: React.FC = () => (
  <View style={GlobalStyles.container}>
    <Text style={GlobalStyles.title}>Accueil HoneyBrain</Text>
    {/* Ajoutez ici le contenu de votre page d'accueil */}
  </View>
);

export default HomeScreen;
