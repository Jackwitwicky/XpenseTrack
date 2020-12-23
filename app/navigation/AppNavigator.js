import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Accounts from "../screens/Accounts";
import Transactions from "../screens/Transactions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountNavigator from "./AccountNavigator";
import TransactionNavigator from "./TransactionNavigator";
import Statistics from "../screens/Statistics";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Accounts" component={AccountNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="wallet" color={color} size={size} />)}} />
    <Tab.Screen name="Home" component={HomeNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="home" color={color} size={size} />)}} />
    <Tab.Screen name="Transactions" component={TransactionNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />)}} />
    <Tab.Screen name="Statistics" component={Statistics} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="chart-bar" color={color} size={size} />)}} />
  </Tab.Navigator>
)

export default AppNavigator;