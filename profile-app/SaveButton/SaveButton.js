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
export default class SaveButton extends React.Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          title="Save"
          onPress={this.props.onSave}
          disabled={this.props.isSubmitting}
        />
      </View>
    );
  }
}

SaveButton.propTypes = {
  onSave: propTypes.func.isRequired,
  isSubmitting: propTypes.bool.isRequired,
};
