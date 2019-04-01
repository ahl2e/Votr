import React from 'react';
import {connect} from 'react-redux';
import {createVoter} from '../../../util/voter_api_util';
import{openModal} from '../../../actions/modal_actions';
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
    poll_location_address: ""
  };
  return{newVoter};
};

const mapDispatchToProps = (dispatch) => {
  return{
    create: (voter) => dispatch(createVoter(voter)),
    openModal: (component) => dispatch(openModal(component)),
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(createVoterForm);
