import React from 'react';
import { Link } from 'react-router-dom';
import VoterIndexItem from './voter_index_item';


class VoterIndex extends React.Component {
  constructor(props){
      super(props);
    }

  componentDidMount(){
    this.props.fetchAllVoters();
  }

  render(){

    var voters = this.props.voters.map((voter, idx) => <VoterIndexItem voter={voter} key={idx}/>);
    if (this.props.voters.length > 0){
      return (
    <div>
      <ul>
        {voters}
      </ul>
    </div>
  )
    }else{
      return null;
    }
  }
}

export default VoterIndex;
