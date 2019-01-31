import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import welcome from './welcome.jpg';
import Modal from 'react-awesome-modal';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
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
            <Button onClick={this.openModal.bind(this)} className="Button" type="submit">
                Sign Up
            </Button>
            </span>

            <Modal
                visible={this.state.visible}
                width="400"
                height="300"
                onClickAway={() => this.closeModal.bind(this)}
            >
                <div className="Popup">
                    <h1>Title</h1>
                    <p>Some Contents</p>
                    <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                </div>
            </Modal>

        </header>
      </div>
    );
  }
}

export default App;
