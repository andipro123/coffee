import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import SubApp from '../components/SubApp';

class Home extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <SubApp name={'Aniket'} />
      </View>
    );
  }
}

export default Home;
