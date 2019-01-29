
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const Keycloak = require('keycloak-connect');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Enable CORS support
app.use(cors());

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.

const memoryStore = new session.MemoryStore();

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

// Provide the session store to the Keycloak so that sessions
// can be invalidated from the Keycloak console callback.
//
// Additional configuration is read from keycloak.json file
// installed from the Keycloak web console.

var keycloak = new Keycloak({
    store: memoryStore
});

app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/'
}));

app.get('/public', function (req, res) {
    res.json({message: 'public'});
});

// keycloak.protect('realm:user')
app.get('/secured', keycloak.protect(), function (req, res) {
    const token = req.kauth.grant.access_token.content;
    const user = {email:token.email, name:token.name, preferred_username: token.preferred_username, given_name:token.given_name, family_nam:    token.family_name };
    res.json({message: 'secured', user});
});

app.get('/admin', keycloak.protect('realm:admin'), function (req, res) {
    res.json({message: 'admin'});
});

app.listen(9080, function () {
    console.log('Started at port http://localhost:9080');
});