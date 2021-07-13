import styles from './DiaryProductsListItem.module.css';

const DiaryProductsListItem = () => {
  return (
    <>
      <li className={styles.item}>
        <p className={styles.name}>{'Пиво Балтика №0 Безалкогольное'}</p>
        <p className={styles.weight}>{100} г</p>
        <p className={styles.kcal}>{33} ккaл</p>
        <button type="button" className={styles.buttonCross} onClick>
          X
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
