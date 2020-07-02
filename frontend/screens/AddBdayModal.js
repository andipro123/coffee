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

const AddBdayModal = ({ navigation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const postInput = async () => {
    try {
      const response = await fetch('http://192.168.0.105:8000/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          date: date,
          note: note,
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
          <Item inlineLabel>
            <Label>Name</Label>
            <Input onChangeText={(text) => setName(text)} />
          </Item>
          <Item inlineLabel>
            <Label>Date</Label>
            <DatePicker
              defaultDate={new Date(2020, 7, 2)}
              minimumDate={new Date(1890, 1, 1)}
              maximumDate={new Date(2020, 7, 2)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{ color: '#5f27cd', fontSize: 20 }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={(date) => setDate(date.toDateString())}
              disabled={false}
            />
          </Item>
          <Item inlineLabel>
            <Label>Note</Label>
            <Textarea rowSpan={4} onChangeText={(text) => setNote(text)} />
          </Item>
          <Button iconLeft onPress={postInput} style={styles.button}>
            <Icon name="ios-add" style={{ color: '#5f27cd' }} />
            <Text style={{ marginLeft: 30, fontSize: 20, color: '#5f27cd' }}>
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

export default AddBdayModal;
