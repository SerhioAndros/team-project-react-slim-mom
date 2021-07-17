import { createReducer } from "@reduxjs/toolkit";

import {
  logoutSuccess,
  getCurrentUserSuccess,
  // getUserInfoSuccess,
} from "../auth/auth-actions";

import {
  setDailyEatenProductsSuccess,
  addProductSuccess,
  deleteProductSuccess,
} from "../diary/diaryActions";

import { getCalculateDailyCalory } from "../calculator/calculatorActions";
// import { useSelector } from "react-redux";
// import { getSelectDate } from "./dayInfoSelector";

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
  [deleteProductSuccess]: (_, { payload }) => [payload?.daySummary],
  // [getUserInfoSuccess]: (state, { payload }) => {
  //   if (payload.data.summaries.length === 0)
  //     return [
  //       {
  //         kcalLeft: payload.data.dailyRate,
  //         kcalConsumed: 0,
  //         dailyRate: payload.data.dailyRate,
  //         percentsOfDailyRate: 0,
  //       },
  //     ];
  //   return payload.data.summaries;
  // },
  [logoutSuccess]: () => null,
});

const parseDaySummary = (data) => {
  if (data.daySummary) return [data.daySummary];
  return [{ ...data }];
};

const parseDaySummaryCalc = (data) => {
  if (data.summaries.length === 0)
    return [
      {
        kcalLeft: data.dailyRate,
        kcalConsumed: 0,
        dailyRate: data.dailyRate,
        percentsOfDailyRate: 0,
      },
    ];

  return data.summaries;
};

// const parseDaySummaryUserInfo = (data) => {
//   if (data.data.summaries.length === 0)
//     return [
//       {
//         kcalLeft: data.data.dailyRate,
//         kcalConsumed: 0,
//         dailyRate: data.data.dailyRate,
//         percentsOfDailyRate: 0,
//       },
//     ];
//   return data.data.summaries;
// };

const parseDaySummaryCurrentUser = (data) => {
  if (data.days.length === 0)
    return [
      {
        kcalLeft: data.userData.dailyRate,
        kcalConsumed: 0,
        dailyRate: data.userData.dailyRate,
        percentsOfDailyRate: 0,
      },
    ];
  return [data.days[0].daySummary];
};
