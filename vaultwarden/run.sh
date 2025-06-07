#!/usr/bin/with-contenv bashio
set -e

# Export push settings from GUI to environment
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
  unset val
  unset envvar
done

exec /usr/bin/vaultwarden
