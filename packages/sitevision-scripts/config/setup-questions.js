module.exports = {
  questions: [
    {
      name: 'type',
      message: 'What type of app do you want to create?',
      type: 'list',
      choices: [
        { name: 'WebApp', value: 'web' },
        { name: 'RESTApp', value: 'rest' },
      ],
    },
    {
      name: 'transpile',
      message: 'Would you like to transpile using babel?',
      type: 'list',
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
  ],
};
