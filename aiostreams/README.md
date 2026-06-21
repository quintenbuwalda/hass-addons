# AIOStreams Home Assistant add-on

AIOStreams combines Stremio add-ons and debrid services into a single configurable add-on.

## Configuration

Set `BASE_URL` to the URL that Stremio and other clients use to reach this add-on, for example `https://aiostreams.example.com` or `http://homeassistant.local:3000`.

The add-on creates and persists its encryption key in its data directory. Do not delete this file after configuring AIOStreams, as existing encrypted settings would no longer be readable.

`DATABASE_URI` defaults to the persistent SQLite database at `sqlite://./data/db.sqlite`. Set it to a PostgreSQL URI only when using an external database.

`AIOSTREAMS_AUTH` accepts comma-separated `username:password` pairs. The optional admin and proxy options accept comma-separated usernames.

After the first start, configure add-ons, services, and runtime settings through the AIOStreams dashboard.

## Updates

This add-on tracks only AIOStreams stable releases. Nightly builds are intentionally excluded.
