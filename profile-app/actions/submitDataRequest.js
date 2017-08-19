import * as firebase from 'firebase';

import { submitDataSuccess } from './submitDataSuccess';
import { submitDataFailure } from './submitDataFailure';
import { getKey } from '../firebase';

export const SUBMIT_DATA_REQUEST = 'SUBMIT_DATA_REQUEST';

/**
 * Action creator for post data to database with the help of
 * redux's promise middleware and dispatch the success or failure
 * action accordingly
 */
export function submitDataRequest(profile) {
  return getKey()
    .then(key => firebase.database().ref(`/${key}/profile`).set(profile))
    .then(() => submitDataSuccess(profile))
    .catch((err) => {
      const msg = err.message || err.toString();
      return submitDataFailure(msg);
    });
}
