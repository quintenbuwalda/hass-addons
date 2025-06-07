# Vaultwarden+

Alternative implementation of the Bitwarden server API.

This Home Assistant add-on provides Vaultwarden (formerly known as Bitwarden_RS), a lightweight Bitwarden-compatible server implementation written in Rust, perfect for self-hosted environments.

## Features

- Compatible with official Bitwarden clients (desktop, mobile, web)
- Lightweight and resource-efficient
- Push service support (configurable)
- Ingress-ready for seamless Home Assistant integration

## Push options

You can configure the following push options via the add-on GUI:

- `push_enabled`
- `push_relay_uri`
- `push_identity_uri`
- `push_installation_id`
- `push_installation_key`

## Upstream

Based on [Vaultwarden](https://github.com/dani-garcia/vaultwarden).
