import {createAction} from '@reduxjs/toolkit';

const setSelectedDate = createAction('diary/setSelectedDate');
const setMatchingProducts = createAction('diary/setMatchingProducts');
const setDailyEatenProducts = createAction('diary/setDailyEatenProducts');

export {setSelectedDate, setMatchingProducts, setDailyEatenProducts};
