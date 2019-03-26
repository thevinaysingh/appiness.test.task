import { combineReducers } from 'redux';
import { authReducer as auth } from './auth';

export const rootReducer = combineReducers({
  auth,
});
