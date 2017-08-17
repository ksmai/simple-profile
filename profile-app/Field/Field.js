import React from 'react';
import { connect } from 'react-redux';
import { Text, TextInput, View, StyleSheet } from 'react-native';

import { editProfile } from '../actions/editProfile';

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
export class Field extends React.Component {
  render() {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{this.props.label}</Text>

        <TextInput
          style={styles.fieldInput}
          value={this.props.value}
          onChangeText={this.props.onFieldChange}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  value: state.editedProfile[props.name],
});

const mapDispatchToProps = (dispatch, props) => ({
  onFieldChange: (value) => dispatch(editProfile(props.name, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
