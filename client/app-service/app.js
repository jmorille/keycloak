
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const Keycloak = require('keycloak-connect');
const cors = require('cors');

const app = express();

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

app.get('/secured', keycloak.protect('realm:user'), function (req, res) {
    res.json({message: 'secured'});
});

app.get('/admin', keycloak.protect('realm:admin'), function (req, res) {
    res.json({message: 'admin'});
});

app.listen(9080, function () {
    console.log('Started at port http://localhost:9080');
});