import React from 'react';
import styles from '../scss/components/_modal.module.scss';
import LongButton from './LongButton';
import tomato from '../assets/svg/tomato.svg';

const ModalStats = ({ closeHandler }) => {
  const onClickExit = () => {
    closeHandler();
  };
  return (
    <>
      <div className={styles.wrapper__stats}>
        <div className={styles.top__row}></div>
        <div className={styles.label}>
          <div className={styles.label__dot}></div>
          <div className={styles.label__text}>36 помидорок</div>
        </div>
        <div className={styles.stats__row}>
          <div className={styles.stats__item}>
            <img src={tomato} alt={tomato} />
            30
          </div>
          <div className={styles.stats__item}>
            <img src={tomato} alt={tomato} />
            30
          </div>
          <div className={styles.stats__item}>
            <img src={tomato} alt={tomato} />
            30
          </div>
          <div className={styles.stats__item}>
            <img src={tomato} alt={tomato} />
            30
          </div>
        </div>
        <LongButton style={{ width: '100%' }} onclick={onClickExit}>
          Продолжить
        </LongButton>
      </div>
    </>
  );
};

export default ModalStats;
