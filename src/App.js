import Home from './pages/Home';
import styles from './scss/index.module.scss';
import Header from './Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
