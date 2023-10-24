// components/Loading.tsx

import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';

type LoadingProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Loading'>;
};

const Loading: React.FC<LoadingProps> = ({ navigation }) => {
  
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 3000); // Naviguer après 3 secondes
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/honeybrainlogo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#003061" />
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