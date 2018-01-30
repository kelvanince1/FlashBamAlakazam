import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Flash! Bam! Alakazam!</h1>
        </header>
        <p className="App-intro">
          Lets see what we can do
        </p>
        <div>
          <nav>
            <ul>
              <li><a href="Kelvan.pdf" target="_blank">Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
