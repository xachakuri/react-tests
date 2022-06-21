/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isAuthorized: false,
    isAdmin: '',
    username: '',
    error: '',
    hasError: false,
  },
  reducers: {
    userRegistration: state => {
      state.isAuthorized = false;
      state.hasError = false;
    },
    userRegistrationSuccess: (state, { payload }) => {
      state.isAdmin = payload.isAdmin;
      state.username = payload.username;
      state.error = '';
      state.hasError = false;
    },
    userRegistrationError: (state, { payload }) => {
      state.isAuthorized = false;
      state.error = payload;
      state.hasError = true;
    },
    userLogin: state => {
      state.isAuthorized = false;
      state.hasError = false;
    },
    userLoginSuccess: (state, { payload }) => {
      state.isAuthorized = true;
      state.isAdmin = payload.isAdmin;
      state.username = payload.username;
      state.error = '';
      state.hasError = false;
    },
    userLoginError: (state, { payload }) => {
      state.isAuthorized = false;
      state.error = payload;
      state.hasError = true;
    },
  },
});

export const { actions, reducer, name: sliceKey } = usersSlice;

export default usersSlice.reducer;
