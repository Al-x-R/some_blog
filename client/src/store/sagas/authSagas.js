import * as API from '../../services/api';
import { put } from 'redux-saga/effects';
import * as AuthActionCreator from '../actions/authActionCreators';

const createAuthSaga = apiMethod =>
  function* authSaga(action) {
    yield put(AuthActionCreator.authRequest());
    try {
      const { payload: { values } } = action;
      const { data } = yield apiMethod(values);
      yield put(AuthActionCreator.authRequestSuccess(data));
    } catch (error) {
      yield put(AuthActionCreator.authRequestError(error));
    }
  };

export const signInSaga = createAuthSaga(API.auth.signin);

export const signUpSaga = createAuthSaga(API.auth.signup);

export const refreshAuthSaga = createAuthSaga(API.auth.refresh);

export const logoutSaga = function* () {
  yield API.auth.logout();
  yield put(AuthActionCreator.logoutRequestSuccess());
};