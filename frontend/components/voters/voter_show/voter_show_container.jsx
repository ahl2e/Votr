import {connect} from 'react-redux';
import {fetchVoter,updateVoter} from '../../../actions/voter_actions';
import VoterShow from './voter_show';

const mapStateToProps = (state,ownProps) => {
  const JohnAdams = {first_name:"John",last_name:"Adams",address:"1600 Pennsylvania Ave",city:"Washington",state:"D.C.",zip:"20500",enthusiasm:10,poll_location_address:"1600 Pennsylvania Ave",poll_location_city:"Washington",poll_location_state:"D.C."};
  return{
    voter: state.entities.voters[ownProps.match.params.VoterID] || JohnAdams,
    voterID: parseInt(ownProps.match.params.VoterID)
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
  fetchVoter: (id) => dispatch(fetchVoter(id)),
  updateVoter: (voter) => dispatch(updateVoter(voter)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(VoterShow);
