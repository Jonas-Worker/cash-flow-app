import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import InsertScreen from './InsertScreen';
import DisplayScreen from './DisplayScreen';  

const Stack = createStackNavigator();

const MainPage = () => {
  return (
    <Stack.Navigator initialRouteName="Insert">
      <Stack.Screen name="Insert" component={InsertScreen} />
      <Stack.Screen name="Display" component={DisplayScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
