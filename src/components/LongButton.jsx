import React from 'react';
import styles from '../scss/components/_button.module.scss';

const LongButton = ({ children }) => {
  return <button className={styles.btn__long}>{children}</button>;
};

export default LongButton;
