import React from 'react';
import PropTypes from 'prop-types';
/* import { Helmet } from 'react-helmet'; */

import config from 'config';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from 'components/AppRouter';
import RotateScreen from 'components/RotateScreen';
import 'styles/normalize.scss';
import logo from 'images/logo.svg';
import styles from './App.scss';
import useBrowser from 'hooks/useBrowser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as select from 'models/users/selectors';
import { Link } from 'react-router-dom';
import { actions as userAction } from 'models/users/slice';

const App = ({ routes }) => {
  const dispatch = useDispatch();
  const browser = useBrowser();
  const isAuthorized = useSelector(select.isAuthorized);

  if (RUNTIME_ENV === 'client') {
    console.info('browser', browser);
  }
  const handleLogout = () => {
    dispatch(userAction.userLogout());
  };
  return (
    <>
      <RotateScreen />
      <div className={styles.app}>
        {/* Use Helmet only in SPA mode. Render app head on server side  */}
        {/* <Helmet {...config.app} /> */}
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" role="presentation" />
            <h1>{config.app.title}</h1>
          </div>
          <div className={styles.links}>
            {!isAuthorized && <Link to="signin">Авторизоваться</Link>}
            {!isAuthorized && <Link to="signup">Регистрация</Link>}
            {isAuthorized && (
              <Link to="/signin" onClick={handleLogout}>
                Выход
              </Link>
            )}
          </div>
        </div>
        <AppRouter routes={routes} isAuthorized={isAuthorized} />
        <ToastContainer theme="colored" />
      </div>
    </>
  );
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;
