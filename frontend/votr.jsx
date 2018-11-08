import React from 'react';
import ReactDOM from 'react-dom';
import * as ApiSessionUtil from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Votr</h1>, root);
});


window.login = ApiSessionUtil.login;
window.logout = ApiSessionUtil.logout;
window.signup = ApiSessionUtil.signup;
