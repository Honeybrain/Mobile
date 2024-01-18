import React, { useState, useEffect } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { useTranslation } from "react-i18next";
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '../Nav/NavBar';
import useGetHistoryRPC from '../hooks/useGetHistoryRPC';

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


const HistoryItem: React.FC<ActionItem> = ({ name, date, time, user, description, status }) => {
  const { t } = useTranslation();

  return(
    <View style={styles.historyItem}>
      <Ionicons
        name={status === 'dangerous' ? 'alert-circle' : 'checkmark-circle'}
        size={24}
        color={status === 'dangerous' ? Colors.danger : Colors.safe}
      />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.itemText}>{name.toUpperCase()} - {user}</Text>
        <Text>{t('HistoryScreen.Date:')}{date} - {t('HistoryScreen.Time:')}{time}</Text>
        <Text>{t('HistoryScreen.Description:')} {description}</Text>
      </View>
    </View>
  )
};

const HistoryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [data, setData] = useState<ActionItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();
  const { getHistory } = useGetHistoryRPC();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyData = await getHistory();
        setData(historyData.map(entry => ({
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

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('HistoryScreen.ActionHistory')}</Text>
      <TextInput
        placeholder={t('HistoryScreen.SearchByAction')}
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <HistoryItem {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default HistoryScreen;
