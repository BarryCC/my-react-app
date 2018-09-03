import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './container.css'

import Clock from '../component/clock/clock'

import Home from './home/Home'
import Roster from './roster/Roster'
import Example1 from './example1/Example1'
import Example2 from './home/Example2'


class Main extends Component {
  render() {
    return (
      <div className="container">
        <Clock />

        <Switch>
          {/*** 默认也 ***/}
          <Route exact path='/' component={Home}/>
          {/*** 传参实例 ***/}
          <Route path='/roster/:id' component={Roster}/>
          {/*** 实例1 ***/}
          <Route path='/example1' component={Example1}/>
          {/*** 实例2 ***/}
          <Route path='/example2' component={Example2}/>
        </Switch>
      </div>
    );
  }
}

export default Main;