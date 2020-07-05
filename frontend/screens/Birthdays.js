import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import BdayCard from '../components/BdayCard';
import { Button, Icon, Text } from 'native-base';

const Birthdays = ({ navigation }) => {
  const [birthdayList, setBirthdayList] = useState([]);

  const loadBirthdays = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.102:8000/birthdays/',
    ).catch((err) => console.log(err));

    const list = await result.json();

    if (result.ok) {
      setBirthdayList(list);
    } else {
      console.log('Error with the request');
    }
  }, []);

  useEffect(() => {
    loadBirthdays();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ width: 400 }}
      resizeMode={'cover'}
    >
      <Button
        iconLeft
        onPress={() => navigation.navigate('AddBdayModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#1B9CFC', fontSize: 25 }} />
        <Text style={{ color: '#1B9CFC', fontSize: 18 }}>Add a birthday</Text>
      </Button>
      <FlatList
        data={birthdayList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <BdayCard name={item.name} note={item.note} date={item.date} />
        )}
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

export default Birthdays;
