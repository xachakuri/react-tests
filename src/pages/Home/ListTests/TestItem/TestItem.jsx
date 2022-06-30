import React from 'react';
import styles from './TestItem.scss';
import { Button } from 'components/Button';
import logo from 'images/testItem.svg';
import edit from 'images/edit.svg';
import { useSelector } from 'react-redux';
import * as select from 'models/users/selectors';

export const TestItem = () => {
  const isAdmin = useSelector(select.isAdmin);
  return (
    <>
      <li>
        <div className={styles.wrapper}>
          <img src={logo} alt="logo" className={styles.logo} />
          <span className={styles.title}>Название теста</span>
          {isAdmin && (
            <Button theme="edit">
              <img src={edit} alt="edit" />
            </Button>
          )}
        </div>
      </li>
    </>
  );
};
