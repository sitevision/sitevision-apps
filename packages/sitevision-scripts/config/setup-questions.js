export const questions = [
  {
    name: 'type',
    message: 'What type of app do you want to create?',
    type: 'list',
    choices: [
      { name: 'WebApp (React) (Requires 9.0)', value: 'web-react' },
      { name: 'WebApp (Legacy)', value: 'web-legacy' },
      { name: 'RESTApp (Bundled) (Requires 9.0)', value: 'rest-bundled' },
      { name: 'RESTApp (Legacy)', value: 'rest-legacy' },
    ],
  },
  {
    name: 'transpile',
    message: 'Would you like to transpile using babel?',
    type: 'list',
    when: (answers) => answers.type === 'web-legacy',
    choices: [
      { name: 'Yes', value: true },
      { name: 'No', value: false },
    ],
  },
  {
    name: 'domain',
    message: 'Development domain (www.example.com)',
  },
  {
    name: 'siteName',
    message: 'Development site name',
  },
  {
    name: 'addonName',
    message: 'Development addon name',
  },
  {
    name: 'username',
    message: 'Username for development site',
  },
  {
    name: 'password',
    type: 'password',
    message: 'Password for development site',
  },
];
