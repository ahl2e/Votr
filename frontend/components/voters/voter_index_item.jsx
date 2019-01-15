import React from 'react';
import { Link } from 'react-router-dom';

const VoterIndexItem = (props) => {
  const voter = props.voter;
  return(
    <Link to={`voter/${voter.id}`}>
    <div className='voter-index-item'>
      <div id='voter-index-item-name'>
        <p>{`${voter.first_name} ${voter.last_name}`}</p>
      </div>
      <div id='voter-index-item-email'>
        <p>{`${voter.email}`}</p>
      </div>
      <div id='voter-index-item-address'>
        <p>{`${voter.address}`}</p>
      </div>
    </div>
  </Link>
  )
}

export default VoterIndexItem;
