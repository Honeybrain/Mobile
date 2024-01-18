import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ContainersStyles} from '../styles/ContainersStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../Nav/navigationTypes';
import useContainersRPC from '../hooks/useContainersRPC';

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
  const { containers, getContainers } = useContainersRPC();
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      getContainers(); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, [getContainers]);
  
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    const { name, status, ip } = item; // Utilisez les nouvelles propriétés de vos données de conteneur
    
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...ContainersStyles.row, backgroundColor: 'blue' } : ContainersStyles.row;
  
    return (
      <View style={rowStyle}>
        <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{name}</Text>
        <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{status}</Text>
        <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{ip}</Text>
      </View>
    );
  };

  return (
    <View style={ContainersStyles.container}>
      <Text style={ContainersStyles.title2}>Liste des containers</Text>
      <View style={ContainersStyles.row}>
        <Text style={ContainersStyles.columnHeader}>Nom</Text>
        <Text style={ContainersStyles.columnHeader}>État</Text>
        <Text style={ContainersStyles.columnHeader}>Adresse IP</Text>
      </View>
      <FlatList
        data={containers}
        renderItem={renderItem}
        keyExtractor={(item) => item.name} // Utilisez 'name' comme clé unique
      />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default ContainerScreen;
