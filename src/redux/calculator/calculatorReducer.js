import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { getCalculateDaylyCalory, getCalculateDaylyCaloryError } from "./calculatorActions";

const daylyCaloryFormReducer = createReducer(null, {
 [getCalculateDaylyCalory]: (state, action) => action.payload,
 
});

const daylyCaloryFormErrorReducer = createReducer(null, {
 [getCalculateDaylyCaloryError]: (state, action) => action.payload,
});

const daylyCaloryReducer = combineReducers({
 daylyCalory: daylyCaloryFormReducer,
 daylyCaloryError: daylyCaloryFormErrorReducer,
});

export default daylyCaloryReducer;