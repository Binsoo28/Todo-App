// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1d62b7',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 40,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1d62b7',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontSize: 18,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#1d62b7',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
    maxWidth: 100,
  },
  container: {
    marginTop: 50,
  },
});
