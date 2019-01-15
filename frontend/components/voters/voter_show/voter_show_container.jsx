import {connect} from 'react-redux';
import {fetchVoter} from '../../../actions/voter_actions';
import VoterShow from './voter_show';

const mapStateToProps = (state,ownProps) => {
  return{
    voter: state.entities.voters[ownProps.match.params.VoterID]
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
  fetchVoter: (id) => dispatch(fetchVoter(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(VoterShow);
