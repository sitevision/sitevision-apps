# webapp-boilerplate

Boilerplate code for a simple WebApp

## Building

- `npm run create-addon` create an addon with the name configured in the setup task
- `npm run zip` compress `/src` into `/dist`
- `npm run deploy` upload to the addon configured in the setup task
- `npm run deploy force` upload to the addon configured in the setup task. This will overwrite the current WebApp if it has the same version and id defined in manifest.json
- `npm run sign` invoke the signing endpoint of the SiteVision developer REST API. A signed version of the WebApp will be created in the `/dist` folder
- `npm run deploy-prod` deploy the signed WebApp to a production environment

[Visit developer.sitevision.se for more information](https://developer.sitevision.se)
