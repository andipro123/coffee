import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
// import Todo from '../components/Todo';
import Todo from '../components/Todo';
import { Button, Icon, Text } from 'native-base';

const Passwords = ({ navigation }) => {
  const [todoList, setTodoList] = useState([]);

  const loadTodos = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.102:8000/todos/',
    ).catch((err) => console.log(err));

    const list = await result.json();

    if (result.ok) {
      setTodoList(list);
      console.log(todoList);
    } else {
      console.log('Error with the request');
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        transparent
        iconLeft
        onPress={() => navigation.navigate('AddPwModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#5f27cd', fontSize: 25 }} />
        <Text style={{ color: '#5f27cd' }}>Add a todo</Text>
      </Button>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Todo
            id={item.id}
            todo={item.todoText}
            isCompleted={item.isCompleted}
          />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

const Separator = () => {
  return (
    <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#5f27cd',
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  buttonStyle: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
  },
});

export default Passwords;
