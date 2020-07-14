import React, { useState, useEffect, useCallback } from 'react';
import { ImageBackground, FlatList, StyleSheet } from 'react-native';
import PwCard from '../components/PwCard';
import { Button, Icon, Text } from 'native-base';

const Passwords = ({ navigation }) => {
  const [passwordList, setPasswordList] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadPasswords = useCallback(async () => {
    const result = await fetch(
      'http://192.168.0.104:8000/passwords/',
    ).catch((err) => console.log(err));

    const list = await result.json();

    if (result.ok) {
      setPasswordList(list);
    } else {
      console.log('Error with the request');
      navigation.navigate('Home');
    }
  }, []);

  useEffect(() => {
    loadPasswords();
  }, []);

  const refreshHandler = () => {
    setIsRefreshing(true);
    loadPasswords();
    setIsRefreshing(false);
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ width: 400 }}
      resizeMode={'cover'}
    >
      <Button
        iconLeft
        onPress={() => navigation.navigate('AddPwModal')}
        style={styles.buttonStyle}
      >
        <Icon name="ios-add" style={{ color: '#1B9CFC', fontSize: 25 }} />
        <Text style={{ color: '#1B9CFC', fontSize: 18 }}>Add a password</Text>
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
        refreshing={isRefreshing}
        onRefresh={refreshHandler}
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

export default Passwords;
