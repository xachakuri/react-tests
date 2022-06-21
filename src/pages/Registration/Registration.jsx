import React from 'react';

import styles from './Registration.scss';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Checkbox';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormField } from 'components/FormField/FormField';
import { useDispatch } from 'react-redux';
import { actions as userAction } from 'models/users/slice';
import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Поле обязательно к заполнению')
    .max(20, 'Слишком длинное имя'),
  password: Yup.string()
    .required('Поле обязательно к заполнению')
    .min(8, 'Пароль должен содержать больше 8 символов'),
  confirmPassword: Yup.string()
    .required('Поле обязательно к заполнению')
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .min(8, 'Пароль должен содержать больше 8 символов'),
});
export const Registration = () => {
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
    dispatch(userAction.userRegistration(data));
    push('/signin');
    reset();
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <span className={styles.title}>Регистрация</span>
            <FormField errors={errors.username?.message}>
              <Input
                placeholder="Введите логин"
                type="text"
                theme="login"
                register={register}
                name="username"
                className={errors.username ? styles.isInvalid : ''}
              />
            </FormField>
            <FormField errors={errors.password?.message}>
              <Input
                placeholder="Введите пароль"
                type="password"
                theme="login"
                register={register}
                name="password"
                className={errors.password ? styles.isInvalid : ''}
              />
            </FormField>
            <FormField errors={errors.confirmPassword?.message}>
              <Input
                placeholder="Повторите пароль"
                type="password"
                theme="login"
                register={register}
                name="confirmPassword"
                className={errors.confirmPassword ? styles.isInvalid : ''}
              />
            </FormField>
            <div className={styles.containerChoiceAdmin}>
              <Checkbox
                text="Получить права администратора"
                register={register}
                name="isAdmin"
              />
            </div>
            <Button type="submit">Зарегистрировать</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
