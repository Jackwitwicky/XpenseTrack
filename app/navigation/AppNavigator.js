import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import AddTransaction from "../screens/AddTransaction";
import AccountNavigator from "./AccountNavigator";
import TransactionNavigator from "./TransactionNavigator";

import Account from '../screens/Account';
import AddAccount from '../screens/AddAccount';
import TopUpAccount from '../screens/TopUpAccount';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Accounts';

  switch (routeName) {
    case 'Accounts':
      return 'Accounts';
    case 'Transactions':
      return 'Transactions';
    case 'Home':
      return 'Home';
    case 'Statistics':
      return 'Statistics';
  }
}

const AppNavigator = () => (
  // <Tab.Navigator initialRouteName="Home">
  //   <Tab.Screen name="Accounts" component={AccountNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="wallet" color={color} size={size} />)}} />
  //   <Tab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}} />
  //   <Tab.Screen name="Transactions" component={TransactionNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />)}} />
  //   <Tab.Screen name="Statistics" component={Statistics} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="chart-bar" color={color} size={size} />)}} />
  // </Tab.Navigator>
    <Stack.Navigator>
      <Stack.Screen name="Accounts" component={AccountNavigator}  
       options={({ route }) => ({ headerTitle: getHeaderTitle(route)})} />
      <Stack.Screen name="AddAccount" component={AddAccount} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="TopUpAccount" component={TopUpAccount} />
      <Stack.Screen name="Transactions" component={TransactionNavigator} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
    </Stack.Navigator>
)

export default AppNavigator;