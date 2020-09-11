import React from 'react';
import { pages } from 'routes';
import { Route } from 'react-router-dom';

export default {
  title: 'Start/App',
};

export const App = () => {
  return pages.map(({ component, path, exact }) => {
    return <Route key={path} component={component} exact={exact} path={path} />;
  });
};
