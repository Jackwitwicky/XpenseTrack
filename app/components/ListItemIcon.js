import React from 'react';
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


function AccountIcon(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="bank-outline" size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    backgroundColor: "royalblue",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
  
})

export default AccountIcon;