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
    return(
      <div>
        {this.props.voters.map((voter) => {
          if(voter){
            return <VoterIndexItem voter={voter}/>;
          }
        })}
      </div>
    )
  }
}

export default VoterIndex;
