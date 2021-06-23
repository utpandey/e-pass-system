export const authSelector = (state) => state.auth;

import { createSelector } from '@reduxjs/toolkit';

export const completedTasksSelector = createSelector(
    state => state.auth
)