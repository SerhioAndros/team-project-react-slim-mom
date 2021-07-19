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
  selectedDate: new Date()
    .toLocaleDateString('uk-UA')
    .split('.')
    .reverse()
    .join('-'),
  matchingProducts: [],
  dailyEatenProducts: [],
  selectedDateId: '',
  daySummary: {}
};

const selectedDate = createReducer(initialDiaryState.selectedDate, {
  [setSelectedDate]: (state, action) => action.payload
});

const selectedDateId = createReducer(initialDiaryState.selectedDateId, {
  [setDailyEatenProductsSuccess]: (state, {payload}) =>
    payload.id ? payload.id : '',
  [addProductSuccess]: (state, {payload}) =>
    payload.newDay && payload.newDay.id ? payload.newDay.id : ''
});

const matchingProducts = createReducer(initialDiaryState.matchingProducts, {
  [setMatchingProductsSuccess]: (state, action) => action.payload
});

const dailyEatenProducts = createReducer(initialDiaryState.dailyEatenProducts, {
  [addProductSuccess]: (state, {payload}) => [...state, payload.eatenProduct],
  [setDailyEatenProductsSuccess]: (state, {payload}) => payload.eatenProducts,
  [deleteProductSuccess]: (state, {payload}) =>
    state.filter(({id}) => id !== payload.id)
});

const daySummary = createReducer(initialDiaryState.daySummary, {
  [deleteProductSuccess]: (state, {payload}) => parseDaySummary(payload),
  [setDailyEatenProductsSuccess]: (state, {payload}) =>
    parseDaySummary(payload),
  [addProductSuccess]: (state, {payload}) => parseDaySummary(payload)
});

const loading = createReducer(false, {
  [setMatchingProductsRequest]: () => true,
  [setMatchingProductsSuccess]: () => false,
  [setMatchingProductsError]: () => false,
  [setDailyEatenProductsRequest]: () => true,
  [setDailyEatenProductsSuccess]: () => false,
  [setDailyEatenProductsError]: () => false,
  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,
  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false
});

const parseDaySummary = data => {
  if (data.daySummary) return data.daySummary;
  return {...data};
};

const diaryReducer = combineReducers({
  selectedDate,
  matchingProducts,
  dailyEatenProducts,
  daySummary,
  selectedDateId,
  loading
});

export {diaryReducer};
