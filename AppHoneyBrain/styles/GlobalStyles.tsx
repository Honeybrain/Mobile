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
  //HistoryPage 
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
    padding: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.secondary,
  },
  filterButtonActive: {
    backgroundColor: Colors.tertiary,
  },
  filterButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: Colors.lightGray,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  listItemDangerous: {
    backgroundColor: '#ffe0e0',
  },
  listItemSafe: {
    backgroundColor: '#e0ffe0',
  },
  listItemText: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkText,
  },
  listItemSubText: {
    color: Colors.darkGray,
  },
});