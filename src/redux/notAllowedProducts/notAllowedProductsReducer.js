import { createReducer } from "@reduxjs/toolkit";

import {
  logoutSuccess,
  getCurrentUserSuccess,
  getUserInfoSuccess,
} from "../auth/auth-actions";

import { getCalculateDailyCalory } from "../calculator/calculatorActions";

export const notAllowedProducts = createReducer(null, {
  [getCurrentUserSuccess]: (_, { payload }) =>
    payload.userData.notAllowedProducts,
  [getCalculateDailyCalory]: (_, { payload }) => payload.notAllowedProducts,
  [getUserInfoSuccess]: (_, { payload }) => payload.data.notAllowedProducts,
  [logoutSuccess]: () => null,
});
