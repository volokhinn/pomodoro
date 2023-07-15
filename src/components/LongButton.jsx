import React from 'react';
import styles from '../scss/components/_button.module.scss';

const LongButton = ({ children, onClick, style, disabled }) => {
  return (
    <button onClick={onClick} className={styles.btn__long} style={style} disabled={disabled}>
      {children}
    </button>
  );
};

export default LongButton;
