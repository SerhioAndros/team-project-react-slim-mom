import { createReducer } from "@reduxjs/toolkit";

import {
  logoutSuccess,
  getCurrentUserSuccess,
  getUserInfoSuccess,
  loginSuccess,
} from "../auth/auth-actions";

import { getCalculateDailyCalory } from "../calculator/calculatorActions";

export const notAllowedProducts = createReducer(null, {
  [getCurrentUserSuccess]: (_, { payload }) =>
    payload.userData.notAllowedProducts,
  [getCalculateDailyCalory]: (_, { payload }) => payload.notAllowedProducts,
  [getUserInfoSuccess]: (_, { payload }) => payload.data.notAllowedProducts,
  [logoutSuccess]: () => null,
  [loginSuccess]: (_, { payload }) => {
    if (payload.user.userData.notAllowedProducts.length === 0) return null;
    return payload.user.userData.notAllowedProducts;
  },
});
