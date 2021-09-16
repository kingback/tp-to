const chalk = require('chalk');
const cfonts = require('cfonts');
const keyCommands = ['add', 'config'];
const pkg = require('../package.json');

function showLogo(bin) {
  cfonts.say(bin.toUpperCase(), {
    gradient: true,
    colors: ['#EB4D28', '#A88D6B', '#17263C']
  });
}

module.exports = async function({ bin = 'tp', _, command, options }) {
  if (command) {
    return await require(`./${keyCommands.includes(command) ? command : 'open'}`)(command, options, _);
  } else if (options.h || options.help) {
    showLogo(bin);
  } else if (options.v || options.version) {
    console.log(chalk.green(`${bin}@${pkg.version}`));
  } else {
    showLogo(bin);
  }
}