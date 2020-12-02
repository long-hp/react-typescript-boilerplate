import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from 'containers/HomePage';
import { AboutPage } from 'containers/AboutPage';
import { NotFoundPage } from 'containers/NotFoundPage';
import { Page } from './types';

export const pages: Page[] = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/about',
    exact: true,
    component: AboutPage,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return <Route key={path} component={component} exact={exact} path={path} />;
        })}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
