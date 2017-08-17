export const SUBMIT_DATA_SUCCESS = 'SUBMIT_DATA_SUCCESS';

export function submitDataSuccess(profile) {
  return {
    type: SUBMIT_DATA_SUCCESS,
    payload: { profile },
  };
}
