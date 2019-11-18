import { createAction, handleAction, reduceReducers } from 'redux-ts-utils';

interface IUser {
  id: string;
  email: string;
  isLoggedIn: boolean;
}

export type UserState = Readonly<IUser>;

export const FETCH_USER_LOGIN_STATUS = '[user] fetch user login';
export const FETCH_USER_DETAILS = '[user] fetch user details';
export const SET_USER_DETAILS = '[user] sets user details';

export const getUserLoggedInStatus = createAction<void>(FETCH_USER_LOGIN_STATUS);
export const getUserDetails = createAction<string>(FETCH_USER_DETAILS);
export const setUserDetails = createAction<UserState>(SET_USER_DETAILS);

export const initialUserState: UserState = {
  id: '',
  email: '',
  isLoggedIn: false
};

export const userReducer = reduceReducers<UserState>(
  [
    handleAction(setUserDetails, (_, { payload }) => ({
      ...payload
    }))
  ],
  initialUserState
);
