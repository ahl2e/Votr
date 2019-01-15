import React from 'react';
import {Link} from 'react-router-dom';

class VoterShow extends React.Component{
  constructor(props){
    super(props);
    this.state = props.voter;
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    if(!this.props.voter){
      this.props.fetchVoter(this.props.match.params.VoterID);
    }
  }

  update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

  render(){

const voter = this.props.voter || {
  first_name: "",
  last_name: "",
  address: "",
  city: "",
  state: "",
  zip: null,
  enthusiasm: 5,
  poll_location_name: "",
  poll_location_address: "",
  poll_location_city: "",
  poll_location_state: "",
  notes: []
};
    return(
      <div id="voter-show">
        <section id="voter-left">
          <div id="voter-name">
            {voter.first_name}
            {voter.last_name}
          </div>
          <div id="voter-address">
            {voter.address}
            {voter.city}
            {voter.state}
            {voter.zip}
          </div>
          <div id='voter-enthusiasm'>
            {voter.enthusiasm}
          </div>
          <div id="voter-poll-location">
            {voter.poll_location_address}
            {voter.poll_location_city}
            {voter.poll_location_state}
          </div>
      </section>
      <section id='voter-right'>
          <div id="voter-map">
          </div>
          <div id="voter-notes">
          </div>
      </section>

      </div>
    )
  }
}


// <input
//   type='text'
//   value={this.state.first_name}
//   placeholder={`${voter.first_name}`}
//   onChange={this.update('first_name')}>
// </input>
// <input
//   type='text'
//   value={this.state.last_name}
//   placeholder={`${voter.last_name}`}
//   onChange={this.update('last_name')}>
// </input>


export default VoterShow;
