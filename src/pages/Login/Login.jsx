import React from 'react';

import styles from './Login.scss';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormField } from 'components/FormField';
import { actions as userAction } from 'models/users/slice';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Поле обязательно к заполнению'),
  password: Yup.string().required('Поле обязательно к заполнению'),
});
export const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = data => {
    dispatch(userAction.userLogin(data));
    push('/main');
    reset();
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Авторизация</span>
            <FormField errors={errors.username?.message}>
              <Input
                placeholder="Логин"
                type="text"
                theme="login"
                register={register}
                name="username"
                className={errors.username ? styles.isInvalid : ''}
              />
            </FormField>
            <FormField errors={errors.password?.message}>
              <Input
                placeholder="Пароль"
                type="password"
                theme="login"
                register={register}
                name="password"
                className={errors.password ? styles.isInvalid : ''}
              />
            </FormField>
            <Button type="submit">Войти</Button>
          </form>
          <div className={styles.wrapperRegLink}>
            <Link to="/signup">Регистрация аккаунта</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
