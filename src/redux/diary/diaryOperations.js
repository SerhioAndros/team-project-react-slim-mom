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

  console.log(`fetching eaten for : ${selectedDate}`);

  try {
    const {data} = await axios.post(endpoint, request);
    console.dir(data);
    if (!data.eatenProducts) {
      data.eatenProducts = [];
    }

    dispatch(setDailyEatenProductsSuccess(data));
  } catch (error) {
    dispatch(setDailyEatenProductsError(error.message));
  }
};

// POST @ /products
const addEatenProduct = eatenProduct => dispatch => {
  dispatch(addProductRequest());

  axios
    .post('/day', eatenProduct)
    .then(({data}) => dispatch(addProductSuccess(data)))
    .catch(error => dispatch(addProductError(error.message)));
};

// DELETE @ /products/:id
const deleteEatenProduct = id => (dispatch, getState) => {
  dispatch(deleteProductRequest());

  const request = {
    data: {
      dayId: getState().diary.selectedDateId,
      eatenProductId: id
    }
  };

  axios
    .delete('/day', request)
    .then(({data}) =>
      dispatch(deleteProductSuccess({id: id, daySummary: data.newDaySummary}))
    )
    .catch(error => dispatch(deleteProductError(error.message)));
};

export const operations = {
  fetchMatchingProducts,
  fetchDailyEatenProducts,
  addEatenProduct,
  deleteEatenProduct
};
