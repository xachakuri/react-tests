import React from 'react';
import styles from './TestsFilters.scss';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import * as select from 'models/users/selectors';
import { useSelector } from 'react-redux';

export const TestsFilters = () => {
  const isAdmin = useSelector(select.isAdmin);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sort}>
          <Input type="text" placeholder="Поиск тестов" theme="filter" />
          <Button theme="filter"> Сортировка </Button>
        </div>
        {isAdmin && <Button theme="filter">Добавить новый тест</Button>}
      </div>
    </div>
  );
};
