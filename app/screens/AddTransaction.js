import React, { useState, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import * as Yup from "yup";

import AccountDB from "../data/AccountDB";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import ErrorMessage from "../components/forms/ErrorMessage";
import Colors from "../config/colors";
import Screen from "../components/Screen";
import TransactionDB from "../data/TransactionDB";
import utils from "../config/utils";

const validationSchema = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  description: Yup.string().required().label("Description"),
});

const categories = [
  {label: "Food", value: "food"},
  {label: "Gifts", value: "gift"},
  {label: "Medical", value: "medical-bag"},
  {label: "Home", value: "home"},
  {label: "Transport", value: "car"},
  {label: "Personal", value: "account"},
  {label: "Pets", value: "cat"},
  {label: "Utilities", value: "cogs"},
  {label: "Travel", value: "airplane-takeoff"},
]

function AddTransaction({ navigation }) {
  const [selectedAccountType, setSelectedAccountType] = useState('bank');
  const [selectedCategory, setSelectedCategory] = useState('shopping');
  const [accountNameFocused, setAccountNameFocused] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [accounts, setAccounts] = useState([]);

  // life cycle functions
  useEffect(() => {
    console.log("get incomes");
    AccountDB.getAccounts(onGetAccounts);
  }, []);

  // callback functions
  const onGetAccounts = (accounts) => {
    console.log("The accounts are: ", accounts);
    var filteredAccounts = accounts.map((account) => {return {label: account.name ,value: account.id}} );
    setAccounts(filteredAccounts);
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

  const onSaveTransaction = (transaction) => {
    // const transaction = {
    //   amount: 500,
    //   description: "Monthly Shopping",
    //   category: "food",
    //   account_id: 1,
    //   date: new Date().toISOString(),
    //   created_at: new Date().toISOString()
    // }
    console.log("The transaction is: ",transaction);

    TransactionDB.addTransaction(transaction, onTransactionAdded);
  }

  const onTransactionAdded = (isAdded) => {
    if (isAdded) {
      utils.notifyMessage("Transaction has been added successfully");
      navigation.goBack();
    } else {
      utils.notifyMessage(
        "An error occurred while saving your transaction. Please try again"
      );
    }
  };

  return (
    <Screen style={styles.screen}>
      <ScrollView>
      <Formik
       initialValues={{amount: "", description: "", account_id: 1, category: "food"}}
       onSubmit={values => onSaveTransaction({...values, date: date.toISOString(), created_at: new Date().toISOString()})}
       validationSchema={validationSchema} >
         { ({ handleChange, handleSubmit, errors }) => (
           <>
            <Text style={styles.inputTitle}>Account</Text>
            <AppFormPicker
                name="account_id"
                items={accounts}
               />

            <Text style={styles.inputTitle}>Category</Text>
            <AppFormPicker
              name="category"
              items={categories}
            />

            <Text style={styles.inputTitle}>Amount</Text>
              
            <AppFormField
              name="amount"
              placeholder="e.g 500"
              keyboardType="numeric"
            />
            <ErrorMessage error={errors.amount}></ErrorMessage>

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
            
            <AppFormField
              name="description"
              placeholder="e.g Monthly Shopping"
              numberOfLines={4}
            />
            <ErrorMessage error={errors.description}></ErrorMessage>

            <View style={styles.saveButton}>
              <Button  title="Save" color={Colors.primary} onPress={handleSubmit}/>
            </View>
            <View>
              <Button title="Cancel" color={Colors.secondary}/>
            </View>
           </>
         )}
      </Formik>
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