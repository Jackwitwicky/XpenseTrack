import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

import Colors from "../config/colors";
import Screen from "../components/Screen";

function AddTransaction(props) {
  const [selectedAccountType, setSelectedAccountType] = useState('bank');
  const [selectedCategory, setSelectedCategory] = useState('shopping');
  const [accountNameFocused, setAccountNameFocused] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const getReadableDate = (currentDate) => {
    const options = {
      weekday: "long",
     year: "numeric",
     month:"long",
     day:"numeric"
    };
    return currentDate.toLocaleDateString("en-KE",options);
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView>
        <Text style={styles.inputTitle}>Account</Text>
        <Picker
        selectedValue={selectedAccountType}
        style={styles.accountType}
        onValueChange={(itemValue, itemIndex) => setSelectedAccountType(itemValue)} >
          <Picker.Item label="NCBA Bank" value="bank" />
          <Picker.Item label="Mpesa" value="mobile_money" />
          <Picker.Item label="Cash" value="cash" />
        </Picker>

        <Text style={styles.inputTitle}>Category</Text>
        <Picker
        selectedValue={selectedCategory}
        style={styles.accountType}
        onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)} >
          <Picker.Item label="Food" value="food" />
          <Picker.Item label="Gifts" value="gift" />
          <Picker.Item label="Medical" value="medical-bag" />
          <Picker.Item label="Home" value="home" />
          <Picker.Item label="Transport" value="car" />
          <Picker.Item label="Personal" value="account" />
          <Picker.Item label="Pets" value="cat" />
          <Picker.Item label="Utilities" value="cogs" />
          <Picker.Item label="Travel" value="airplane-takeoff" />
        </Picker>

        <Text style={styles.inputTitle}>Amount</Text>
        <TextInput 
          onFocus={() => setAccountNameFocused(true)}
          onBlur={() => setAccountNameFocused()}
          style={[styles.input, styles.accountName]} placeholder="e.g 500"/>


        <Text style={styles.inputTitle}>Date</Text>
        <View style={styles.dateContainer}>
          <Text style={[styles.input, styles.date]}>{getReadableDate(date)}</Text>
          <View style={styles.setDateButton}>
            <Button title="Change Date" onPress={() => setShow(!show)}/>
          </View>
        </View>
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <Text style={styles.inputTitle}>Description</Text>
        <TextInput
          numberOfLines={4}
          style={styles.input}
          placeholder="e.g Monthly Shopping" />

        <View style={styles.saveButton}>
          <Button  title="Save" color={Colors.primary}/>
        </View>
        <View>
          <Button title="Cancel" color={Colors.secondary}/>
        </View>
      </ScrollView>
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
  date: {
    flex: 2,
    marginRight: 10
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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
  setDateButton: {
    flex: 1,
    alignSelf: "center"
  },
  screen: {
    padding: 16,
  }
})

export default AddTransaction;