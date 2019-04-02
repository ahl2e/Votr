import React from 'react';
import {connect} from 'react-redux';
import {createVoter} from '../../../actions/voter_actions';
import{openModal, clearPayload} from '../../../actions/modal_actions';
import createVoterForm from './create_voter_form';


const mapStateToProps = (state) => {
  const newVoter = {
    first_name: "",
    last_name: "",
    address: "",
    apartment_number: "",
    city: "",
    state: "",
    zip: null,
    age: null,
    phoneNumber: null,
    email: "",
    contact_attempts: 0,
    enthusiasm: 5,
    lat: null,
    lng: null,
    poll_location_name: "",
    poll_location_address: "",
    poll_location_city: "",
    poll_location_state: "",
    sign_requested: false,
    sign_delivered: false,
    do_not_contact: false
  };
  const payload = state.ui.modal.payload;

  return{newVoter, payload};
};

const mapDispatchToProps = (dispatch) => {
  return{
    createVoter: (voter) => dispatch(createVoter(voter)),
    openModal: (component) => dispatch(openModal(component)),
    clearPayload: () => dispatch(clearPayload())
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(createVoterForm);
