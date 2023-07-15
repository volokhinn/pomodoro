import React from 'react';
import styles from '../scss/components/_label.module.scss';

const Label = ({ children }) => {
  return <div className={styles.label}>{children}</div>;
};

export default Label;
