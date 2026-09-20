## [2.4.0] - 2026-09-20

## 🌟 What's New in v2.4.0

> [!IMPORTANT]
> [BookOrbit](https://bookorbit.app) is BookLore's official successor and the home of active development. BookLore is entering maintenance mode and will continue to receive occasional maintenance, bug fixes, and security updates. Migration is optional, with a [guided migration](https://bookorbit.app/migration/) available whenever you are ready.

## 🚀 New Features

- Add an in-app BookOrbit transition announcement for administrators ([5aa75b1](https://github.com/booklore-app/booklore/commit/5aa75b1d18ea1c5e67448fb983d8d0dd2f4780a4)) by @acx10
- Add drag-and-drop ordering for dashboard scrollers ([533d92b](https://github.com/booklore-app/booklore/commit/533d92b1c4f894c4a7071139516d3ca7536debda)) by @acx10

## ✨ Enhancements

- Include audiobooks in reading statistics ([30641d1](https://github.com/booklore-app/booklore/commit/30641d1bfebd2d4c4c5b8b697826dce6c867edfc)) by @acx10
- Include audiobooks in Reading DNA progress ([8bab2e6](https://github.com/booklore-app/booklore/commit/8bab2e6efaa1d6c37a00d721fd9aa291e17686f2)) by @acx10

## 🐛 Bug Fixes

- Guard the password change route ([cb559bb](https://github.com/booklore-app/booklore/commit/cb559bb426ba12ee7c34e72c8ec9236013de1e37)) by @acx10
- Validate password length before submission ([ce206b7](https://github.com/booklore-app/booklore/commit/ce206b7f7e8ee925ce622ddc2ddc7a9e81f057b7)) by @acx10
- Prevent duplicate book read navigation ([9404e61](https://github.com/booklore-app/booklore/commit/9404e6126a5486fa3b486c2120e9a08ec924af35)) by @acx10
- Fill gaps in file size filters ([a1eebc8](https://github.com/booklore-app/booklore/commit/a1eebc8d361564bf7953c8fd0bafee27e33c28f0)) by @acx10
- Treat unset series books as unread ([ed71b0c](https://github.com/booklore-app/booklore/commit/ed71b0c73d779958292f375595166b52ef9d342a)) by @acx10
- Prevent token refresh deadlocks ([f128c4b](https://github.com/booklore-app/booklore/commit/f128c4bc92a7fdfe3948e89acfc45678a10cd7a2)) by @acx10
- Keep missing sort values last ([8310e50](https://github.com/booklore-app/booklore/commit/8310e5075640c71cfb37ceee460a39d75e665901)) by @acx10
- Normalize Author Universe ratings ([ccd79b0](https://github.com/booklore-app/booklore/commit/ccd79b027454e03b7a72f331ed12c1a4fb7edf6b)) by @acx10
- Correct the Reading DNA rating threshold ([a7dde64](https://github.com/booklore-app/booklore/commit/a7dde641241394d791037f75179e7507af73f294)) by @acx10
- Fix fractional reading progress buckets ([11da763](https://github.com/booklore-app/booklore/commit/11da763ba56341f28dc15a56a9027357194520c1)) by @acx10
- Handle survival charts without drop-offs ([b0746a2](https://github.com/booklore-app/booklore/commit/b0746a252bd12f38ca5c5152f657efefa52c2c47)) by @acx10
- Preserve publication dates across time zones ([6084963](https://github.com/booklore-app/booklore/commit/60849635ea4a76a07bb0e6a35804ba05110d2492)) by @acx10

## 🛠️ Refactoring & Maintenance

- Remove the npm audit step from frontend CI jobs ([f92f8ee](https://github.com/booklore-app/booklore/commit/f92f8ee62fd65cda2e828c8cf01287ec0b1ef786)) by @acx10

## 📦 Dependencies

- Update frontend dependencies to the latest minor and patch versions ([3f55730](https://github.com/booklore-app/booklore/commit/3f557309dce15e2d0f66402688421de46c56d6d0)) by @acx10
- Update backend dependencies to the latest minor and patch versions ([3219bae](https://github.com/booklore-app/booklore/commit/3219bae163ad67af09b02e958cb2912424945b94)) by @acx10
- Upgrade ngx-extended-pdf-viewer to 29.0.1 to address pdf.js CVE-2026-16633 ([63e2aac](https://github.com/booklore-app/booklore/commit/63e2aac493680fe8e0681fd1b0511b4ac3a3fd81)) by @acx10
- Update UI dependencies to the latest minor and patch versions ([8aefb03](https://github.com/booklore-app/booklore/commit/8aefb03d6bf49eb7d4986cd02c8df0b31e10e4e8)) by @acx10
- Update API dependencies to the latest minor and patch versions ([942f326](https://github.com/booklore-app/booklore/commit/942f3265918a338beb67041a420389c66441d37f)) by @acx10
- chore(deps): bump actions/setup-java from 5.2.0 to 5.4.0 (#3438) by @[dependabot[bot]](https://github.com/apps/dependabot)
- chore(deps): bump docker/setup-buildx-action from 3.12.0 to 4.1.0 (#3437) by @[dependabot[bot]](https://github.com/apps/dependabot)

## ⚙️ CI/CD

- chore(deps): bump actions/setup-java from 5.2.0 to 5.4.0 (#3438) by @[dependabot[bot]](https://github.com/apps/dependabot)
- chore(deps): bump docker/setup-buildx-action from 3.12.0 to 4.1.0 (#3437) by @[dependabot[bot]](https://github.com/apps/dependabot)

## 🐳 Docker Images

- **GitHub Container Registry:** `ghcr.io/booklore-app/booklore:v2.4.0`

**Full Changelog**: https://github.com/booklore-app/booklore/compare/v2.3.1...v2.4.0

## [2.3.1] - 2026-06-29

## 🌟 What's New in v2.3.1

### 🚀 New Features
- Add OpenLibrary as a metadata provider (#3431) by @acx10

### 🐛 Bug Fixes
- Fix Goodreads metadata fetching with autocomplete fallback when detail pages are WAF-gated (#3431) by @acx10

### 📦 Dependencies
- Bump backend minor and patch dependencies, Flyway 12.9.0, jaudiotagger 2.0.24, Jackson BOM 3.2.0 (#3431) by @acx10
- Bump frontend minor and patch dependencies, Angular CLI 21.2.17, Transloco 8.4.0, Vitest 4.1.9, uuid 11.1.1, and more (#3431) by @acx10

## 🐳 Docker Images

- **GitHub Container Registry:** `ghcr.io/booklore-app/booklore:v2.3.1`

**Full Changelog**: https://github.com/booklore-app/booklore/compare/v2.3.0...v2.3.1

<!-- https://developers.home-assistant.io/docs/add-ons/presentation#keeping-a-changelog -->
## 2.0.1
- Update BookLore Version from 2.0.0 to 2.0.1
- Updated Config to use USER_ID: "0" and GROUP_ID: "0". This seems to ahve fixed an issue with new users being unable to start the service.
- Updated DATABASE_URL based on a user suggestion to use the internal home assisstant docker network. Thank you @Antexa.
  - Now the defualt is jdbc:mariadb://core-mariadb:3306/booklore?useUnicode=true&characterEncoding=utf8mb4
    - This approach is more secure because the MariaDB port does not need to be exposed to the LAN.

## 2.0.0
- Update BookLore Version from 1.18.5 to 2.0.0

## 1.2.5
- Update BookLore Version from 1.16.5 to 1.18.5
- Remove depreciated codenotary field

## 1.2.4
- Update BookLore Version from 1.15.0 to 1.16.5

## 1.2.3
- Update BookLore Version from 1.13.1 to 1.15.0

## 1.2.2
- Update BookLore Version from 1.12.0 to 1.13.1

## 1.2.1
- Update BookLore Version from 1.11.0 to 1.12.0

## 1.2.0
- Update BookLore Version from 1.10.0 to 1.11.0
- Update DATABASE_PASSWORD config option to use the Password Schema for better security
- Added Share folder access based on user request.

## 1.1.6
- Update BookLore Version from 1.8.1 to 1.10.0

## 1.1.5
- Update BookLore Version from 1.5.1 to 1.8.1

## 1.1.4
- Update BookLore Version from 1.3.2 to 1.5.1

## 1.1.3
- Update BookLore Version from 1.2.1 to 1.3.2

## 1.1.2
- Update BookLore Version from 1.1.2 to 1.2.1

## 1.1.1
- Update BookLore Version from 1.1.0 to 1.1.2

## 1.1.0
- Update BookLore Version from 0.38.2 to 1.1.0

## 1.0.0

- Initial release
