import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../redux/diary/diarySelectors";
import { getDayInfo } from "../../redux/dayInfo/dayInfoSelector";
// import { getNotAllowedProductsInfo } from "../../redux/notAllowedProducts/notAllowedProductsSelectors";

import styles from "./RightSideBar.module.css";
import { operations } from "../../redux/diary/diaryOperations";

import sprite from "../../images/modal/sprite.svg";
import { getFilterValue } from "../../redux/filter/filterActions";
import {
  filterSelector,
  getFilteredNotAllowedProductsSelector,
  notAllowedProductsSelector,
} from "../../redux/filter/filterSelectors";

const RightSideBar = () => {
  const daySummary = useSelector(getDayInfo);
  // const notAllowedProductsInfo = useSelector(getNotAllowedProductsInfo);
  const selectedDate = useSelector(selectors.getSelectedDate);
  const date = selectedDate.split("-").reverse().join(".");
  const products = useSelector(notAllowedProductsSelector);
  const filter = useSelector(filterSelector);
  const filteredProducts = useSelector(getFilteredNotAllowedProductsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchDailyEatenProducts());
  }, [dispatch, selectedDate]);

  // const location = useLocation();

  const getcurrentDate = () => {
    // if (location.pathname === "/calculator") {
    //   return new Date().toLocaleDateString("uk-UA");
    // }
    return date;
  };

  const onChange = (event) => {
    dispatch(getFilterValue(event.target.value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.statistics}>
          <h3 className={styles.subTitle}>Сводка за {getcurrentDate()}</h3>
          {daySummary ? (
            <ul className={styles.statisticsList}>
              <li className={styles.statisticsItem}>
                Осталось
                <span>{Math.round(daySummary[0]?.kcalLeft) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                Употреблено
                <span>{Math.round(daySummary[0]?.kcalConsumed) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                Дневная норма
                <span>{Math.round(daySummary[0]?.dailyRate) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                % от нормы
                <span>
                  {Math.round(daySummary[0]?.percentsOfDailyRate) + " %"}
                </span>
              </li>
            </ul>
          ) : (
            <ul className={styles.statisticsList}>
              <li className={styles.statisticsItem}>
                Осталось
                <span>ккал</span>
              </li>
              <li className={styles.statisticsItem}>
                Употреблено
                <span>ккал</span>
              </li>
              <li className={styles.statisticsItem}>
                Дневная норма
                <span>ккал</span>
              </li>
              <li className={styles.statisticsItem}>
                % от нормы
                <span>ккал</span>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.products}>
          <h3 className={styles.subTitle}>Нерекомендуемые продукты</h3>

          {filteredProducts ? (
            <div className="inputWrapper">
              <input
                className={styles.input}
                type="text"
                name="filter"
                value={filter}
                onChange={onChange}
              />
              <span>
                <svg width="12" height="12" className={styles.svg}>
                  <use href={sprite + "#search-icon"} />
                </svg>
              </span>
            </div>
          ) : (
            <p className={styles.message}>
              Здесь будет отображаться Ваш рацион
            </p>
          )}

          <ul className={styles.productsList}>
            {filteredProducts?.length > 0
              ? filteredProducts?.map((product, index) => (
                  <li className={styles.productsItem} key={index}>
                    {product}
                  </li>
                ))
              : products?.map((product, index) => (
                  <li className="productsItem" key={index}>
                    {product}
                  </li>
                ))}
          </ul>


          {notAllowedProductsInfo?.length > 0 ? (
            <ul className={styles.productsList}>
              {notAllowedProductsInfo.map((product) => (
                <li key={product} className={styles.productsItem}>
                  {product},
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.message}>
              Здесь будет отображаться Ваш рацион
            </p>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
