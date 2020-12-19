import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
    </Switch>
  );
}