import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  getCalculateDailyCalory,
  getCalculateDailyCaloryError,
} from "./calculatorActions";

const dailyCaloryFormReducer = createReducer(null, {
  [getCalculateDailyCalory]: (state, action) => action.payload,
});

const dailyCaloryFormErrorReducer = createReducer(null, {
  [getCalculateDailyCaloryError]: (state, action) => action.payload,
});

const dailyCaloryReducer = combineReducers({
  dailyCalory: dailyCaloryFormReducer,
  dailyCaloryError: dailyCaloryFormErrorReducer,
});

const loading = createReducer(false, {
  [getCalculateDailyCalory]: () => false,
  [getCalculateDailyCaloryError]: () => false,
});

export { dailyCaloryReducer, loading };
