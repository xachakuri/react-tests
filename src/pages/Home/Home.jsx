import React from 'react';
import styles from './Home.scss';
import { TestsFilters } from './TestsFilters';
import { ListTests } from './ListTests/ListTests';
import { Modal } from 'components/Modal/Modal';

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Наши тесты</h2>
      </div>
      <TestsFilters />
      <ListTests />
      <Modal />
    </div>
  );
};
