import React from 'react';
import {connect} from 'react-redux';
import LoginForm from './login_form';
import {Link} from 'react-router-dom';
import {login, logout, signup} from '../.././actions/session_actions';
// you can take the actions you don't need out.  They can just live here for now.


const mapStateToProps =({errors}) => {
  return{
    errors: errors.session,
    formType: 'Log In',
    navLink: <Link to={'/signup'}>Sign Up</Link>
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    dispatchForm : (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
