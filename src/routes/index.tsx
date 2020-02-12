import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

const Routes = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

export default Routes;
