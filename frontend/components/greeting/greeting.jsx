import React from 'react';
import { Link } from 'react-router-dom';
import LandingPage from '../splash/landing_page';
import SignupFormContainer from '../session/signup_form_container';


const Greeting = ({currentUser,logout}) =>{
  if(currentUser){
    var name = capitalizeUsername(currentUser.username);
    return(
      <div id='header'>
        <Link
          to="/">
          <img src={window.logoUrl} id="icon-button"/>
        </Link>
        <p>Hello, {name}</p>
        <button
          onClick={logout}
          >logout</button>
      </div>
    );
  }else{
    return(
      <div id='header'>
        <Link
          to="/">
          <img src={window.logoUrl} id="icon-button"/>
        </Link>
      </div>
    );
  };
};

const capitalizeUsername = (username) => {
  var letters = username.split("")
  letters[0]= letters[0].toUpperCase();
  return letters.join("");
}

export default Greeting;
