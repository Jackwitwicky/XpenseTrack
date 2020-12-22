import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Transactions from '../screens/Transactions';
import AddTransaction from '../screens/AddTransaction';

const Stack = createStackNavigator();

const TransactionNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Transactions" component={Transactions} />
    <Stack.Screen name="AddTransaction" component={AddTransaction} />
  </Stack.Navigator>
)

export default TransactionNavigator;