import { FETCH_DATA_SUCCESS } from '../actions/fetchDataSuccess';
import { SUBMIT_DATA_SUCCESS } from '../actions/submitDataSuccess';

const initialState = {
  firstname: '',
  lastname: '',
  company: '',
  department: '',
  position: '',
  email: '',
};

/**
 * The redux reducer for the profile data which is in sync with
 * the saved data in database
 */
export default function profile(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_DATA_SUCCESS:
    case FETCH_DATA_SUCCESS:
      const {
        firstname,
        lastname,
        company,
        department,
        position,
        email,
      } = action.payload.profile;

      return { firstname, lastname, company, department, position, email };

    default:
      return state;
  }
}
