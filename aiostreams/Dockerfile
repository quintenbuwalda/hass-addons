FROM ghcr.io/viren070/aiostreams:v2.30.3

ARG BUILD_VERSION=2.30.4

LABEL \
  io.hass.version=${BUILD_VERSION} \
  io.hass.type="addon" \
  io.hass.arch="aarch64|amd64"

COPY home-assistant-wrapper.js /app/home-assistant-wrapper.js

CMD ["/app/home-assistant-wrapper.js"]
