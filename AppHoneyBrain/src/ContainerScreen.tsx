import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../Nav/navigationTypes';

type ContainerScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Container'>;
};

type Container = {
  id: number;
  name: string;
  state: string;
  ipAddress: string;
};

const ContainerScreen: React.FC<ContainerScreenProps> = ({ navigation }) => {
  const fakeContainers: Container[] = [
    { id: 1, name: 'Container 1', state: 'Running', ipAddress: '192.168.0.1' },
    { id: 2, name: 'Container 2', state: 'Stopped', ipAddress: '192.168.0.2' },
    { id: 3, name: 'Container 3', state: 'Running', ipAddress: '192.168.0.3' },
    { id: 4, name: 'Container 4', state: 'Stopped', ipAddress: '192.168.0.2' },
    { id: 5, name: 'Container 5', state: 'Running', ipAddress: '192.168.0.3' },
    // Ajoutez autant de containers que nécessaire
  ];

  const renderItem = ({ item, index }: { item: Container, index: number }) => {
    const { name, state, ipAddress } = item; // Extraire les propriétés de item
  
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...GlobalStyles.row, backgroundColor: 'blue' } : GlobalStyles.row;
  
    return (
      <View style={rowStyle}>
        <Text style={[GlobalStyles.column, isEvenRow && { color: 'white' }]}>{name}</Text>
        <Text style={[GlobalStyles.column, isEvenRow && { color: 'white' }]}>{state}</Text>
        <Text style={[GlobalStyles.column, isEvenRow && { color: 'white' }]}>{ipAddress}</Text>
        <TouchableOpacity style={GlobalStyles.button} onPress={() => handleStopContainer(item.id)}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  


  const handleStopContainer = (containerId: number) => {
    // Implémentez votre logique pour arrêter le conteneur avec l'ID donné.
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title2}>Liste des containers</Text>
      <View style={GlobalStyles.row}>
        <Text style={GlobalStyles.columnHeader}>Nom</Text>
        <Text style={GlobalStyles.columnHeader}>État</Text>
        <Text style={GlobalStyles.columnHeader}>Adresse IP</Text>
        <Text style={GlobalStyles.columnHeader}>Action</Text>
      </View>
      <FlatList
        data={fakeContainers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default ContainerScreen;
