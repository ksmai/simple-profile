import { SUBMIT_DATA_START } from '../actions/submitDataStart';
import { SUBMIT_DATA_FAILURE } from '../actions/submitDataFailure';
import { SUBMIT_DATA_SUCCESS } from '../actions/submitDataSuccess';

export default function isSubmitting(state = false, action) {
  switch (action.type) {
    case SUBMIT_DATA_START:
      return true;

    case SUBMIT_DATA_FAILURE:
    case SUBMIT_DATA_SUCCESS:
      return false;

    default:
      return state;
  }
}
