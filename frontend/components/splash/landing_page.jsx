import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div id='landing-text'>
      <h2>The Best Way to Maintain a Database of Voters</h2>
      <p>sub-heading</p>
      <h2>Direct Your Volunteers to Their Targets</h2>
      <p>sub-heading</p>
      <h2>Update Voter Database in Real Time</h2>
      <p>No staff follow-up needed</p>

    <Link to='/voters'>index</Link>
    <br/>
    <Link to='/voterform'>voter form</Link>
    </div>
  );
}

export default LandingPage;
