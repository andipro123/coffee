import React from 'react';
import { Thumbnail, Card, CardItem, Left, Text, Body } from 'native-base';
import { View, StyleSheet } from 'react-native';

const BdayCard = ({ name, date, note }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem style={styles.cardItemStyle} first>
          <Left>
            <Thumbnail
              source={require('../assets/doctor.png')}
              style={styles.thumbnail}
            />
            <Body>
              <Text style={[styles.textBody, { fontWeight: 'bold' }]}>
                {name}
              </Text>
              <Text style={[styles.textBody, styles.accentText]}>{date}</Text>
              <Text note style={styles.textBody}>
                {note}
              </Text>
            </Body>
          </Left>
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

export default BdayCard;
