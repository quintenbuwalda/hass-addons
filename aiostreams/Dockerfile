ARG BUILD_FROM
FROM ${BUILD_FROM}

ARG BUILD_VERSION

LABEL \
  io.hass.version=${BUILD_VERSION} \
  io.hass.type="addon" \
  io.hass.arch="aarch64|amd64"

COPY home-assistant-wrapper.js /app/home-assistant-wrapper.js

CMD ["/app/home-assistant-wrapper.js"]
