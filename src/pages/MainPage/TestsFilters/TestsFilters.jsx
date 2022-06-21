import React from 'react';
import styles from './TestsFilters.scss';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { toast } from 'react-toastify';


export const TestsFilters = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sort}>
          <Input type="text" placeholder="Поиск тестов" theme="filter" />
          <Button theme="filter" onClick={notify}>Сортировка</Button>
        </div>
        <Button theme="filter">Добавить новый тест</Button>
      </div>
    </div>
  );
};
