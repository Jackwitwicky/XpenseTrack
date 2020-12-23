import React from 'react';
import { Platform, StyleSheet, StatusBar, View } from "react-native";

function Screen({children, style}) {
  return (
    <View style={[styles.screen, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f7f8fb",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  }
})

export default Screen;