import React from 'react';
import styles from '../scss/index.module.scss';
import { selectTimerData } from '../redux/slices/timerSlice';
import { useSelector } from 'react-redux';
import useSound from 'use-sound';

const Break = () => {
  const { defaultBreakTime, sound } = useSelector(selectTimerData);
  const [play] = useSound(sound);
  React.useEffect(() => {
    play();
  }, [play]);
  return (
    <>
      <div className={styles.work}>
        <div className={styles.work__dot}></div>Отдыхаем
      </div>
      <h1>{defaultBreakTime}</h1>
      <p className={styles.description}>
        Тот, кто может отдохнуть, превосходит того, кто может брать города.
        <br></br> Б. Франклин
      </p>
    </>
  );
};

export default Break;
