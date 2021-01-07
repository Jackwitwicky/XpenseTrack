import React from 'react';
import { StyleSheet, TextInput } from "react-native";
import { FormikContext, useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";

function AppFormField({ icon, name, ...otherProps }) {
    const {setFieldValue, setFieldTouched, touched, errors, values } = useFormikContext();
    return (
        <>
            <TextInput 
              style={styles.input}
              {...otherProps}
              onBlur={() => setFieldTouched(name)}
              onChangeText={text => setFieldValue(name, text)}
              value={values[name]}/>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
            
        </>
    );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  
})

export default AppFormField;