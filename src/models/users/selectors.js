import { initialState } from './slice';

const selectDomain = state => state.users || initialState;

export const isAuthorized = state => selectDomain(state).isAuthorized;

export const isAdmin = state => selectDomain(state).isAdmin;
