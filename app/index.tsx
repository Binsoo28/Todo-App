import { styles } from '@/style/styles';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      time: new Date().toLocaleString(),
      completed: false,
    };
    setListTodo([newTodo, ...listTodo]);
    setTodo('');
  };

  const handleDeleteTodo = (id: number) => {
    setListTodo(listTodo.filter((t) => t.id !== id));
  };

  const toggleCompleteTodo = (id: number) => {
    setListTodo(listTodo.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const toggleAllCompleted = () => {
    const hasUncompleted = listTodo.some((t) => !t.completed);
    setListTodo(listTodo.map((t) => ({ ...t, completed: hasUncompleted })));
  };

  const clearAll = () => setListTodo([]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Todo App</Text>

      {/* Form */}
      <View style={{ marginVertical: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter todo..."
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: todo ? '#1d62b7' : '#ccc' }]}
          onPress={handleAddTodo}
          disabled={!todo}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      {listTodo.length > 0 && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
          <TouchableOpacity style={styles.smallButton} onPress={toggleAllCompleted}>
            <Text style={styles.buttonText}>Toggle All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.smallButton, { backgroundColor: '#ff4d4d' }]}
            onPress={clearAll}>
            <Text style={styles.buttonText}>Clear All</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* List */}
      <ScrollView style={{ marginTop: 10, maxHeight: '60%' }}>
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
                padding: 15,
                marginBottom: 10,
                backgroundColor: item.completed ? '#d9fdd3' : '#f2f2f2',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
              }}>
              <TouchableOpacity onPress={() => toggleCompleteTodo(item.id)} style={{ flex: 1 }}>
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
                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>Delete</Text>
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
