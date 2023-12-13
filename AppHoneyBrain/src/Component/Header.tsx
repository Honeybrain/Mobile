// Header.tsx
import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../../NightMode/ThemeContext';

const Header: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)}>
        <Icon name={isDarkMode ? 'sun-o' : 'moon-o'} size={24} color={isDarkMode ? 'white' : 'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
