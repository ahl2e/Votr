import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateVoterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.newVoter;
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
      debugger
        this.state.lat = latitude;
        this.state.lng = longitude
      // this.setState({[lat]:latitude});
      // this.setState({[lng]:longitude});
      debugger

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  }.bind(this));

}

handleSubmit(e){
  e.preventDefault();
  this.getCoords();
}

  render(){
    return(
      <div id='voter-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="first name"
            onChange = {this.update('firstName')}
            >
          </input>
          <input
            type="text"
            placeholder="last name"
            onChange = {this.update('lastName')}
            >
          </input>
          <input
            type="text"
            placeholder="address"
            onChange = {this.update('address')}
            >
          </input>
          <input
            type="text"
            placeholder="city"
            onChange = {this.update('city')}
            >
          </input>
          <input type="text"
            pattern="[0-9]{5}"
            title="Five digit zip code"
            placeholder='Zip Code'
            onChange = {this.update('zip')} />
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
        <input
          type="tel"
          placeholder="phone number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onChange = {this.update('phoneNumber')}
          >
        </input>
        <input
          type='submit'
          value='submit'>
        </input>

        </form>
      </div>
  )}



}

export default withRouter(CreateVoterForm)
