import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';

export default () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact/>
      <Route path={['/login']} component={AuthPage}/>
    </Switch>
  );
}