import { EDIT_PROFILE } from '../actions/editProfile';
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
 * Redux reducer for the editedProfile created from user input
 */
export default function editedProfile(state = initialState, action) {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case SUBMIT_DATA_SUCCESS:
    case FETCH_DATA_SUCCESS: {
      const {
        firstname,
        lastname,
        company,
        department,
        position,
        email,
      } = action.payload.profile;

      return { firstname, lastname, company, department, position, email };
    }

    default:
      return state;
  }
}
