import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';

import Entries from './pages/Entries';
import Entry from './pages/Entry';
import NewEntry from './pages/NewEntry';

import SignIn from './pages/SignIn';
import Callback from './pages/Callback';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/callback" component={Callback} />

          <Route exact path="/" component={Entries} />
          <Route exact path="/entries" component={Entries} />
          <Route exact path="/entries/:entryId" component={Entry} />

          <PrivateRoute path="/new-entry" component={NewEntry} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
