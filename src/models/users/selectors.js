import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  state => state,
  state => state.users
);

export const errorSelector = createSelector(
  usersSelector,
  ({ hasError }) => hasError
);


