import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DiaryProductsListItem from './diaryProductsListItem/DiaryProductsListItem';
import styles from './DiaryProductsList.module.css';
import {selectors} from '../../../redux/diary/diarySelectors';
import {operations} from '../../../redux/diary/diaryOperations';

const DiaryProductsList = () => {
  const dispatch = useDispatch();
  const dailyEatenProducts = useSelector(selectors.getDailyEatenProducts);
  const selectedDate = useSelector(selectors.getSelectedDate);

  useEffect(() => {
    dispatch(operations.fetchDailyEatenProducts());
  }, [dispatch, selectedDate]);

  return (
    <ul className={styles.productList}>
      {dailyEatenProducts.map(item => (
        <DiaryProductsListItem
          product={item.title}
          weight={item.weight}
          calories={Math.round(item.kcal)}
          id={item.id}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default DiaryProductsList;
