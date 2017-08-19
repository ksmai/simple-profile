/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(0, 0, 0, .12)',
    backgroundColor: '#fff',
  },

  fieldLabel: {
    fontWeight: 'bold',
    minWidth: '25%',
  },

  fieldInput: {
    flex: 1,
    padding: 5,
    color: '#0046f9',
    textAlign: 'right',
  },
});

/**
 * Render a text input field with a label
 */
const Field = ({ label, fieldValue, onFieldChange, isSubmitting }) => (
  <View style={styles.fieldContainer}>
    <Text style={styles.fieldLabel}>{label}</Text>

    <TextInput
      style={styles.fieldInput}
      value={fieldValue}
      onChangeText={onFieldChange}
      editable={!isSubmitting}
    />
  </View>
);

Field.propTypes = {
  label: propTypes.string.isRequired,
  fieldValue: propTypes.string,
  onFieldChange: propTypes.func.isRequired,
  isSubmitting: propTypes.bool.isRequired,
};

Field.defaultProps = {
  fieldValue: '',
};

export default Field;
