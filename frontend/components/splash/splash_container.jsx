import React from 'react';
import {connect} from 'react-redux';
import Splash from './splash';
import {login, logout, signup} from '../.././actions/session_actions';


const mapStateToProps = (state) => {
  return{
    demoUser: {
      username: 'demo',
      password: 'demopassword'
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user)=> dispatch(login(user))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Splash);
