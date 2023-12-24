import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import { useTranslation } from "react-i18next";

type SettingsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(0);

  const handleChangePassword = () => {
    // Mettez ici la logique pour changer de mot de passe
    // Vous pouvez utiliser des modals ou des alertes pour gérer cela.
  };

  const handleChangeEmail = () => {
    // Mettez ici la logique pour changer d'adresse email
    // Vous pouvez utiliser des modals ou des alertes pour gérer cela.
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
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>{t('SettingsScreen.SettingsPage')}</Text>
      {/* Bouton "Changer de mot de passe" */}
      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>{t('SettingsScreen.ChangePassword')}:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor: 'white' }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={GlobalStyles.button} onPress={handleChangeEmail} >
        <Text style={GlobalStyles.buttonText}>{t('SettingsScreen.Validate')}</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>{t('SettingsScreen.ChangeEmailAdress')}:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor: 'white' }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={GlobalStyles.button} onPress={handleChangeEmail} >
        <Text style={GlobalStyles.buttonText}>{t('SettingsScreen.Validate')}</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>{t('SettingsScreen.ChangeLanguage')}:</Text>
      <ModalDropdown
        options={[`🇫🇷 ${t('SettingsScreen.French')}`,
                  `🏴󠁧󠁢󠁥󠁮󠁧󠁿 ${t('SettingsScreen.English')}`,
                  `🇪🇸 ${t('SettingsScreen.Spanish')}`,
                  `🇨🇳 ${t('SettingsScreen.Chinese')}`]}
        onSelect={(index: number, value: string) => HandleLanguageChange(index, value)}
        style={{ borderColor: 'gray', borderWidth: 1, height: 40, width: '30%', marginTop: 10, backgroundColor: 'white', justifyContent: 'center', paddingLeft: 10 }}
        dropdownStyle={{marginTop: -26, height: 80, width: "30%", marginLeft: -10, paddingLeft: 0}}
        defaultIndex={selectedLanguage}
      />
      <NavBar navigation={navigation} />
      
    </View>
  );
};

export default SettingsScreen;
