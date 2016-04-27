import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import SignUp from '../../ui/SignUp.jsx';
import LogIn from '../../ui/LogIn.jsx';
import Home from '../../ui/Home.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
  </Router>
);
