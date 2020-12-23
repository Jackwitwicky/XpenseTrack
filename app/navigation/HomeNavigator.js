import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Home} />
  </Stack.Navigator>
)

export default HomeNavigator;