import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import CharactersPage from './CharactersPage';
import LocationsPage from './LocationsPage';
import EpisodesPage from './EpisodesPage';
import Episode from './Episode';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters' component={CharactersPage} />
            <Route path='/locations' component={LocationsPage} />
            <Route path='/episodes' component={EpisodesPage} />
            <Route exact path='/:episodeId' component={Episode} />
            <Route render={()=><h2>not found</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
