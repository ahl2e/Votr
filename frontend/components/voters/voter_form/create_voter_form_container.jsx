import React from 'react';
import {connect} from 'react-redux';
import {createVoter} from '../../../util/voter_api_util';
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
  };
  return{newVoter};
};

const mapDispatchToProps = (dispatch) => {
  return{
    create: (voter) => dispatch(createVoter(voter))
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(createVoterForm);
