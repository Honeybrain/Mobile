import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';


type NavBarProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
};

const NavBar: React.FC<NavBarProps> = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  const navigateToIp = () => {
    navigation.navigate('Ip');
  };

  const navigateToContainer = () => {
    navigation.navigate('Container');
  };  

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome}>
        <Text style={{ fontSize: 40, marginRight: 40 }}>🏠</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToIp}>
        <Text style={{ fontSize: 40, marginRight: 40 }}>🔒</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToContainer}>
      <Image
        source={require('../assets/container.png')}
        style={{ width: 40, height: 30, marginRight: 40, marginTop: 10}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToSettings}>
        <Text style={{ fontSize: 40}}>⚙️</Text> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0, // Position au bas de l'écran
    width: '100%', // Largeur maximale
    backgroundColor: 'blue', // Couleur d'arrière-plan si nécessaire
  },
  icon: {
    fontSize: 30,
  },
});

export default NavBar;
