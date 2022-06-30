import React from 'react';
import styles from './ListTests.scss';
import { TestItem } from './TestItem/TestItem';

export const ListTests = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.wrapper}>
        <TestItem />
        <TestItem />
      </ul>
    </div>
  );
};
