import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Styles } from '../styles/Styles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import useChangeMailRPC from '../hooks/useChangeMailRPC';
import useResetPasswordRPC from '../hooks/useResetPasswordRPC';
import { ToastAndroid } from 'react-native'; 
import { GlobalStyles } from '../styles/GlobalStyles';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../NightMode/ThemeContext'; 

type SettingsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { changeMail } = useChangeMailRPC();
  const { resetPassword } = useResetPasswordRPC();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);
  const textColor = isDarkMode ? 'white' : 'black';
  const backgroundColor = isDarkMode ? '#333' : 'white';
  const borderColor = isDarkMode ? 'darkgrey' : 'gray';
  const placeholderTextColor = isDarkMode ? 'lightgrey' : 'darkgrey'; // Couleur pour les placeholders

  const handleChangePassword = async () => {
    try {
      await resetPassword(password);
      ToastAndroid.show('Votre mot de passe a bien été modifié', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeEmail = async () => {
    try {
      await changeMail(email);
      ToastAndroid.show('Votre adresse email a bien été modifiée', ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLanguageChange = (index: number, value: string) => {
    setSelectedLanguage(value);
  };

  const HandleLanguageChange = (index: number, newLang: string) => {
    const languages = ['fr', 'en', 'es', 'ch']
    if (newLang !== null) {
      i18n.changeLanguage(languages[index]);
      setSelectedLanguage(index);
      // try {
      //   changeLanguage(newLang);
      // } catch(error) {
      //   console.log(error);
      // } change language on back - bakc connection not implemented
    }
  }

  return (
    <View style={[Styles.container, { backgroundColor }]}>
      <Text style={[Styles.title, { color: textColor }]}>{t('SettingsScreen.SettingsPage')}</Text>
      {/* Bouton "Changer de mot de passe" */}
      <Text style={{ color: textColor, fontWeight: 'bold', marginTop: 10 }}>{t('SettingsScreen.ChangePassword')}:</Text>
      <TextInput
        style={{ borderColor, borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor, color: textColor  }}
        onChangeText={text => setPassword(text)}
        value={password}
        placeholderTextColor={placeholderTextColor}
      />
      <TouchableOpacity style={Styles.button} onPress={handleChangePassword} >
        <Text style={Styles.buttonText}>{t('SettingsScreen.Validate')}</Text>
      </TouchableOpacity>

      <Text style={{ color: textColor, fontWeight: 'bold', marginTop: 10 }}>{t('SettingsScreen.ChangeEmailAdress')}:</Text>
      <TextInput
        style={{ borderColor, borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor, color: textColor  }}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholderTextColor={placeholderTextColor}
      />
      <TouchableOpacity style={Styles.button} onPress={handleChangeEmail} >
        <Text style={Styles.buttonText}>{t('SettingsScreen.Validate')}</Text>
      </TouchableOpacity>

      <Text style={{ color: textColor, fontWeight: 'bold', marginTop: 10 }}>Changer de langue:</Text>
      <ModalDropdown
        options={['🇫🇷 Français', '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Anglais', '🇪🇸 Espagnol', '🇨🇳 Chinois']}
        onSelect={(index: number, value: string) => handleLanguageChange(index, value)}
        defaultValue={selectedLanguage}
        style={{ borderColor, borderWidth: 1, height: 40, width: '60%', marginTop: 10, backgroundColor , justifyContent: 'center', paddingLeft: 10 }}
      />

      <Text style={{ color: textColor, fontWeight: 'bold', marginTop: 10 }}>{t('SettingsScreen.ChangeLanguage')}:</Text>
      <ModalDropdown
        options={[`🇫🇷 ${t('SettingsScreen.French')}`,
                  `🏴󠁧󠁢󠁥󠁮󠁧󠁿 ${t('SettingsScreen.English')}`,
                  `🇪🇸 ${t('SettingsScreen.Spanish')}`,
                  `🇨🇳 ${t('SettingsScreen.Chinese')}`]}
        onSelect={(index: number, value: string) => HandleLanguageChange(index, value)}
        style={{ borderColor: 'gray', borderWidth: 1, height: 40, width: '30%', marginTop: 10, backgroundColor: 'white', justifyContent: 'center', paddingLeft: 10, color: textColor }}
        dropdownStyle={{marginTop: -26, height: 80, width: "30%", marginLeft: -10, paddingLeft: 0}}
        defaultIndex={selectedLanguage}
      />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default SettingsScreen;
