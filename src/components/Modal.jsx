import React from 'react'
import styles from '../scss/components/_modal.module.scss';
import LongButton from './LongButton';
import { useState } from 'react';

const Modal = ({children, setActive}) => {
  return (
    <>
    <div className={styles.modal__wrap} onClick={() => setActive(false)}>
    <div className={styles.modal__inner} onClick={e => e.stopPropagation()}>{children}
    <LongButton onClick={() => setActive(false)}>Продолжить</LongButton>
    </div>
    </div>
    </>
  )
}

export default Modal