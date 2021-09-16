const open = require('open');
const { getOpenUrl, logger, debug } = require('./utils');

module.exports = async function(command, options) {
  const url = await getOpenUrl(command, options);

  if (url) {
    debug(`url: ${url}`);
    try {
      await open(url);
      logger.success('open', url, 'success');
    } catch (e) {
      console.error(e);
      logger.error('open', e.message);
    }
  } else {
    logger.error('open', `can't find config of "${command}"`);
  }
}