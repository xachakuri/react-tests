import React from 'react';
import styles from './MainPage.scss';
import { TestsFilters } from './TestsFilters';
import { ListTests } from './ListTests/ListTests';

export const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Наши тесты</h2>
      </div>
      <TestsFilters />
      <ListTests />
    </div>
  );
};
