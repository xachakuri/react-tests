/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

export const initialState = {
  isAuthorized: false,
  isAdmin: '',
  username: '',
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userRegistration: state => {
      state.isAuthorized = false;
    },
    userRegistrationSuccess: (state, { payload }) => {
      state.isAdmin = payload.isAdmin;
      state.username = payload.username;
      state.error = '';
    },
    userRegistrationError: (state, { payload }) => {
      state.isAuthorized = false;
      state.error = payload;
    },
    userLogin: state => {
      state.isAuthorized = false;
    },
    userLoginSuccess: (state, { payload }) => {
      state.isAuthorized = true;
      state.isAdmin = payload.is_admin;
      state.username = payload.username;
      state.error = '';
    },
    userLoginError: (state, { payload }) => {
      state.isAuthorized = false;
      state.error = payload;
    },
    userLogout: state => {
      state.isAuthorized = true;
      state.error = '';
    },
    userLogoutSuccess: state => {
      state.isAuthorized = false;
      state.isAdmin = null;
      state.username = '';
      state.error = '';
    },
    userLogoutError: (state, { payload }) => {
      state.isAuthorized = true;
      state.error = payload;
    },
    currentUser: state => {
      state.isAuthorized = false;
      state.error = '';
    },
    currentUserSuccess: (state, { payload }) => {
      state.isAuthorized = true;
      state.isAdmin = payload.is_admin;
      state.username = payload.username;
      state.error = '';
    },
    currentUserError: (state, { payload }) => {
      state.isAuthorized = false;
      state.error = payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = usersSlice;

export default usersSlice.reducer;
