import { combineReducers, createStore, Store, compose } from 'redux';
import { UserState, userReducer } from './user';
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export interface IState {
  user: UserState;
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
  user: userReducer
});

export const store: Store<IState> = createStore(reducer);
