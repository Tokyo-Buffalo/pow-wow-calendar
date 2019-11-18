import { call, take } from 'redux-saga/effects';
import { getLoggedInStatus } from '../../helpers/api';

export function* isUserLoggedInSaga() {
  try {
    yield call(getLoggedInStatus);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function watchIsUserLoggedInSaga() {
  while (true) {
    const action = take();
  }
}
