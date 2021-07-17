import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Autocomplete from 'react-autocomplete';
import styles from './DiaryAddProductForm.module.css';
import sprite from '../../../images/diary/sprite.svg';
import {operations} from '../../../redux/diary/diaryOperations';
import {selectors} from '../../../redux/diary/diarySelectors';

const DiaryAddProductForm = ({isModal, toggleModal}) => {
  const initialState = {
    product: '',
    productId: '',
    productWeight: '',
    productCalories: '',
    error: ''
  };

  const [state, setState] = useState({...initialState});

  const dispatch = useDispatch();
  const matchingProducts = useSelector(selectors.getMatchingProducts);
  const selectedDate = useSelector(selectors.getSelectedDate);

  useEffect(() => {
    if (state.product.length < 1) {
      return;
    }
    dispatch(operations.fetchMatchingProducts(state.product));
  }, [dispatch, state.product]);

  const handleSubmit = e => {
    e.preventDefault();
    const eatenProduct = {
      date: selectedDate,
      productId: state.productId,
      weight: state.productWeight
    };

    dispatch(operations.addEatenProduct(eatenProduct));
    setState(initialState);
    if (isModal) {
      toggleModal();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div
          className={`${styles.form} 
                      ${isModal ? styles.mobileModal : ''}
                      `}
        >
          <label>
            <Autocomplete
              className={styles.productName}
              items={matchingProducts}
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={item => item.label}
              renderItem={(item, isHighlighted) => (
                <div
                  style={{background: isHighlighted ? 'lightgray' : 'white'}}
                  key={item.id}
                >
                  {item.label}
                </div>
              )}
              value={state.product}
              onChange={e =>
                setState(prevState => ({
                  ...prevState,
                  product: e.target.value
                }))
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
              menuStyle={{
                borderRadius: '3px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '2px 0',
                fontSize: '90%',
                position: 'absolute',
                overflow: 'auto',
                maxHeight: '50%'
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

          {isModal ? (
            <button className={styles.buttonSubmitMobile} type="submit">
              Добавить
            </button>
          ) : (
            <button className={styles.buttonSubmit} type="submit">
              <svg className={styles.icon}>
                <use href={sprite + '#whiteCross'} />
              </svg>
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default DiaryAddProductForm;
