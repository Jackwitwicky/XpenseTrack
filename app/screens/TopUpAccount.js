import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import Screen from "../components/Screen";
import colors from "../config/colors";

function TopUpAccount({navigation}) {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);


  const onCancel = (navigation) => {
    navigation.goBack();
  }

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

        <View style={styles.saveButton}>
          <Button  title="Save" color={colors.primary}/>
        </View>
        <View>
          <Button title="Cancel" color={colors.secondary} onPress={() => onCancel(navigation)}/>
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

export default TopUpAccount;