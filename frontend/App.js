import React from 'react';
import Button from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AddBdayModal from './screens/AddBdayModal';
import Birthday from './screens/Birthday';
import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteNam="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5f27cd',
          height: 80,
        },
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 30,
          padding: 10,
        },
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Birthday"
        component={Birthday}
        options={{ title: 'Birthdays' }}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Home"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddBdayModal"
          component={AddBdayModal}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
