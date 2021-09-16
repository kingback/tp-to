const { addConfig } = require('../src/utils')

// TODO tests
test('add: npm', async () => {
  const config = await addConfig({
    command: 'npm',
    url: 'https://www.npmjs.com/'
  });
  expect('npm' in config.dests).toBe(true);
});