// Code from https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/#Securing-your-React-App

import auth0 from 'auth0-js';
import config from './utils/config';

class Auth {
    constructor() {
        const DOMAIN = process.env.AUTH_DOMAIN || config.jwt.domain;
        const CLIENT_ID = process.env.AUTH_CLIENT_ID || config.jwt.domain;

        this.auth0 = new auth0.WebAuth({
            // the following three lines MUST be updated
            domain: DOMAIN,
            audience: `https://${DOMAIN}/userinfo`,
            clientID: CLIENT_ID,
            redirectUri: 'https://blog.locrian24.now.sh/callback',
            responseType: 'id_token',
            scope: 'openid profile'
        });

        this.getProfile = this.getProfile.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    getProfile() {
        return this.profile;
    }

    getIdToken() {
        return this.idToken;
    }

    isAuthenticated() {
        return new Date().getTime() < this.expiresAt;
    }

    signIn() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (err) return reject(err);
                if (!authResult || !authResult.idToken) {
                    return reject(err);
                }
                this.idToken = authResult.idToken;
                this.profile = authResult.idTokenPayload;
                // set the time that the id token will expire at
                this.expiresAt = authResult.idTokenPayload.exp * 1000;
                resolve();
            });
        });
    }

    signOut() {
        // clear id token, profile, and expiration
        this.idToken = null;
        this.profile = null;
        this.expiresAt = null;
    }
}

const auth0Client = new Auth();

export default auth0Client;
