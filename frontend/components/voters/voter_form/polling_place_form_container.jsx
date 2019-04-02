import {connect} from 'react-redux';
import {closeModal, carryPayload} from '../../../actions/modal_actions';
import PollingPlaceForm from './polling_place_form';

const mapStateToProps = (state) => {
const pollingPlace = {
    pollingLocationAddress: "",
    pollingLocationState: "",
  };
  const payload = state.ui.modal.payload;

  return {pollingPlace, payload};
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    carryPayload: (payload) => dispatch(carryPayload(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PollingPlaceForm);
