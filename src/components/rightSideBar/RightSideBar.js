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
          {daySummary ? (
            <ul className={styles.statisticsList}>
              <li className={styles.statisticsItem}>
                Осталось{' '}
                <span>
                  {daySummary.kcalLeft
                    ? (daySummary.kcalConsumed > daySummary.dailyRate
                        ? 0
                        : Math.round(daySummary.kcalLeft)) + ' ккал'
                    : '000 калл'}
                </span>
              </li>

              <li className={styles.statisticsItem}>
                Употреблено{' '}
                <span>
                  {daySummary.kcalConsumed
                    ? Math.round(daySummary.kcalConsumed) + ' ккал'
                    : '000 калл'}
                </span>
              </li>

              <li className={styles.statisticsItem}>
                Дневная норма{' '}
                <span>
                  {daySummary.dailyRate
                    ? Math.round(daySummary.dailyRate) + ' ккал'
                    : '000 калл'}
                </span>
              </li>

              <li className={styles.statisticsItem}>
                n% от нормы{' '}
                <span>
                  {daySummary.percentsOfDailyRate
                    ? Math.round(daySummary.percentsOfDailyRate) + ' %'
                    : '000 калл'}
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
                  n% от нормы
                  <span>000 калл</span>
                </p>
              </li>
            </ul>
          )}
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
