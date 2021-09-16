const pupa = require('pupa');
const inquirer = require('inquirer');
const { addConfig, logger } = require('./utils');

module.exports = async function(cmd, options, _) {
  const command = _[1];
  
  const { url, confirm } = await inquirer.prompt([{
    name: 'url',
    message: 'Please input website',
  }, {
    type: 'confirm',
    name: 'confirm',
    default: true,
    message(answers) {
      return `Confirm adding "${pupa(answers.url, options)}"?`
    }
  }]);

  if (confirm) {
    await addConfig({ command, options, url, write: true });
    logger.success('add', command, url, 'success');
  }

  return confirm;
}