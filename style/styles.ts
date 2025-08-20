import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  header: TextStyle;
  input: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
  smallButton: ViewStyle;
  noTodoText: TextStyle;
  todoItem: ViewStyle;
  todoText: TextStyle;
  todoTime: TextStyle;
  deleteText: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1d62b7',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1d62b7',
    padding: 12,
    borderRadius: 8,

    marginBottom: 10,
  },
  button: {
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  smallButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#1d62b7',
    flex: 0.48,
  },
  noTodoText: {
    textAlign: 'center',
    color: '#555',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  todoText: {
    fontSize: 18,
    color: 'black',
  },
  todoTime: {
    fontSize: 12,
    color: '#555',
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
