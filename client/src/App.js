import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import AJAX from './utils/ajax';

import Nav from './components/Nav/Nav';
import PrivateRoute from './components/PrivateRoute';
import BackgroundController from './components/BackgroundController';

import Entries from './pages/Entries/Entries';
import Entry from './pages/Entry/Entry';

import NewEntry from './pages/NewEntry/NewEntry';
import EditEntry from './pages/EditEntry/EditEntry';

import SignIn from './pages/SignIn';
import Callback from './pages/Callback';

class App extends React.Component {
    state = {
        entries: null
    };

    componentDidMount() {
        AJAX.getAllEntries()
            .then(res => {
                this.setState({ entries: res.data });
            })
            .catch(err => 'Error getting entries: ' + err);
    }

    render() {
        return (
            <Router>
                <BackgroundController>
                    <div className='wrapper'>
                        <Nav />
                        <Switch>
                            <Route exact path='/signin' component={SignIn} />
                            <Route
                                exact
                                path='/callback'
                                component={Callback}
                            />
                            {this.state.entries && (
                                <Route
                                    exact
                                    path='/'
                                    render={() => (
                                        <Entries entries={this.state.entries} />
                                    )}
                                />
                            )}
                            {this.state.entries && (
                                <Route
                                    exact
                                    path='/entries'
                                    render={() => (
                                        <Entries entries={this.state.entries} />
                                    )}
                                />
                            )}
                            <Route
                                exact
                                path='/entries/:entryId'
                                component={Entry}
                            />
                            <PrivateRoute path='/new' component={NewEntry} />
                            <PrivateRoute
                                path='/edits/:entryId'
                                component={EditEntry}
                            />
                        </Switch>
                    </div>
                </BackgroundController>
            </Router>
        );
    }
}

export default App;
