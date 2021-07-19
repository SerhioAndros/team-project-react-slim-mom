import { createReducer } from "@reduxjs/toolkit";
import { logoutSuccess, getCurrentUserSuccess } from "../auth/auth-actions";
import {
  setDailyEatenProductsSuccess,
  addProductSuccess,
  deleteProductSuccess,
} from "../diary/diaryActions";

export const dayInfo = createReducer(null, {
  [getCurrentUserSuccess]: (_, { payload }) =>
    parseDaySummaryCurrentUser(payload),
  [setDailyEatenProductsSuccess]: (_, { payload }) => parseDaySummary(payload),
  [addProductSuccess]: (_, { payload }) => {
    if ("newSummary" in payload) {
      return [payload.newSummary];
    }
    return [payload.daySummary];
  },

  [deleteProductSuccess]: (_, { payload }) => [payload?.daySummary],
  [logoutSuccess]: () => null,
});

const parseDaySummary = (data) => {
  if (data.daySummary) return [data.daySummary];
  return [{ ...data }];
};

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

  const day = data.days.filter(
    (day) =>
      day.date ===
      new Date().toLocaleDateString("uk-UA").split(".").reverse().join("-")
  );

  function findDay() {
    if (day.length === 0)
      return [
        {
          kcalLeft: data.userData.dailyRate,
          kcalConsumed: 0,
          dailyRate: data.userData.dailyRate,
          percentsOfDailyRate: 0,
        },
      ];
    return [day[0].daySummary];
  }

  const findDayOfArray = findDay();
  return findDayOfArray;
};
