import { authTypes } from '../actions/auth/types';

const initialState = {
  loginResponse: null,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginResponse: {
          isLoggedin: true,
          message: action.message,
          accessToken: action.accessToken,
        },
      };

    case authTypes.LOGIN_FAILURE:
      return {
        ...state,
        loginResponse: {
          isLoggedin: false,
          message: action.message,
        },
      };

    default:
      return state;
  }

  return state;
};
