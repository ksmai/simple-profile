import { submitDataSuccess } from './submitDataSuccess';
import { submitDataFailure } from './submitDataFailure';

export const SUBMIT_DATA_REQUEST = 'SUBMIT_DATA_REQUEST';

/**
 * Action creator for post data to database with the help of
 * redux's promise middleware and dispatch the success or failure
 * action accordingly
 */
export function submitDataRequest(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  })
    .then(() => submitDataSuccess(profile))
    .catch((err) => submitDataFailure(err));
}
