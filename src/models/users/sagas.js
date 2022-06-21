import { takeLatest, all, put, call } from 'redux-saga/effects';

import { registerUser, loginUser } from 'api';

import { actions as userAction } from 'models/users/slice';

export function* signUpSaga({ payload }) {
  try {
    const data = yield call(registerUser, payload);
    localStorage.setItem('token', data.auth_token);
    yield put(userAction.userRegistrationSuccess(payload));
  } catch (err) {
    yield put(userAction.userRegistrationError(err));
  }
}

export function* signInSaga({ payload }) {
  try {
    yield call(loginUser, payload);
    yield put(userAction.userLoginSuccess(payload));
    console.log('успешно');
  } catch (err) {
    yield put(userAction.userLoginError(err));
  }
}

export default function*() {
  yield all([takeLatest(userAction.userRegistration, signUpSaga)]);
  yield all([takeLatest(userAction.userLogin, signInSaga)]);
}
