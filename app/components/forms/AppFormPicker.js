import React from "react";
import { Formik, useFormikContext } from "formik";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <Picker
        selectedValue={values[name]}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>
          setFieldValue(name, itemValue)
        }>
          {/* {items.map({(item) => <Picker.Item label={item.label} value={item.value} /> })} */}
          {items.map((item) => (<Picker.Item key={item.value} label={item.label} value={item.value} />))}
      </Picker>

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 60,
    width: "100%",
  },
})

export default AppFormPicker;
