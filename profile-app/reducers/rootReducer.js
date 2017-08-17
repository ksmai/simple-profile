import { combineReducers } from 'redux';

import editedProfile from './editedProfile';
import profile from './profile';
import isFetching from './isFetching';
import isSubmitting from './isSubmitting';
import err from './err';

/**
 * The root reducer used to create the store with redux's createStore()
 */
const rootReducer = combineReducers({
  editedProfile,
  isFetching,
  profile,
  isSubmitting,
  err,
});

export default rootReducer;
