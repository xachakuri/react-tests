import React from 'react';
import styles from './TestItem.scss';
import { Button } from 'components/Button';
import logo from 'images/testItem.svg';
import edit from 'images/edit.svg';

export const TestItem = () => {
  return (
    <>
      <li>
        <div className={styles.wrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
          <span className={styles.title}>Название теста</span>
          <Button theme="edit">
            <img src={edit} alt="edit" />
          </Button>
        </div>
      </li>
    </>
  );
};
