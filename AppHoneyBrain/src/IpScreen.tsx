import React from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';

type IpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Ip'>;
};

type IP = {
  id: number;
  address: string;
  state: boolean;
};

const IpScreen: React.FC<IpScreenProps> = ({ navigation }) => {
  const fakeIP: IP[] = [
    { id: 1, address: '192.168.0.1', state: false },
    { id: 2, address: '192.168.0.2', state: false },
    { id: 3, address: '192.168.0.3', state: true },
    { id: 4, address: '192.168.0.9', state: false },
    { id: 5, address: '192.168.0.6', state: false }

  ];

  const renderItem = ({ item, index }: { item: IP, index: number }) => {
    const {id,  address, state} = item; // Extraire les propriétés de item
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...GlobalStyles.row, backgroundColor: 'blue' } : GlobalStyles.row;

    return (
      <View style={rowStyle}>
        <Text style={[GlobalStyles.columnIP, isEvenRow && { color: 'white' }]}>{address}</Text>
        {state ? <Text style={[GlobalStyles.columnIP, isEvenRow && { color: 'white' }]}>Bloquée</Text> 
        :<Text style={[GlobalStyles.columnIP, isEvenRow && { color: 'white' }]}>Non bloquée</Text>}
        {state ? 
          <TouchableOpacity style={{ ...GlobalStyles.button, justifyContent: 'center' }} onPress={() => handleStopContainer(item.id)}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Bloquer</Text>
          </TouchableOpacity>
          : <TouchableOpacity style={{ ...GlobalStyles.button, justifyContent: 'center' }} onPress={() => handleStopContainer(item.id)}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Débloquer</Text>
          </TouchableOpacity>}
      </View>
    );
  };


  const handleStopContainer = (containerId: number) => {
    // Implémentez votre logique pour arrêter le conteneur avec l'ID donné.
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title2}>Connexions</Text>
      <View style={GlobalStyles.row}>
        <Text style={GlobalStyles.columnHeaderIP}>Adressse IP</Text>
        <Text style={GlobalStyles.columnHeaderIP}>État</Text>
        <Text style={GlobalStyles.columnHeaderIP}>Action</Text>
      </View>
      <FlatList
        data={fakeIP}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <NavBar navigation={navigation} />
    </View>
  );
};
export default IpScreen;
