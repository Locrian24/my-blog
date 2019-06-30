// PrivateLink.js
// A component that is only displayed when a user is authenticated by JWT / Auth0

import React from 'react';
import { Link } from 'react-router-dom';

import auth0Client from '../Auth';

const PrivateLink = props => {
    const { to, body } = props;

    if (!auth0Client.isAuthenticated()) return null;

    return <Link to={to}>{body}</Link>;
};

export default PrivateLink;
