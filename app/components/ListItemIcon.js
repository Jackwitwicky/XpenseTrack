import React from 'react';
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';


function ListItemIcon({icon = "bank-outline", color = colors.primary}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <MaterialCommunityIcons name={icon} size={30} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
  
})

export default ListItemIcon;