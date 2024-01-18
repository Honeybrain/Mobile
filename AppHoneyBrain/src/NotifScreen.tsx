import React, { useState, useContext } from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Colors } from '../styles/Colors';
import { useTranslation } from "react-i18next";
import { ThemeContext } from '../NightMode/ThemeContext';
import NavBar from '../Nav/NavBar';

// Définition des types et des données
type NotificationItem = {
  id: string;
  type: 'UnauthorizedAccess' | 'SuspiciousActivity' | 'PortScan' | 'BruteForce' | 'DoS';
  description: string;
  timestamp: string;
};

// Styles personnalisés
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7', // Fond clair
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  notificationText: {
    marginLeft: 15,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
});

// Composant de notification
const NotificationCard: React.FC<NotificationItem> = ({
  type,
  description,
  timestamp,
}) => (
  <View style={styles.notificationCard}>
    <Ionicons name={getIconName(type)} size={24} color={getIconColor(type)} />
    <View style={styles.notificationText}>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{type}</Text>
      <Text>{description}</Text>
      <Text style={{ marginTop: 10, color: '#888' }}>{timestamp}</Text>
    </View>
  </View>
);

// Fonctions pour obtenir le nom et la couleur de l'icône
function getIconName(type: NotificationItem['type']): string {
  switch (type) {
    case 'UnauthorizedAccess': return 'alert-circle';
    case 'SuspiciousActivity': return 'eye-off';
    case 'BruteForce': return 'hammer';
    default: return 'alert-circle-outline';
  }
}

function getIconColor(type: NotificationItem['type']): string {
  switch (type) {
    case 'UnauthorizedAccess': return '#e74c3c';
    case 'SuspiciousActivity': return '#f39c12';
    case 'PortScan': return '#3498db';
    case 'BruteForce': return '#2ecc71';
    case 'DoS': return '#9b59b6';
    default: return '#95a5a6';
  }
}

// Composant principal
const NotificationsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useTranslation();
  const sampleNotifications: NotificationItem[] = [
    { id: '1', type: 'UnauthorizedAccess', description: `${t('NotifScreen.AccessAttempt')} 192.168.1.4`, timestamp: '2023-10-10 14:30' },
    { id: '2', type: 'PortScan', description: `${t('NotifScreen.PortScanDetected')} 192.168.1.5`, timestamp: '2023-10-11 16:20' },
    { id: '3', type: 'BruteForce', description: `${t('NotifScreen.BrutForceAttack')} 22`, timestamp: '2023-10-12 09:15' },
    { id: '4', type: 'DoS', description: `${t('NotifScreen.DOSAttack')} 192.168.1.6`, timestamp: '2023-10-13 12:50' },
  ];

  const filteredNotifications = sampleNotifications.filter(notification =>
    notification.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    notification.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{t('NotifScreen.HoneypotNotifications')}</Text>
      <TextInput
        placeholder={t('NotifScreen.SearchInNotifications')}
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredNotifications}
        renderItem={({ item }) => <NotificationCard {...item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
     <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
