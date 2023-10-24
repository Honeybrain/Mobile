import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, Image } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
// import AuthContext from '../../../Frontend/src//AuthContext';

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      // await login(email, password);
      ToastAndroid.show("Connexion réussie", ToastAndroid.SHORT);
      navigation.navigate('Home');
    } catch (error) {
      ToastAndroid.show("Erreur lors de la connexion", ToastAndroid.SHORT);
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Image source={require('../assets/honeybrainlogo.png')} resizeMode="contain" style={{ width: 105, height: 125 }} />
      <Text style={GlobalStyles.title}>Connectez-vous</Text>
      <TextInput 
        placeholder="Username / Email" 
        style={GlobalStyles.input} 
        // onChangeText={(text) => setEmail(text)}
      />
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={GlobalStyles.input} 
        // onChangeText={(text) => setPassword(text)}
      />
    <TouchableOpacity style={GlobalStyles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={GlobalStyles.buttonText}>Login</Text>
    </TouchableOpacity>
      {/* <Text style={{ marginTop: 10, color: '#666' }}>Forgot Password?</Text> */}
      {/* <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Register')}>
        <Text style={{ color: '#666' }}>Don't have a Account? Register</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default LoginScreen;