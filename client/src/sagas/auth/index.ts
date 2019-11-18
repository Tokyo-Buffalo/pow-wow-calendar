import { call, take, fork } from 'redux-saga/effects';
import { FETCH_USER_DETAILS } from '../../store/user';
import { getLoggedInStatus } from '../../helpers/api';

export function* isUserLoggedInSaga() {
  try {
    yield call(getLoggedInStatus);
  } catch (error) {
    return error;
  }
}

export function* watchIsUserLoggedInSaga() {
  while (true) {
    yield take(FETCH_USER_DETAILS);
    yield fork(isUserLoggedInSaga);
  }
}
