import React, { useContext } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ContainersStyles} from '../styles/ContainersStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../Nav/navigationTypes';
import useContainersRPC from '../hooks/useContainersRPC';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../NightMode/ThemeContext';
import { Styles } from '../styles/Styles';

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
  const { isDarkMode } = useContext(ThemeContext); // Utilisation du ThemeContext
  const containerBackgroundColor = isDarkMode ? '#333' : '#fff';
  const textColor = isDarkMode ? 'white' : 'black';
  console.log("Containers: ", containers);
  
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      getContainers(); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, [getContainers]);
  
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    const { name, status, ip } = item; // Utilisez les nouvelles propriétés de vos données de conteneur
    
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...Styles.row, backgroundColor: 'blue' } : Styles.row;
    const rowBackgroundColor = isEvenRow ? 'blue' : 'transparent';
    const rowTextColor = isEvenRow ? 'white' : textColor;
    
    return (
      <View style={[Styles.row, { backgroundColor: rowBackgroundColor }]}>
        <Text style={[Styles.column, isEvenRow && { color: rowTextColor }]}>{name}</Text>
        <Text style={[Styles.column, isEvenRow && { color: rowTextColor }]}>{status}</Text>
        <Text style={[Styles.column, isEvenRow && { color: rowTextColor }]}>{ip}</Text>
        <TouchableOpacity style={Styles.button}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[Styles.container, { backgroundColor: containerBackgroundColor }]}>
      <Text style={[Styles.title2, { color: textColor }]}>Liste des containers</Text>
      <View style={Styles.row}>
        <Text style={[Styles.columnHeader, { color: textColor }]}>Nom</Text>
        <Text style={[Styles.columnHeader, { color: textColor }]}>État</Text>
        <Text style={[Styles.columnHeader, { color: textColor }]}>Adresse IP</Text>
        <Text style={[Styles.columnHeader, { color: textColor }]}>Action</Text>
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
