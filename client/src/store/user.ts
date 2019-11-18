import { createAction, handleAction, reduceReducers } from 'redux-ts-utils';

interface IUser {
  id: string;
  email: string;
  isLoggedIn: boolean;
}

export type UserState = Readonly<IUser>;

const getUserLoggedInStatus = createAction<void>('getUserLoginStatus');
const setUserLoginStatus = createAction<boolean>('setUserLoginStatus');

const initialState: UserState = {
  id: '',
  email: '',
  isLoggedIn: false
};

export const userReducer = reduceReducers<UserState>(
  [
    handleAction(getUserLoggedInStatus, state => state),
    handleAction(setUserLoginStatus, (state, { payload }) => {
      state.isLoggedIn = payload;
    })
  ],
  initialState
);
