import React from 'react';
import { View, StyleSheet, StatusBar, FlatList } from 'react-native';
import SubApp from '../components/SubApp';

const subapps = [
  {
    name: 'Birthdays',
    icon: 'birthday-cake',
  },
  {
    name: 'Passwords',
    icon: 'key',
  },
  {
    name: 'To-Dos',
    icon: 'list-ul',
  },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <FlatList
        data={subapps}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <SubApp navigation={navigation} name={item.name} icon={item.icon} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
