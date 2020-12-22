import React from 'react';
import { StyleSheet, View, TouchableHighlight, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

function AppFab({ icon, iconColor = "white", backgroundColor=colors.secondary, onPress }) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <View>
          <MaterialCommunityIcons style={styles.icon} name={icon} color={iconColor} size={30}/>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,  
    height: 60,   
    borderRadius: 30,            
    backgroundColor: colors.secondary,
    position: "absolute",
    justifyContent: "center",
    bottom: 10,                                                    
    right: 10,
    elevation: 8,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
})

export default AppFab;