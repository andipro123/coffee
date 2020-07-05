import React from 'react';
import { Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import AddBdayModal from './screens/AddBdayModal';
import Birthdays from './screens/Birthdays';
import Todos from './screens/Todos';
import Passwords from './screens/Passwords';
import AddPwModal from './screens/AddPwModal';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleContainerStyle: {
          flexDirection: 'column',
        },
        headerStyle: {
          backgroundColor: '#fff',
          height: 120,
        },
        headerTitle: 'coffee',
        headerBackTitleVisible: false,
        headerTintColor: '#1B9CFC',
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontFamily: 'Copperplate-Light',
          fontSize: 45,
          marginLeft: 6,
        },
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="Birthdays"
        component={Birthdays}
        options={{ title: 'Birthdays' }}
      />
      <MainStack.Screen
        name="Passwords"
        component={Passwords}
        options={{ title: 'Passwords' }}
      />
      <MainStack.Screen
        name="Todos"
        component={Todos}
        options={{ title: 'Todos' }}
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
        <RootStack.Screen
          name="AddPwModal"
          component={AddPwModal}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
