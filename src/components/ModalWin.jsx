import React from 'react';
import styles from '../scss/components/_modal.module.scss';
import LongButton from './LongButton';
import gold from '../assets/svg/gold.svg';

const ModalWin = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.wrapper__bg} src={gold} alt={gold} />
        <div className={styles.top__row}></div>
        <div className={styles.label}>
          <div className={styles.label__dot}></div>
          <div className={styles.label__text}>Золото</div>
        </div>
        <div className={styles.title}>
          Поздравляем! <br></br> Новый <br></br> помидор!
        </div>
        <LongButton style={{ width: '100%' }}>Продолжить</LongButton>
      </div>
    </>
  );
};

export default ModalWin;
