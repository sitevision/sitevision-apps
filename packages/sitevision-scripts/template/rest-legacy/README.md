# restapp-boilerplate

Boilerplate code for a simple RESTApp

## Building

- `npm run create-addon` creates an addon with the name configured in the setup task
- `npm run build` compresses `/src` into `/dist`. If you use babel to transpile your code, this target will compress a transpiled version of your `/src`
- `npm run build deploy` runs the build task and deploys to the addon configured in the setup task
- `npm run build force-deploy` runs the build task and deploys with the possibility to overwrite an existing RESTApp
- `npm run dev` watches files for changes and runs `build force-deploy` on save
- `npm run sign` invokes the signing endpoint of the Sitevision developer REST API. A signed version of the RESTApp will be created in the `/dist` folder
- `npm run deploy-prod` deploys the signed RESTApp to a production environment
- `npm run setup-dev-properties` creates .dev-properties.json

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)
