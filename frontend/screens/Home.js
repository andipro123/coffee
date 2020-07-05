import React from 'react';
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import SubApp from '../components/SubApp';

const subapps = [
  {
    name: 'Birthdays',
    img: require('../assets/cake.png'),
  },
  {
    name: 'Passwords',
    img: require('../assets/password.png'),
  },
  {
    name: 'Todos',
    img: require('../assets/todo.png'),
  },
];

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={{ width: 400 }}
      resizeMode={'contain'}
    >
      <FlatList
        data={subapps}
        keyExtractor={(item) => item.name}
        style={{ height: '100%' }}
        renderItem={({ item }) => (
          <SubApp navigation={navigation} name={item.name} img={item.img} />
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default Home;
