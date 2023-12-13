import React, { useContext, useRef, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, Animated, StyleSheet, ScrollView, Image, Dimensions, Platform } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import { ThemeContext } from '../NightMode/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import NavBar from '../Nav/NavBar';
import { useTranslation } from "react-i18next";
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { Colors } from '../styles/Colors';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const systemAlerts = [
    { id: 1, type: 'Attaque', message: 'Une attaque détectée sur votre site' },
    { id: 2, type: 'Menace', message: 'IP bloquée suite à une attaque' },

    // Ajouter d'autres alertes ici
  ];
  // Styles dynamiques
  const backgroundColor = isDarkMode ? '#333' : '#fff';
  const backgroundItem =  isDarkMode ? '#333' : Colors.lightGray;
  const textColor = isDarkMode ? '#fff' : '#000';
  const themeIcon = isDarkMode ? 'moon' : 'sunny';

  const featuredItems = [
    { id: 1, image: require('../assets/honeypotimage.jpg') },
    { id: 2, image: require('../assets/leurre.gif')},
    { id: 3, image: require('../assets/dashboard.png')},
  ];

  const Separator = () => (
    <View style={styles.separator} />
  );
  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity onPress={() => {/* Votre action ici */}}>
      <View>
        <Image source={item.image} style={styles.featuredImage} />
        {item.title && (
          <View style={styles.overlayTitle}>
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor}}>
      <View style={[styles.header, { backgroundColor: isDarkMode ? '#393838' : Colors.lightGray }]}>
        <Image source={require('../assets/logo.png')} style={styles.smallLogo} />
        <Text style={[styles.title, { color: textColor }]}>HomeScreen</Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggleButton}>
            <Icon name={themeIcon} size={30} color={textColor} />
        </TouchableOpacity>
      </View>

      <ScrollView style={[styles.scrollView, { backgroundColor }]}>
        
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>        
        <View style={[styles.controlCenter, { backgroundColor: isDarkMode ? '#393838' : '#f8f8f8' }]}>
            <Text style={[styles.controlCenterText, { color: textColor }]}>Centre de Contrôle</Text>
            {systemAlerts.map(alert => (
              <View key={alert.id} style={styles.alertItem}>
                <Ionicons name="alert-circle" size={20} color="red" />
                <Text style={[styles.alertType, { color: textColor }]}>{alert.type}</Text>
                <Text style={[styles.alertMessage, { color: textColor }]}>{alert.message}</Text>
              </View>
            ))}
          </View>
          <View style={[styles.cardContainer, { backgroundColor: isDarkMode ? '#393838' : Colors.lightGray }]}>
            <TouchableOpacity style={[styles.card, styles.cardHistory]} onPress={() => navigation.navigate('History')}>
              <Icon name="time-outline" size={30} color="#fff" />
              <Text style={styles.cardText}>Historique</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.cardNotif]} onPress={() => navigation.navigate('Notif')}>
              <Icon name="notifications-outline" size={30} color="#fff" />
              <Text style={styles.cardText}>Notifications</Text>
            </TouchableOpacity>
            
            
          </View>
  
          <Carousel
            data={featuredItems}
            renderItem={renderCarouselItem}
            sliderWidth={viewportWidth}
            itemWidth={300}
            itemHeight={400}
            autoplay={true}
            loop={true}
            style={{backgroundColor: 'black'}}
            />
        </Animated.View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutButtonText}>Se Déconnecter</Text>
          </TouchableOpacity>
      </ScrollView>
      
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1, // ou 'width: 1' pour une ligne verticale
    backgroundColor: "#CCCCCC", // couleur du séparateur
    marginVertical: 100,
  },
  alertItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Adjust according to theme
  },
  alertType: {
    fontWeight: 'bold',
    // Adjust other styles as needed
  },
  alertMessage: {
    // Adjust styles as needed
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    padding: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  smallLogo: {
    width: 55,
    height: 50,
  },
  controlCenter: {
    padding: 20,
    backgroundColor: '#f8f8f8', // Adjust according to theme
    borderRadius: 15,
    margin: 16,
  },
  controlCenterTitle: {
    fontWeight: 'bold',
    marginBottom: 2,
    // Adjust other styles as needed
  },
  controlCenterText: {
    fontWeight: 'bold',
    // Autres styles pour le texte
  },
  logo: {
    width: 110,
    height: 100,
    borderRadius: 10,
    marginBottom: 24
  },
  overlayTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  scrollView: {
    paddingTop: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '110%',
    height: '25%',
    marginBottom: 12,
    marginTop: 12,
    backgroundColor:'#f8f8f8',
  },
  card: {
    width: '45%',
    padding: 20,
    borderRadius: 30,
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
    width: '30%',
    height: '70%',
    marginTop: '6%',

  },
  cardNotif: {
    backgroundColor: '#ee6e73',
    width: '30%',
    height: '70%',
    marginTop: '6%',
  },
  cardText: {
    color: '#fff',
    marginTop: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 20,
    marginLeft: '10%',
    width: '80%',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  themeToggleButton: {
    padding: 10,
    alignItems: 'center',
    marginVertical: 12,
  },
  featuredImage: {
    width: 300,
    height: 175,
    borderRadius: 30,
    marginBottom: 40,
    marginTop: 8
  },
});

export default HomeScreen;
