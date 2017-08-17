import { SUBMIT_DATA_FAILURE } from '../actions/submitDataFailure';
import { FETCH_DATA_FAILURE } from '../actions/fetchDataFailure';

/**
 * The redux reducer for error message
 */
export default function err(state = '', action) {
  switch (action.type) {
    case SUBMIT_DATA_FAILURE:
    case FETCH_DATA_FAILURE:
      return action.payload.err || 'Some errors occurred';

    default:
      // return empty string instead of original state to empty
      // the error once any other actions occur
      return '';
  }
}
