## [2.15.0] - 2026-09-20

### Features

- show admin UI warning for SQLite on networked filesystem ([#1713](https://github.com/pocket-id/pocket-id/pull/1713) by @ItalyPaleAle)
- list allowed groups when hovering over allowed group count ([#1671](https://github.com/pocket-id/pocket-id/pull/1671) by @kmendell)
- add explicit public keys for federated client credentials ([#1702](https://github.com/pocket-id/pocket-id/pull/1702) by @ItalyPaleAle)
- use HS256 for Pocket ID's own session tokens + fixes ([#1733](https://github.com/pocket-id/pocket-id/pull/1733) by @ItalyPaleAle)
- replace individual save buttons with single "unsaved changes bar" ([#1757](https://github.com/pocket-id/pocket-id/pull/1757) by @stonith404)
- include passkey icons based on AAGUID ([#1756](https://github.com/pocket-id/pocket-id/pull/1756) by @michaelbeaumont)

### Bug Fixes

- Update de.json Translation ([#1705](https://github.com/pocket-id/pocket-id/pull/1705) by @tw-)
- show long login code button regardless where the user is coming from ([059d45d](https://github.com/pocket-id/pocket-id/commit/059d45d50ed9e6b1229295ab9ccb9d566d3910fe) by @stonith404)
- make sorting of strings case insensitive ([3657012](https://github.com/pocket-id/pocket-id/commit/3657012f93e442327bdf11a36bd31acc26410803) by @stonith404)
- trim values loaded from _FILE env vars in AppConfig ([#1741](https://github.com/pocket-id/pocket-id/pull/1741) by @ItalyPaleAle)
- serve bundled logo if no custom logo is set ([#1748](https://github.com/pocket-id/pocket-id/pull/1748) by @ItalyPaleAle)
- add missing `await` to catch redirect invalid URL errors ([fd99a6b](https://github.com/pocket-id/pocket-id/commit/fd99a6b74207d1291bfd975c33d632d2f5ed9fd0) by @stonith404)
- limit JPG and PNG pixels to prevent decompression bomb ([5cbacd8](https://github.com/pocket-id/pocket-id/commit/5cbacd81e67f8bb7340f01d0416524f4d48adb78) by @stonith404)
- show more user friendly error page for authorize interaction failures ([81cb290](https://github.com/pocket-id/pocket-id/commit/81cb290bed57b7fc84b9102262ff3192ce9fae3e) by @stonith404)
- don't auto submit OAuth device codes ([43c0b79](https://github.com/pocket-id/pocket-id/commit/43c0b797fd7f3914b759a173a4518bed399e8de7) by @stonith404)
- prevent PAR requirement bypass via conflicting request parameters ([2084dff](https://github.com/pocket-id/pocket-id/commit/2084dffd8d4a569d86f058376a1caa72a8755571) by @stonith404)
- German translations for client secrets ([#1759](https://github.com/pocket-id/pocket-id/pull/1759) by @darioackermann)
- preserve AAGUID icon hashes on Windows ([b816360](https://github.com/pocket-id/pocket-id/commit/b8163605acbdcf08772dc77582fcb48be1158906) by @stonith404)
- default profile picture empty if username contains only one char ([4edfaf6](https://github.com/pocket-id/pocket-id/commit/4edfaf622a8f7c05b19f3fb4cc07cbe6984c7df9) by @stonith404)

### Documentation

- update AI Usage Policy ([d9e9df9](https://github.com/pocket-id/pocket-id/commit/d9e9df9960714f588ec65201afdde1cef26b0b9a) by @stonith404)
- update PR template ([cad8b68](https://github.com/pocket-id/pocket-id/commit/cad8b68abc3eecd56a22a84aa897fe54c8deae66) by @stonith404)



### Other

- Bump the "all-dependencies" group with 2 updates across multiple ecosystems ([#1711](https://github.com/pocket-id/pocket-id/pull/1711) by @dependabot[bot])
- add Hungarian language files ([dd2fc67](https://github.com/pocket-id/pocket-id/commit/dd2fc67c87c098632e7b915b6079b202df5d6f55) by @stonith404)
- Bump the "all-dependencies" group with 3 updates across multiple ecosystems ([#1725](https://github.com/pocket-id/pocket-id/pull/1725) by @dependabot[bot])
- update Go to `v1.27.0` ([f235104](https://github.com/pocket-id/pocket-id/commit/f235104aed02ea5aa2ff3e05c03fc151b34e0191) by @stonith404)
- update golangci-lint version ([6ff9a5b](https://github.com/pocket-id/pocket-id/commit/6ff9a5ba7eb995a8db166ebfb119799325085a8e) by @stonith404)
- update Francis to rc.2 ([#1728](https://github.com/pocket-id/pocket-id/pull/1728) by @ItalyPaleAle)
- upgrade jwx to v4 ([#1730](https://github.com/pocket-id/pocket-id/pull/1730) by @ItalyPaleAle)
- Bump google.golang.org/grpc from 1.83.0 to 1.83.1 in /backend ([#1736](https://github.com/pocket-id/pocket-id/pull/1736) by @dependabot[bot])
- update Francis to rc.5 ([#1738](https://github.com/pocket-id/pocket-id/pull/1738) by @ItalyPaleAle)
- Bump the "all-dependencies" group with 3 updates across multiple ecosystems ([#1739](https://github.com/pocket-id/pocket-id/pull/1739) by @dependabot[bot])
- update Francis to rc.6 ([#1745](https://github.com/pocket-id/pocket-id/pull/1745) by @ItalyPaleAle)
- Bump adm-zip from 0.6.0 to 0.6.1 ([#1747](https://github.com/pocket-id/pocket-id/pull/1747) by @dependabot[bot])
- update AAGUIDs ([#1751](https://github.com/pocket-id/pocket-id/pull/1751) by @github-actions[bot])
- Bump the "all-dependencies" group with 2 updates across multiple ecosystems ([#1742](https://github.com/pocket-id/pocket-id/pull/1742) by @dependabot[bot])
- update vulnerable packages ([1ee34fd](https://github.com/pocket-id/pocket-id/commit/1ee34fddea9bfe1f08709387ec3186a792707c29) by @stonith404)
- upgrade alpine packages on image build ([d2c2cda](https://github.com/pocket-id/pocket-id/commit/d2c2cdaa5d7f87541dcee69d7f6c57ad22a8bf09) by @stonith404)
- Bump the "all-dependencies" group with 2 updates across multiple ecosystems ([#1760](https://github.com/pocket-id/pocket-id/pull/1760) by @dependabot[bot])
- fix type checks ([c22003f](https://github.com/pocket-id/pocket-id/commit/c22003f6deff96482192d055a5e1c96e5991fcad) by @stonith404)
- Bump go.opentelemetry.io/otel/exporters/zipkin from 1.44.0 to 1.45.0 in /backend ([#1765](https://github.com/pocket-id/pocket-id/pull/1765) by @dependabot[bot])
- update backend dependencies ([6060c6e](https://github.com/pocket-id/pocket-id/commit/6060c6e12e62bfe2474f78caace77a205f73d498) by @stonith404)

**Full Changelog**: https://github.com/pocket-id/pocket-id/compare/v2.14.0...v2.15.0

## [2.14.0] - 2026-08-30

> [!TIP]
> Check out our first [YouTube video](https://youtu.be/JjoXz2u5r3Y) about how to protect your MCP servers with Pocket ID.

### Features

- add animated logo as default logo ([0c9a03e](https://github.com/pocket-id/pocket-id/commit/0c9a03e5193b52ff752134f7df39a24fae19dae2) by @stonith404)
- hide apps without launch url on My Apps page ([3ca9a55](https://github.com/pocket-id/pocket-id/commit/3ca9a55c7135d785bc6089fa33dc6d8287fd3f59) by @stonith404)
- support multiple client secrets per OIDC client ([#1679](https://github.com/pocket-id/pocket-id/pull/1679) by @ItalyPaleAle)
- serve RFC 8414 authorization server metadata ([#1685](https://github.com/pocket-id/pocket-id/pull/1685) by @jfroy)
- allow admins to auto grant APIs to CIMD clients ([#1692](https://github.com/pocket-id/pocket-id/pull/1692) by @stonith404)
- improve tooltip design ([6a441b1](https://github.com/pocket-id/pocket-id/commit/6a441b1f9b139b41f33e70e06f4eb2ae7303cb28) by @stonith404)
- reduce one time access code length for better UX ([a487c78](https://github.com/pocket-id/pocket-id/commit/a487c7855056b126b7b109f30ba7452c4539b04e) by @stonith404)

### Bug Fixes

- improve validation of app config variables ([9e637d5](https://github.com/pocket-id/pocket-id/commit/9e637d5aec178adb757cfdc961236f92731c16f3) by @stonith404)
- wrong loading indicator shown on device page ([2f43ce4](https://github.com/pocket-id/pocket-id/commit/2f43ce41fe2d19365585453aa1d6d1528c73bee6) by @stonith404)
- ignore unsupported grant types in client ID metadata documents ([#1682](https://github.com/pocket-id/pocket-id/pull/1682) by @ItalyPaleAle)
- don't show "show hidden apps" if none available ([03498e2](https://github.com/pocket-id/pocket-id/commit/03498e2f511eb91e1fea442be781b252828520c7) by @stonith404)
- ignore trailing slash in resources ([9421d43](https://github.com/pocket-id/pocket-id/commit/9421d43f8ecab0f3d245d79196cb2f33818c8054) by @stonith404)
- update de.json Translation ([#1699](https://github.com/pocket-id/pocket-id/pull/1699) by @tw-)
- remove unnecessary information from oidc client details ([900346a](https://github.com/pocket-id/pocket-id/commit/900346a1c38b1d7b6d9897b7aa3cb9182f7dafed) by @stonith404)

### Documentation

- change logo image in README.md ([76f6b24](https://github.com/pocket-id/pocket-id/commit/76f6b249f26fb8d8b3215f519c6d39a311415606) by @stonith404)
- add error responses to openapi spec ([#1684](https://github.com/pocket-id/pocket-id/pull/1684) by @aclerici38)

### Other

- Bump the "all-dependencies" group with 3 updates across multiple ecosystems ([#1668](https://github.com/pocket-id/pocket-id/pull/1668) by @dependabot[bot])
- update francis to beta 21 ([#1669](https://github.com/pocket-id/pocket-id/pull/1669) by @ItalyPaleAle)
- migrate LDAP sync to an actor ([#1651](https://github.com/pocket-id/pocket-id/pull/1651) by @ItalyPaleAle)
- bump pnpm to v11.20.0 ([#1670](https://github.com/pocket-id/pocket-id/pull/1670) by @kmendell)
- remove unnecessary curl dependency from Dockerfile ([987d1a8](https://github.com/pocket-id/pocket-id/commit/987d1a8b599eadaad32a4c68c9bcf25f12eeab2f) by @stonith404)
- update Francis to beta 22 ([#1676](https://github.com/pocket-id/pocket-id/pull/1676) by @ItalyPaleAle)
- update AAGUIDs ([#1678](https://github.com/pocket-id/pocket-id/pull/1678) by @github-actions[bot])
- move `iss` param handling to Fosite ([1bb21c5](https://github.com/pocket-id/pocket-id/commit/1bb21c5d73d6942a9c6959f8be4e7fbe93e2eb29) by @stonith404)
- fix flaky update application image e2e test ([#1690](https://github.com/pocket-id/pocket-id/pull/1690) by @ItalyPaleAle)
- move API key cleanup job to actor ([#1687](https://github.com/pocket-id/pocket-id/pull/1687) by @ItalyPaleAle)
- Bump the "all-dependencies" group with 4 updates across multiple ecosystems ([#1693](https://github.com/pocket-id/pocket-id/pull/1693) by @dependabot[bot])
- use fix version for `github.com/italypaleale/go-kit` ([07580d9](https://github.com/pocket-id/pocket-id/commit/07580d9f9fc2ac457da7a7ba3d325068afffc6f2) by @stonith404)
- update AAGUIDs ([#1696](https://github.com/pocket-id/pocket-id/pull/1696) by @github-actions[bot])
- move remaining database cleanup jobs to actors ([#1698](https://github.com/pocket-id/pocket-id/pull/1698) by @ItalyPaleAle)
- migrate SCIM sync to actor + add tests ([#1680](https://github.com/pocket-id/pocket-id/pull/1680) by @ItalyPaleAle)

**Full Changelog**: https://github.com/pocket-id/pocket-id/compare/v2.13.0...v2.14.0

## [2.14.0] - 2026-08-30

> [!TIP]
> Check out our first [YouTube video](https://youtu.be/JjoXz2u5r3Y) about how to protect your MCP servers with Pocket ID.

### Features

- add animated logo as default logo ([0c9a03e](https://github.com/pocket-id/pocket-id/commit/0c9a03e5193b52ff752134f7df39a24fae19dae2) by @stonith404)
- hide apps without launch url on My Apps page ([3ca9a55](https://github.com/pocket-id/pocket-id/commit/3ca9a55c7135d785bc6089fa33dc6d8287fd3f59) by @stonith404)
- support multiple client secrets per OIDC client ([#1679](https://github.com/pocket-id/pocket-id/pull/1679) by @ItalyPaleAle)
- serve RFC 8414 authorization server metadata ([#1685](https://github.com/pocket-id/pocket-id/pull/1685) by @jfroy)
- allow admins to auto grant APIs to CIMD clients ([#1692](https://github.com/pocket-id/pocket-id/pull/1692) by @stonith404)
- improve tooltip design ([6a441b1](https://github.com/pocket-id/pocket-id/commit/6a441b1f9b139b41f33e70e06f4eb2ae7303cb28) by @stonith404)
- reduce one time access code length for better UX ([a487c78](https://github.com/pocket-id/pocket-id/commit/a487c7855056b126b7b109f30ba7452c4539b04e) by @stonith404)

### Bug Fixes

- improve validation of app config variables ([9e637d5](https://github.com/pocket-id/pocket-id/commit/9e637d5aec178adb757cfdc961236f92731c16f3) by @stonith404)
- wrong loading indicator shown on device page ([2f43ce4](https://github.com/pocket-id/pocket-id/commit/2f43ce41fe2d19365585453aa1d6d1528c73bee6) by @stonith404)
- ignore unsupported grant types in client ID metadata documents ([#1682](https://github.com/pocket-id/pocket-id/pull/1682) by @ItalyPaleAle)
- don't show "show hidden apps" if none available ([03498e2](https://github.com/pocket-id/pocket-id/commit/03498e2f511eb91e1fea442be781b252828520c7) by @stonith404)
- ignore trailing slash in resources ([9421d43](https://github.com/pocket-id/pocket-id/commit/9421d43f8ecab0f3d245d79196cb2f33818c8054) by @stonith404)
- update de.json Translation ([#1699](https://github.com/pocket-id/pocket-id/pull/1699) by @tw-)
- remove unnecessary information from oidc client details ([900346a](https://github.com/pocket-id/pocket-id/commit/900346a1c38b1d7b6d9897b7aa3cb9182f7dafed) by @stonith404)

### Documentation

- change logo image in README.md ([76f6b24](https://github.com/pocket-id/pocket-id/commit/76f6b249f26fb8d8b3215f519c6d39a311415606) by @stonith404)
- add error responses to openapi spec ([#1684](https://github.com/pocket-id/pocket-id/pull/1684) by @aclerici38)

### Other

- Bump the "all-dependencies" group with 3 updates across multiple ecosystems ([#1668](https://github.com/pocket-id/pocket-id/pull/1668) by @dependabot[bot])
- update francis to beta 21 ([#1669](https://github.com/pocket-id/pocket-id/pull/1669) by @ItalyPaleAle)
- migrate LDAP sync to an actor ([#1651](https://github.com/pocket-id/pocket-id/pull/1651) by @ItalyPaleAle)
- bump pnpm to v11.20.0 ([#1670](https://github.com/pocket-id/pocket-id/pull/1670) by @kmendell)
- remove unnecessary curl dependency from Dockerfile ([987d1a8](https://github.com/pocket-id/pocket-id/commit/987d1a8b599eadaad32a4c68c9bcf25f12eeab2f) by @stonith404)
- update Francis to beta 22 ([#1676](https://github.com/pocket-id/pocket-id/pull/1676) by @ItalyPaleAle)
- update AAGUIDs ([#1678](https://github.com/pocket-id/pocket-id/pull/1678) by @github-actions[bot])
- move `iss` param handling to Fosite ([1bb21c5](https://github.com/pocket-id/pocket-id/commit/1bb21c5d73d6942a9c6959f8be4e7fbe93e2eb29) by @stonith404)
- fix flaky update application image e2e test ([#1690](https://github.com/pocket-id/pocket-id/pull/1690) by @ItalyPaleAle)
- move API key cleanup job to actor ([#1687](https://github.com/pocket-id/pocket-id/pull/1687) by @ItalyPaleAle)
- Bump the "all-dependencies" group with 4 updates across multiple ecosystems ([#1693](https://github.com/pocket-id/pocket-id/pull/1693) by @dependabot[bot])
- use fix version for `github.com/italypaleale/go-kit` ([07580d9](https://github.com/pocket-id/pocket-id/commit/07580d9f9fc2ac457da7a7ba3d325068afffc6f2) by @stonith404)
- update AAGUIDs ([#1696](https://github.com/pocket-id/pocket-id/pull/1696) by @github-actions[bot])
- move remaining database cleanup jobs to actors ([#1698](https://github.com/pocket-id/pocket-id/pull/1698) by @ItalyPaleAle)
- migrate SCIM sync to actor + add tests ([#1680](https://github.com/pocket-id/pocket-id/pull/1680) by @ItalyPaleAle)

**Full Changelog**: https://github.com/pocket-id/pocket-id/compare/v2.13.0...v2.14.0

## [2.9.0] - 2026-06-29


### Bug Fixes

- issues with loading new font ([#1496](https://github.com/pocket-id/pocket-id/pull/1496) by @MelvinSnijders)
- PAR parameters not respected by authorize page ([3d9d4de](https://github.com/pocket-id/pocket-id/commit/3d9d4de61940747c64f4a5a4ba24010be2a2fbb6) by @stonith404)
- add responsive css for api/user/group/client page add buttons ([#1508](https://github.com/pocket-id/pocket-id/pull/1508) by @James18232)
- load Gloock font from static path instead of inline ([89b4abb](https://github.com/pocket-id/pocket-id/commit/89b4abb8b5cc71b62f458f966f2778259b167838) by @stonith404)
- update terminology from public key code exchange to proof key co… ([#1515](https://github.com/pocket-id/pocket-id/pull/1515) by @maxwassiljew)
- callback URL validation not validated if prompt=none ([8a75774](https://github.com/pocket-id/pocket-id/commit/8a7577497131229badb35cb4b3a4227b1300afff) by @stonith404)
- passkey card not rounded ([84678c3](https://github.com/pocket-id/pocket-id/commit/84678c3a7bfa1f601261943f03aa935626fe54a2) by @stonith404)

### Documentation

- add AI Usage Policy to CONTRIBUTING.md ([fea933b](https://github.com/pocket-id/pocket-id/commit/fea933b62d6a2899bf1e46fc75dab8b6bca81a0f) by @stonith404)
- add PR template ([bf9f76b](https://github.com/pocket-id/pocket-id/commit/bf9f76bbd5b8d49dabda74f1c3de5120ea5db698) by @stonith404)
- add "needs more upvotes" label as default ([fc42f62](https://github.com/pocket-id/pocket-id/commit/fc42f6211d410ea8db75018292df8f311078a7fe) by @stonith404)
- fix link to watchtower repo ([#1500](https://github.com/pocket-id/pocket-id/pull/1500) by @wollew)

### Features

- add support for Pushed Authorization Requests (RFC9126) ([#1404](https://github.com/pocket-id/pocket-id/pull/1404) by @Zenithar)

### Other

- fix linter issues ([4f97cd4](https://github.com/pocket-id/pocket-id/commit/4f97cd4188b6028e955c8dc62e122ec409b32db3) by @stonith404)
- update AAGUIDs ([#1511](https://github.com/pocket-id/pocket-id/pull/1511) by @github-actions[bot])
- run svelte check and unit tests in breaking branches ([83b45f6](https://github.com/pocket-id/pocket-id/commit/83b45f682dc89b2019b1812157157f431dfd3ad7) by @stonith404)
- run formatter ([2726ddd](https://github.com/pocket-id/pocket-id/commit/2726ddd0c23ab6ae22f307bf8d377fdfd73e1c14) by @stonith404)
- bump vite from 8.0.13 to 8.0.16 ([#1521](https://github.com/pocket-id/pocket-id/pull/1521) by @dependabot[bot])
- npm dependabot not run from root ([c0d96a0](https://github.com/pocket-id/pocket-id/commit/c0d96a0b1349d7dd0dec65c78dcdc2e043713ff8) by @stonith404)
- fix wrong assertion ([effd2a1](https://github.com/pocket-id/pocket-id/commit/effd2a146f9b85d8bf1df203b4970aafc7ae24f8) by @stonith404)
- Bump the "all-dependencies" group with 4 updates across multiple ecosystems ([#1523](https://github.com/pocket-id/pocket-id/pull/1523) by @dependabot[bot])

**Full Changelog**: https://github.com/pocket-id/pocket-id/compare/v2.8.0...v2.9.0

