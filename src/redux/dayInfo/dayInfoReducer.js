import { createReducer } from "@reduxjs/toolkit";

import {
  logoutSuccess,
  getCurrentUserSuccess,
  getUserInfoSuccess,
} from "../auth/auth-actions";

import {
  setDailyEatenProductsSuccess,
  addProductSuccess,
  deleteProductSuccess,
} from "../diary/diaryActions";

import { getCalculateDailyCalory } from "../calculator/calculatorActions";

export const dayInfo = createReducer(null, {
  [getCurrentUserSuccess]: (_, { payload }) => [payload.days[0].daySummary],
  [getCalculateDailyCalory]: (_, { payload }) => payload.summaries,
  [setDailyEatenProductsSuccess]: (_, { payload }) => parseDaySummary(payload),
  [addProductSuccess]: (_, { payload }) => [payload.daySummary],
  [addProductSuccess]: (_, { payload }) => [payload.daySummary],
  [deleteProductSuccess]: (_, { payload }) => [payload.daySummary],
  [getUserInfoSuccess]: (_, { payload }) => [payload.data.summaries[0]],
  [logoutSuccess]: () => null,
});

const parseDaySummary = (data) => {
  if (data.daySummary) return [data.daySummary];
  return [{ ...data }];
};
