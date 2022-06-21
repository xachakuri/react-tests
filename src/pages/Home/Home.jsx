import React from 'react';
import { Button } from 'components/Button';
import styles from './Home.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className={styles.container_home}>
      <h2>Добро пожаловать в приложение с тестами</h2>
      <span>Для прохождения тестов нажмите кнопку ниже</span>
      <Link to="/signin">
        <Button theme="start">Начать</Button>
      </Link>
    </div>
  );
};
