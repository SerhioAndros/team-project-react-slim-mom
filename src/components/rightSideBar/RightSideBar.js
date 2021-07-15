import React from 'react';
import {useSelector} from 'react-redux';
import {selectors} from '../../redux/diary/diarySelectors';
import styles from './RightSideBar.module.css';

const RightSideBar = () => {
  const daySummary = useSelector(selectors.getDaySummary);
  const selectedDate = useSelector(selectors.getSelectedDate);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.statistics}>
          <h3 className={styles.subTitle}>Сводка за {selectedDate}</h3>

          <ul className={styles.statisticsList}>
            <li className={styles.statisticsItem}>
              Осталось <span>{daySummary.kcalLeft} ккал</span>
            </li>

            <li className={styles.statisticsItem}>
              Употреблено <span>{daySummary.kcalConsumed} ккал</span>
            </li>

            <li className={styles.statisticsItem}>
              Дневная норма <span>{daySummary.dailyRate} ккал</span>
            </li>

            <li className={styles.statisticsItem}>
              n% от нормы <span>{daySummary.percentsOfDailyRate} %</span>
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
