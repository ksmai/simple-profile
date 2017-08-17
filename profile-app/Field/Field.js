import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

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
export default class Field extends React.Component {
  render() {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{this.props.label}</Text>

        <TextInput
          style={styles.fieldInput}
          value={this.props.fieldValue}
          onChangeText={this.props.onFieldChange}
        />
      </View>
    );
  }
}
