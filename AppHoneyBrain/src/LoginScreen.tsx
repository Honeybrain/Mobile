import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, Image, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import { useTranslation } from "react-i18next";
// import AuthContext from '../../../Frontend/src//AuthContext';
import { withTheme } from '../NightMode/HOC';


type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
  themedStyles: any; 
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, themedStyles }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    try {
      // Remplacez ceci par votre logique de connexion
      // await login(email, password);
      Alert.alert(t('LoginScreen.ConnectionSuccessful')); // Utilisez Alert ici
      navigation.navigate('Home');
    } catch (error) {
      // Alert.alert("Erreur lors de la connexion", error.message); // Et ici
      console.error(t('LoginScreen.ConnectionFailed'), error);
    }
  };

  return (
    <View style={[GlobalStyles.container, themedStyles.containerStyle]}>
      <Image 
        source={require('../assets/honeybrainlogo.png')} 
        resizeMode="contain" 
        style={styles.logo} 
      />
      <Text style={[GlobalStyles.title, themedStyles.textStyle]}>{t('LoginScreen.ConnectYourself')}</Text>
      <TextInput 
        placeholder={t('LoginScreen.UsernameEmail')}
        style={[GlobalStyles.input, themedStyles.textStyle]} 
        onChangeText={setEmail}
        value={email}
      />
      <TextInput 
        placeholder={t('LoginScreen.Password')}
        secureTextEntry 
        style={[GlobalStyles.input, themedStyles.textStyle]} 
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity 
        style={[GlobalStyles.button, themedStyles.buttonStyle]} 
        onPress={handleSubmit}>
        <Text style={[GlobalStyles.buttonText, themedStyles.buttonTextStyle]}>{t('LoginScreen.Login')}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles spécifiques pour le logo
const styles = StyleSheet.create({
  logo: {
    width: 105,
    height: 125,
  },
});

export default withTheme(LoginScreen);
