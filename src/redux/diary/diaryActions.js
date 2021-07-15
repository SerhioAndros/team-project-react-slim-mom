import {createAction} from '@reduxjs/toolkit';

const setSelectedDate = createAction('diary/setSelectedDate');

const setMatchingProductsRequest = createAction(
  'diary/setMatchingProductsRequest'
);
const setMatchingProductsSuccess = createAction(
  'diary/setMatchingProductsSuccess'
);
const setMatchingProductsError = createAction('diary/setMatchingProductsError');

const setDailyEatenProductsRequest = createAction(
  'diary/setDailyEatenProductsRequest'
);
const setDailyEatenProductsSuccess = createAction(
  'diary/setDailyEatenProductsSuccess'
);
const setDailyEatenProductsError = createAction(
  'diary/setDailyEatenProductsError'
);

const addProductRequest = createAction('diary/addProductRequest');
const addProductSuccess = createAction('diary/addProductSuccess');
const addProductError = createAction('diary/addProductError');

const deleteProductRequest = createAction('diary/deleteProductRequest');
const deleteProductSuccess = createAction('diary/deleteProductSuccess');
const deleteProductError = createAction('diary/deleteProductError');

export {
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
};
