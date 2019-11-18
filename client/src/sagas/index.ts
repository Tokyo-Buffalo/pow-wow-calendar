import { all } from 'redux-saga/effects';
import { watchIsUserLoggedInSaga } from './auth';

export function* rootSaga() {
  yield all([watchIsUserLoggedInSaga()]);
}
