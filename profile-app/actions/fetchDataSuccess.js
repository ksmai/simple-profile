export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

export function fetchDataSuccess(profile) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { profile },
  };
}
