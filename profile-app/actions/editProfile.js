export const EDIT_PROFILE = 'EDIT_PROFILE';

/**
 * Action creator for editing profile
 * @param {string} name - name of the field
 * @param {string} value - value of the field
 *
 * @example
 * editProfile('firstname', 'John');
 */
export function editProfile(name, value) {
  return {
    type: EDIT_PROFILE,
    payload: { name, value },
  };
}
