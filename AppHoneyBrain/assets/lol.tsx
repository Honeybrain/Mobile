import React, { useContext, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import { ThemeContext } from '../NightMode/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'installer cette dépendance
import NavBar from '../Nav/NavBar';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const backgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={[styles.scrollView, { backgroundColor }]}>
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
          <Text style={[styles.title, { color: textColor }]}>Bienvenue sur HoneyBrain</Text>

          <View style={styles.cardContainer}>
            <TouchableOpacity style={[styles.card, styles.cardHistory]} onPress={() => navigation.navigate('History')}>
              <Icon name="time-outline" size={30} color="#fff" />
              <Text style={styles.cardText}>Historique</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.cardNotif]} onPress={() => navigation.navigate('Notif')}>
              <Icon name="notifications-outline" size={30} color="#fff" />
              <Text style={styles.cardText}>Notifications</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutButtonText}>Se Déconnecter</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  card: {
    width: '45%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  cardHistory: {
    backgroundColor: '#4e9caf',
  },
  cardNotif: {
    backgroundColor: '#ee6e73',
  },
  cardText: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Ajoutez d'autres styles personnalisés ici
});