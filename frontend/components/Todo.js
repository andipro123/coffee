import React from 'react';
import { Card, CardItem, Left, Text, Body, Right, CheckBox } from 'native-base';
import { View, StyleSheet } from 'react-native';

const Todo = ({ id, todo, isCompleted }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem style={styles.cardItemStyle} first>
          <Right>
            <Body>
              <Text style={[styles.textBody, { fontWeight: 'bold' }]}>
                {id}
              </Text>
              <Text style={[styles.textBody, styles.accentText]}>{todo}</Text>
            </Body>
            <CheckBox checked={isCompleted} />
          </Right>
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
    height: 140,
  },
  cardItemStyle: {
    flex: 1,
  },
  accentText: {
    color: '#5f27cd',
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  textBody: {
    paddingVertical: 5,
  },
});

export default Todo;
