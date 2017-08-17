import { fetchDataSuccess } from './fetchDataSuccess';
import { fetchDataFailure } from './fetchDataFailure';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';

/**
 * Start fetching initial data from database and dispatch
 * a corresponding success/failure action accordingly
 * with the help of redux's promise middleware
 */
export function fetchDataRequest() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      firstname: 'fake',
      lastname: 'fake',
      company: 'fake',
      department: 'fake',
      position: 'fake',
      email: 'fake',
    }), 5000);
  })
    .then((profile) => fetchDataSuccess(profile))
    .catch((err) => fetchDataFailure(err));
}
