import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Styles } from '../styles/Styles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import useChangeMailRPC from '../hooks/useChangeMailRPC';

type SettingsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [submittedEmail, setSubmittedEmail] = React.useState<boolean>(false);

  const handleChangePassword = () => {
    // Mettez ici la logique pour changer de mot de passe
    // Vous pouvez utiliser des modals ou des alertes pour gérer cela.
  };

  const changeEmail = async () => {
    try {
      await useChangeMailRPC(email);
      setSubmittedEmail(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLanguageChange = (index: number, value: string) => {
    setSelectedLanguage(value);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Page de réglages</Text>
      {/* Bouton "Changer de mot de passe" */}
      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Changer de mot de passe:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor: 'white' }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={Styles.button} onPress={handleChangePassword} >
        <Text style={Styles.buttonText}>Valider</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Changer d'adresse email:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor: 'white' }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={Styles.button} onPress={changeEmail} >
        <Text style={Styles.buttonText}>Valider</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Changer de langue:</Text>
      <ModalDropdown
        options={['🇫🇷 Français', '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Anglais', '🇪🇸 Espagnol', '🇨🇳 Chinois']}
        onSelect={(index: number, value: string) => handleLanguageChange(index, value)}
        defaultValue={selectedLanguage}
        style={{ borderColor: 'gray', borderWidth: 1, height: 40, width: '60%', marginTop: 10, backgroundColor: 'white', justifyContent: 'center', paddingLeft: 10 }}
      />

      <NavBar navigation={navigation} />
    </View>
  );
};

export default SettingsScreen;
