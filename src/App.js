import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import scotland from './Scotland.png';
import github from './github.svg';
import linkedin from './linkedin.png';
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
          <a href="https://github.com/kelvanince1" target="_blank"><img src={github} width="60" height="60" alt="github" /></a>
          <a href="https://www.linkedin.com/in/kelvan-ince/" target="_blank"><img src={linkedin} width="60" height="60" alt="github" /></a>
          <img src={scotland} className="App-logo" alt="scotland" />
          <h1 className="App-title">Flash! Bam! Alakazam!</h1>
        </header>
        <br />
        <button className='Button' onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Links</button>
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
                color: '#ffffff',
                backgroundColor: '#731144',
                width: 400,
                height: 300,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' || state === 'entering' ? 0 : 1
              }}>
              Hello
            </div>
          }
        </Transition>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <button className="Button" onClick={this.showModal}>Skills</button><br />
        <button className="Button"><a href="Kelvan.pdf" target="_blank">Resume</a></button><br />
        <button className="Button"><a href="AWS.pdf" target="_blank">AWS Certificate</a></button><br />
      </div>
    );
  }
}

export default App;
