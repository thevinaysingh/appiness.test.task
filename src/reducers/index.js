import { combineReducers } from 'redux';
import { authReducer as auth } from './auth';
import { userReducer as user } from './user';

export const rootReducer = combineReducers({
  auth,
  user,
});
