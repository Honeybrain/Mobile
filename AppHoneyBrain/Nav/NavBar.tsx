import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';

type NavBarProps = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList>;
};

const NavBar: React.FC<NavBarProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBarItem icon="🏠" onPress={() => navigation.navigate('Home')} />
      <NavBarItem icon="🔒" onPress={() => navigation.navigate('Ip')} />
      <NavBarItem 
        iconComponent={<Image source={require('../assets/container.png')} style={styles.imageIcon} />}
        onPress={() => navigation.navigate('Container')} icon={''}      />
      <NavBarItem icon="⚙️" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

const NavBarItem: React.FC<{ icon: string; onPress: () => void; iconComponent?: React.ReactNode }> = ({ icon, onPress, iconComponent }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
      {iconComponent ? iconComponent : <Text style={styles.icon}>{icon}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#003061', // Couleur d'arrière-plan plus standard
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
  },
  imageIcon: {
    width: 40,
    height: 40,
  },
});

export default NavBar;
