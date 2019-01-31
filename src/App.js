import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import welcome from './welcome.jpg';
import './App.css';

class App extends Component {

    openSignUpForm() {
        alert("Sign Up button has been pressed!");
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={welcome} className="App-logo" alt="Welcome"/>
            <span>
            <Button className="Button" type="submit">
                Sign In
            </Button>
            <Button onClick={this.openSignUpForm} className="Button" type="submit">
                Sign Up
            </Button>
            </span>

        </header>
      </div>
    );
  }
}

export default App;
