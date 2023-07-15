import Home from './pages/Home';
import styles from './scss/index.module.scss';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { fetchTimer } from './redux/slices/timerSlice';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTimer());
  }, []);
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
