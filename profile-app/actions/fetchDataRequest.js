import * as firebase from 'firebase';
import { fetchDataSuccess } from './fetchDataSuccess';
import { fetchDataFailure } from './fetchDataFailure';

import '../firebase';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';

/**
 * Start fetching initial data from database and dispatch
 * a corresponding success/failure action accordingly
 * with the help of redux's promise middleware
 */
export function fetchDataRequest() {
  return firebase.database().ref('profile').once('value')
    .then((snapshot) => {
      const profile = snapshot.val();
      return profile || {};
    })
    .then((profile) => fetchDataSuccess(profile))
    .catch((err) => {
      const msg = err.message || err.toString();
      return fetchDataFailure(msg);
    });
}
