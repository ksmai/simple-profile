import { FETCH_DATA_START } from '../actions/fetchDataStart';
import { FETCH_DATA_SUCCESS } from '../actions/fetchDataSuccess';
import { FETCH_DATA_FAILURE } from '../actions/fetchDataFailure';

/**
 * Redux reducer for a flag indicating whether there are pending
 * requests for fetching data
 */
export default function isFetching(state = false, action) {
  switch (action.type) {
    case FETCH_DATA_START:
      return true;

    case FETCH_DATA_SUCCESS:
    case FETCH_DATA_FAILURE:
      return false;

    default:
      return state;
  }
}
