import { takeLatest, all, put, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { registerUser, loginUser, logoutUser, currentSession } from 'api';

import { actions as userAction } from 'models/users/slice';

export function* signUpSaga({ payload }) {
  try {
    const data = yield call(registerUser, payload);
    yield put(userAction.userRegistrationSuccess(data));
    yield put(push('/signin'));
  } catch (err) {
    yield put(userAction.userRegistrationError(err));
  }
}

export function* signInSaga({ payload }) {
  try {
    const data = yield call(loginUser, payload);
    yield put(userAction.userLoginSuccess(data));
    yield put(push('/'));
  } catch (err) {
    yield put(userAction.userLoginError(err));
  }
}

export function* logOutSaga() {
  try {
    yield call(logoutUser);
    yield put(userAction.userLogoutSuccess());
  } catch (err) {
    yield put(userAction.userLogoutError(err));
  }
}

export function* currentUserSaga() {
  try {
    const data = yield call(currentSession);
    yield put(userAction.currentUserSuccess(data));
  } catch (err) {
    yield put(userAction.currentUserError(err));
  }
}

export default function*() {
  yield all([takeLatest(userAction.userRegistration, signUpSaga)]);
  yield all([takeLatest(userAction.userLogin, signInSaga)]);
  yield all([takeLatest(userAction.userLogout, logOutSaga)]);
  yield all([takeLatest(userAction.currentUser, currentUserSaga)]);
}
