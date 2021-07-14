import axios from 'axios';
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

// GET @ /filtered products
const fetchMatchingProducts = query => async (dispatch, getState) => {
  if (query.length < 1) {
    return;
  }

  axios.defaults.headers.common.Authorization = getState().auth.token;
  const endpoint = `/product?search=${query}`;

  try {
    const {data} = await axios.get(endpoint);
    const matchingProducts = data.map(product => ({
      id: product._id,
      label: product.title.ru,
      weight: product.weight,
      calories: product.calories
    }));

    dispatch(setMatchingProductsSuccess(matchingProducts));
  } catch (error) {
    dispatch(setMatchingProductsError(error.message));
  }
};

// GET @ /products
const fetchDailyEatenProducts = () => async (dispatch, getState) => {
  const selectedDate = getState().diary.selectedDate;
  if (!selectedDate) {
    return;
  }

  axios.defaults.headers.common.Authorization = getState().auth.token;
  const endpoint = `/day/info`;
  const request = {date: selectedDate};

  try {
    const {data} = await axios.post(endpoint, request);

    const eatenProducts = data.eatenProducts
      ? data.eatenProducts?.map(item => ({
          id: item.id,
          product: item.title,
          calories: item.kcal,
          weight: item.weight
        }))
      : [];

    dispatch(setDailyEatenProductsSuccess(eatenProducts));
  } catch (error) {
    dispatch(setDailyEatenProductsError(error.message));
  }
};

export {fetchMatchingProducts, fetchDailyEatenProducts};
