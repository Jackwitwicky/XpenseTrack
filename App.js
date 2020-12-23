import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import Accounts from './app/screens/Accounts';
import AddAccount from './app/screens/AddAccount';
import Transactions from './app/screens/Transactions';

// import { SplashScreen } from 'expo';

// SplashScreen.preventAutoHide();
// setTimeout(SplashScreen.hide, 5000);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    // <AddAccount />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
