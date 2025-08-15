# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.3.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@5.2.2...@sitevision/sitevision-scripts@5.3.0) (2025-05-27)

### Features

- **sitevision-scripts:** Add option to activate executables deployed to prod ([5531729](https://github.com/sitevision/sitevision-apps/commit/55317291f185fb20bce5a89f8de08d1677481cf6)), closes [#166](https://github.com/sitevision/sitevision-apps/issues/166)
- **sitevison-scripts:** add option to create-addon based on env-properties ([a5feffc](https://github.com/sitevision/sitevision-apps/commit/a5feffc7662173cadd5918a97cacb3302edfe984)), closes [#164](https://github.com/sitevision/sitevision-apps/issues/164)

## [5.2.2](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@5.2.1...@sitevision/sitevision-scripts@5.2.2) (2025-05-23)

### Bug Fixes

- **sitevision-scripts:** add missing parameters for restapp build ([226c71c](https://github.com/sitevision/sitevision-apps/commit/226c71c224785d332263d64f29c762179567d621))

## [5.2.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@5.2.0...@sitevision/sitevision-scripts@5.2.1) (2025-05-20)

### Bug Fixes

- **sitevision-scripts:** dev_properties not needed when deploying to a prod environment ([#160](https://github.com/sitevision/sitevision-apps/issues/160)) ([9e7f781](https://github.com/sitevision/sitevision-apps/commit/9e7f781d75d8d3a99207413ab6d26e8a28999f01))

# [5.2.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@5.1.0...@sitevision/sitevision-scripts@5.2.0) (2025-05-19)

### Bug Fixes

- **sitevision-scripts:** add option to prefix and suffix existing app id ([1284648](https://github.com/sitevision/sitevision-apps/commit/1284648e1ec7a00a19cbb7bdbaad736913b98620))
- **sitevision-scripts:** Don't add a main.[js|tsx] when running ssr only ([c202480](https://github.com/sitevision/sitevision-apps/commit/c2024801244b45ca50eec121ed831d4447dc951e))
- **sitevision-scripts:** remove debug-logging ([d813900](https://github.com/sitevision/sitevision-apps/commit/d813900ce141b39e35dc46c2ec95866a0d5ee551))

### Features

- **sitevision-scripts:** deploy to prod using env vars enable deployment from CI ([3ec70b7](https://github.com/sitevision/sitevision-apps/commit/3ec70b70ffb4aa296eb66cc119e5b8de50183ced))
- **sitevision-scripts:** option to temporarily modify App id via env var ([a1c0a69](https://github.com/sitevision/sitevision-apps/commit/a1c0a693382b7144ce154afb41625d54cde486c3))

# [5.0.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@4.0.1...@sitevision/sitevision-scripts@5.0.0) (2025-04-02)

### Bug Fixes

- **sitevision-scripts:** avoid star import in favour of specific ([1cbdef6](https://github.com/sitevision/sitevision-apps/commit/1cbdef6315f4cb2a0644ca37b3a8d2ca25347745))
- **sitevision-scripts:** disable version select ([2a76315](https://github.com/sitevision/sitevision-apps/commit/2a76315451e6a3e925e52d02d7de4eb15daa82d5))
- **sitevision-scripts:** fix failing import path, missing extension ([f041736](https://github.com/sitevision/sitevision-apps/commit/f04173680cd8eb40c900d90a98409a1677601f32))
- **sitevision-scripts:** re-added paramter typings ([d201d1a](https://github.com/sitevision/sitevision-apps/commit/d201d1adcd6882146e52f0bc187d89142dc461d4))
- **sitevision-scripts:** updated incorrect import ([d239fe9](https://github.com/sitevision/sitevision-apps/commit/d239fe9362da56c284829fd7ed9488a17f46018e))

- feat(sitevision-scripts)!: default to react 18 ([65410bc](https://github.com/sitevision/sitevision-apps/commit/65410bc7b405a55818c84270b1b5fa47d5f5c3f4))

### Features

- **sitevision-scripts:** Add types based on react major version ([5f9a0b3](https://github.com/sitevision/sitevision-apps/commit/5f9a0b3079aaad89d02b8b4a038a9f9c418a3255))
- **sitevision-scripts:** Make react version configurable, add support for react 19 ([1252fef](https://github.com/sitevision/sitevision-apps/commit/1252feff16df45b85a98ce5cc49cd4f572335395))

### BREAKING CHANGES

- react apps using v18 requires version 2024.09.1 of Sitevision to work, since they're dependent on
  more shared resources made available in that version.

## [4.0.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@4.0.0...@sitevision/sitevision-scripts@4.0.1) (2024-10-30)

### Bug Fixes

- **sitevision-scripts:** ensured consistent emit handling for all CSS extraction scenarios ([2cef5ae](https://github.com/sitevision/sitevision-apps/commit/2cef5ae8b87ed70fe78c03aba2c726b516765898))

# [4.0.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.5.0...@sitevision/sitevision-scripts@4.0.0) (2024-09-02)

### Bug Fixes

- **sitevision-scripts:** reset version number ([363282e](https://github.com/sitevision/sitevision-apps/commit/363282e22a210ae00e4dd630274f769b10d26deb))

- chore(sitevision-scripts)!: update dependencies ([c91f473](https://github.com/sitevision/sitevision-apps/commit/c91f473891beedb521bb8332fe61e84f8efccc5b))

### BREAKING CHANGES

- if using TypeScript the file `setupTests.js` has to be renamed to `setupTests.ts`

# [3.5.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.4.3...@sitevision/sitevision-scripts@3.5.0) (2024-04-03)

### Features

- **sitevision-scripts:** Added option to transpile certain packages … ([#132](https://github.com/sitevision/sitevision-apps/issues/132)) ([345f9a0](https://github.com/sitevision/sitevision-apps/commit/345f9a03c53eef404a22d0a756d398e90e417cb4))

## [3.4.3](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.4.2...@sitevision/sitevision-scripts@3.4.3) (2024-04-02)

### Bug Fixes

- **sitevision-scripts:** folder with common resources to remove duplication ([#131](https://github.com/sitevision/sitevision-apps/issues/131)) ([c2b4f57](https://github.com/sitevision/sitevision-apps/commit/c2b4f57ea80d0a7bf58e1238b8752cbf01725f5b))

## [3.4.2](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.4.1...@sitevision/sitevision-scripts@3.4.2) (2024-04-02)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [3.3.3](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.3.2...@sitevision/sitevision-scripts@3.3.3) (2023-08-16)

### Bug Fixes

- **sitevision-scripts:** emit css from serverside when client side isn't present ([4271e7e](https://github.com/sitevision/sitevision-apps/commit/4271e7edd2cca0c3a13d8fb6aacf20440147c0f4))

## [3.3.2](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.3.1...@sitevision/sitevision-scripts@3.3.2) (2023-06-28)

### Bug Fixes

- **sitevision-scripts:** add missing main.js ([305be5a](https://github.com/sitevision/sitevision-apps/commit/305be5acf7f6c44122f795010bc3e13b9de422bd))

## [3.3.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.3.0...@sitevision/sitevision-scripts@3.3.1) (2023-05-31)

### Bug Fixes

- **sitevision-scripts:** Handle names with '.' ([079df1b](https://github.com/sitevision/sitevision-apps/commit/079df1b89da2c641bd5202518849f6f502fa6961)), closes [#99](https://github.com/sitevision/sitevision-apps/issues/99)
- **sitevision-scripts:** use correct fileextension ([809e2c3](https://github.com/sitevision/sitevision-apps/commit/809e2c359a47a8392e3c3c47d7e255b6af3052b0))

# [3.3.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.2.1...@sitevision/sitevision-scripts@3.3.0) (2023-05-15)

### Bug Fixes

- **sitevision-scripts:** make sure build dir is available ([6efe7c2](https://github.com/sitevision/sitevision-apps/commit/6efe7c2aece7cc33ca3ef89c8146a80b8ae7d5cb))
- **sitevision-scripts:** skip i-prefix for interfaces ([0f47169](https://github.com/sitevision/sitevision-apps/commit/0f47169b7072e8160055c0e6fccd898491b15774))

### Features

- **sitevision-scripts:** add option for ssr only apps ([008ce7d](https://github.com/sitevision/sitevision-apps/commit/008ce7da639e10f896e6f25e6d58c91f0db8b7c3))

## [3.2.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.2.0...@sitevision/sitevision-scripts@3.2.1) (2023-05-08)

### Bug Fixes

- **sitevision-scripts:** Update instructions to reflect reality ([d8548a8](https://github.com/sitevision/sitevision-apps/commit/d8548a84a77f0b1e8292133bc0eed9753d7dd6e8))

# [3.2.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.1.6...@sitevision/sitevision-scripts@3.2.0) (2023-05-05)

### Features

- **sitevision-scripts:** Add json loader support for server entries ([#95](https://github.com/sitevision/sitevision-apps/issues/95)) ([f9e9da8](https://github.com/sitevision/sitevision-apps/commit/f9e9da8d4a8b508fde7720402b0446f8c14b3ae4))

## [3.1.6](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.1.5...@sitevision/sitevision-scripts@3.1.6) (2023-02-14)

### Bug Fixes

- **sitevision-scripts:** Set target version for server bundles ([9e27638](https://github.com/sitevision/sitevision-apps/commit/9e27638dc6447eafeb257d565291d470d9eb1b76)), closes [#81](https://github.com/sitevision/sitevision-apps/issues/81) [#83](https://github.com/sitevision/sitevision-apps/issues/83)

## [3.1.4](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.1.3...@sitevision/sitevision-scripts@3.1.4) (2023-01-26)

### Bug Fixes

- **sitevision-scripts:** Provide filename for correct preset resolve ([9271893](https://github.com/sitevision/sitevision-apps/commit/92718930cfc718fbd47dd7639206bf9ff59ec889))

## [3.1.3](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.1.2...@sitevision/sitevision-scripts@3.1.3) (2023-01-26)

### Bug Fixes

- **sitevision-scripts:** Add missing dependency ([8f652f1](https://github.com/sitevision/sitevision-apps/commit/8f652f1c5ad4e19cbbac51f5767d7016cc6783ec))

## [3.1.2](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.1.1...@sitevision/sitevision-scripts@3.1.2) (2023-01-26)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [3.1.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.1.0...@sitevision/sitevision-scripts@3.1.1) (2022-12-12)

### Bug Fixes

- **scripts:** add typescript eslint config ([7010fe6](https://github.com/sitevision/sitevision-apps/commit/7010fe6d29a99e8251af3a8e7222f21a4e16b081))

# [3.1.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.0.1...@sitevision/sitevision-scripts@3.1.0) (2022-11-29)

### Bug Fixes

- **sitevision-scripts:** Add missing dependencies ([42ff1f7](https://github.com/sitevision/sitevision-apps/commit/42ff1f78e9e3ccc6bec8bfbab3ed07e2e62d6146))
- **sitevision-scripts:** fixed typo ([09fca9f](https://github.com/sitevision/sitevision-apps/commit/09fca9ffc6061882dd60fc9f523a23f50c947765))

### Features

- **sitevision-scripts:** Typescript support ([5641292](https://github.com/sitevision/sitevision-apps/commit/5641292cff62cb393088d390d95bab277f105907))

## [3.0.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@3.0.0...@sitevision/sitevision-scripts@3.0.1) (2022-11-28)

### Bug Fixes

- **sitevision-scripts:** Use platform independent relative paths ([b316f6f](https://github.com/sitevision/sitevision-apps/commit/b316f6f2d20b5a3443c17765f703237fd4acfa68))

# [2.5.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.4.0...@sitevision/sitevision-scripts@2.5.0) (2022-08-19)

### Features

- **sitevision-scripts:** Handle imported font files ([8dcce87](https://github.com/sitevision/sitevision-apps/commit/8dcce87200a1a76be1eedba2917df41b1475fb23))
- **sitevision-scripts:** Move away from file/url-loader to asset-modules ([73d4159](https://github.com/sitevision/sitevision-apps/commit/73d415933394b1173eaf974f533499715ab03e87))

# [2.4.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.3.0...@sitevision/sitevision-scripts@2.4.0) (2022-06-30)

### Bug Fixes

- revert version number ([6751fc4](https://github.com/sitevision/sitevision-apps/commit/6751fc4bac1e4a598e6e1dc3dd95a30fe483d54a))

### Features

- **sitevision-scripts:** Handle client side chunks and aloow override of babel config ([ee75b01](https://github.com/sitevision/sitevision-apps/commit/ee75b01583b2cbb65ebf8c1f5de6a175eab5e0e7))

## [2.2.3](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.2.2...@sitevision/sitevision-scripts@2.2.3) (2022-06-08)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [2.2.2](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.2.1...@sitevision/sitevision-scripts@2.2.2) (2022-05-05)

### Bug Fixes

- **create-sitevision-app:** downgrade chalk ([bd8afb7](https://github.com/sitevision/sitevision-apps/commit/bd8afb7ec96128eacec161afac852c78e4133153)), closes [#54](https://github.com/sitevision/sitevision-apps/issues/54)

## [2.2.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.2.0...@sitevision/sitevision-scripts@2.2.1) (2022-05-04)

**Note:** Version bump only for package @sitevision/sitevision-scripts

# [2.2.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.9...@sitevision/sitevision-scripts@2.2.0) (2022-04-04)

### Features

- (sitevision/scripts) support for international names and descriptions for WebApps ([781fa5e](https://github.com/sitevision/sitevision-apps/commit/781fa5ed14f2f13915e2cc439372b25f0ccb807b))

## [2.1.9](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.8...@sitevision/sitevision-scripts@2.1.9) (2022-04-04)

### Bug Fixes

- dont try to sign before app is built ([47e6a12](https://github.com/sitevision/sitevision-apps/commit/47e6a12a4bd3d278b9b202a42c94d9084b78fcf5))
- require react 17 until we have react 18 support in sitevision ([9fc2768](https://github.com/sitevision/sitevision-apps/commit/9fc27687365ba043fd012f11ec5e663b68cdecba))
- should not send request with invalid authentication ([8f54e51](https://github.com/sitevision/sitevision-apps/commit/8f54e51d0470af5fd9e7417a1de0bebc13bb153a))

## [2.1.8](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.7...@sitevision/sitevision-scripts@2.1.8) (2022-02-09)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [2.1.7](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.6...@sitevision/sitevision-scripts@2.1.7) (2022-01-31)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [2.1.4](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.3...@sitevision/sitevision-scripts@2.1.4) (2022-01-22)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [2.1.3](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.2...@sitevision/sitevision-scripts@2.1.3) (2021-12-17)

### Bug Fixes

- Remove deprecated package fixes [#38](https://github.com/sitevision/sitevision-apps/issues/38) ([eacf447](https://github.com/sitevision/sitevision-apps/commit/eacf4470f081fe66c6b08c83903a51fff0100117))

## [2.1.1](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.1.0...@sitevision/sitevision-scripts@2.1.1) (2021-10-06)

**Note:** Version bump only for package @sitevision/sitevision-scripts

# [2.1.0](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.0.6...@sitevision/sitevision-scripts@2.1.0) (2021-09-17)

### Bug Fixes

- Don't assume setup tests file exists ([78b7738](https://github.com/sitevision/sitevision-apps/commit/78b773876a066cd8bb00da5584e03cb3794f9ae2))

### Features

- added support for unit testing ([34308af](https://github.com/sitevision/sitevision-apps/commit/34308afba6b041563baa723252e1e402db52bbf9))

## [2.0.6](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.0.5...@sitevision/sitevision-scripts@2.0.6) (2021-09-08)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [2.0.5](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.0.4...@sitevision/sitevision-scripts@2.0.5) (2021-08-16)

**Note:** Version bump only for package @sitevision/sitevision-scripts

## [2.0.4](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.0.3...@sitevision/sitevision-scripts@2.0.4) (2021-07-01)

### Bug Fixes

- updated dependencies ([a957381](https://github.com/sitevision/sitevision-apps/commit/a95738198da70e240adc843a319ef36aba3e9126))

## [2.0.3](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.0.2...@sitevision/sitevision-scripts@2.0.3) (2021-06-22)

### Bug Fixes

- do not throw error if appDataDefaults is missing ([3b9d946](https://github.com/sitevision/sitevision-apps/commit/3b9d946b856e2b0861cfc9ca71c0142c04810fd6))
- fixed appDataDefaults typo ([46aa11d](https://github.com/sitevision/sitevision-apps/commit/46aa11dbd4c40b0a33d71655f5f1d0d05663671f))

## [2.0.2](https://github.com/sitevision/sitevision-apps/compare/@sitevision/sitevision-scripts@2.0.1...@sitevision/sitevision-scripts@2.0.2) (2021-06-18)

**Note:** Version bump only for package @sitevision/sitevision-scripts
