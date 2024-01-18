import React from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { ContainersStyles } from '../styles/ContainersStyles';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import useBlackListRPC from '../hooks/useBlackListRPC';
import { useTranslation } from "react-i18next";


type IpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Ip'>;
};

type IP = {
  id: number;
  address: string;
  state: boolean;
};

const IpScreen: React.FC<IpScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const fakeIP: IP[] = [
    { id: 1, address: '192.168.0.1', state: 'Activée' },
    { id: 2, address: '192.168.0.2', state: 'Activée' },
    { id: 3, address: '192.168.0.3', state: 'Désactivée' },
    { id: 4, address: '192.168.0.9', state: 'Activée' },
    { id: 5, address: '192.168.0.6', state: 'Désactivée' }

  ];
  const { blacklist } = useBlackListRPC();
  console.log("BlackList: ", blacklist);

  const renderItem = ({ item, index }: { item: IP, index: number }) => {
    const {id,  address, state} = item; // Extraire les propriétés de item
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...ContainersStyles.row, backgroundColor: 'blue' } : ContainersStyles.row;

    return (
      // <View style={rowStyle}>
      //   <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{address}</Text>
      //   {state ? <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{t('IPScreen.Blocked')}</Text> 
      //   :<Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{t('IPScreen.NotBlocked')}</Text>}
      //   {state ? 
      //     <TouchableOpacity style={{ ...ContainersStyles.button, justifyContent: 'center' }} onPress={() => handleStopContainer(item.id)}>
      //     <Text style={{ color: 'black', fontWeight: 'bold' }}>{t('IPScreen.Block')}</Text>
      //     </TouchableOpacity>
      //     : <TouchableOpacity style={{ ...ContainersStyles.button, justifyContent: 'center' }} onPress={() => handleStopContainer(item.id)}>
      //     <Text style={{ color: 'black', fontWeight: 'bold' }}>{t('IPScreen.Unblock')}</Text>
      //     </TouchableOpacity>}
      // </View>
      <View style={rowStyle}>
      <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{id}</Text>
      <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{address}</Text>
      <Text style={[ContainersStyles.column, isEvenRow && { color: 'white' }]}>{state}</Text>
    </View>
    );
  };


  return (
    <View style={ContainersStyles.container}>
      <Text style={ContainersStyles.title}>{t('IPScreen.Connexions')}</Text>
      <View style={ContainersStyles.row}>
        <Text style={ContainersStyles.columnHeader}>{"ID"}</Text>
        <Text style={ContainersStyles.columnHeader}>{t('IPScreen.IPAddress')}</Text>
        <Text style={ContainersStyles.columnHeader}>{t('IPScreen.State')}</Text>
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
