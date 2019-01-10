import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ApiSessionUtil from './util/session_api_util';




document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});


window.login = ApiSessionUtil.login;
window.logout = ApiSessionUtil.logout;
window.signup = ApiSessionUtil.signup;
