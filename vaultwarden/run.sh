#!/usr/bin/with-contenv bashio
set -e

# 1) Push service toggle
if bashio::config.true 'push_enabled'; then
  export PUSH_ENABLED="true"
else
  export PUSH_ENABLED="false"
fi

# 2) Export each non-empty push_* option
for key in push_relay_uri push_identity_uri push_installation_id push_installation_key; do
  val=$(bashio::config "${key}")
  if [ -n "${val}" ]; then
    envvar=$(echo "${key}" | tr '[:lower:]' '[:upper:]')
    export "${envvar}"="${val}"
  fi
done

# 3) Launch Vaultwarden
exec /usr/bin/vaultwarden
