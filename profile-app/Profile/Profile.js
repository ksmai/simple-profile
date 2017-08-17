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
      { label: 'First Name', name: 'firstname' },
      { label: 'Last Name', name: 'lastname' },
    ].map((props) => (
      <Field {...props} key={props.name} />
    ));

    const companyFields = [
      { label: 'Company', name: 'company' },
      { label: 'Department', name: 'department' },
      { label: 'Position', name: 'position' },
    ].map((props) => (
      <Field {...props} key={props.name} />
    ));

    const emailField = <Field name="Email" label="email" />;

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
