import React from 'react';
import styles from '../scss/components/_button.module.scss';

const ShortButton = ({ children, onClick }) => {
  return (
    <button className={styles.btn__short} onClick={onClick}>
      {children}
    </button>
  );
};

export default ShortButton;
