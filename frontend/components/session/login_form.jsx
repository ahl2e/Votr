import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit =this.handleSubmit.bind(this);
  }

handleSubmit(e){
  e.preventDefault();
  const user = Object.assign({}, this.state);
  return this.props.dispatchForm(user);
}

update(field) {
  return e => (
    this.setState({
      [field]: e.currentTarget.value
    })
  );
}

render(){

  return(
    <div>
      <form onSubmit={this.handleSubmit}>

        <label id='username'>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update('username')}
            placeholder="username">
          </input>
        </label>

        <br/>
        <label id='password'>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            placeholder="password">
          </input>
        </label>

        <input
          type="submit"
          value="log in">
        </input>

      </form>
    </div>
  )
}
}

export default withRouter(LoginForm);
