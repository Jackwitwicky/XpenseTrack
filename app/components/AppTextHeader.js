import React from 'react';
import { Text, StyleSheet, Platform } from "react-native";

function AppTextHeader({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
})

export default AppTextHeader;