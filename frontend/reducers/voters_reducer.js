import {merge} from 'lodash';
import {RECEIVE_VOTER, RECEIVE_ALL_VOTERS, REMOVE_VOTER} from '../actions/voter_actions';

const VotersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_VOTER:
      return merge( {}, oldState, {[action.voter.id]:action.voter} );
    case RECEIVE_ALL_VOTERS:
      return action.voters;
    case REMOVE_VOTER:
      const newState = merge({}, state);
      delete newState[action.voter.id];
      return newState;
    default:
      return oldState;
  }
};

export default VotersReducer;
