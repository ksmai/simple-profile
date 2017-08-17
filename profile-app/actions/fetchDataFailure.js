export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export function fetchDataFailure(err) {
  return {
    type: FETCH_DATA_FAILURE,
    payload: { err },
  };
}
