import axios from 'axios';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DiaryProductsListItem from './diaryProductsListItem/DiaryProductsListItem';
import {getAuthToken} from '../../../redux/auth/auth-selectors';
import {
  getDailyEatenProducts,
  getSelectedDate
} from '../../../redux/diary/diarySelectors';
import {fetchDailyEatenProducts} from '../../../redux/diary/diaryOperations';

const DiaryProductsList = () => {
  const [productList, setProductList] = useState([
    {id: '1212', product: 'Vodka', weight: '100', calories: '234'}
  ]);

  const dispatch = useDispatch();
  const dailyEatenProducts = useSelector(getDailyEatenProducts);
  const selectedDate = useSelector(getSelectedDate);

  useEffect(() => {
    dispatch(fetchDailyEatenProducts());
  }, [dispatch, selectedDate]);

  return dailyEatenProducts.map(item => (
    <DiaryProductsListItem
      product={item.product}
      weight={item.weight}
      calories={item.calories}
      key={item.id}
    />
  ));
};

export default DiaryProductsList;
