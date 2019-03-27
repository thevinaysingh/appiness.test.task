/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import { rootReducer } from '../reducers';

export const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState, reduxLogger) {
  const middleWares = [sagaMiddleware];
  const addRemoteDevTools = true;

  const logger = createLogger({
    predicate: (getState, action) => __DEV__,
    collapsed: true,
    diff: true, // Difference between states
    colors: {
      // colored titles for state and actions
      title: () => '#4259f4',
      prevState: () => '#FF9090',
      action: () => '#03A9F4',
      nextState: () => '#4CAF50',
      error: () => '#F20404',
    },
  });

  if (reduxLogger) {
    middleWares.push(logger);
  }
  const enhancer = addRemoteDevTools
    ? composeWithDevTools(applyMiddleware(...middleWares))
    : compose(applyMiddleware(...middleWares));

  const Store = createStore(
    rootReducer, initialState,
    enhancer,
  );

  if (module.hot) {
    module.hot.accept(() => {
      /* eslint-disable global-require */
      const nextRootReducer = require('../reducers').default;
      Store.replaceReducer(nextRootReducer);
    });
  }

  return Store;
}

// passing true here for enabling redux logger
export const store = configureStore({}, true);
