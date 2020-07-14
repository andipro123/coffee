import React, { useState, useEffect, useCallback } from 'react';
import { ImageBackground, View, FlatList, StyleSheet } from 'react-native';
// import Todo from '../components/Todo';
import Todo from '../components/Todo';
import { Button, Icon, Text } from 'native-base';

const Todos = ({ navigation }) => {
  const [todoList, setTodoList] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadTodos = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.104:8000/todos/',
    ).catch((err) => console.log(err));

    const list = await result.json();

    if (result.ok) {
      setTodoList(list);
    } else {
      console.log('Error with the request');
    }
  }, []);

  useEffect(() => {
    loadTodos();
  }, []);

  const refreshHandler = () => {
    setIsRefreshing(true);
    loadTodos();
    setIsRefreshing(false);
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ width: 400 }}
      resizeMode={'cover'}
    >
      <Button
        iconLeft
        onPress={() => navigation.navigate('AddTodoModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#1B9CFC', fontSize: 25 }} />
        <Text style={{ color: '#1B9CFC', fontSize: 18 }}>Add a Todo</Text>
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
        refreshing={isRefreshing}
        onRefresh={refreshHandler}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 5,
    marginHorizontal: 10,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

export default Todos;
