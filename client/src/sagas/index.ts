import { all } from 'redux-saga/effects';
import { watchIsUserLoggedInSaga } from './auth';

export default function* rootSaga() {
  yield all([watchIsUserLoggedInSaga()]);
}
