import React from 'react';
import { Link } from 'react-router-dom';

const VoterIndexItem = (props) => {
  return(
    <div>
      <p>
        {`${props.voter.first_name} ${props.voter.last_name}`}
      </p>
    </div>
  )
}

export default VoterIndexItem;
