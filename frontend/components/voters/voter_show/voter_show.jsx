import React from 'react';
import {Link} from 'react-router-dom';

class VoterShow extends React.Component{
  constructor(props){
    super(props);
    this.state = props.voter;
    this.enthusiasmStandIn = props.voter.enthusiasm;
    this.raiseEnthusiasm = this.raiseEnthusiasm.bind(this);
    this.lowerEnthusiasm = this.lowerEnthusiasm.bind(this);
  }

  componentDidMount(){
      this.props.fetchVoter(this.props.VoterID);
  }


  raiseEnthusiasm() {
    var ent = this.state.enthusiasm;
    ent++;
    if (ent < 11){
      return this.setState({
        enthusiasm: ent
      });
    }
  }

  lowerEnthusiasm() {
    var ent = this.state.enthusiasm;
    ent--;
      if(ent > 0){
      return this.setState({
        enthusiasm: ent
      });
    }
  }

  update(field) {
  return e => this.setState({
    [field]: e.currentTarget.value
  });
}

handleSubmit(){
  this.props.updateVoter(this.state);
}

renderEnthusiasm(){
  if(this.state){
    return(
      <p>{this.state.enthusiasm}</p>
    );
  } else{
    <p>{this.enthusiasmStandIn}</p>
  }
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
            <p>{`${voter.first_name} ${voter.last_name}`}</p>
          </div>
          <div id="voter-address">
            <p>{voter.address}</p>
            <p>{`${voter.city}, ${voter.state} ${voter.zip}`}</p>
          </div>
          <div id='voter-enthusiasm'>
              <button id='ent-button-up' onClick={this.raiseEnthusiasm}></button>
              <figure id='ent-figure'>
                {this.renderEnthusiasm()}
                <figcaption id='ent-caption'>
                  <p>Enthusiasm</p>
              </figcaption>
              </figure>
              <button id='ent-button-down' onClick={this.lowerEnthusiasm}></button>
          </div>
          <div id="voter-poll-location">
            <h3>Polling Location:</h3>
            <p>{voter.poll_location_address}</p>
            <p>{`${voter.poll_location_city} ${voter.poll_location_state}`}</p>
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
