import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PwCard from '../components/PwCard';
import { Button, Icon, Text } from 'native-base';

const Passwords = ({ navigation }) => {
  const [passwordList, setPasswordList] = useState([]);

  const loadPasswords = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.102:8000/passwords/',
    ).catch((err) => console.log(err));

    const list = await result.json();

    if (result.ok) {
      setPasswordList(list);
      console.log(passwordList);
    } else {
      console.log('Error with the request');
    }
  }, []);

  useEffect(() => {
    loadPasswords();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        transparent
        iconLeft
        onPress={() => navigation.navigate('AddPwModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#5f27cd', fontSize: 25 }} />
        <Text style={{ color: '#5f27cd' }}>Add a password</Text>
      </Button>
      <FlatList
        data={passwordList}
        keyExtractor={(item) => item.website}
        renderItem={({ item }) => (
          <PwCard
            website={item.website}
            username={item.username}
            password={item.password}
          />
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

export default Passwords;
