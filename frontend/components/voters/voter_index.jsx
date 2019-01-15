import React from 'react';
import { Link } from 'react-router-dom';

class VoterIndex extends React.Component {


  componentDidMount(){
    this.props.fetchAllVoters();
  }

  render(){
    return(
      <div>
        <p>all the voters</p>
      </div>
    )
  }
}

export default VoterIndex;
