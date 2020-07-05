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
  Button,
  Icon,
} from 'native-base';

const AddPwModal = ({ navigation }) => {
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const postInput = async () => {
    try {
      const response = await fetch('http://192.168.0.103:8000/passwords/', {
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
      <Content contentContainerStyle={{ alignItems: 'center' }}>
        <Form style={styles.form}>
          <Item inlineLabel>
            <Label>website</Label>
            <Input onChangeText={(text) => setWebsite(text)} />
          </Item>
          <Item inlineLabel>
            <Label>username</Label>
            <Input onChangeText={(text) => setUsername(text)}></Input>
          </Item>
          <Item inlineLabel>
            <Label>password</Label>
            <Input onChangeText={(text) => setPassword(text)} />
          </Item>
          <Button iconLeft onPress={postInput} style={styles.button}>
            <Icon
              website="ios-add"
              fontSize={30}
              style={{ color: '#1B9CFC' }}
            />
            <Text style={{ marginLeft: 30, fontSize: 20, color: '#1B9CFC' }}>
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

export default AddPwModal;
