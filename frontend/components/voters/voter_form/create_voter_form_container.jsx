import React from 'react';
import {connect} from 'react-redux';
import {createVoter} from '../../../util/voter_api_util';
import{openModal, clearPayload} from '../../../actions/modal_actions';
import createVoterForm from './create_voter_form';


const mapStateToProps = (state) => {
  const newVoter = {
    firstName: "",
    lastName: "",
    address: "",
    apartmentNumber: "",
    city: "",
    state: "",
    zip: null,
    age: null,
    phoneNumber: null,
    email: "",
    lat: null,
    lng: null,
    poll_location_address: "",
    poll_location_state: ""
  };
  const payload = state.ui.modal.payload;

  return{newVoter, payload};
};

const mapDispatchToProps = (dispatch) => {
  return{
    create: (voter) => dispatch(createVoter(voter)),
    openModal: (component) => dispatch(openModal(component)),
    clearPayload: () => dispatch(clearPayload())
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(createVoterForm);
