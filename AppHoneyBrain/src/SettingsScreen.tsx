import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import RNPickerSelect from 'react-native-picker-select';

type SettingsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Settings'>;
};

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
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

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Page de réglages</Text>
      {/* Bouton "Changer de mot de passe" */}
      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Changer de mot de passe:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor: 'white' }}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={GlobalStyles.button} onPress={handleChangeEmail} >
        <Text style={GlobalStyles.buttonText}>Valider</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Changer d'adresse email:</Text>
      <TextInput
        style={{ borderColor: 'gray', borderWidth: 1, height: 25, width: '60%', marginTop: 10, backgroundColor: 'white' }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TouchableOpacity style={GlobalStyles.button} onPress={handleChangeEmail} >
        <Text style={GlobalStyles.buttonText}>Valider</Text>
      </TouchableOpacity>

      <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 10 }}>Changer de langue:</Text>
      <TouchableOpacity style={GlobalStyles.button}>
        <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                  { label: '🇫🇷 Français', value: 'fr' },
                  { label: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Anglais', value: 'en' },
                  { label: '🇪🇸 Espagnol', value: 'es' },
                  { label: '🇨🇳 Chinois', value: 'ch' },
              ]}
          />
      </TouchableOpacity>

      <NavBar navigation={navigation} />
      
    </View>
  );
};

export default SettingsScreen;
