import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

const initialData: ActionItem[] = [
  { id: '1', name: 'Login', date: '2023-03-15', time: '09:45', user: 'Alice', description: 'Successful login attempt', status: 'safe' },
  { id: '2', name: 'Data Access', date: '2023-03-16', time: '10:15', user: 'Bob', description: 'Accessed confidential data', status: 'safe' },
  { id: '3', name: 'Failed Login', date: '2023-03-17', time: '11:30', user: 'Charlie', description: 'Failed login attempt', status: 'dangerous' },
  { id: '4', name: 'Data Modification', date: '2023-03-18', time: '13:20', user: 'Dana', description: 'Modified customer data', status: 'safe' },
  { id: '5', name: 'Unauthorized Access', date: '2023-03-19', time: '15:00', user: 'Eve', description: 'Attempted unauthorized access', status: 'dangerous' },
];

const HistoryItem: React.FC<ActionItem> = ({ name, date, time, user, description, status }) => (
  <View style={styles.historyItem}>
    <Ionicons
      name={status === 'dangerous' ? 'alert-circle' : 'checkmark-circle'}
      size={24}
      color={status === 'dangerous' ? Colors.danger : Colors.safe}
    />
    <View style={{ marginLeft: 10 }}>
      <Text style={styles.itemText}>{name.toUpperCase()} - {user}</Text>
      <Text>Date: {date} - Time: {time}</Text>
      <Text>Description: {description}</Text>
    </View>
  </View>
);

const HistoryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [data, setData] = useState<ActionItem[]>(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Historique des Actions</Text>
      <TextInput
        placeholder="Rechercher par action..."
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
    </SafeAreaView>
  );
};

export default HistoryScreen;
