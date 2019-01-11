import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser,logout}) =>{
  if(currentUser){
    debugger
    return(
      <div id="greeting">
        <Link
          to="/">
          <img src={window.logoUrl} id="icon-button"/>
        </Link>
        <p>There's a user</p>
        <button
          onclick={logout}
          >logout</button>
      </div>
    );
  }else{
    return(
      <div id="greeting">
        <Link
          to="/">
          <img src={window.logoUrl} id="icon-button"/>
        </Link>
        <p>aint no user</p>
        <Link to="signup">sign up</Link>
        <br/>
        <Link to="login">log in</Link>
      </div>
    );
  };
};

export default Greeting;
