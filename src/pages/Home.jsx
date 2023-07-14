import React from 'react';
import styles from '../scss/index.module.scss';
import LongButton from '../components/LongButton';
import ShortButton from '../components/ShortButton';
import play from '../assets/svg/play.svg';
import settings from '../assets/svg/settings.svg';
import tomato from '../assets/svg/tomato.svg';

const Home = () => {
  return (
    <>
      <img className={styles.bg__img} src={tomato} alt={tomato} />
      <div className={styles.bg__time}></div>
      <div className={styles.content__left}>
        <h1>
          НУ ЧТО <br></br> РАБОТЯГА <br></br> ТЫ ГОТОВ?
        </h1>
        <p className={styles.description}>
          После старта, таймер на 25 минут будет запущен.<br></br> Тебе нужно будет работать
          не отвлекаясь. <br></br> Потом будет отдых. Поехали?
        </p>

        <div className={styles.buttons}>
          <LongButton>
            Начать <img className={styles.btn__icon} src={play} alt={play} />
          </LongButton>
          <ShortButton>
            <img className={styles.btn__icon} src={settings} alt={settings} />
          </ShortButton>
        </div>

        <p className={styles.description}>
          Чтобы начать сессию 25 минут, жми <span style={{ color: '#fff' }}>Начать</span>
        </p>
      </div>
    </>
  );
};

export default Home;
