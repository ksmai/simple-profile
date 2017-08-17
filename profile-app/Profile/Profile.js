import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SaveButton from '../SaveButton/SaveButton';
import Field from '../Field/Field';

const styles = StyleSheet.create({
  form: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    elevation: 3, // android 5.0+ only

    /* ios only shadow */
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.14,
    shadowRadius: 1,
  },

  fieldset: {
    marginBottom: 10,
    width: '100%',
  },
});

/**
 * Render the whole form for profile
 */
export default class Profile extends React.Component {
  render() {
    const nameFields = [
      'First Name',
      'Last Name',
    ].map((name) => (
      <Field name={name} key={name} />
    ));

    const companyFields = [
      'Company',
      'Department',
      'Position',
    ].map((name) => (
      <Field name={name} key={name} />
    ));

    const emailField = <Field name="Email" />;

    return (
      <View style={styles.form}>
        <View style={styles.fieldset}>
          {nameFields}
        </View>

        <View style={styles.fieldset}>
          {companyFields}
        </View>

        <View style={styles.fieldset}>
          {emailField}
        </View>

        <SaveButton />
      </View>
    );
  }
}
