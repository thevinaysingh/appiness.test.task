import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import StartupSaga from './startupSaga';

function* root() {
  yield fork(StartupSaga);
}

const run = () => sagaMiddleware.run(root);

export default run;
