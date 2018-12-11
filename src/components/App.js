import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Characters from './Characters';
import Locations from './Locations';
import Episodes from './Episodes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={Characters} />
            <Route path='/locations' component={Locations} />
            <Route path='/episodes' component={Episodes} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
