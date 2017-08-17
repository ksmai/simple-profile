export const SUBMIT_DATA_FAILURE = 'SUBMIT_DATA_FAILURE';

export function submitDataFailure(err) {
  return {
    type: SUBMIT_DATA_FAILURE,
    payload: { err },
  };
}
