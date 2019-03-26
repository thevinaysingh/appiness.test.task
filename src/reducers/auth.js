/* eslint no-underscore-dangle: 0 */

const initialState = {
  isLoading: false,
  loginResponse: {},
};

export const authReducer = (state = initialState, action) => {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    default:
      return state;
  }

  return state;
};
