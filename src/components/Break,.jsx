import React from 'react';
import styles from '../scss/index.module.scss';
import { selectTimerData, setTimer } from '../redux/slices/timerSlice';
import { useSelector, useDispatch } from 'react-redux';
import useSound from 'use-sound';
import startTimer from '../helpers/timerUtils';
import { useState, useEffect } from 'react';

const Break = () => {
  const { defaultBreakTime, sound } = useSelector(selectTimerData);

  const [timerTime, setTimerTime] = useState(Math.floor(defaultBreakTime / 60) + ':' + '00');

  const dispatch = useDispatch();
  const [play] = useSound(sound);
  useEffect(() => {
    play();
  }, [play]);

  useEffect(() => {
    const initialTimeInSeconds = defaultBreakTime;

    const updateTimer = (formattedTime) => {
      setTimerTime(formattedTime);
    };

    const handlerTimeFinished = () => {
      dispatch(setTimer(true));
    };

    startTimer(initialTimeInSeconds, updateTimer, handlerTimeFinished);
  }, []);
  return (
    <>
      <div className={styles.work}>
        <div className={styles.work__dot}></div>Отдыхаем
      </div>
      <h1>{timerTime}</h1>
      <p className={styles.description}>
        Тот, кто может отдохнуть, превосходит того, кто может брать города.
        <br></br> Б. Франклин
      </p>
    </>
  );
};

export default Break;
