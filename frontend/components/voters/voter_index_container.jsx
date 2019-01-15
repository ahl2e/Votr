import {connect} from 'react-redux';
import {fetchAllVoters} from '../../actions/voter_actions';
import VoterIndex from './voter_index';

const mapStateToProps = (state) => {
  return({
      runs: Object.values(state.entities.voters),
      user: state.session.id,
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllVoters: dispatch(fetchAllVoters()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(VoterIndex);
