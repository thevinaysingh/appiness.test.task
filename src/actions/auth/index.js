import { LOCAL_DB } from '../../utils/locales';
import { authTypes } from './types';

const login = (email, password) => {
  let type;
  let message;
  let accessToken;
  if (LOCAL_DB.LOGIN.username !== email.trim()) {
    type = authTypes.LOGIN_FAILURE;
    message = LOCAL_DB.LOGIN_MSG.incorrect_email;
  } else if (LOCAL_DB.LOGIN.password !== password.trim()) {
    type = authTypes.LOGIN_FAILURE;
    message = LOCAL_DB.LOGIN_MSG.incorrect_password;
  } else {
    const { access_token, login_success } = LOCAL_DB.LOGIN_MSG;
    type = authTypes.LOGIN_SUCCESS;
    message = login_success;
    accessToken = access_token;
  }

  return {
    type,
    message,
    accessToken,
  };
};

/* Auth action creators */
export const AuthActionCreators = {
  /* Auth action creators */
  login,
};
