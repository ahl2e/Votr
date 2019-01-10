import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiSessionUtil from './util/session_api_util';
import configureStore from './store/store';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');


  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Votr</h1>, root);
});


window.login = ApiSessionUtil.login;
window.logout = ApiSessionUtil.logout;
window.signup = ApiSessionUtil.signup;
