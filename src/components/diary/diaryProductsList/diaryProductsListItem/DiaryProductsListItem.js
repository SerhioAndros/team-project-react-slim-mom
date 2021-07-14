import styles from './DiaryProductsListItem.module.css';

const DiaryProductsListItem = ({product, weight, calories}) => {
  return (
    <>
      <li className={styles.item}>
        <p className={styles.name}>{product}</p>
        <p className={styles.weight}>{weight} г</p>
        <p className={styles.kcal}>{calories} ккaл</p>
        <button type="button" className={styles.buttonCross} onClick={e => {}}>
          X
        </button>
      </li>
    </>
  );
};

export default DiaryProductsListItem;
