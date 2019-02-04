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
    fetch('http://localhost:8080/budgetcheckerweb/users/test', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(this.state)
    }).then(res => console.log(res));
  }

  render() {
    return(
      <form className="SignIn">
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
        <div className="form-group">
          <button
            className="button"
            type="button"
            onClick={() => this.signIn()}
          >
            Sign In
        </button>
        </div>
      </form>
    );
  }
}

export default SignIn;