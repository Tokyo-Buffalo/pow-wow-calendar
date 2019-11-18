import { call, take, fork, put } from 'redux-saga/effects';
import { FETCH_USER_LOGIN_STATUS, setUserDetails } from '../../store/user';
import { getLoggedInStatus } from '../../helpers/api';

export function* isUserLoggedInSaga() {
  try {
    const res = yield call(getLoggedInStatus);
    yield put(setUserDetails(res));
  } catch (error) {
    return error;
  }
}

export function* watchIsUserLoggedInSaga() {
  while (true) {
    yield take(FETCH_USER_LOGIN_STATUS);
    yield fork(isUserLoggedInSaga);
  }
}
