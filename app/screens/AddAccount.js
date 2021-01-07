import React, { useState } from "react";
import { Alert, AlertIOS, Button, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Formik } from 'formik';
import * as Yup from "yup";

import AccountDB from "../data/AccountDB";
import AppTextHeader from "../components/AppTextHeader";
import AppFormField from "../components/forms/AppFormField";
import Colors from "../config/colors";
import ErrorMessage from "../components/forms/ErrorMessage";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AppFormPicker from "../components/forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Account Name"),
  description: Yup.string().required().label("Account Description"),
})

const accountTypes = [
  {label: "Bank", value: "bank"},
  {label: "Mobile Money", value: "mobile_money"},
  {label: "Cash", value: "cash"}
]

function AddAccount({ navigation }) {
  const [selectedAccountType, setSelectedAccountType] = useState("bank");
  const [accountNameFocused, setAccountNameFocused] = useState(false);

  const notifyMessage = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT)
    } else {
      AlertIOS.alert(msg);
    }
  }
  

  const onSaveAccount = (account) => {
    // const today = new Date().toISOString();
    // console.log("The date is", today);

    // const account = {
    //   type: "bank",
    //   name: "NCBA Bank",
    //   description: "Main bank account",
    //   created_at: new Date().toISOString()
    // }

    AccountDB.addAccount(account, onAccountAdded);

    // const accounts = AccountDB.getAccounts(onGetAccounts);
  };

  const onGetAccounts = (accounts) => {
    console.log("The accounts are: ", accounts);
  }

  const onAccountAdded = (isAdded) => {
    if (isAdded) {
      notifyMessage("Account has been created");
      navigation.goBack();
    }
    else {
      notifyMessage("An error occurred while saving your account. Please try again");
    }
  }

  return (
    <Screen style={styles.screen}>

      <Formik
       initialValues={{type: "bank", name: "", description: ""}}
       onSubmit={values => onSaveAccount({...values, created_at: new Date().toISOString()})}
       validationSchema={validationSchema}
       >
         { ({ handleChange, handleSubmit, errors }) => (
           <>
              <Text style={styles.inputTitle}>Account Type</Text>

              {/* <Picker
                selectedValue={selectedAccountType}
                style={styles.accountType}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedAccountType(itemValue)
                }
              >
                <Picker.Item label="Bank" value="bank" />
                <Picker.Item label="Mobile Money" value="mobile_money" />
                <Picker.Item label="Cash" value="cash" />
              </Picker> */}
              <AppFormPicker
                name="type"
                items={accountTypes}
               />

              <Text style={styles.inputTitle}>Account Name</Text>
              {/* <TextInput
                onFocus={() => setAccountNameFocused(true)}
                onBlur={() => setAccountNameFocused()}
                onChangeText={handleChange("name")}
                style={[styles.input, styles.accountName]}
                placeholder="e.g NCBA Bank"
              /> */}

              <AppFormField
                name="name"
                placeholder="e.g NCBA Bank"
              />
              <ErrorMessage error={errors.name}></ErrorMessage>

              <Text style={styles.inputTitle}>Account Description</Text>
              <AppFormField
                maxLength={255}
                multiLine
                numberOfLines={3}
                name="description"
                placeholder="e.g Main bank account"
              />

              <View style={styles.saveButton}>
                <Button
                  title="Save"
                  color={Colors.primary}
                  onPress={handleSubmit}
                />
              </View>
              <View>
                <Button
                  title="Cancel"
                  color={Colors.secondary}
                  onPress={() => navigation.goBack()}
                />
              </View>
           </>
         ) }
       </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountName: {},
  accountType: {
    height: 60,
    width: "100%",
  },
  input: {
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  inputTitle: {
    marginTop: 20,
    fontSize: 16,
  },
  container: {},
  saveButton: {
    marginTop: 30,
    marginBottom: 20,
  },
  screen: {
    padding: 16,
  },
});

export default AddAccount;
