#!/usr/bin/with-contenv bashio
set -e

export DATA_FOLDER="/config"

if bashio::config.true 'push_enabled'; then
  export PUSH_ENABLED="true"
else
  export PUSH_ENABLED="false"
fi

for key in push_relay_uri push_identity_uri push_installation_id push_installation_key; do
  val=$(bashio::config "${key}")
  if [ -n "${val}" ]; then
    envvar=$(echo "${key}" | tr '[:lower:]' '[:upper:]')
    export "${envvar}"="${val}"
  fi
done

exec /usr/bin/vaultwarden
