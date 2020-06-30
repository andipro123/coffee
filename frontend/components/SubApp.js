import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';

const SubApp = ({ navigation, name }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem
          style={styles.cardItemStyle}
          button
          onPress={() => alert(`Hello there ${name}`)}
        >
          <Body>
            <Text>{name}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  cardStyle: {
    width: 350,
    height: 200,
  },
  cardItemStyle: {
    flex: 1,
  },
});

export default SubApp;
