import * as VoterApiUtil from '../util/voter_api_util';

export const RECEIVE_ALL_VOTERS = 'RECEIVE_ALL_VOTERS';
export const RECEIVE_VOTER = 'RECEIVE_VOTER';
export const REMOVE_VOTER = 'REMOVE_VOTER';

export const fetchAllVoters = () => dispatch => {
  return VoterApiUtil.fetchAllVoters().then(voters => dispatch(receiveAllVoters(voters)));
};

export const fetchVoter = (id) => dispatch => {
  return VoterApiUtil.fetchVoter(id).then(voter => dispatch(receiveVoter(voter)));
};

export const updateVoter = (voter) => dispatch => {
  return VoterApiUtil.updateVoter(voter).then(voter => dispatch(receiveVoter(voter)));
};

export const deleteVoter = (voter) => dispatch => {
  return VoterApiUtil.deleteVoter(voter).then(voter => dispatch(removeVoter(voter)));
};


export const receiveVoter = (voter) => {
  return {
    type: RECEIVE_VOTER,
    voter
  };
};

export const receiveAllVoters = (voters) => {
  return{
    type: RECEIVE_ALL_VOTERS.
    voters
  };
};

export const removeVoter = (voter) => {
  return{
    type: REMOVE_VOTER,
    voter
  };
};
