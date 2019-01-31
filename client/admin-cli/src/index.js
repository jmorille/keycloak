const fetch = require('node-fetch');


const keycloakUri = `http://auth.agriprev.loc:8080/auth`;
const adminUrl = `${keycloakUri}/realms/master/protocol/openid-connect/token`;

console.log(adminUrl);

const form = {
    grant_type: 'password',
    client_id: 'admin-cli',
    username: "admin",
    password: "admin",
};

fetch(adminUrl)
    .then( res => {
        if (res.ok) {
            return res.json();
        } else {
            console.error("Erreur", res.status);
            return res.json();
        }
    }).then(res => {

    })
    .catch(err => {
        console.error(err);
        return err;
    })



