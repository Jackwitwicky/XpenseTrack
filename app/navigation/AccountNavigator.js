import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Accounts from '../screens/Accounts';
import Account from '../screens/Account';
import AddAccount from '../screens/AddAccount';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Accounts" component={Accounts} />
    <Stack.Screen name="AddAccount" component={AddAccount} />
    <Stack.Screen name="Account" component={Account} />
  </Stack.Navigator>
)

export default AccountNavigator;