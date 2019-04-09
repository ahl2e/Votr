import {combineReducers} from 'redux';
import UsersReducer from './users_reducer';
import VotersReducer from './voters_reducer';
import TurfsReducer from './turfs_reducer';

export default combineReducers({
  users: UsersReducer,
  voters: VotersReducer,
  turfs: TurfsReducer
});
