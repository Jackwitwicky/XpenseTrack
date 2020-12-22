import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Accounts from "../screens/Accounts";
import Transactions from "../screens/Transactions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountNavigator from "./AccountNavigator";
import TransactionNavigator from "./TransactionNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Accounts" component={AccountNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="wallet" color={color} size={size} />)}} />
    <Tab.Screen name="Transactions" component={TransactionNavigator} options={{tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />)}} />
  </Tab.Navigator>
)

export default AppNavigator;