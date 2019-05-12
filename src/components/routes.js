// src/routes.js

import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import AuthO from './../utils/oauth/Auth0';
import history from './history';
import { debug } from 'util';

const auth = new AuthO();

const handleAuthentication = (nextState, replace) => {
    console.log('next state ', nextState)
    console.log('hash', nextState.location.hash)

  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const Routes = () => {
  return (
    <Router history={history} component={Home}>
      <div>
        <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </div>
    </Router>
  );
}