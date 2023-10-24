import { StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 10,
  },
  button: {
    width: '80%',
    height: 45,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
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