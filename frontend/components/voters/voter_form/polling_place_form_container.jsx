import {connect} from 'react-redux';
import {closeModal, carryPayload} from '../../../actions/modal_actions';
import PollingPlaceForm from './polling_place_form';

const mapStateToProps = (state) => {
const pollingPlace = {
    pollingLocationName: "",
    pollingLocationAddress: "",
    pollingLocationCity: "",
    pollingLocationState: "",
  };

  return {pollingPlace};
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    carryPayload: (payload) => dispatch(carryPayload(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollingPlaceForm);
