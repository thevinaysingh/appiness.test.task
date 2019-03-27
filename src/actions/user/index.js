import { LOCAL_DB } from '../../utils/locales';
import { userTypes } from './types';

const getEmployees = () => ({
  type: userTypes.GET_EMPLOYEES_SUCCESS,
  message: LOCAL_DB.USER_MSG.user_list_success,
  users: LOCAL_DB.users,
});

/* User action creators */
export const UserActionCreators = {
  /* User action creators */
  getEmployees,
};
