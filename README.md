# keycloak

## Poc Configuration

### OS

####  File ```/etc/hosts```
```
127.0.1.1	auth.agriprev.loc
127.0.1.1	priv.agriprev.loc
127.0.1.1	old.pai.loc
127.0.0.1   service-nodejs.agriprev.loc
```

### Génération des certificats https

```bash
cd config
# generate root certificat
./genEcc.sh genCA

# generate server certificat by domain
./genEcc.sh -d localhost genCert
./genEcc.sh -d auth.agriprev.loc genCert
./genEcc.sh -d priv.agriprev.loc genCert
./genEcc.sh -d old.pai.loc genCert
./genEcc.sh -d service-nodejs.agriprev.loc genCert
```


## start keyclok server
```
docker-compose up
```
