import React, { useState, useEffect, useContext } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useTranslation } from "react-i18next";
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '../Nav/NavBar';
import useGetHistoryRPC from '../hooks/useGetHistoryRPC';
import { ThemeContext } from '../NightMode/ThemeContext'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
    marginTop: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  historyItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  backArrow: {
    position: 'absolute',
    top: 42,
    left: 20,
  },
});

const Colors = {
  danger: '#ff5252',
  safe: '#4caf50',
};

type ActionItem = {
  id: string;
  name: string;
  date: string;
  time: string;
  user: string;
  description: string;
  status: 'safe' | 'dangerous';
};


const HistoryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [data, setData] = useState<ActionItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const { t } = useTranslation();
  const { getHistory } = useGetHistoryRPC();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyData = await getHistory();
        setData(historyData.map((entry: { id: any; actionType: any; date: string; userId: any; description: any; }) => ({
          // Convertissez les données de l'entrée historique au format ActionItem
          id: entry.id,
          name: entry.actionType,
          date: entry.date.split(' ')[0], // Supposant que la date et l'heure sont séparées par un espace
          time: entry.date.split(' ')[1],
          user: entry.userId, // Vous devrez peut-être adapter ceci en fonction de votre structure de données
          description: entry.description,
          status: 'safe' // À définir en fonction de votre logique
        })));
      } catch (error) {
        console.error('Erreur lors de la récupération de l’historique :', error);
      }
    };

    
  

    fetchHistory();
  }, [getHistory]);

  const backgroundColor = isDarkMode ? '#333' : '#f0f2f5';
  const textColor = isDarkMode ? 'white' : '#1a1a1a';
  const itemBackgroundColor = isDarkMode ? '#1a1a1a' : '#fff';
  const inputBackgroundColor = isDarkMode ? '#555' : '#fff';
  const inputTextColor = isDarkMode ? 'white' : 'black';
  const [searchTerm, setSearchTerm] = useState(''); // Ajouté pour la recherche

  const HistoryItem: React.FC<ActionItem> = ({ name, date, time, user, description, status }) => {
    return(
      <View style={{ backgroundColor: itemBackgroundColor, padding: 15, borderRadius: 10, marginVertical: 5, flexDirection: 'row', alignItems: 'center', elevation: 3 }}>
        <Ionicons
          name={status === 'dangerous' ? 'alert-circle' : 'checkmark-circle'}
          size={24}
          color={status === 'dangerous' ? '#ff5252' : '#4caf50'}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: textColor }}>{name.toUpperCase()} - {user}</Text>
          <Text style={{ color: textColor }}>{date} - {time}</Text>
          <Text style={{ color: textColor }}>{description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: backgroundColor }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: textColor, marginBottom: 12, marginTop: 12, textAlign: 'center' }}>{t('HistoryScreen.ActionHistory')}</Text>
      
      {/* Ajout d'un champ de recherche (facultatif) */}
      <TextInput
        placeholder={t('HistoryScreen.SearchByAction')}
        style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 20, marginBottom: 15, backgroundColor: inputBackgroundColor, color: inputTextColor }}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))}
        renderItem={({ item }) => <HistoryItem {...item} />}
        keyExtractor={(item) => `${item.id}-${item.date}-${item.time}`}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: isDarkMode ? '#444' : '#e0e0e0', marginVertical: 10 }} />}
      />
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};



export default HistoryScreen;

