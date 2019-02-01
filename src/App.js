import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import welcome from './welcome.jpg';
import Modal from 'react-awesome-modal';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleSignUp : false,
            visibleSignIn : false
        }
    }

    openSignUpModal() {
        this.setState({
            visibleSignUp : true
        });
    }

    closeSignUpModal() {
        this.setState({
            visibleSignUp : false
        });
    }

    openSignInModal() {
        this.setState({
            visibleSignIn : true
        });
    }

    closeSignInModal() {
        this.setState({
            visibleSignIn : false
        });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={welcome} className="App-logo" alt="Welcome"/>
            <span>
            <Button onClick={this.openSignInModal.bind(this)} className="Button" type="submit">
                Sign In
            </Button>
            <Button onClick={this.openSignUpModal.bind(this)} className="Button" type="submit">
                Sign Up
            </Button>
            </span>

            <Modal
                visible={this.state.visibleSignIn}
                width="400"
                height="300"
                onClickAway={() => this.closeSignInModal().bind(this)}
            >
                <div className="Popup">
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => this.closeSignInModal()}>Close</a>
                </div>
            </Modal>

            <Modal
                visible={this.state.visibleSignUp}
                width="400"
                height="300"
                onClickAway={() => this.closeSignUpModal.bind(this)}
            >
                <div className="Popup">
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => this.closeSignUpModal()}>Close</a>
                </div>
            </Modal>

        </header>
      </div>
    );
  }
}

export default App;
