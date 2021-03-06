import {merge} from 'lodash/merge';
import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const SessionErrorsReducer = (oldState = [], action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default SessionErrorsReducer;
