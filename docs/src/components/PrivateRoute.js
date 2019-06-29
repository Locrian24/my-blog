// components/PrivateRoute.js

import React from 'react'
import {Route} from 'react-router-dom';
import auth0Client from '../Auth';

const PrivateRoute = (props) => {
    const {component: Component, path} = props;

    return (
       <Route path={path} render={() => {
            if (auth0Client.isAuthenticated()) {
                return <Component />;
            } else {
                auth0Client.signIn();
                return <div></div>;
            }
       }} />
    );
}

export default PrivateRoute;