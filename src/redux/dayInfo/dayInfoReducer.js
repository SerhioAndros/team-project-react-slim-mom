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
  [getCurrentUserSuccess]: (_, { payload }) =>
    parseDaySummaryCurrentUser(payload),
  [getCalculateDailyCalory]: (_, { payload }) => parseDaySummaryCalc(payload),
  [setDailyEatenProductsSuccess]: (_, { payload }) => parseDaySummary(payload),
  [addProductSuccess]: (_, { payload }) => {
    if ("newSummary" in payload) {
      return [payload.newSummary];
    }
    return [payload.daySummary];
  },
  [deleteProductSuccess]: (_, { payload }) => [payload.daySummary],
  [getUserInfoSuccess]: (_, { payload }) => parseDaySummaryUserInfo(payload),
  [logoutSuccess]: () => null,
});

const parseDaySummary = (data) => {
  if (data.daySummary) return [data.daySummary];
  return [{ ...data }];
};

const parseDaySummaryCalc = (data) => {
  if (data.summaries.length === 0) return null;

  return data.summaries;
};
const parseDaySummaryUserInfo = (data) => {
  if (data.data.summaries.length === 0) return null;
  return [data.data.summaries[0]];
};
const parseDaySummaryCurrentUser = (data) => {
  if (data.days.length === 0) return null;
  return [data.days[0].daySummary];
};
