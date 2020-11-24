import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'containers/HomePage/HomePage';
import AboutPage from 'containers/AboutPage/AboutPage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import { View } from 'wiloke-react-core';
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
      <View container>
        <View tagName="header" tachyons={['flex', 'flex-row']}>
          <View tachyons="mr3">
            <Link to="/">Home</Link>
          </View>
          <View>
            <Link to="/about">About</Link>
          </View>
        </View>
      </View>
      <View tagName="main">
        <Switch>
          {pages.map(({ component, path, exact }) => {
            return <Route key={path} component={component} exact={exact} path={path} />;
          })}
          <Route component={NotFoundPage} />
        </Switch>
      </View>
    </BrowserRouter>
  );
};

export default Routes;
