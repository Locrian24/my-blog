const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtConfig = require('./config').jwt;

const jwtDomain = jwtConfig.domain;
const jwtClientId = jwtConfig.id;

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