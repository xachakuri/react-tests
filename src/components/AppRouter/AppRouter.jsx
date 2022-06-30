import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';

import NotFound from 'pages/NotFound';

const Router = ({ routes, isAuthorized }) => {
  return (
    <Switch>
      {routes.map(({ component: Component, ...rest }) => (
        <PrivateRoute
          isAuthorized={isAuthorized}
          component={Component}
          {...rest}
          key={rest.path}
        />
      ))}
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
};

Router.propTypes = {
  routes: PropTypes.array.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default Router;
