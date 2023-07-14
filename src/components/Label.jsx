import React from 'react';
import styles from '../scss/components/_label.module.scss';

const Label = ({ text }) => {
  return <div className={styles.label}>{text}</div>;
};

export default Label;
