import React, { useCallback, useState, useEffect } from 'react';
import { Card, CardItem, Left, Text, Body, Right, CheckBox } from 'native-base';
import { View, StyleSheet } from 'react-native';

const Todo = ({ id, todo, isCompleted }) => {
  const [check, setCheck] = useState(isCompleted);

  const updateTodo = useCallback(async () => {
    let response = await fetch(
      'http://192.168.0.103:8000/todos/' + id.toString() + '/',
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          todoText: todo,
          isCompleted: !check,
        }),
      },
    ).catch((err) => console.log(err));

    if (response.status === 201) {
      console.log('Done!');
    } else {
      console.log(response.status);
    }

    response = await fetch(
      'http://192.168.0.103:8000/todos/' + id.toString() + '/',
      {
        method: 'DELETE',
      },
    ).catch((err) => console.log(err));

    if (response.status === 204) {
      console.log('Deleted!');
    } else {
      console.log(response.status);
    }
  }, [check]);

  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem style={styles.cardItemStyle} first>
          <Text style={[styles.textBody, styles.accentText]}>{todo}</Text>
          <Right>
            <CheckBox
              checked={check}
              style={{ marginRight: 0 }}
              onPress={() => {
                setCheck(!check);
                updateTodo();
              }}
            />
          </Right>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 20,
  },
  cardStyle: {
    width: 310,
    height: 80,
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  cardItemStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  accentText: {
    color: '#1B9CFC',
  },
  textBody: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Todo;
