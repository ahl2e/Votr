import React from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit =this.handleSubmit.bind(this);
  }

  demoLogin(e) {
  e.preventDefault();
  const user = Object.assign({}, {username: "demo", password: "demopassword"});
  this.props.dispatchForm(user).then(() => this.props.history.goBack());
  this.setState({
    username: "",
    password: "",
    email:""
  });
}

handleSubmit(e){
  e.preventDefault();
  const user = Object.assign({}, this.state);
  return this.props.dispatchForm(user).then(()=> this.props.history.push('/'));
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
            className="session-form-input"
            placeholder="username">
          </input>
        </label>

        <br/>
        <label id='password'>
          <input
            type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="session-form-input"
            placeholder="password">
          </input>
        </label>

        <input
          type="submit"
          value="log in">
        </input>
        <br/>
        <button className="demo-button" onClick={this.demoLogin.bind(this)}> Demo Login </button>
      </form>
      <p>or</p>
      <Link to="signup"
        className="session-redirect-link"
        >sign up</Link>
    </div>
  )
}
}

export default withRouter(LoginForm);
