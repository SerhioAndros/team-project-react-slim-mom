import axios from 'axios';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Autocomplete from 'react-autocomplete';
import styles from './DiaryAddProductForm.module.css';
import sprite from '../../../images/diary/sprite.svg';
import {getAuthToken} from '../../../redux/auth/auth-selectors';
import {fetchMatchingProducts} from '../../../redux/diary/diaryOperations';
import {getMatchingProducts} from '../../../redux/diary/diarySelectors';
import {setSelectedDate} from '../../../redux/diary/diaryActions';

const DiaryAddProductForm = () => {
  const initialState = {
    product: '',
    productId: '',
    productWeight: 0,
    productCalories: 0,
    error: ''
  };

  const [state, setState] = useState({...initialState});

  const dispatch = useDispatch();
  const matchingProducts = useSelector(getMatchingProducts);

  useEffect(() => {
    if (state.product.length < 1) {
      return;
    }
    dispatch(fetchMatchingProducts(state.product));
  }, [dispatch, state.product]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setSelectedDate('2021-07-13'));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label>
            <Autocomplete
              className={styles.productName}
              items={matchingProducts}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={item => item.label}
              renderItem={(item, highlighted) => (
                <div key={item.id}>{item.label}</div>
              )}
              value={state.product}
              onChange={e =>
                setState(prevState => ({...prevState, product: e.target.value}))
              }
              onSelect={(value, item) =>
                setState(prevState => ({
                  ...prevState,
                  product: item.label,
                  productId: item.id,
                  productWeight: item.weight,
                  productCalories: item.calories
                }))
              }
              inputProps={{
                className: styles.productName,
                placeholder: 'Введите название продукта'
              }}
            />
          </label>

          <label>
            <input
              className={styles.gram}
              placeholder="Граммы"
              name="weight"
              value={state.productWeight}
              onChange={e =>
                setState(prevState => ({
                  ...prevState,
                  productWeight: e.target.value
                }))
              }
              autoComplete="off"
            />
          </label>

          <button className={styles.buttonSubmitMobile} type="submit">
            Добавить
          </button>

          <button className={styles.buttonSubmit} type="submit">
            <svg className={styles.icon}>
              <use href={sprite + '#whiteCross'} />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
