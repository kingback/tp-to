const pupa = require('pupa');
const inquirer = require('inquirer');
const { addConfig, logger } = require('./utils');

function tpl(url, options) {
  const parsed = {};
  Object.entries(options).forEach(o => {
    parsed[o[0]] = o[1] === true ? `{${o[0]}}` : o[1];
  });
  return pupa(url, parsed);
}

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
      return `Confirm adding "${tpl(answers.url, options)}"?`
    }
  }]);

  if (confirm) {
    await addConfig({ command, options, url, write: true });
    logger.success('add', command, url, 'success');
  }

  return confirm;
}