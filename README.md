# Create SiteVision app
Create SiteVision Web/REST-apps

## Getting started
To create a new app, choose one of the following methods:

### npx

```sh
npx @sitevision/create-sitevision-app my-new-app
```

[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool (useful when you dont want to pollute global installations)

__or__ install it globally using npm

```sh
npm install -g @sitevision/create-sitevision-app
@sitevision/create-sitevision-app my-new-app
```

The command will create a directory with a basic project structure. The project will depend on [@sitevision/sitevision-scripts](https://github.com/sitevision/sitevision-scripts), which gives the app access to utility scripts for deployment.