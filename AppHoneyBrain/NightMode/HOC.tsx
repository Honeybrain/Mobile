// withTheme.js
import React, { useContext } from 'react';
import { ThemeContext } from '../NightMode/ThemeContext';
import { StyleSheet } from 'react-native';

export const withTheme = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { isDarkMode } = useContext(ThemeContext);

    const themedStyles = {
      containerStyle: isDarkMode ? styles.darkContainer : styles.lightContainer,
      cardStyle: isDarkMode ? styles.darkCard : styles.lightCard,
      textStyle: isDarkMode ? styles.darkText : styles.lightText,
      timestampStyle: isDarkMode ? styles.darkTimestamp : styles.lightTimestamp,
      // ... autres styles conditionnels
    };

    return <Component {...props} themedStyles={themedStyles} />;
  };
};

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  lightCard: {
    backgroundColor: 'white', // Remplacez par la couleur de votre choix pour le mode clair
  },
  darkCard: {
    backgroundColor: '#1a1a1a', // Remplacez par la couleur de votre choix pour le mode sombre
  },
  lightText: {
    color: 'black',
  },
  darkText: {
    color: 'white',
  },
  lightTimestamp: {
    color: 'grey',
  },
  darkTimestamp: {
    color: 'lightgrey',
  },
  // ... autres styles
});

export default withTheme;
