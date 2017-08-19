import * as firebase from 'firebase';
import { fetchDataSuccess } from './fetchDataSuccess';
import { fetchDataFailure } from './fetchDataFailure';

import { getKey } from '../firebase';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';

/**
 * Start fetching initial data from database and dispatch
 * a corresponding success/failure action accordingly
 * with the help of redux's promise middleware
 */
export function fetchDataRequest() {
  return getKey()
    .then((key) => firebase.database().ref(`/${key}/profile`).once('value'))
    .then((snapshot) => {
      const profile = snapshot.val();
      return profile || {
        firstname: '',
        lastname: '',
        company: '',
        department: '',
        position: '',
        email: '',
      };
    })
    .then((profile) => fetchDataSuccess(profile))
    .catch((err) => {
      const msg = err.message || err.toString();
      return fetchDataFailure(msg);
    });
}
