import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Colors } from '../styles/Colors';
import { useTranslation } from "react-i18next";


type ActionItem = {
  id: string;
  name: string;
  date: string;
  time: string;
  status: 'safe' | 'dangerous';
};

const initialData: ActionItem[] = [
  { id: '1', name: 'login', date: '2023-10-10', time: '14:30', status: 'safe' },
  { id: '2', name: 'attack', date: '2023-10-11', time: '16:20', status: 'dangerous' },
  { id: '3', name: 'login', date: '2023-10-12', time: '09:15', status: 'safe' },
  { id: '4', name: 'attack', date: '2023-10-13', time: '12:50', status: 'dangerous' },
];

const HistoryItem: React.FC<ActionItem> = ({ name, date, time, status }) => (
  <View style={{
    backgroundColor: status === 'dangerous' ? '#ffe0e0' : '#e0ffe0',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5
  }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name.toUpperCase()}</Text>
    <Text>Date: {date} - Time: {time}</Text>
  </View>
);

const HistoryScreen: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<ActionItem[]>(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'attack' | 'dangerous'>('all');

  const filteredData = data.filter((item) => {
    if (searchTerm && !item.name.includes(searchTerm)) return true;
    if (filter === 'attack' && item.name !== 'attack') return false;
    if (filter === 'dangerous' && item.status !== 'dangerous') return false;

    return true;
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ ...GlobalStyles.container, padding: 20 }}>
        <Text style={GlobalStyles.title}>{t('History.ActionHistory')}</Text>

        <TextInput
          placeholder="Rechercher par action..."
          style={GlobalStyles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
          <TouchableOpacity
            style={{ ...GlobalStyles.button, flex: 1, marginHorizontal: 5 }}
            onPress={() => setFilter('all')}
          >
            <Text style={GlobalStyles.buttonText}>{t('History.All')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...GlobalStyles.button, flex: 1, marginHorizontal: 5 }}
            onPress={() => setFilter('attack')}
          >
            <Text style={GlobalStyles.buttonText}>{t('History.Attacks')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...GlobalStyles.button, flex: 1, marginHorizontal: 5 }}
            onPress={() => setFilter('dangerous')}
          >
            <Text style={GlobalStyles.buttonText}>{t('History.Danger')}</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredData}
          renderItem={({ item }) => <HistoryItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HistoryScreen;