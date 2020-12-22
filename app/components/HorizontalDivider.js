import React from 'react';
import { StyleSheet, View } from "react-native";

function HorizontalDivider(props) {
  return (
    <View style={styles.divider}/>
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