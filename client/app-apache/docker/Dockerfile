FROM httpd:2.4

ENV OPENIDC_VERSION 2.3.10.2
ENV OPENIDC_VERSION_DEB_URL https://github.com/zmartzone/mod_auth_openidc/releases/download/v$OPENIDC_VERSION/libapache2-mod-auth-openidc_$OPENIDC_VERSION-1.stretch+1_amd64.deb
ENV OPENIDC_VERSION_DEB_SHA1 e9a9b0aa382b31f04fada61dc443c3159f181d83

ENV CJOSE_VERSION 0.5.1
ENV CJOSE_DEB_URL https://github.com/zmartzone/mod_auth_openidc/releases/download/v2.3.0/libcjose0_$CJOSE_VERSION-1.stretch.1_amd64.deb
ENV CJOSE_DEB_SHA1 bffa341882615a24df357d8659d1d553afa46abe

RUN apt-get update \
 && apt-get install -y curl wget

RUN apt-get install -y libcurl3 ca-certificates \
                       libpcre3 \
                       libjansson4 \
                       libhiredis0.13 \
                       apache2-api-20120211

RUN  curl -sLS "$CJOSE_DEB_URL" -o libcjose.deb \
 && echo "$CJOSE_DEB_SHA1 libcjose.deb" | sha1sum -c - \
 && dpkg -i libcjose.deb \
 && rm libcjose.deb


RUN curl -sLS "$OPENIDC_VERSION_DEB_URL" -o mod_auth_openidc-$OPENIDC_VERSION.deb \
 && sha1sum "mod_auth_openidc-$OPENIDC_VERSION.deb"  \
 && echo "$OPENIDC_VERSION_DEB_SHA1 mod_auth_openidc-$OPENIDC_VERSION.deb" | sha1sum -c - \
 && dpkg -i mod_auth_openidc-$OPENIDC_VERSION.deb \
 && rm mod_auth_openidc-$OPENIDC_VERSION.deb \
 && ln -s /usr/lib/apache2/modules/mod_auth_openidc.so /usr/local/apache2/modules/mod_auth_openidc.so


RUN sed -i '/LoadModule rewrite_module modules/aLoadModule auth_openidc_module modules/mod_auth_openidc.so' conf/httpd.conf
