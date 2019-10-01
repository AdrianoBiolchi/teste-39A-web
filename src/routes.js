import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import New from './pages/Product/New';
import Details from './pages/Product/Details';
import Edit from './pages/Product/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/new" component={New} />
      <Route path="/details/:id" component={Details} />
      <Route path="/edit/:id" component={Edit} />
    </Switch>
  );
}
