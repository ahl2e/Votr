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

  handleSubmit(e){
    e.preventDefault();
    this.props.carryPayload(this.state);
    this.props.closeModal();
  }


  render(){
    return(
      <div>
        <div id='poll-location-form'>
          <form onSubmit ={this.handleSubmit.bind(this)}>
            <input
              type='text'
              onChange = {this.update('pollingLocationAddress')}
              placeholder = 'Polling Location Address'
              >
            </input>
            <input
              type='text'
              onChange = {this.update('pollingLocationState')}
              placeholder = 'Polling Location State'
              >
            </input>
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
