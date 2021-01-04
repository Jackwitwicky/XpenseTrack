import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import AppTextHeader from "../components/AppTextHeader";
import Colors from "../config/colors";
import Screen from "../components/Screen";

function AddAccount({ navigation }) {
  const [selectedAccountType, setSelectedAccountType] = useState('bank');
  const [accountNameFocused, setAccountNameFocused] = useState(false);
  return (
    <Screen style={styles.screen}>
      <Text style={styles.inputTitle}>Account Type</Text>

      <Picker
      selectedValue={selectedAccountType}
       style={styles.accountType}
       onValueChange={(itemValue, itemIndex) => setSelectedAccountType(itemValue)} >
         <Picker.Item label="Bank" value="bank" />
         <Picker.Item label="Mobile Money" value="mobile_money" />
         <Picker.Item label="Cash" value="cash" />
      </Picker>

      <Text style={styles.inputTitle}>Account Name</Text>
      <TextInput 
        onFocus={() => setAccountNameFocused(true)}
        onBlur={() => setAccountNameFocused()}
      style={[styles.input, styles.accountName]} placeholder="e.g NCBA Bank"/>


      <Text style={styles.inputTitle}>Account Description</Text>
      <TextInput
        numberOfLines={4}
        style={styles.input}
        placeholder="e.g Main Bank Account" />

      <View style={styles.saveButton}>
        <Button  title="Save" color={Colors.primary}/>
      </View>
      <View>
        <Button title="Cancel" color={Colors.secondary} onPress={() => navigation.goBack()}/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountName: {
    
  },
  accountType: {
    height: 60,
    width: "100%"
  },
  input: {
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "royalblue"
  },
  inputTitle: {
    marginTop: 20,
    fontSize: 16,
  },
  container: {

  },
  saveButton: {
    marginTop: 30,
    marginBottom: 20
  },
  screen: {
    padding: 16
  }
})

export default AddAccount;