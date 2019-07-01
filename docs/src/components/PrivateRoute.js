// components/PrivateRoute.js

import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../Auth';

const PrivateRoute = props => {
    const { component: Component, path } = props;

    return (
        <Route
            exact
            path={path}
            render={props => {
                if (auth0Client.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    auth0Client.signIn();
                    return <div />;
                }
            }}
        />
    );
};

export default PrivateRoute;
