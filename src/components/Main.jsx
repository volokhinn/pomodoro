import React from 'react';
import styles from '../scss/index.module.scss';

const Main = () => {
  return (
    <>
      <h1>
        НУ ЧТО <br></br> РАБОТЯГА <br></br> ТЫ ГОТОВ?
      </h1>
      <p className={styles.description}>
        После старта, таймер на 25 минут будет запущен.<br></br> Тебе нужно будет работать
        не отвлекаясь. <br></br> Потом будет отдых. Поехали?
      </p>
    </>
  );
};

export default Main;
