import React, { Component } from 'react';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      surname: '',
      moneyAmount: '',
      error : {
        message: 'gwregwreg'
      }
    }
  }


  signUp() {
    alert("Sign Up button has been pressed!")
  }

  render() {
    return(
      <form method="post" onSubmit={this.signUp}>
        <div>
          <input type="text" placeholder="E-mail" required
                 onChange={event => this.setState({email: event.target.value})}
          />
        </div>
        <div>
          <input type="text" placeholder="Password" required
                 onChange={event => this.setState({password: event.target.value})}
          />
        </div>
        <div>
          <input type="text" placeholder="Name"
                 onChange={event => this.setState({name: event.target.value})}
          />
        </div>
        <div>
          <input type="text" placeholder="Surname"
                 onChange={event => this.setState({surname: event.target.value})}
          />
        </div>
        <div>
          <input type="text" placeholder="Money amount"
                 onChange={event => this.setState({moneyAmount: event.target.value})}
          />
        </div>
        <div>
          <input type="submit" value="Sign Up" onClick={() => this.signUp()}/>
        </div>
        <div>{this.state.error.message}</div>
      </form>
    );
  }
}

export default SignUp;