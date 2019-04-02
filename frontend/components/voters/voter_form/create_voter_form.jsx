import React from 'react';
import { withRouter } from 'react-router-dom';
import ModalContainer from '../../modal/modal_container';
import PollingPlaceFormContainer from './polling_place_form_container';


class CreateVoterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.newVoter;
    this.pollingPlaceForm = <PollingPlaceFormContainer />;
  }

  componentDidMount(){
    this.loadGoogleAPI();
  }

  componentDidUpdate(){
    if(this.props.payload){
      this.state.poll_location_name = this.props.payload.pollingLocationName;
      this.state.poll_location_address = this.props.payload.pollingLocationAddress;
      this.state.poll_location_city = this.props.payload.pollingLocationCity;
      this.state.poll_location_state = this.props.payload.pollingLocationState;
      this.props.clearPayload();
    }
  }

  loadGoogleAPI(){
    const script = document.createElement("script");
   script.src="https://apis.google.com/js/client.js?onload=load";

   script.onload = () => {
     window.gapi.load('client', () => {
       window.gapi.client.setApiKey(window.googleAPIKey)

       window.gapi.client.load('client:auth2', 'v3', () => {
         console.log("gapi is ready");
       });
     });
   };

   document.body.appendChild(script);
  }

  update(field) {
  return (e) =>{
    this.setState({[field]: e.target.value});
  };
}

updateState(){
  return (e) => {
    var newState = this.state.state;
    newState = e.target.value;
    this.setState({state: newState});
  };
}

combineAddress(){
  const voter = this.state;
  return voter.address + " " + voter.city +", " + voter.state;
}

getCoords(){
  var address = this.combineAddress();
  let geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == 'OK') {
      var latResult = results[0].geometry.location.lat;
      var lngResult = results[0].geometry.location.lng;
      var latitude = latResult();
      var longitude = lngResult();
        this.state.lat = latitude;
        this.state.lng = longitude;
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  }.bind(this));
}

getPollingLocation(){
  var address = this.combineAddress();
  function lookup(address, callback) {

        var electionId = 4821;
        var req = gapi.client.request({
            'path' : '/civicinfo/v2/voterinfo',
            'params' : {'electionId' : electionId, 'address' : address, 'officialOnly': false}
        });
       req.execute(callback);
      }
      function setPollingAddress(response){
        if (response.pollingLocations && response.pollingLocations.length > 0) {
          var pollingLocation = response.pollingLocations[0].address;
          debugger
        }
      }

      function load() {
        // gapi.client.setApiKey(window.googleAPIKey);
        lookup(address, setPollingAddress);
      }

      load()
}

normalizePhoneNumber(phoneNumberString){
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var result = match[1] + '-' + match[2] + '-' + match[3];
    this.state.phoneNumber = result;
  }
  return null;
}

handleSubmit(e){

  e.preventDefault();
  this.normalizePhoneNumber(this.state.phoneNumber);
  this.getCoords();
  this.getPollingLocation();
  if(this.state.poll_location_address == ""){
    this.props.openModal(this.pollingPlaceForm);
  }
  if (this.state.poll_location_address != ""){
    this.props.createVoter(this.state);
  }
}

  render(){
    return(
      <div id='voter-form-container'>
        <ModalContainer/>
        <form onSubmit={this.handleSubmit.bind(this)} id='voter-form'>
          <div className='voter-form-side'>
            <input
              type="text"
              placeholder="first name"
              onChange = {this.update('first_name')}
              className ='voter-form-input'
              >
            </input>
            <input
              type="text"
              placeholder="last name"
              onChange = {this.update('last_name')}
              className ='voter-form-input'
              >
            </input>
            <input
              type="tel"
              placeholder="phone number"
              onChange = {this.update('phoneNumber')}
              className ='voter-form-input'
              >
            </input>
          </div>

          <div className='voter-form-side'>
            <input
              type="text"
              placeholder="address"
              onChange = {this.update('address')}
              className ='voter-form-input'
              >
            </input>
            <input
              type="text"
              placeholder="city"
              onChange = {this.update('city')}
              className ='voter-form-input'
              >
            </input>
            <select onChange={this.updateState()}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            <input type="text"
              pattern="[0-9]{5}"
              title="Five digit zip code"
              placeholder='Zip Code'
              onChange = {this.update('zip')}
              className ='voter-form-input'/>
        </div>
        <input
          type='submit'
          value='submit'>
        </input>

        </form>
      </div>
  )}



}

export default withRouter(CreateVoterForm)
