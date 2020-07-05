import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, CardItem, Body, Text, Left } from 'native-base';
import * as LocalAuthentication from 'expo-local-authentication';

const SubApp = ({ navigation, name, img }) => {
  const authenticate = async () => {
    let response = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate using TouchID',
    }).catch((err) => console.log(err));

    if (response.success) {
      console.log('Success!');
    } else {
      console.log('Authentication failed!');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <CardItem
          style={styles.cardItemStyle}
          button
          onPress={() => {
            if (name === 'Passwords') {
              console.log(authenticate());
            }
            navigation.navigate(name);
          }}
        >
          <Image source={img} style={styles.img} resizeMode={'contain'}></Image>
          <Text style={styles.textStyle}>{name}</Text>
        </CardItem>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginRight: 30,
  },
  cardStyle: {
    width: 280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    height: 200,
    shadowColor: '#576574',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cardItemStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: 'HoeflerText-Black',
    textAlign: 'center',
    width: 270,
    marginBottom: 5,
    marginTop: 15,
    marginLeft: 0,
    fontSize: 25,
    backgroundColor: 'transparent',
    fontWeight: '900',
    color: '#1B9CFC',
  },
  img: {
    width: 170,
    height: 130,
  },
});

export default SubApp;
