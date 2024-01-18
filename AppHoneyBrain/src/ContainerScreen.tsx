import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { Styles } from '../styles/Styles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../Nav/navigationTypes';
import useContainersRPC from '../hooks/useContainersRPC';
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const fakeContainers: Container[] = [
    { id: 1, name: 'Container 1', state: 'Running', ipAddress: '192.168.0.1' },
    { id: 2, name: 'Container 2', state: 'Stopped', ipAddress: '192.168.0.2' },
    { id: 3, name: 'Container 3', state: 'Running', ipAddress: '192.168.0.3' },
    { id: 4, name: 'Container 4', state: 'Stopped', ipAddress: '192.168.0.2' },
    { id: 5, name: 'Container 5', state: 'Running', ipAddress: '192.168.0.3' },
    // Ajoutez autant de containers que nécessaire
  ];
  
  const { containers } = useContainersRPC();
  console.log("Containers: ", containers);

  const renderItem = ({ item, index }: { item: Container, index: number }) => {
    const { name, state, ipAddress } = item; // Extraire les propriétés de item
  
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...Styles.row, backgroundColor: 'blue' } : Styles.row;
  
    return (
      <View style={rowStyle}>
        <Text style={[Styles.column, isEvenRow && { color: 'white' }]}>{name}</Text>
        <Text style={[Styles.column, isEvenRow && { color: 'white' }]}>{state}</Text>
        <Text style={[Styles.column, isEvenRow && { color: 'white' }]}>{ipAddress}</Text>
        <TouchableOpacity style={Styles.button} onPress={() => handleStopContainer(item.id)}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  


  const handleStopContainer = (containerId: number) => {
    // Implémentez votre logique pour arrêter le conteneur avec l'ID donné.
  };

  return (
    <View style={Styles.container}>
    <Text style={Styles.title2}>{t('ContainerScreen.containerList')}</Text>
    <View style={Styles.row}>
      <Text style={Styles.columnHeader}>{t('ContainerScreen.Name')}</Text>
      <Text style={Styles.columnHeader}>{t('ContainerScreen.State')}</Text>
      <Text style={Styles.columnHeader}>{t('ContainerScreen.IPAddress')}</Text>
      <Text style={Styles.columnHeader}>{t('ContainerScreen.Action')}</Text>
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
