import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'containers/HomePage/HomePage';
import AboutPage from 'containers/AboutPage/AboutPage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
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
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Switch>
          {pages.map(({ component, path, exact }) => {
            return <Route key={path} component={component} exact={exact} path={path} />;
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
