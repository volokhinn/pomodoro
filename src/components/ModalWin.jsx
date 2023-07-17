import React from 'react';
import styles from '../scss/components/_modal.module.scss';
import LongButton from './LongButton';
import gold from '../assets/svg/gold.svg';
import tomato from '../assets/svg/tomato.svg'
import platinum from '../assets/svg/platinum.svg';
import diamond from '../assets/svg/diamond.svg';
import { getDrop } from '../helpers/awards';

const ModalWin = () => {
  const item = getDrop();
  console.log(item);
  const modal = {
    title: '',
    bg: null,
  }

  const states = {
    'tomato': {
      title: 'Обычный',
      bg: tomato
    },
    'gold': {
      title: 'Золото',
      bg: gold
    },
    'diamond': {
      title: 'Алмаз',
      bg: diamond
    },
    'platinum': {
      title: 'Платина',
      bg: platinum
    },
  }

  modal.title = states[item.id].title;
  modal.bg = states[item.id].bg;
  
  return (
    <>
    <div className={styles.wrapper__win}>
      <div className={styles.wrapper}>
        <img className={styles.wrapper__bg} src={modal.bg} alt={modal.bg} />
        <div className={styles.top__row}></div>
        <div className={styles.label}>
          <div className={styles.label__dot}></div>
          <div className={styles.label__text}>{modal.title}</div>
        </div>
        <div className={styles.title}>
          Поздравляем! <br></br> Новый <br></br> помидор!
        </div>
        <LongButton style={{ width: '100%' }}>Продолжить</LongButton>
      </div>
      </div>
    </>
  );
};

export default ModalWin;
