import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import * as properties from '../util/properties.js';
import { questions } from '../config/setup-questions.js';

(function () {
  let existingDevProperties;
  let setupQuestions = questions.filter((q) => q.name !== 'type');

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
  }

  inquirer
    .prompt(setupQuestions)
    .then(
      ({
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
      }
    );
})();
