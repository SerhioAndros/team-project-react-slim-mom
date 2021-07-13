import axios from 'axios';
import {useState, useEffect} from 'react';
import Autocomplete from 'react-autocomplete';
import styles from './DiaryAddProductForm.module.css';
import sprite from '../../../images/diary/sprite.svg';

const DiaryAddProductForm = () => {
  const initialState = {
    productList: [],
    product: '',
    productId: '',
    productWeight: null,
    productCalories: null,
    error: ''
  };

  const [state, setState] = useState({...initialState});
  //const dispatch = useDispatch();

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MGVjMWQ1Y2E2Zjk3NjY4ZjdmYzRmZWMiLCJzaWQiOiI2MGVkNjdlM2E2Zjk3NjY4ZjdmYzUwMmEiLCJpYXQiOjE2MjYxNzEzNjMsImV4cCI6MTYyNjE3NDk2M30.5zfIj3x0Y-nmByTDEWVXcVTDQktXgpS9-DbqV9ttlSU';
  const base_url = 'https://slimmom-backend.goit.global';

  axios.defaults.baseURL = base_url;
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;

  useEffect(() => {
    if (state.product.length < 1) {
      return;
    }
    console.log(`/product?search=${state.product}`);
    axios.get(`/product?search=${state.product}`).then(response => {
      console.dir(response.data);
      let productList = response.data.map(product => ({
        id: product._id,
        label: product.title.ru,
        weight: product.weight,
        calories: product.calories
      }));
      console.dir(productList);
      setState(prevState => ({...prevState, productList: productList}));
    });
  }, [state.product]);

  return (
    <>
      <form onSubmit>
        <div className={styles.form}>
          <label>
            <Autocomplete
              className={styles.productName}
              items={state.productList}
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
          {/* <label>
            <input
              className={styles.productName}
              placeholder="Введите название продукта"
              name="product"
              type="text"
              onChange
              autoComplete="off"
            />
          </label> */}

          <label>
            <input
              className={styles.gram}
              placeholder="Граммы"
              name="weight"
              value={state.productWeight}
              onChange
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
