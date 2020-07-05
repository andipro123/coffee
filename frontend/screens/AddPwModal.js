import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const AddPwModal = ({ navigation }) => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postInput = async () => {
    try {
      const response = await fetch('http://192.168.0.102:8000/passwords/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          website: website,
          username: username,
          password: password,
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
      <Header style={styles.header}>
        <Title style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>
          Add a birthday
        </Title>
      </Header>
      <Content contentContainerStyle={{ alignItems: 'center' }}>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>website</Label>
            <Input onChangeText={(text) => setWebsite(text)} />
          </Item>
          <Item floatingLabel>
            <Label>username</Label>
            <Input onChangeText={(text) => setUsername(text)}></Input>
          </Item>
          <Item floatingLabel>
            <Label>password</Label>
            <Input onChangeText={(text) => setPassword(text)} />
          </Item>
          <Button iconLeft onPress={postInput} style={styles.button}>
            <Icon website="ios-add" style={{ color: '#5f27cd' }} />
            <Text style={{ marginLeft: 30, fontSize: 20, color: '#5f27cd' }}>
              Save
            </Text>
          </Button>
        </Form>
        <Text>
          {website} {username} {password}
        </Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 10,
    justifyContent: 'space-around',
  },
  form: {
    marginVertical: 40,
    width: 340,
    height: 350,
    paddingVertical: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#5f27cd',
  },
  header: {
    backgroundColor: '#5f27cd',
  },
  button: {
    alignSelf: 'center',
    marginVertical: 40,
    width: 130,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#5f27cd',
  },
});

export default AddPwModal;
