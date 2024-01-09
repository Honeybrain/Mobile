import React, { useState, useContext} from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import AuthContext from '../contexts/AuthContext';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useContext(AuthContext);


  const handleSubmit = async () => {
    try {
      // Appel de la méthode login avec email et mot de passe
      await login(email, password);
      navigation.navigate('Home');
      // Gestion de la navigation ou des actions post-connexion ici
    } catch (error) {
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Image source={require('../assets/honeybrainlogo.png')} resizeMode="contain" style={{ width: 105, height: 125 }} />
      <Text style={GlobalStyles.title}>Connectez-vous</Text>

      <TextInput 
        placeholder="Username / Email" 
        style={GlobalStyles.input} 
        onChangeText={setEmail} // Directly pass setEmail as the handler
      />

      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={GlobalStyles.input} 
        onChangeText={setPassword} // Directly pass setPassword as the handler
      />

      <TouchableOpacity style={GlobalStyles.button} onPress={handleSubmit}>
        <Text style={GlobalStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Uncomment and modify the following if you have a password recovery or registration flow */}
      {/* 
      <Text style={{ marginTop: 10, color: '#666' }}>Forgot Password?</Text>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#666' }}>Don't have an Account? Register</Text>
      </TouchableOpacity>
      */}
    </View>
  );
};

export default LoginScreen;
