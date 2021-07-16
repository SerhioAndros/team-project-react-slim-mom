import { createReducer } from "@reduxjs/toolkit";

import {
  loginSuccess,
  logoutSuccess,
  getCurrentUserSuccess,
} from "../auth/auth-actions";

// import {
//   setSelectedDate,
//   setMatchingProductsRequest,
//   setMatchingProductsSuccess,
//   setMatchingProductsError,
//   setDailyEatenProductsRequest,
//   setDailyEatenProductsSuccess,
//   setDailyEatenProductsError,
//   addProductRequest,
//   addProductSuccess,
//   addProductError,
//   deleteProductRequest,
//   deleteProductSuccess,
//   deleteProductError,
// } from "../diary/diaryActions";

import { getCalculateDailyCalory } from "../calculator/calculatorActions";

export const notAllowedProducts = createReducer(null, {
  [getCurrentUserSuccess]: (_, { payload }) => [
    payload.data.userData.notAllowedProducts,
  ],
  [getCalculateDailyCalory]: (state, { payload }) => payload.notAllowedProducts,
  [loginSuccess]: (state, { payload }) =>
    payload.data.userData.notAllowedProducts,
  [logoutSuccess]: () => null,
});
