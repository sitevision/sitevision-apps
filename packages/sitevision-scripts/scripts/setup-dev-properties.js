import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import * as properties from '../util/properties.js';
import { questions } from '../config/setup-questions.js';

const updatePackageJSON = (transpile) => {
  const appPackage = properties.getPackageJson();
  appPackage.sitevision_scripts_properties = {
    transpile,
  };
  fs.writeFileSync(
    properties.PACKAGE_JSON_PATH,
    JSON.stringify(appPackage, null, 2)
  );
};

const hasTranspileOptionInPackageJSON = () => {
  const { sitevision_scripts_properties } = properties.getPackageJson();
  return (
    sitevision_scripts_properties &&
    typeof sitevision_scripts_properties.transpile === 'boolean'
  );
};

(function () {
  const transpileOptionExistsInPackageJSON = hasTranspileOptionInPackageJSON();
  let existingDevProperties;
  let setupQuestions = questions.filter((q) => q.name !== 'type');
  if (transpileOptionExistsInPackageJSON) {
    setupQuestions = setupQuestions.filter((q) => q.name !== 'transpile');
  }

  try {
    existingDevProperties = properties.getDevProperties();
  } catch (e) {
    // does not exist
  }

  if (existingDevProperties) {
    setupQuestions = setupQuestions.map((question) => {
      if (existingDevProperties[question.name]) {
        return {
          ...question,
          default: existingDevProperties[question.name],
        };
      }

      return question;
    });

    if (
      typeof existingDevProperties.transpile === 'boolean' &&
      !transpileOptionExistsInPackageJSON
    ) {
      console.log(
        'Transpile option will be moved from .dev-properties.json to package.json'
      );
    }
  }

  inquirer
    .prompt(setupQuestions)
    .then(
      ({
        transpile,
        domain,
        siteName,
        addonName,
        username,
        password,
        useHTTPForDevDeploy,
      }) => {
        console.clear();

        fs.writeFileSync(
          path.resolve(properties.DEV_PROPERTIES_PATH),
          JSON.stringify(
            {
              domain,
              siteName,
              addonName,
              username,
              password,
              useHTTPForDevDeploy,
            },
            null,
            2
          )
        );
        if (!transpileOptionExistsInPackageJSON) {
          updatePackageJSON(transpile);
        }
      }
    );
})();
