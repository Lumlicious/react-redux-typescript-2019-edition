import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default routes;
