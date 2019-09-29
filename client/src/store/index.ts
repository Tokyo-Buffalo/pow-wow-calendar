import { createStore, Store } from 'redux';
import { createAction, handleAction, reduceReducers } from 'redux-ts-utils';

const setUserLoginStatus = createAction<boolean>("setUserLoginStatus");

interface State {
  readonly user: {
    isLoggedIn: boolean;
  }
};

const initialState: State = {
  user: {
    isLoggedIn: false
  },
};

const reducer = reduceReducers<State>([
  handleAction(setUserLoginStatus, (state, { payload }) => {
    state.user.isLoggedIn = payload;
  })
], initialState);

export const store: Store<State> = createStore(reducer);