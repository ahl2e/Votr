import {merge} from 'lodash';
import {RECEIVE_TURF, RECEIVE_ALL_TURFS, REMOVE_TURF} from '../actions/turf_actions';

const TurfsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TURF:
      return merge( {}, oldState, {[action.turf.id]:action.turf} );
    case RECEIVE_ALL_TURFS:
      return action.turfs;
    case REMOVE_TURF:
      const newState = merge({}, state);
      delete newState[action.turf.id];
      return newState;
    default:
      return oldState;
  }
};

export default TurfsReducer;
