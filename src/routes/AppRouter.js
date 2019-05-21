import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import BarnHistory from '../components/BarnHistory';
import NotFound from '../components/NotFound';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path='/about-us' component={ AboutUs } />
          <Route path='/barn-history' component={ BarnHistory } />

          <Route component={ NotFound } />
        </Switch>
      </div>
    </Router>
);

export default AppRouter;
