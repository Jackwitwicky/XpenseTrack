import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Formik } from "formik";
import * as Yup from "yup";

import AppFormField from "../components/forms/AppFormField";
import ErrorMessage from "../components/forms/ErrorMessage";
import colors from "../config/colors";
import IncomeDB from "../data/IncomeDB";
import Screen from "../components/Screen";
import utils from "../config/utils";

const validationSchema = Yup.object().shape({
  amount: Yup.number().required().label("Amount"),
  name: Yup.string().required().label("Name"),
});

function TopUpAccount({ navigation, route }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onIncomeAdded = (isAdded) => {
    if (isAdded) {
      utils.notifyMessage("Account has been topped up");
      navigation.goBack();
    } else {
      utils.notifyMessage(
        "An error occurred while topping up your account. Please try again"
      );
    }
  };

  const onSaveIncome = (income) => {
    // console.log("I am about to save an income", income);
    // const income = {
    //   amount: "500",
    //   date: new Date().toISOString(),
    //   account_id: 1,
    //   created_at: new Date().toISOString(),
    // };

    IncomeDB.addIncome(income, onIncomeAdded);
    console.log("I should have saved the income");
  };

  const onCancel = (navigation) => {
    navigation.goBack();
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const getReadableDate = (currentDate) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString("en-KE", options);
  };

  return (
    <Screen style={styles.screen}>
      <Formik
        initialValues={{ amount: "", name: "" }}
        onSubmit={(values) =>
          onSaveIncome({
            ...values,
            account_id: route.params.account_id,
            date: date.toISOString(),
            created_at: new Date().toISOString(),
          })
        }
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <Text style={styles.inputTitle}>Top Up Name</Text>
            <AppFormField
                name="name"
                placeholder="e.g Salary"
            />

            <ErrorMessage error={errors.name}></ErrorMessage>
            
            <Text style={styles.inputTitle}>Amount</Text>
            <AppFormField
              name="amount"
              placeholder="e.g 500"
              keyboardType="numeric"
            />
            <ErrorMessage error={errors.amount}></ErrorMessage>

            <Text style={styles.inputTitle}>Date</Text>
            <View style={styles.dateContainer}>
              <Text style={[styles.input, styles.date]}>
                {getReadableDate(date)}
              </Text>
              <View style={styles.setDateButton}>
                <Button title="Change Date" onPress={() => setShow(!show)} />
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
              <Button
                title="Save"
                color={colors.primary}
                onPress={handleSubmit}
              />
            </View>
            <View>
              <Button
                title="Cancel"
                color={colors.secondary}
                onPress={() => onCancel(navigation)}
              />
            </View>
          </>
        )}
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
  date: {
    flex: 2,
    marginRight: 10,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "royalblue",
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
  setDateButton: {
    flex: 1,
    alignSelf: "center",
  },
  screen: {
    padding: 16,
  },
});

export default TopUpAccount;
