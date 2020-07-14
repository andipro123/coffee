import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  DatePicker,
  Textarea,
  Button,
  Icon,
} from 'native-base';

const AddTodoModal = ({ navigation }) => {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState('');

  const postInput = async () => {
    try {
      const response = await fetch('http://192.168.0.104:8000/todos/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          id: id,
          todoText: todo,
          isCompleted: false,
        }),
      });

      if (response.status === 201) {
        console.log('Done!');
        navigation.goBack(null);
      } else {
        console.log(response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container style={styles.container}>
      {/* <Header style={styles.header}>
        <Title style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
          Add a birthday
        </Title>
      </Header> */}
      <Content
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Form style={styles.form}>
          <Item inlineLabel>
            <Label
              style={{ fontFamily: 'HoeflerText-Black', color: '#1B9CFC' }}
            >
              Todo
            </Label>
            <Textarea rowSpan={4} onChangeText={(text) => setTodo(text)} />
          </Item>
          <Text>
            {id} {todo}
          </Text>
          <Button
            iconLeft
            onPress={() => {
              setId(id + 1);
              postInput();
            }}
            style={styles.button}
          >
            <Icon name="ios-add" style={{ color: '#1B9CFC' }} />
            <Text
              style={{
                marginLeft: 30,
                fontSize: 20,
                color: '#1B9CFC',
                fontFamily: 'HoeflerText-Black',
              }}
            >
              Add
            </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  },
  form: {
    marginTop: 250,
    width: 360,
    height: 410,
    paddingVertical: 20,
    borderRadius: 20,
    borderColor: '#1B9CFC',
    backgroundColor: '#fff',
  },
  button: {
    alignSelf: 'center',
    marginTop: 100,
    width: 130,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#1B9CFC',
  },
});

export default AddTodoModal;
