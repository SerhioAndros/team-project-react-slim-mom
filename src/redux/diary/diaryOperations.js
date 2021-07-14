import axios from "axios";
import { setMatchingProducts, setDailyEatenProducts } from "./diaryActions";

const fetchMatchingProducts = (query) => async (dispatch, getState) => {
  if (query.length < 1) {
    return;
  }

  axios.defaults.headers.common.Authorization = getState().auth.token;
  const endpoint = `/product?search=${query}`;

  try {
    const { data } = await axios.get(endpoint);
    const matchingProducts = data.map((product) => ({
      id: product._id,
      label: product.title.ru,
      weight: product.weight,
      calories: product.calories,
    }));

    dispatch(setMatchingProducts(matchingProducts));
  } catch (error) {
    //alert(`${error.message}`);
  }
};

const fetchDailyEatenProducts = () => async (dispatch, getState) => {
  const selectedDate = getState().diary.selectedDate;
  if (!selectedDate) {
    return;
  }

  axios.defaults.headers.common.Authorization = getState().auth.token;
  const endpoint = `/day/info`;
  const request = { date: selectedDate };

  try {
    const { data } = await axios.post(endpoint, request);

    const eatenProducts = data.eatenProducts
      ? data.eatenProducts?.map((item) => ({
          id: item.id,
          product: item.title,
          calories: item.kcal,
          weight: item.weight,
        }))
      : [];

    dispatch(setDailyEatenProducts(eatenProducts));
  } catch (error) {
    alert(`${error.message}`);
  }
};

export { fetchMatchingProducts, fetchDailyEatenProducts };
