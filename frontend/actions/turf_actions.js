import * as TurfApiUtil from '../util/turf_api_util';

export const RECEIVE_ALL_TURFS = 'RECEIVE_ALL_TURFS';
export const RECEIVE_TURF = 'RECEIVE_TURF';
export const REMOVE_TURF = 'REMOVE_TURF';

export const fetchAllTurfs = () => dispatch => {
  return TurfApiUtil.fetchAllTurfs().then(turfs => dispatch(receiveAllTurfs(turfs)));
};

export const fetchTurf = (id) => dispatch => {
  return TurfApiUtil.fetchTurf(id).then(turf => dispatch(receiveVoter(turf)));
};

export const updateVoter = (turf) => dispatch => {
  return TurfApiUtil.updateTurf(turf).then(turf => dispatch(receiveVoter(turf)));
};

export const deleteVoter = (turf) => dispatch => {
  return TurfApiUtil.deleteTurf(turf).then(turf => dispatch(removeVoter(turf)));
};

export const createVoter = (turf) => dispatch => {
  return TurfApiUtil.createTurf(turf).then(turf => dispatch(receiveVoter(turf)));
};


export const receiveTurf = (turf) => {
  return {
    type: RECEIVE_TURF,
    turf
  };
};

export const receiveAllTurfs = (turfs) => {
  return{
    type: RECEIVE_ALL_TURFS,
    turfs:turfs
  };
};

export const removeTurf = (turf) => {
  return{
    type: REMOVE_TURF,
    turf
  };
};
