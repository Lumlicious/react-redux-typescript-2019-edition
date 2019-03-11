import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { appReducer } from './App/reducers';
import { AppState } from './App/types';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer
  });

export interface State {
  router: RouterState;
  app: AppState;
}

export default createRootReducer;
