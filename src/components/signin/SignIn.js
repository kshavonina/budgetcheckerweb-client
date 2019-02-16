import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {

  state = {
    grant_type: 'password',
    username: '',
    password: '',
    client_id: 'trusted-client',
    client_secret: 'secret'
  };

  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }

  signIn() {
    const formData = new URLSearchParams();
    formData.append('grant_type', this.state.grant_type);
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);

    fetch('http://localhost:8080/budgetcheckerweb/oauth/token', {
      method: 'POST',
      //mode: 'cors',
      headers: {
        //'Authorization': 'Basic ' + btoa(encodeURI(this.client_id) + ':' + encodeURI(this.client_secret)),
        'Authorization': 'Basic dHJ1c3RlZC1jbGllbnQ6c2VjcmV0',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        //'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
        //JSON.stringify(this.state)
    })
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .then(this.props.history.push("/profile"))
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
  }

  render() {
    return(
      <form className="SignIn">
        <h2>Sign In</h2>
        <input
          className="input"
          type="text"
          placeholder="email"
          onChange={event => this.setState({username: event.target.value})}
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

SignIn.propTypes = {

};

export default withRouter(SignIn);