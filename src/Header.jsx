import React from 'react';
import Label from './components/Label';
import tomatowhite from './assets/svg/tomatowhite.svg';
import styles from './scss/index.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Label>Pomodoro</Label>
      <button className={styles.header__counter}>
        123 <img src={tomatowhite} alt={tomatowhite} />
      </button>
    </div>
  );
};

export default Header;
