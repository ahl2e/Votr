import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser,logout}) =>{
  if(currentUser){
    return(
      <div>
        <Link
          to="/">
          <img src={window.logoUrl}/>
        </Link>
        <p>There's a user</p>
        <button
          onclick={logout}
          >logout</button>
      </div>
    );
  }else{
    return(
      <div>
        <Link
          to="/">
          <img src={window.logoUrl}/>
        </Link>
        <p>aint no user</p>
      </div>
    );
  };
};

export default Greeting;
