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

const IpScreen: React.FC<IpScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { blacklist } = useBlackListRPC();

  const renderItem = ({ item, index }: { item: string, index: number }) => {
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow ? { ...ContainersStyles.row, backgroundColor: 'blue' } : ContainersStyles.row;

    return (
      <View style={rowStyle}>
        <Text style={[ContainersStyles.columnIP, isEvenRow && { color: 'white' }]}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={ContainersStyles.container}>
      <Text style={ContainersStyles.title}>{t('IPScreen.Connexions')}</Text>
      <View style={ContainersStyles.row}>
        <Text style={ContainersStyles.columnHeaderIP}>{t('IPScreen.IPAddress')}</Text>
      </View>
      <FlatList
        data={blacklist}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <NavBar navigation={navigation} />
    </View>
  );
};
export default IpScreen;
