import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import InsertScreen from './screens/InsertScreen';
import DisplayScreen from './screens/DisplayScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Insert" component={InsertScreen} />
        <Stack.Screen name="Display" component={DisplayScreen} />
        <Stack.Screen name="MainPage" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
