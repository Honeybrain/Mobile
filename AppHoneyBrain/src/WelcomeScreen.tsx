// screens/WelcomeScreen.tsx

import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../NightMode/ThemeContext';


type WelcomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext);
  const backgroundColor = isDarkMode ? '#333' : 'white';
  const textColor = isDarkMode ? 'white' : 'black';

  return(
    <View style={[GlobalStyles.container, { backgroundColor }]}>
    <Image source={require('../assets/honeybrainlogo.png')} resizeMode="contain" style={{ width: 125, height: 125 }} />
    <Text style={[GlobalStyles.title, { color: textColor }]}>{t('WelcomeScreen.WelcomeHoneybrain')}</Text>
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={GlobalStyles.buttonText}>{t('WelcomeScreen.Login')}</Text>
    </TouchableOpacity>
  </View>
)};

export default WelcomeScreen;