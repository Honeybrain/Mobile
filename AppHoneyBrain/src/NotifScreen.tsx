
import React, { useState, useEffect, useContext } from 'react';
import { Modal, View, Text, FlatList, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from '../Nav/NavBar';
import useGetHistoryRPC from '../hooks/useGetHistoryRPC';
import { ThemeContext } from '../NightMode/ThemeContext';
import { useTranslation } from 'react-i18next';

// Vous devrez peut-être définir les types pour vos données
type HistoryEntry = {
  id: string;
  actionType: string;
  date: string;
  userId: string;
  description: string;
  isBlockedIP?: boolean; // Ajoutez d'autres champs nécessaires
};

type NotifyScreenProps = {
  navigation: any; // Spécifiez un type plus précis si possible
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
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
  popupContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

const NotifyScreen: React.FC<NotifyScreenProps> = ({ navigation }) => {
  const [data, setData] = useState<HistoryEntry[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const { t } = useTranslation();
  const { getHistory } = useGetHistoryRPC();
  const { isDarkMode } = useContext(ThemeContext);
  const backgroundColor = isDarkMode ? '#333' : '#f7f7f7';
  const textColor = isDarkMode ? 'white' : '#333';
  const cardBackgroundColor = isDarkMode ? '#1a1a1a' : '#fff';
  const searchInputBackgroundColor = isDarkMode ? '#555' : '#fff';
  const searchInputTextColor = isDarkMode ? 'white' : 'black';
  const itemBackgroundColor = isDarkMode ? '#1a1a1a' : '#fff';

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const historyData: HistoryEntry[] = await getHistory();
        setData(historyData.map((entry) => {
          if (entry.isBlockedIP) {
            setPopupContent(`IP Blocked: ${entry.description}`);
            setShowPopup(true);
          }
          return entry;
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération de l’historique :', error);
      }
    };
    fetchHistory();
  }, [getHistory]);

  const NotificationItem: React.FC<HistoryEntry> = ({ actionType, date, userId, description }) => {
    return (
      <View style={{ backgroundColor: itemBackgroundColor, padding: 15, borderRadius: 10, marginVertical: 5, flexDirection: 'row', alignItems: 'center', elevation: 3 }}>
        <Ionicons name="notifications-outline" size={24} color="#4caf50" />
        <View style={styles.notificationText}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: textColor }}>{actionType.toUpperCase()} - {userId}</Text>
          <Text style={{ color: textColor }}>{date}</Text>
          <Text style={{ color: textColor }}>{description}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <Text style={{ ...styles.title, color: textColor }}>{t('NotifScreen.HoneypotNotifications')}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <NotificationItem {...item} />}
        keyExtractor={(item) => `${item.id}-${item.date}`}
        ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: isDarkMode ? '#444' : '#e0e0e0', marginVertical: 10 }} />}
      />
      <Modal
        visible={showPopup}
        onRequestClose={() => setShowPopup(false)}
        animationType="slide"
        transparent={true}>
        <View style={styles.popupContainer}>
          <Text style={{ color: textColor }}>{popupContent}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowPopup(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
};

export default NotifyScreen;
