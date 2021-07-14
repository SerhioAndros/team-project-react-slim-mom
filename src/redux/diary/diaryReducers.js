import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {
  setSelectedDate,
  setMatchingProductsRequest,
  setMatchingProductsSuccess,
  setMatchingProductsError,
  setDailyEatenProductsRequest,
  setDailyEatenProductsSuccess,
  setDailyEatenProductsError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError
} from './diaryActions';

const initialDiaryState = {
  selectedDate: '2021-07-12',
  matchingProducts: [],
  dailyEatenProducts: []
};

const selectedDate = createReducer(initialDiaryState.selectedDate, {
  [setSelectedDate]: (state, action) => action.payload
});
const matchingProducts = createReducer(initialDiaryState.matchingProducts, {
  [setMatchingProductsSuccess]: (state, action) => action.payload
});
const dailyEatenProducts = createReducer(initialDiaryState.dailyEatenProducts, {
  [addProductSuccess]: (state, {payload}) => [...state, payload],
  [setDailyEatenProductsSuccess]: (state, action) => action.payload,
  [deleteProductSuccess]: (state, {payload}) =>
    state.filter(({id}) => id !== payload)
});
const dailyConsumedCalories = createReducer(
  initialDiaryState.dailyEatenProducts,
  {
    [setDailyEatenProductsSuccess]: (state, action) =>
      action.payload.reduce((a, e) => (a += e.calories), 0)
  }
);

const diaryReducer = combineReducers({
  selectedDate,
  matchingProducts,
  dailyEatenProducts,
  dailyConsumedCalories
});

export {diaryReducer};
