import { combineReducers, createStore, Store } from 'redux';
import { UserState, userReducer } from './user';

export interface IState {
  user: UserState;
}

const reducer = combineReducers({
  user: userReducer
});

export const store: Store<UserState> = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
