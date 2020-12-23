import React from 'react';
import { StyleSheet, View } from "react-native";

function HorizontalDivider({style}) {
  return (
    <View style={[styles.divider, style]}/>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#e9e9e9",
  }
})

export default HorizontalDivider;