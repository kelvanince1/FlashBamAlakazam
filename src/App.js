import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import scotland from './Scotland.png';
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={scotland} className="App-logo" alt="scotland" />
          <h1 className="App-title">Flash! Bam! Alakazam!</h1>
        </header>
        <br />
        <button className='Button' onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={600}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log('OnEnter')}
          onEntering={() => console.log('OnEntering')}
          onEntered={() => console.log('OnEntered')}
          onExit={() => console.log('OnExit')}
          onExiting={() => console.log('OnExiting')}
          onExited={() => console.log('OnExited')}
        >
          {state =>
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition:  'opacity 1s ease-out',
                opacity: state === 'exiting' || state === 'entering' ? 0 : 1
              }}>
              Hello
            </div>
          }
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <button className="Button" onClick={this.showModal}>Skills</button><br />
        <button className="Button"><a href="Kelvan.pdf" target="_blank">Resume</a></button><br />
        <button className="Button"><a href="Kelvan.pdf" target="_blank">AWS Certificate</a></button><br />
      </div>
    );
  }
}

export default App;
