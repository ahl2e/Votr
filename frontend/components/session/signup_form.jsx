import React from 'react';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit =this.handleSubmit.bind(this);
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
      <form onSubmit={this.handleSubmit}
        className='session-form'>

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

        <br/>
        <label id='email'>
          <input
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="session-form-input"
            placeholder="email"
            >
          </input>
        </label>
        <br/>

        <input
          type="submit"
          value="sign up">
        </input>

      </form>
      <p>or</p>
      <Link to="login"
        className="session-redirect-link"
        >Log in</Link>
    </div>
  )
}
}

export default withRouter(SignupForm);
