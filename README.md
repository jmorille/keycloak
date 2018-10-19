# keycloak

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
