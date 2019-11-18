import { combineReducers, createStore, Store, applyMiddleware } from 'redux';
import { UserState, userReducer, initialUserState } from './user';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export interface IState {
  user: UserState;
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const middleware =
  process.env.NODE_ENV === 'development' ? [sagaMiddleware, logger] : [sagaMiddleware];

const reducer = combineReducers({
  user: userReducer
});

const initialState: IState = {
  user: initialUserState
};

export const store: Store<IState> = createStore(
  reducer,
  initialState,
  composeEnchancers(applyMiddleware(...middleware))
);
