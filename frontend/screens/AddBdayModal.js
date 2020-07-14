import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
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
      const response = await fetch('http://192.168.0.104:8000/birthdays/', {
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
              Name
            </Label>
            <Input onChangeText={(text) => setName(text)} />
          </Item>
          <Item inlineLabel>
            <Label
              style={{ fontFamily: 'HoeflerText-Black', color: '#1B9CFC' }}
            >
              Date
            </Label>
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
              textStyle={{
                color: '#1B9CFC',
                fontSize: 18,
                fontFamily: 'HoeflerText-Black',
              }}
              placeHolderTextStyle={{ color: '#d3d3d3' }}
              onDateChange={(date) => setDate(date.toDateString())}
              disabled={false}
            />
          </Item>
          <Item inlineLabel>
            <Label
              style={{ fontFamily: 'HoeflerText-Black', color: '#1B9CFC' }}
            >
              Note
            </Label>
            <Textarea rowSpan={4} onChangeText={(text) => setNote(text)} />
          </Item>
          <Button iconLeft onPress={postInput} style={styles.button}>
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

export default AddBdayModal;
