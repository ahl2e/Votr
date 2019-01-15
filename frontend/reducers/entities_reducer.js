import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import VotersReducer from './voters_reducer';

export default combineReducers({
  users: UsersReducer,
  voters: VotersReducer
});
