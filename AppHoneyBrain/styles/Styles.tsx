import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    title: {
      fontSize: 24,
      marginTop: 50,
      fontWeight: 'bold',
      color: Colors.primary,
      marginBottom: 20,
    },
    title2: {
      fontSize: 24,
      marginTop: 100,
      fontWeight: 'bold',
      color: Colors.primary,
      marginBottom: 20,
    },
    button: {
      backgroundColor: Colors.secondary,
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: Colors.white,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    column: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: '25%', // Ajustez la flexibilité selon vos besoins
    },
    columnHeader: {
      marginVertical: 10,
      width: '25%',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    
    columnIP: {
      marginVertical: 10,
      width: '33%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    columnHeaderIP: {
      marginVertical: 10,
      width: '33%',
      fontWeight: 'bold',
      textAlign: 'center'
    },
  });