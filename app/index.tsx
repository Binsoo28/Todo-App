import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../style/styles';

interface Todo {
  id: number;
  name: string;
  time: string;
  completed: boolean;
}

export default function App() {
  const [todo, setTodo] = useState('');
  const [listTodo, setListTodo] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (!todo) return;
    const newTodo: Todo = {
      id: Date.now(),
      name: todo,
      time: new Date().toLocaleString(), // ngày + giờ đầy đủ
      completed: false,
    };
    setListTodo([newTodo, ...listTodo]); // thêm lên đầu danh sách
    setTodo('');
  };

  const handleDeleteTodo = (id: number) => {
    setListTodo(listTodo.filter((t) => t.id !== id));
  };

  const toggleCompleteTodo = (id: number) => {
    setListTodo(listTodo.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Todo App</Text>

      {/* Form */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter todo..."
          value={todo}
          onChangeText={(value) => setTodo(value)}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: todo ? '#1d62b7' : '#ccc' }]}
          onPress={handleAddTodo}
          disabled={!todo}>
          <Text style={{ color: 'white', fontSize: 18, textAlign: 'center' }}>Add Todo</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <ScrollView style={{ marginTop: 20, maxHeight: '60%' }}>
        {listTodo.length === 0 ? (
          <Text style={{ textAlign: 'center', color: '#555' }}>No todos yet</Text>
        ) : (
          listTodo.map((item) => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                marginBottom: 10,
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
              }}>
              <TouchableOpacity onPress={() => toggleCompleteTodo(item.id)}>
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: item.completed ? 'line-through' : 'none',
                    color: item.completed ? 'gray' : 'black',
                  }}>
                  {item.name}
                </Text>
                <Text style={{ fontSize: 12, color: '#555' }}>{item.time}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

export const options = {
  headerShown: false,
};
