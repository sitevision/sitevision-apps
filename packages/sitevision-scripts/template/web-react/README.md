# webapp-boilerplate

Boilerplate code for a simple WebApp

## Developing

### Using Sitevision Utilities

When using utilities import them from `@sitevision/api/<server|client|common>/<NAME_OF_UTIL>`. Utilities intended to run server side are imported from `@sitevision/api/server/...`. For example:

`import properties from '@sitevision/api/server/Properties';`

A package indented to run on the client should be imported from `@sitevision/api/client/...`. For example:

`import toasts from '@sitevision/api/client/toasts';`

Some packages are intended to run both on the client and the server. And they are imported through `@sitevision/api/common/...`. For example:

`import i18n from '@sitevision/api/common/i18n';`

## Building

- `npm run create-addon` creates an addon with the name configured in the setup task
- `npm run build` compresses `/src` into `/dist`. If you use babel to transpile your code, this target will compress a transpiled version of your `/src`
- `npm run build deploy` runs the build step and deploys to the addon configured in the setup task
- `npm run build force-deploy` runs the build step and deploys with the possibility to overwrite an existing WebApp
- `npm run dev` watches files for changes and runs `build force-deploy` on save
- `npm run sign` invokes the signing endpoint of the Sitevision developer REST API. A signed version of the WebApp will be created in the `/dist` folder
- `npm run deploy-prod` deploys the signed WebApp to a production environment
- `npm run setup-dev-properties` creates .dev-properties.json with information about the development environment

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)
