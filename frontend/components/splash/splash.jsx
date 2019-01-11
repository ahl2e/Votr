import React from 'react';
import {Link} from 'react-router-dom';
import LandingPage from './landing_page';
import SignupFormContainer from '../session/signup_form_container';


class Splash extends React.Component{

  constructor(props){
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

demoLogin(){
    this.props.login(this.props.demoUser);
  }

  render(){

  return (
    <div id = 'splash-page'>
      <LandingPage/>
      <div id = 'splash-right'>
        <SignupFormContainer/>
        <button id='demo-login' onClick={this.demoLogin}> Demo Login</button>
      </div>
    </div>
  );
}
}

export default Splash
