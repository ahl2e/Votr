import React from 'react';
import { withRouter } from 'react-router-dom';

class PollingPlaceForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.pollingPlace;
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
    this.setState({pollingLocationState: newState});
  };
}

  handleSubmit(e){
    e.preventDefault();
    this.props.carryPayload(this.state);
    this.props.closeModal();
  }


  render(){
    return(
      <div id='polling-place-form-container'>
        <div id='poll-location-form'>
          <h3>Please Add Poll Location Information</h3>
          <form onSubmit ={this.handleSubmit.bind(this)} id='poll-location-form'>
            <input
              type='text'
              onChange = {this.update('pollingLocationName')}
              placeholder = 'Polling Location Name'
              >
            </input>
            <input
              type='text'
              onChange = {this.update('pollingLocationAddress')}
              placeholder = 'Polling Location Address'
              >
            </input>
            <input
              type='text'
              onChange = {this.update('pollingLocationCity')}
              placeholder = 'Polling Location City'
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
            <input type = 'submit' value = 'submit'></input>
          </form>
        </div>
        <div id='find-poll-link'>
          <a href = 'https://www.vote.org/polling-place-locator/' target="_blank" >Don't know your polling location?</a>
        </div>
      </div>
    );
  }

};

export default withRouter(PollingPlaceForm);
