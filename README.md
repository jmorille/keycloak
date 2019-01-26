# keycloak

## Poc Configuration

### OS

####  File ```/etc/hosts```
```
127.0.1.1	auth.agriprev.loc
127.0.1.1	priv.agriprev.loc
127.0.1.1	old.pai.loc
```

### Génération des certificats https

```bash
cd config
# generate root certificat
./genEcc.sh genCA
# generate server certificat by domain
./genEcc.sh -d web genCert
./genEcc.sh -d localhost genCert
```


## start keyclok server
```
docker-compose up
```
