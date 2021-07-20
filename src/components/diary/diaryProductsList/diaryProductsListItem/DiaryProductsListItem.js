import {useDispatch} from 'react-redux';
import {operations} from '../../../../redux/diary/diaryOperations';
import styles from './DiaryProductsListItem.module.css';

const DiaryProductsListItem = ({id, product, weight, calories}) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(operations.deleteEatenProduct(id));
  };

  return (
    <>
      <li className={styles.item}>
        <p className={styles.name}>{product}</p>
        <p className={styles.weight}>{weight} г</p>
        <p className={styles.kcal}>{calories} ккaл</p>
        <button
          type="button"
          className={styles.buttonCross}
          onClick={() => handleDelete(id)}
        >
          X
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
