import React, { useEffect } from 'react';
import styles from '../scss/index.module.scss';
import Win from '../components/Win';
import Settings from '../components/Settings';
import Main from '../components/Main';
import Timer from '../components/Timer';

import LongButton from '../components/LongButton';
import ShortButton from '../components/ShortButton';

import settings from '../assets/svg/settings.svg';
import play from '../assets/svg/play.svg';
import stop from '../assets/svg/stop.svg';
import Break from '../components/Break,';
import Modal from '../components/Modal';

import { selectTimerData, setTimer } from '../redux/slices/timerSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [winActive, setWinActive] = React.useState(true);
  const [settingsActive, setSettingsActive] = React.useState(false);

  const { defaultTime } = useSelector(selectTimerData);

  const dispatch = useDispatch();

  const onClickTimer = (isStop = false) => {
    dispatch(setTimer(isStop));
  };

  const { background, defaultTime: time, stateTimer } = useSelector(selectTimerData);

  useEffect(() => {
    if (stateTimer === 'break') setWinActive(true);
  }, [stateTimer]);

  return (
    <>
      <img className={styles.bg__img} src={background} alt={background} />
      <div className={styles.content}>
        <AnimatePresence>
          <div className={styles.content__left}>
            {stateTimer === 'unActive' ? (
              <motion.div
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                key="motionMain">
                <Main />
                <div className={styles.buttons}>
                  {settingsActive ? (
                    <LongButton
                      onClick={() => onClickTimer()}
                      disabled={true}
                      style={{ opacity: '0.5' }}>
                      Начать <img className={styles.btn__icon} src={play} alt={play} />
                    </LongButton>
                  ) : (
                    <LongButton onClick={() => onClickTimer()}>
                      Начать <img className={styles.btn__icon} src={play} alt={play} />
                    </LongButton>
                  )}
                  <ShortButton onClick={() => setSettingsActive(true)}>
                    <img className={styles.btn__icon} src={settings} alt={settings} />
                  </ShortButton>
                </div>
                <p className={styles.description}>
                  Чтобы начать сессию {Math.floor(defaultTime / 60)} минут, жми
                  <span style={{ color: '#fff' }}>Начать</span>
                </p>
              </motion.div>
            ) : stateTimer === 'active' ? (
              <motion.div
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                key="motionTimer">
                <Timer />
                <div className={styles.buttons}>
                  <LongButton onClick={() => onClickTimer()}>
                    Стоп <img className={styles.btn__icon} src={stop} alt={stop} />
                  </LongButton>
                </div>

                <p className={styles.description}>
                  Жми <span style={{ color: '#fff' }}>Стоп</span> если решил закончить раньше
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ y: -1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
                key="motionBreak">
                <Break />
                <div className={styles.buttons}>
                  <LongButton onClick={() => onClickTimer()}>
                    Начать <img className={styles.btn__icon} src={play} alt={play} />
                  </LongButton>
                </div>

                {winActive && (
                  <Modal active={winActive} setActive={setWinActive}>
                    <Win />
                  </Modal>
                )}
              </motion.div>
            )}
          </div>
        </AnimatePresence>
        {settingsActive && (
          <Modal active={settingsActive} setActive={setSettingsActive}>
            <>
              <Settings />
            </>
          </Modal>
        )}
      </div>
      {stateTimer === 'active' && defaultTime === 1500 ? (
        <div className={`${styles.timer__row} ${styles.timer25min}`}></div>
      ) : stateTimer === 'active' && defaultTime === 2700 ? (
        <div className={`${styles.timer__row} ${styles.timer45min}`}></div>
      ) : stateTimer === 'active' && defaultTime === 3600 ? (
        <div className={`${styles.timer__row} ${styles.timer60min}`}></div>
      ) : (
        ''
      )}
    </>
  );
};

export default Home;
