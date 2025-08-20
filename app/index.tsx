import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style/styles';

interface Todo {
  id: number;
  name: string;
}
export default function App() {
  const [todo, setTodo] = useState('');
  const [listTodo, setListTodo] = useState<Todo[]>([]);
  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Todo App</Text>
        {/* Form */}
        <View>
          <TextInput style={styles.input} onChangeText={(value) => setTodo(value)}></TextInput>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: todo ? '#1d62b7' : '#ccc' }]}
            onPress={() => {
              const newTodo = { id: Date.now(), name: todo };
              setListTodo([...listTodo, newTodo]);
              setTodo('');
            }}
            disabled={!todo}>
            <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Add Todo</Text>
          </TouchableOpacity>
          <Text>Form</Text>
        </View>
        {/* List */}
        <View>
          <Text>List Todo:{todo}</Text>
          <Text>{JSON.stringify(listTodo)}</Text>
        </View>
      </View>
    </>
  );
}

export const options = {
  headerShown: false,
};
