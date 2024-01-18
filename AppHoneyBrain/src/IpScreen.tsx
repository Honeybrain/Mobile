import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import NavBar from '../Nav/NavBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Nav/navigationTypes';
import useBlackListRPC from '../hooks/useBlackListRPC';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../NightMode/ThemeContext';
import { ContainersStyles } from '../styles/ContainersStyles';

type IpScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Ip'>;
};

const IpScreen: React.FC<IpScreenProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { blacklist } = useBlackListRPC();
  const { isDarkMode } = useContext(ThemeContext);

  const renderItem = ({ item, index }: { item: string, index: number }) => {
    const isEvenRow = index % 2 === 0;
    const rowStyle = isEvenRow
      ? { ...ContainersStyles.row, backgroundColor: isDarkMode ? '#333' : 'blue' }
      : { ...ContainersStyles.row, backgroundColor: isDarkMode ? '#333' : 'white' };
    const textStyle = { color: isDarkMode ? 'white' : (isEvenRow ? 'white' : 'black') };

    return (
      <View style={rowStyle}>
        <Text style={[ContainersStyles.columnIP, textStyle]}>{item}</Text>
      </View>
    );
  };

  const containerStyle = {
    ...ContainersStyles.container,
    backgroundColor: isDarkMode ? '#333' : ContainersStyles.container.backgroundColor,
  };

  return (
    <View style={containerStyle}>
      <Text style={[ContainersStyles.title, { color: isDarkMode ? 'white' : 'black' }]}>
        {t('IPScreen.Connexions')}
      </Text>
      <View style={ContainersStyles.row}>
        <Text style={[ContainersStyles.columnHeaderIP, { color: isDarkMode ? 'white' : 'black' }]}>
          {t('IPScreen.IPAddress')}
        </Text>
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
