const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const spawn = require('cross-spawn');

const create = (appName, packagePath = '@sitevision/sitevision-scripts') => {
  console.log('Creating app with name:', chalk.green(appName), '...');
  const appPath = path.resolve(appName);

  if (!fs.existsSync(appPath)) {
    fs.mkdirSync(appPath);
  }

  if (!checkIfFolderIsSafe(appPath)) {
    process.exit(1);
  }

  createPackageJson(appName, appPath);
  installDependencies(packagePath, appPath).then(() => {
    initProject(appName, packagePath, appPath);
  });
};

const initProject = (appName, packagePath, appPath) => {
  return new Promise((resolve, reject) => {
    const source = `
      var init = require('${packagePath}/scripts/init.js');
      init.apply(null, [{ appName: '${appName}', appPath: '${appPath}'}]);
    `;

    const child = spawn(
      process.execPath,
      ['-e', source, '--', JSON.stringify([appName, packagePath])],
      {
        cwd: appPath,
        stdio: 'inherit'
      }
    );
    child.on('close', (code) => {
      if (code !== 0) {
        reject({
          command: `Could not run init script in backoffice-scripts`
        });

        return;
      }

      resolve();
    });
  });
};

const installDependencies = (packagePath, appPath) => {
  return new Promise((resolve, reject) => {
    const dependencies = [packagePath];

    const args = ['install', '--save', '--loglevel', 'error'].concat(
      dependencies
    );

    const child = spawn('npm', args, { cwd: appPath, stdio: 'inherit' });
    child.on('close', (code) => {
      if (code !== 0) {
        reject({
          command: `npm ${args.join(' ')}`
        });

        return;
      }

      resolve();
    });
  });
};

const checkIfFolderIsSafe = (appPath) => {
  const conflicts = fs.readdirSync(appPath);

  if (conflicts.length === 0) {
    return true;
  }

  console.log();
  console.log(
    'The project can only be created in an empty directory. Files that conflicts:'
  );

  console.log();
  for (const file of conflicts) {
    console.log(`  ${file}`);
  }
  console.log();
  console.log(
    'Please remove listed files or choose a new app name and try again.'
  );

  return false;
};

const createPackageJson = (appName, appPath) => {
  const json = {
    name: appName,
    version: '0.0.1'
  };

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(json, null, 2)
  );
};

module.exports = {
  create
};
