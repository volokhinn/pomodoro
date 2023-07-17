import Home from './pages/Home';
import styles from './scss/index.module.scss';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { fetchTimer, selectTimerData } from './redux/slices/timerSlice';
import { setChances, setTime } from './helpers/awards';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchCounter } from './redux/slices/counterSlice';

function App() {
  const dispatch = useDispatch();

  const { defaultTime } = useSelector(selectTimerData);

  React.useEffect(() => {
    dispatch(fetchTimer());
    setTime(defaultTime);
    setChances();
    dispatch(fetchCounter());
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
