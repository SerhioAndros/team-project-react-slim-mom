import { createReducer } from "@reduxjs/toolkit";
import { addProductSuccess, deleteProductSuccess } from "../diary/diaryActions";

const daySummary = createReducer(null, {
  [deleteProductSuccess]: (state, action) => action.payload.newDaySummary,
  [addProductSuccess]: (state, action) => action.payload.daySummary,
});

export default daySummary;
