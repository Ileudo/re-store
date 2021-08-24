import React from 'react';
import { Route, Switch } from 'react-router';
import { HomePage, CartPage } from '../pages';
import './app';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/cart/" component={CartPage} />
    </Switch>
  );
};

export default App;
