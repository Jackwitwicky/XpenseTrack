import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accounts from '../screens/Accounts';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Statistics from "../screens/Statistics";
import Transactions from '../screens/Transactions';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AccountNavigator = () => (
  // <Stack.Navigator>
  //   <Stack.Screen name="Accounts" component={Accounts} />
  //   <Stack.Screen name="AddAccount" component={AddAccount} />
  //   <Stack.Screen name="Account" component={Account} />
  //   <Stack.Screen name="TopUpAccount" component={TopUpAccount} />
  // </Stack.Navigator>

  <Tab.Navigator initialRouteName="Accounts">
    <Tab.Screen name="Accounts" component={Accounts} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="wallet" color={color} size={size} />)}} />
    <Tab.Screen name="Home" component={Home} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}} />
    <Tab.Screen name="Transactions" component={Transactions} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />)}} />
    <Tab.Screen name="Statistics" component={Statistics} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="chart-bar" color={color} size={size} />)}} />
  </Tab.Navigator>
)

export default AccountNavigator;