import React from "react";
import styles from "./RightSideBar.module.css";

const RightSideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.statistics}>
          <h3 className={styles.subTitle}>Сводка за 20.06.2020</h3>

          <ul className={styles.statisticsList}>
            <li className={styles.statisticsItem}>
              Осталось <span>000 ккал</span>
            </li>

            <li className={styles.statisticsItem}>
              Употреблено <span>000 ккал</span>
            </li>

            <li className={styles.statisticsItem}>
              Дневная норма <span>000 ккал</span>
            </li>

            <li className={styles.statisticsItem}>
              n% от нормы <span>000 ккал</span>
            </li>
          </ul>
        </div>
        <div className={styles.products}>
          <h3 className={styles.subTitle}>Нерекомендуемые продукты</h3>
          {/* <ul className={styles.productsList}>
            <li className={styles.productsItem}>item</li>
          </ul> */}
          <p className={styles.message}>Здесь будет отображаться Ваш рацион</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
