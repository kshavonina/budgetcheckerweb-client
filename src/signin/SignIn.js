import React, { Component } from 'react';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signIn() {
    alert("Sign In button has pressed!");
  }

  render() {
    return(
      <div className="SignIn">
        <h2>Sign In</h2>
        <input
          className="input"
          type="text"
          placeholder="email"
          onChange={event => this.setState({email: event.target.value})}
        />
        <input
          className="input"
          type="password"
          placeholder="password"
          onChange={event => this.setState({password: event.target.value})}
        />
        <button
          className="button"
          type="button"
          onClick={() => this.signIn()}
        >
          Sign In
        </button>
      </div>
    );
  }
}

export default SignIn;