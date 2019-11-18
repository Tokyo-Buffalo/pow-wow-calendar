import { createAction, handleAction, reduceReducers } from 'redux-ts-utils';

interface IUser {
  id: string;
  email: string;
  isLoggedIn: boolean;
}

export type UserState = Readonly<IUser>;

export const FETCH_USER_DETAILS = '[user] fetch user login';
export const SET_USER_DETAILS = '[user] sets user details';

export const getUserLoggedInStatus = createAction<void>(FETCH_USER_DETAILS);
export const setUserDetails = createAction<boolean>(SET_USER_DETAILS);

const initialState: UserState = {
  id: '',
  email: '',
  isLoggedIn: false
};

export const userReducer = reduceReducers<UserState>(
  [
    handleAction(getUserLoggedInStatus, state => state),
    handleAction(setUserDetails, (state, { payload }) => {
      state.isLoggedIn = payload;
    })
  ],
  initialState
);
