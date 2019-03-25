import React from 'react';

import {connect} from 'react-redux';
import VoterMap from './voter_map';

const mapStateToProps = (state, ownProps) => {
  const JohnAdams = {first_name:"John",last_name:"Adams",address:"1600 Pennsylvania Ave",city:"Washington",state:"D.C.",zip:"20500",enthusiasm:10,poll_location_address:"1600 Pennsylvania Ave",poll_location_city:"Washington",poll_location_state:"D.C."};
  return{
    voter: state.entities.voters[ownProps.voter.id] || JohnAdams,
    voterID: parseInt(ownProps.voter.id)
  };
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps)(VoterMap);
