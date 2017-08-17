import { EDIT_PROFILE } from '../actions/editProfile';

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

    default:
      return state;
  }
}
