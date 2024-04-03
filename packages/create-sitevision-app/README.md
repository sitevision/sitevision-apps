# Create Sitevision app

Create Sitevision WebApps and RESTApps

## Getting started

To create a new app:

```sh
npx @sitevision/create-sitevision-app my-new-app
```

[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool (useful when you don't want to pollute global installations)

The command will create a directory with a basic project structure (you will be prompted to enter if you are creating a [WebApp](https://developer.sitevision.se/docs/webapps) or [RESTApp](https://developer.sitevision.se/docs/rest-api/restapps) as well as information about your Sitevision environment).

The project will depend on [@sitevision/sitevision-scripts](../sitevision-scripts), which gives the project access to utility scripts for building and deployment.

### Version 3.0.0

You might run in to issues creating a new app if you have an old version of `@sitevision/create-sitevision-app` installed globally. To fix this, run: `npx @sitevision/create-sitevision-app@3 your-app` to update to the latest version.

## Utility scripts

### `npm run create-addon`

Creates an addon with the name configured in the setup task.

### `npm run build`

Compresses `/src` into `/dist`. The generated zip file is your app that will be used when deploying or signing. If you use babel to transpile your code (opt-in in the setup task), this target will compress a transpiled version of your `/src`

### `npm run build deploy`

Runs the build task and deploys to the addon configured in the setup task

### `npm run build force-deploy`

Runs the build task and deploys with the possibility to overwrite an existing app

### `npm run dev`

Watches files for changes and runs `build force-deploy` on save

### `npm run sign`

Invokes the signing endpoint of the Sitevision developer REST API. A signed version of the app will be created in `/dist`.

### `npm run deploy-prod`

Deploys a signed app to a production environment.

### `npm run setup-dev-properties`

Creates .dev-properties.json with information about the development environment

### Certificate verification

[@sitevision/sitevision-scripts](../sitevision-scripts) assumes communication over https. To disable certificate verification when developing locally you could utilize the `NODE_TLS_REJECT_UNAUTHORIZED=0` flag.

The option can be entered via CLI:

```sh
NODE_TLS_REJECT_UNAUTHORIZED=0 npm run deploy
```

**OR** by modifying package.json:

```sh
”deploy”: ”NODE_TLS_REJECT_UNAUTHORIZED=0 sitevision-scripts deploy”
```

Other targets that might need prefixing: `create-addon`, `force-deploy`, `dev`.

It is possible to use (unsafe) http for local deployments by adding property `"useHTTPForDevDeploy": true` to .dev_properties.

### Custom properties in package.json

These properties, under the `sitevision_scripts_properties` namespace in `package.json`, allow users to customize the build process.

#### `transpilePackages`

An array of scope/package names within `node_modules` to transpile. This allows specific scopes/packages to undergo transpilation during the build process.

#### `babel`

Override options for the `babel-loader`. Use this to customize Babel's behavior and configuration.

Example usage in `package.json`:

```json
{
  "name": "your-package",
  "version": "1.0.0",
  "description": "Your package description",
  "sitevision_scripts_properties": {
    "transpilePackages": ["@scope", "package"],
    "babel": {
      "presets": ["@babel/preset-env"]
    }
  }
}
```
