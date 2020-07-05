import React from 'react';
import { Thumbnail, Card, CardItem, Left, Text, Body } from 'native-base';
import { View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

const PwCard = ({ website, username, password }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem style={styles.cardItemStyle} first>
          <Left>
            <Thumbnail
              source={require('../assets/domain.png')}
              style={styles.thumbnail}
            />
            <Body>
              <Text
                style={[
                  styles.textBody,
                  { fontWeight: 'bold' },
                  styles.accentText,
                ]}
                onPress={async () => {
                  await WebBrowser.openAuthSessionAsync('https://' + website)
                    .then(WebBrowser.dismissBrowser)
                    .catch((err) => console.log(err));
                }}
              >
                {website}
              </Text>
              <Text style={styles.textBody}>Username: {username}</Text>
              <Text note style={styles.textBody}>
                Password: {password}
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

export default PwCard;
