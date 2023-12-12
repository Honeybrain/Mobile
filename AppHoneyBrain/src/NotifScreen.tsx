import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Colors } from '../styles/Colors';
import { useTranslation } from "react-i18next";


type NotificationItem = {
  id: string;
  type: 'UnauthorizedAccess' | 'SuspiciousActivity' | 'PortScan' | 'BruteForce' | 'DoS';
  description: string;
  timestamp: string;
};

const sampleNotifications: NotificationItem[] = [
  { id: '1', type: 'UnauthorizedAccess', description: 'Tentative d\'accès depuis l\'IP 192.168.1.4', timestamp: '2023-10-10 14:30' },
  { id: '2', type: 'PortScan', description: 'Scan de port détecté depuis l\'IP 192.168.1.5', timestamp: '2023-10-11 16:20' },
  { id: '3', type: 'BruteForce', description: 'Attaque de force brute sur le port 22', timestamp: '2023-10-12 09:15' },
  { id: '4', type: 'DoS', description: 'Attaque DoS détectée depuis l\'IP 192.168.1.6', timestamp: '2023-10-13 12:50' },
];

const NotificationCard: React.FC<NotificationItem> = ({ type, description, timestamp }) => (
  <View style={{
    backgroundColor: Colors.lightGray,
    padding: 15,
    borderRadius: 5,
    marginVertical: 5
  }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{type}</Text>
    <Text>{description}</Text>
    <Text style={{ color: Colors.darkGray, marginTop: 10 }}>{timestamp}</Text>
  </View>
);

const NotificationsScreen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ ...GlobalStyles.container, padding: 20 }}>
        <Text style={GlobalStyles.title}>{t('NotifScreen.HoneypotNotification')}</Text>

        <FlatList
          data={sampleNotifications}
          renderItem={({ item }) => <NotificationCard {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;