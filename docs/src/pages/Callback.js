// pages/Callback.js
// Callback url that handles Auth0 redirect

import React from 'react'
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth';

class Callback extends React.Component {
    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.history.replace('/');
    }

    render() {
        return (
            <p>Redirecting to site...</p>
        )
    }
}

export default withRouter(Callback);