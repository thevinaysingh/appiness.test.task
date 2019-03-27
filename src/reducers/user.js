import { userTypes } from '../actions/user/types';

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case userTypes.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }

  return state;
};
