export const questions = [
  {
    name: 'type',
    message: 'What type of app do you want to create?',
    type: 'list',
    choices: [
      { name: 'WebApp', value: 'web-react' },
      { name: 'RESTApp', value: 'rest-bundled' },
      { name: 'WebApp (Legacy)', value: 'web-legacy' },
      { name: 'RESTApp (Legacy)', value: 'rest-legacy' },
    ],
  },
  {
    name: 'typescript',
    message: 'Do you want to use TypeScript?',
    type: 'confirm',
    default: false,
    when: (answers) => /web-react|rest-bundled/.type(answers.type),
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
