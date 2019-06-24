import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Entries from './pages/Entries';
import Entry from './pages/Entry';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Entries} />
          <Route exact path="/entries" component={Entries} />
          <Route exact path="/entries/:entryId" component={Entry} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
