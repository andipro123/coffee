import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import SubApp from '../components/SubApp';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <SubApp navigation={navigation} name={'Birthdays'} />
      <SubApp navigation={navigation} name={'To-Dos'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Home;
