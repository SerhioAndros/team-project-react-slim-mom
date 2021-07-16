import React from "react";
import { useSelector } from "react-redux";
import { selectors } from "../../redux/diary/diarySelectors";
import { calculatorSelector } from "../../redux/calculator/calculatorSelector";
import styles from "./RightSideBar.module.css";

const RightSideBar = () => {
  const daySummary = useSelector(selectors.getDaySummary);
  const selectedDate = useSelector(selectors.getSelectedDate);
  const dailyCalory = useSelector(calculatorSelector);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.statistics}>
          <h3 className={styles.subTitle}>Сводка за {selectedDate}</h3>
          {daySummary ? (
            <ul className={styles.statisticsList}>
              <li className={styles.statisticsItem}>
                Осталось{" "}
                <span>{Math.round(daySummary.kcalLeft) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                Употреблено{" "}
                <span>{Math.round(daySummary.kcalConsumed) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                Дневная норма{" "}
                <span>{Math.round(daySummary.dailyRate) + " ккал"}</span>
              </li>

              <li className={styles.statisticsItem}>
                % от нормы{" "}
                <span>{Math.round(daySummary.percentsOfDailyRate) + " %"}</span>
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
                  n% от нормы
                  <span>000 калл</span>
                </p>
              </li>
            </ul>
          )}
        </div>
        <div className={styles.products}>
          <h3 className={styles.subTitle}>Нерекомендуемые продукты</h3>

          {dailyCalory?.notAllowedProducts?.length ? (
            <ul className={styles.productsList}>
              {dailyCalory.notAllowedProducts.map((product) => (
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
