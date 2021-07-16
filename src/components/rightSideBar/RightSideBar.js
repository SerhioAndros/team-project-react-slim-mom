import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../redux/diary/diarySelectors";
import { getDayInfo } from "../../redux/dayInfo/dayInfoSelector";
import { getNotAllowedProductsInfo } from "../../redux/notAllowedProducts/notAllowedProductsSelectors";

import styles from "./RightSideBar.module.css";
import { getUserDayInfo } from "../../redux/auth/auth-operation";

const RightSideBar = () => {
  const daySummary = useSelector(getDayInfo);
  const notAllowedProductsInfo = useSelector(getNotAllowedProductsInfo);
  const selectedDate = useSelector(selectors.getSelectedDate);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDayInfo());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.statistics}>
          <h3 className={styles.subTitle}>Сводка за {selectedDate}</h3>
          {daySummary ? (
            <ul className={styles.statisticsList}>
              <li className={styles.statisticsItem}>
                Осталось{" "}
                <span>{Math.round(daySummary[0]?.kcalLeft) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                Употреблено{" "}
                <span>{Math.round(daySummary[0]?.kcalConsumed) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                Дневная норма{" "}
                <span>{Math.round(daySummary[0]?.dailyRate) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                % от нормы{" "}
                <span>
                  {Math.round(daySummary[0]?.percentsOfDailyRate) + " %"}
                </span>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <p>
                  Осталось
                  <span>000 калл</span>
                </p>
              </li>
              <li>
                <p>
                  Употреблено
                  <span>000 калл</span>
                </p>
              </li>
              <li>
                <p>
                  Дневная норма
                  <span>000 калл</span>
                </p>
              </li>
              <li>
                <p>
                  % от нормы
                  <span>000 калл</span>
                </p>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.products}>
          <h3 className={styles.subTitle}>Нерекомендуемые продукты</h3>

          {notAllowedProductsInfo ? (
            <ul className={styles.productsList}>
              {notAllowedProductsInfo.map((product) => (
                <li key={product} className={styles.productsItem}>
                  {product},{" "}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.message}>
              Здесь будет отображаться Ваш рацион
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
