import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Body, Text, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const SubApp = ({ navigation, name }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem
          style={styles.cardItemStyle}
          button
          onPress={() => {
            navigation.navigate('Birthday');
          }}
        >
          <Icon
            name="birthday-cake"
            size={20}
            color="#5f27cd"
            style={styles.iconStyle}
          />
          <Text style={styles.textStyle}>{name}</Text>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardStyle: {
    padding: 10,
    width: 160,
    height: 160,
  },
  cardItemStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconStyle: {
    marginHorizontal: 10,
  },
});

export default SubApp;
