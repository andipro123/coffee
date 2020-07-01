import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BdayCard from '../components/BdayCard';
import { Button, Icon, Text } from 'native-base';
import AddBdayModal from './AddBdayModal';

const Birthday = ({ navigation }) => {
  const [birthdayList, setBirthdayList] = useState([]);

  const loadBirthdays = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.104:8000/birthdays',
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
    <View style={styles.container}>
      <Button
        transparent
        onPress={() => navigation.navigate('AddBdayModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#5f27cd' }} />
        <Text style={{ fontSize: 14, color: '#5f27cd' }}>Add Birthday</Text>
      </Button>
      <FlatList
        data={birthdayList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BdayCard name={item.name} note={item.note} date={item.date} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  buttonStyle: {
    width: 240,
  },
});

export default Birthday;
