ARG BUILD_FROM
ARG BUILD_VERSION
FROM ${BUILD_FROM}

LABEL maintainer="Bigred <bigred10151990@gmail.com>"
LABEL io.hass.version=${BUILD_VERSION}
LABEL io.hass.type="addon"
LABEL io.hass.arch="aarch64|amd64"

EXPOSE 80

COPY run.sh /run.sh
RUN chmod +x /run.sh

CMD ["/run.sh"]
