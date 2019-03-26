import { bindActionCreators } from 'redux';
import { store } from '../store';
import { AuthActionCreators } from './auth';

export const ActionCreators = bindActionCreators({
  ...AuthActionCreators,
}, store.dispatch);
