import React from 'react';

import auth0Client from '../Auth';

class SignIn extends React.Component {
    componentDidMount() {
        auth0Client.signIn();
    }

    render() {
        return <div />;
    }
}

export default SignIn;
