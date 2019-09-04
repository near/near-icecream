import React, { Component } from 'react';
import logo from './assets/logo.svg';
import nearlogo from './assets/gray_near_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="image-wrapper">
          <img className="logo" src={nearlogo} alt="NEAR logo" />
          <p><span role="img" aria-label="fish">🐟</span> NEAR protocol is a new blockchain focused on developer productivity and useability!<span role="img" aria-label="fish">🐟</span></p>
          <p><span role="img" aria-label="chain">⛓</span> This little react app is connected to blockchain right now. <span role="img" aria-label="chain">⛓</span></p>
          <p><span role="img" aria-label="book">📚</span><a href="https://docs.nearprotocol.com"> Learn from NEAR Documentation</a> <span role="img" aria-label="book">📚</span>
          </p>
          <p><span role="img" aria-label="net">🕸</span> <a href="https://nearprotocol.com">NEAR Website</a> <span role="img" aria-label="net">🕸</span>
          </p>
        </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <div>

        </div>
      </div>
    )
  }

}

export default App;
