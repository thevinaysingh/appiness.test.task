import { bindActionCreators } from 'redux';
import { store } from '../store';
import { AuthActionCreators } from './auth';
import { UserActionCreators } from './user';

export const ActionCreators = bindActionCreators({
  ...AuthActionCreators,
  ...UserActionCreators,
}, store.dispatch);
