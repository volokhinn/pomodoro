import React from 'react';
import Label from './components/Label';
import tomatowhite from './assets/svg/tomatowhite.svg';
import styles from './scss/index.module.scss';
import { selectCounterData } from './redux/slices/counterSlice';
import { useSelector } from 'react-redux';
import Modal from './components/Modal';
import Stats from './components/Stats';

const Header = () => {
  const tomatos = useSelector(selectCounterData);
  const countTomatos = tomatos.tomato + tomatos.gold + tomatos.diamond + tomatos.platinum;
  const [statsActive, setStatsActive] = React.useState(false);

  return (
    <div className={styles.header}>
      <Label>Pomodoro</Label>
      <button className={styles.header__counter} onClick={() => setStatsActive(true)}>
        {countTomatos} <img src={tomatowhite} alt={tomatowhite} />
      </button>
      {statsActive && (
        <Modal active={statsActive} setActive={setStatsActive}>
          <Stats />
        </Modal>
      )}
    </div>
  );
};

export default Header;
