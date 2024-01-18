// components/Loading.tsx

import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../NightMode/ThemeContext';

type LoadingProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Loading'>;
};

const Loading: React.FC<LoadingProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDarkMode } = useContext(ThemeContext); // Utilisez ThemeContext
  const backgroundColor = isDarkMode ? '#333' : 'white';
  const activityIndicatorColor = isDarkMode ? 'white' : '#003061';
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000); // Naviguer après 3 secondes
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image source={require('../assets/honeybrainlogo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color={activityIndicatorColor} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    marginBottom: 20,
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
});

export default Loading;