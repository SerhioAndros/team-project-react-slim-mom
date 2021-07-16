import { createReducer } from "@reduxjs/toolkit";

import { logoutSuccess, getCurrentUserSuccess } from "../auth/auth-actions";

import {
  setDailyEatenProductsSuccess,
  addProductSuccess,
} from "../diary/diaryActions";

import { getCalculateDailyCalory } from "../calculator/calculatorActions";

export const dayInfo = createReducer(null, {
  [getCurrentUserSuccess]: (_, { payload }) => [
    payload.data.days[0].daySummary,
  ],
  [getCalculateDailyCalory]: (state, { payload }) => payload.summaries,
  [setDailyEatenProductsSuccess]: (state, { payload }) => [payload.daySummary],
  [addProductSuccess]: (state, { payload }) => [payload.daySummary],
  [logoutSuccess]: () => null,
});
