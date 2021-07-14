import {createAction} from '@reduxjs/toolkit';

const getCalculateDailyCalory = createAction(
  'calculator/getCalculateDaylyCalory'
);
const getCalculateDailyCaloryError = createAction(
  'calculator/getCalculateDaylyCalory'
);

export {getCalculateDailyCalory, getCalculateDailyCaloryError};
