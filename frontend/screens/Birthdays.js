import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BdayCard from '../components/BdayCard';
import { Button, Icon, Text } from 'native-base';
import AddBdayModal from './AddBdayModal';

const Birthdays = ({ navigation }) => {
  const [birthdayList, setBirthdayList] = useState([]);

  const loadBirthdays = useCallback(async () => {
    const result = await fetch('http://192.168.0.105:8000/').catch((err) =>
      console.log(err),
    );

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
        iconLeft
        onPress={() => navigation.navigate('AddBdayModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#5f27cd', fontSize: 25 }} />
        <Text style={{ color: '#5f27cd' }}>Add a birthday</Text>
      </Button>
      <FlatList
        data={birthdayList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BdayCard name={item.name} note={item.note} date={item.date} />
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

export default Birthdays;
