import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

function AppButton({ title, onPress, color="primary" }) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {

    backgroundColor: colors.primary,
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
  }
})

export default AppButton;