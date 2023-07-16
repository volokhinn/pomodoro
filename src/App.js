import Home from './pages/Home';
import styles from './scss/index.module.scss';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { fetchTimer, selectTimerData } from './redux/slices/timerSlice';
import { setChances, setTime } from './redux/slices/awardsSlice';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const { defaultTime } = useSelector(selectTimerData);

  React.useEffect(() => {
    dispatch(fetchTimer());
    setTime(defaultTime);
    setChances();
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
