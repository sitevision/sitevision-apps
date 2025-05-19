import inquirer from 'inquirer';

export const questions = [
  {
    name: 'type',
    message: 'What type of app do you want to create?',
    type: 'list',
    choices: [
      { name: 'WebApp (React)', value: 'web-react' },
      { name: 'RESTApp', value: 'rest-bundled' },
      { name: 'Widget (React)', value: 'widget-react' },
      new inquirer.Separator(),
      { name: 'WebApp (Legacy)', value: 'web-legacy' },
      { name: 'RESTApp (Legacy)', value: 'rest-legacy' },
    ],
  },
  {
    name: 'reactVersion',
    message: 'Which version of React do you want to use?',
    type: 'list',
    choices: [
      { name: '18.x', value: '18' },
      { name: '19.x', value: '19' },
    ],
    when: (answers) => false && /web-react|widget-react/.test(answers.type),
  },
  {
    name: 'typescript',
    message: 'Do you want to use TypeScript?',
    type: 'confirm',
    default: false,
    when: (answers) => /web-react|rest-bundled|widget-react/.test(answers.type),
  },
  {
    name: 'serverSideOnly',
    message: 'Server-side rendering only?',
    type: 'confirm',
    default: false,
    when: (answers) => 'web-react' === answers.type,
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
  {
    name: 'useHTTPForDevDeploy',
    message: 'Use (unsafe) HTTP for local deployment?',
    type: 'confirm',
    default: false,
  },
];
