import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute';

import Entries from './pages/Entries/Entries';
import Entry from './pages/Entry/Entry';

import NewEntry from './pages/NewEntry/NewEntry';
import EditEntry from './pages/EditEntry/EditEntry';

import SignIn from './pages/SignIn';
import Callback from './pages/Callback';

function App() {
    return (
        <Router>
            <div className='wrapper'>
                <Nav />
                <Switch>
                    <Route exact path='/signin' component={SignIn} />
                    <Route exact path='/callback' component={Callback} />

                    <Route exact path='/' component={Entries} />
                    <Route exact path='/entries' component={Entries} />
                    <Route exact path='/entries/:entryId' component={Entry} />

                    <PrivateRoute path='/new' component={NewEntry} />
                    <PrivateRoute
                        path='/edits/:entryId'
                        component={EditEntry}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
