import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from '../screens/Accounts';
import AddAccount from '../screens/AddAccount';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Accounts} />
    <Stack.Screen name="AddAccount" component={AddAccount} />
  </Stack.Navigator>
)

export default AccountNavigator;