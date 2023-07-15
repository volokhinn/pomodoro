import React from 'react';
import styles from '../scss/index.module.scss';
import { selectTimerData } from '../redux/slices/timerSlice';
import { useSelector } from 'react-redux';

const Timer = () => {
  const { time } = useSelector(selectTimerData);
  return (
    <>
      <div className={styles.work}>
        <div className={styles.work__dot}></div>Работаем
      </div>
      <h1>{time}</h1>
      <p className={styles.description}>
        Достичь совершенства в своей работе, <br></br> дойти до предела — большое счастье,
        но вместес тем и опасность. <br></br>
        <br></br> Константин Г. Паустовский
      </p>
    </>
  );
};

export default Timer;
