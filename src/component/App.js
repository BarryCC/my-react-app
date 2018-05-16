import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css'
import logo from '../assets/logo.svg'
import Main from './main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*** 头部 ***/}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/roster/10'>Roster</Link></li>
          </ul>
        </div>
        {/*** 主体内容 ***/}
        <Main />
      </div>
    );
  }
}

export default App;