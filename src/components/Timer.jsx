import React from 'react';
import styles from '../scss/index.module.scss';
import { selectTimerData, setTimer } from '../redux/slices/timerSlice';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import startTimer from '../helpers/timerUtils';
import { useDispatch } from 'react-redux';
import { getDrop } from '../redux/slices/awardsSlice';

const Timer = () => {
  const { defaultTime } = useSelector(selectTimerData);

  const [timerTime, setTimerTime] = useState(Math.floor(defaultTime / 60) + ':' + '00');

  const dispatch = useDispatch();

  useEffect(() => {
    const initialTimeInSeconds = defaultTime;

    const updateTimer = (formattedTime) => {
      setTimerTime(formattedTime);
    };

    const handlerTimeFinished = () => {
      const item = getDrop();
      console.log(item);
      dispatch(setTimer(true));
    };

    startTimer(initialTimeInSeconds, updateTimer, handlerTimeFinished);
  }, []);

  return (
    <>
      <div className={styles.work}>
        <div className={styles.work__dot}></div>Работаем
      </div>
      <h1>{timerTime}</h1>
      <p className={styles.description}>
        Достичь совершенства в своей работе, <br></br> дойти до предела — большое счастье, но вместе
        с тем и опасность. <br></br>
        <br></br> Константин Г. Паустовский
      </p>
    </>
  );
};

export default Timer;
