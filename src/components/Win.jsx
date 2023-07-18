import React from 'react';
import styles from '../scss/components/_modal.module.scss';
import LongButton from './LongButton';
import gold from '../assets/svg/gold.svg';
import tomato from '../assets/svg/tomato.svg';
import platinum from '../assets/svg/platinum.svg';
import diamond from '../assets/svg/diamond.svg';
import { getDrop } from '../helpers/awards';
import { selectCounterData, setCounter } from '../redux/slices/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const states = {
  tomato: {
    title: 'Обычный',
    bg: tomato,
  },
  gold: {
    title: 'Золото',
    bg: gold,
  },
  diamond: {
    title: 'Алмаз',
    bg: diamond,
  },
  platinum: {
    title: 'Платина',
    bg: platinum,
  },
};

const Win = ({active, setActive}) => {
    const tomatos = useSelector(selectCounterData);
    const [modal, setModal] = useState({ title: '', bg: null });
  
    const dispatch = useDispatch();
  
    console.log(tomatos);
  
    useEffect(() => {
      const item = getDrop();
      const newModalState = {
        title: states[item.id].title,
        bg: states[item.id].bg,
      };
      setModal(newModalState);
      dispatch(setCounter(item.id));
    }, []);
  
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
          </div>
        </div>
      </>
    );
}

export default Win