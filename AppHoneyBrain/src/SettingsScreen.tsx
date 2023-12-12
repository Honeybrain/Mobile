import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import RNPickerSelect from 'react-native-picker-select';
import { useTranslation } from "react-i18next";

type SettingsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const handleChangePassword = () => {
    // Mettez ici la logique pour changer de mot de passe
    // Vous pouvez utiliser des modals ou des alertes pour gérer cela.
  };

  const handleChangeEmail = () => {
    // Mettez ici la logique pour changer d'adresse email
    // Vous pouvez utiliser des modals ou des alertes pour gérer cela.
  };

  const HandleLanguageSwitch = (newLang: string) => {
    if (newLang !== null) {
      i18n.changeLanguage(newLang);
      setSelectedLanguage(newLang);
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
      <TouchableOpacity style={GlobalStyles.button}>
        <RNPickerSelect
              onValueChange={(value) => HandleLanguageSwitch(value)}
              items={[
                  { label: `🇫🇷 ${t('SettingsScreen.French')}`, value: 'fr' },
                  { label: `🏴󠁧󠁢󠁥󠁮󠁧󠁿 ${t('SettingsScreen.English')}`, value: 'en' },
                  { label: `🇪🇸 ${t('SettingsScreen.Spanish')}`, value: 'es' },
                  { label: `🇨🇳 ${t('SettingsScreen.Chinese')}`, value: 'ch' },
              ]}
          />
      </TouchableOpacity>

      <NavBar navigation={navigation} />
      
    </View>
  );
};

export default SettingsScreen;
