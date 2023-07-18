import React from 'react';
import styles from '../scss/index.module.scss';
import Win from '../components/Win';
import Settings from '../components/Settings';
import '../scss/components/styles.css';
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

const Home = () => {
  const [winActive, setWinActive] = React.useState(true);
  const [settingsActive, setSettingsActive] = React.useState(false);

  const { defaultTime } = useSelector(selectTimerData);

  const dispatch = useDispatch();

  const onClickTimer = (isStop = false) => {
    dispatch(setTimer(isStop));
  };

  const { background, defaultTime: time, stateTimer } = useSelector(selectTimerData);

  return (
    <>
      <img className={styles.bg__img} src={background} alt={background} />
      <div className={styles.content}>
        <div className={styles.content__left}>
          {stateTimer === 'unActive' ? (
            <>
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
                Чтобы начать сессию {Math.floor(defaultTime / 60)} минут минут, жми{' '}
                <span style={{ color: '#fff' }}>Начать</span>
              </p>
            </>
          ) : stateTimer === 'active' ? (
            <>
              <Timer />
              <div className={styles.buttons}>
                <LongButton onClick={() => onClickTimer()}>
                  Стоп <img className={styles.btn__icon} src={stop} alt={stop} />
                </LongButton>
              </div>

              <p className={styles.description}>
                Жми <span style={{ color: '#fff' }}>Стоп</span> если решил закончить раньше
              </p>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
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
