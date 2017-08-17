export const FETCH_DATA_START = 'FETCH_DATA_START';

/**
 * Action creator for indicating the start of a request for data
 */
export function fetchDataStart() {
  return {
    type: FETCH_DATA_START,
  };
}
