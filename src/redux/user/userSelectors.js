import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectCurrentAdmin = createSelector(
  [selectCurrentUser],
  (currentUser) => currentUser?.role
);

export const selectErrMessage = createSelector(
  [selectUser],
  (user) => user.errMessage
);
