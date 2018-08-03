import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './App.css'
import logo from './assets/images/logo.svg'
import Container from './pages/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*** 左侧菜单 ***/}
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/roster/10'>Roster</Link></li>
              <li><Link to='/example1'>example1</Link></li>
          </ul>
        </div>
        {/*** 右侧内容组件 ***/}
        <Container />
      </div>
    );
  }
}

export default App;