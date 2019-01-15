import React from 'react';
import{ Route, Link, HashRouter, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import SplashContainer from './splash/splash_container';
import VoterIndexContainter from './voters/voter_index_container';
import VoterShowContainer from './voters/voter_show/voter_show_container';

import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';

const App = () => (
  <div id="app">
    <header>
      <Route path='/' component={GreetingContainer} />
    </header>
    <AuthRoute exact path="/" component={SplashContainer} />

    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/voters" component={VoterIndexContainter} />
      <AuthRoute exact path="/voter/:VoterID" component={VoterShowContainer} />
    </Switch>
  </div>
);



export default App;
