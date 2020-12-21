import { takeLatest } from 'redux-saga/effects';
import AUTH_ACTION_TYPES from '../actions/authActionTypes';
import * as AuthSagas from './authSagas';

function* rootSaga() {
  yield takeLatest(AUTH_ACTION_TYPES.SIGNIN_REQUEST, AuthSagas.signInSaga);
  yield takeLatest(AUTH_ACTION_TYPES.SIGNUP_REQUEST, AuthSagas.signUpSaga);
  yield takeLatest(AUTH_ACTION_TYPES.REFRESH_AUTH_REQUEST, AuthSagas.refreshAuthSaga);
  yield takeLatest(AUTH_ACTION_TYPES.LOGOUT_REQUEST, AuthSagas.logoutSaga)
}

export default rootSaga;