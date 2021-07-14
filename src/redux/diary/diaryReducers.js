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
  dailyEatenProducts: [],
  selectedDateId: ''
};

const selectedDate = createReducer(initialDiaryState.selectedDate, {
  [setSelectedDate]: (state, action) => action.payload
});

const selectedDateId = createReducer(initialDiaryState.selectedDateId, {
  [setDailyEatenProductsSuccess]: (state, {payload}) => payload.id
});

const matchingProducts = createReducer(initialDiaryState.matchingProducts, {
  [setMatchingProductsSuccess]: (state, action) => action.payload
});

const dailyEatenProducts = createReducer(initialDiaryState.dailyEatenProducts, {
  [addProductSuccess]: (state, {payload}) => [...state, payload],
  [setDailyEatenProductsSuccess]: (state, {payload}) => payload.eatenProducts,
  [deleteProductSuccess]: (state, {payload}) =>
    state.filter(({id}) => id !== payload)
});

const dailyConsumedCalories = createReducer(
  initialDiaryState.dailyEatenProducts,
  {
    [setDailyEatenProductsSuccess]: (state, action) =>
      action.payload.eatenProducts.reduce((a, e) => (a += e.kcal), 0)
  }
);

const diaryReducer = combineReducers({
  selectedDate,
  matchingProducts,
  dailyEatenProducts,
  dailyConsumedCalories,
  selectedDateId
});

export {diaryReducer};
