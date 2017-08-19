/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
  },
});

/**
 * Render a save button
 */
const SaveButton = ({ onSave, isSubmitting }) => (
  <View style={styles.buttonContainer}>
    <Button
      title="Save"
      onPress={onSave}
      disabled={isSubmitting}
    />
  </View>
);

SaveButton.propTypes = {
  onSave: propTypes.func.isRequired,
  isSubmitting: propTypes.bool.isRequired,
};

export default SaveButton;
