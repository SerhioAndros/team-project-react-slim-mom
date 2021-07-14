import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit';
import {setSelectedDate, setMatchingProducts, setDailyEatenProducts} from './diaryActions';

const initialDiaryState = {
  selectedDate: '2021-07-12',
  matchingProducts: [],
  dailyEatenProducts:[],
};

const selectedDate = createReducer(initialDiaryState.selectedDate, {
  [setSelectedDate]: (state, action) => action.payload
});
const matchingProducts = createReducer(initialDiaryState.matchingProducts, {
  [setMatchingProducts]: (state, action) => action.payload
});
const dailyEatenProducts = createReducer(initialDiaryState.dailyEatenProducts, {
  [setDailyEatenProducts]: (state, action) => action.payload
});
const dailyConsumedCalories = createReducer(initialDiaryState.dailyEatenProducts, {
    [setDailyEatenProducts]: (state, action) => action.payload.reduce((a, e) => a+=e.calories,0)
});

const diaryReducer = combineReducers({
  selectedDate,
  matchingProducts,
  dailyEatenProducts,
  dailyConsumedCalories
});

export {diaryReducer};
