import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import useContainersRPC from '../hooks/useContainersRPC';
import { ThemeContext } from '../NightMode/ThemeContext';
import { ContainersStyles } from '../styles/ContainersStyles';

type ContainerScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Container'>;
};

const ContainerScreen: React.FC<ContainerScreenProps> = ({ navigation }) => {
  const { containers, getContainers } = useContainersRPC();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getContainers(); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, [getContainers]);
  
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    const { name, status, ip } = item;
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow 
      ? { ...ContainersStyles.row, backgroundColor: isDarkMode ? '#333' : 'blue' } 
      : { ...ContainersStyles.row, backgroundColor: isDarkMode ? '#333' : 'white' };
    const textStyle = { color: isDarkMode ? 'white' : (isEvenRow ? 'white' : 'black') };
  
    return (
      <View style={rowStyle}>
        <Text style={[ContainersStyles.column, textStyle]}>{name}</Text>
        <Text style={[ContainersStyles.column, textStyle]}>{status}</Text>
        <Text style={[ContainersStyles.column, textStyle]}>{ip}</Text>
      </View>
    );
  };

  const containerStyle = {
    ...ContainersStyles.container,
    backgroundColor: isDarkMode ? '#333' : ContainersStyles.container.backgroundColor,
  };

  return (
    <View style={containerStyle}>
      <Text style={[ContainersStyles.title2, { color: isDarkMode ? 'white' : 'black' }]}>Liste des containers</Text>
      <View style={ContainersStyles.row}>
        <Text style={[ContainersStyles.columnHeader, { color: isDarkMode ? 'white' : 'black' }]}>Nom</Text>
        <Text style={[ContainersStyles.columnHeader, { color: isDarkMode ? 'white' : 'black' }]}>État</Text>
        <Text style={[ContainersStyles.columnHeader, { color: isDarkMode ? 'white' : 'black' }]}>Adresse IP</Text>
      </View>
      <FlatList
        data={containers}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default ContainerScreen;
