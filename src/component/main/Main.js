import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './main.css'

import Home from './Home'
import Roster from './Roster'
import Clock from './clock'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster/:id' component={Roster}/>
        </Switch>
        <Clock />
      </div>
    );
  }
}

export default Main;