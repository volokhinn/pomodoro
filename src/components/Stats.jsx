import React from 'react';
import styles from '../scss/components/_modal.module.scss';
import tomato from '../assets/svg/tomato.svg';
import gold from '../assets/svg/gold.svg';
import diamond from '../assets/svg/diamond.svg';
import platinum from '../assets/svg/platinum.svg';

import { normalizeCount } from '../helpers/normalizeCount';

import { selectCounterData } from '../redux/slices/counterSlice';
import { useSelector } from 'react-redux';

const Stats = () => {
  const tomatos = useSelector(selectCounterData);
  const countTomatos = tomatos.tomato + tomatos.gold + tomatos.diamond + tomatos.platinum;

  return (
    <>
      <div className={styles.wrapper__stats}>
        <div className={styles.label}>
          <div className={styles.label__dot}></div>
          <div className={styles.label__text}>
            {countTomatos} {normalizeCount(countTomatos, ['помидорка', 'помидорок', 'помидорки'])}
          </div>
        </div>
        <div className={styles.stats__row}>
          <div className={styles.stats__item}>
            <img src={tomato} alt={tomato} />
            {tomatos.tomato}
          </div>
          <div className={styles.stats__item}>
            <img src={gold} alt={gold} />
            {tomatos.gold}
          </div>
          <div className={styles.stats__item}>
            <img src={diamond} alt={diamond} />
            {tomatos.diamond}
          </div>
          <div className={styles.stats__item}>
            <img src={platinum} alt={platinum} />
            {tomatos.platinum}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
