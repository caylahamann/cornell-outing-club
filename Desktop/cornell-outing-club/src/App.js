import { Router, Route, Switch} from 'react-router';
import React, { Component } from 'react';
import Board from './Board.js';
import Landing from './Landing.js';
import Activities from './Activities.js';

class App extends Component {
    render() {
      return (
        <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/board' component={Board}></Route>
        <Route exact path= '/activities' component={Activities}></Route>
      </Switch>
      );
    }
  }
  
  export default App;