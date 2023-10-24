import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import NavBar from '../Nav/NavBar';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};

const HomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => (
  <View style={GlobalStyles.container}>
    <Text style={GlobalStyles.title}>Accueil HoneyBrain</Text>
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('History')}>
      <Text style={GlobalStyles.buttonText}>History</Text>
    </TouchableOpacity>  
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('Notif')}>
      <Text style={GlobalStyles.buttonText}>Notifications</Text>
    </TouchableOpacity>  
    <NavBar navigation={navigation} />
    </View>
);

export default HomeScreen;