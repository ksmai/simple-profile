import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import SaveButton from '../SaveButton/SaveButton';
import Field from '../Field/Field';
import { fetchDataRequest } from '../actions/fetchDataRequest';
import { fetchDataStart } from '../actions/fetchDataStart';
import { submitDataStart } from '../actions/submitDataStart';
import { submitDataRequest } from '../actions/submitDataRequest';
import { editProfile } from '../actions/editProfile';

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
export class Profile extends React.Component {
  componentWillMount() {
    this.props.fetchData();
  }

  handleSave = () => {
    this.props.submitData(this.props.editedProfile);
  }

  render() {
    if (this.props.isFetching) {
      return (
        <Text>Loading...</Text>
      );
    }

    const fieldsets = [
      [
        { label: 'First Name', name: 'firstname' },
        { label: 'Last Name', name: 'lastname' },
      ],
      [
        { label: 'Company', name: 'company' },
        { label: 'Department', name: 'department' },
        { label: 'Position', name: 'position' },
      ],
      [
        { label: 'Email', name: 'email' },
      ],
    ].map((fieldGroup, position) => {
      const fields = fieldGroup.map((props) => (
        <Field
          {...props}
          fieldValue={this.props.editedProfile[props.name]}
          onFieldChange={this.props.editField(props.name)}
          isSubmitting={this.props.isSubmitting}
          key={props.name}
        />
      ));

      return (
        <View style={styles.fieldset} key={position}>
          {fields}
        </View>
      );
    });

    return (
      <View style={styles.form}>
        {fieldsets}
        <SaveButton
          onSave={this.handleSave}
          isSubmitting={this.props.isSubmitting}
        />
        <Text>{this.props.err}</Text>
        {this.props.isSubmitting && <Text>Submitting...</Text>}
      </View>
    );
  }
}

Profile.propTypes = {
  isFetching: propTypes.bool.isRequired,
  isSubmitting: propTypes.bool.isRequired,
  editedProfile: propTypes.object.isRequired,
  err: propTypes.string.isRequired,
  fetchData: propTypes.func.isRequired,
  submitData: propTypes.func.isRequired,
  editField: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  isSubmitting: state.isSubmitting,
  editedProfile: state.editedProfile,
  err: state.err,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchDataStart());
    return dispatch(fetchDataRequest());
  },

  submitData: (profile) => {
    dispatch(submitDataStart());
    return dispatch(submitDataRequest(profile));
  },

  editField: (field) => (value) => dispatch(editProfile(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
