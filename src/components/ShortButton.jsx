import React from 'react';
import styles from '../scss/components/_button.module.scss';

const ShortButton = ({ children }) => {
  return <button className={styles.btn__short}>{children}</button>;
};

export default ShortButton;
