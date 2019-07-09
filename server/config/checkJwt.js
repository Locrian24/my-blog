const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtConfig = require('./config').jwt;

const jwtDomain = process.env.AUTH_DOMAIN || jwtConfig.domain;
const jwtClientId = process.env.AUTH_CLIENT_ID || jwtConfig.id;

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${jwtDomain}/.well-known/jwks.json`
    }),

    // Validate audience and issuer
    audience: jwtClientId,
    issuer: `https://${jwtDomain}/`,
    algorithms: ['RS256']
});

module.exports = checkJwt;
