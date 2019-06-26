import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';

import Entries from './pages/Entries';
import Entry from './pages/Entry';
import NewEntry from './pages/NewEntry';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Entries} />
          <Route exact path="/entries" component={Entries} />
          <Route exact path="/entries/:entryId" component={Entry} />
          <Route exact path="/submit-new/" component={NewEntry} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
