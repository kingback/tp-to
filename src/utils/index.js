const os = require('os');
const path = require('path');
const pupa = require('pupa');
const fs = require('fs-extra');
const chalk = require('chalk');
const debug = require('debug')('tp');

const home = os.homedir();
const configDir = path.join(home, '.tp');
const configPath = path.join(configDir, 'config.json');

function noop(s) {
  return s;
}

function log(method, color, ...args) {
  return console[method].apply(
    console,
    args.map((a, i) =>
      (color ? chalk[color] : noop)(args.length > 1 && !i ? `[${a}]` : a)
    )
  );
}

const logger = {
  log(...args) {
    log('log', null, ...args);
  },
  success(...args) {
    log('log', 'green', ...args);
  },
  warn(...args) {
    log('warn', 'yellow', ...args);
  },
  error(...args) {
    log('error', 'red', ...args);
  }
};

// TODO permission
function ensureDir() {
  if (!fs.existsSync(configDir)) {
    fs.ensureDirSync(configDir);
  }
}

function ensureConfig() {
  ensureDir();
  if (!fs.existsSync(configPath)) {
    fs.writeJSONSync(configPath, {});
  }
}

async function readConfig() {
  ensureConfig();
  const config = require(configPath);
  return {
    ...config,
    env: { ...config.env },
    dests: { ...config.dests }
  };
}

async function writeConfig(config) {
  ensureConfig();
  fs.writeJSONSync(configPath, config);
}

async function addConfig({ options = {}, command, url, write }) {
  const config = await readConfig();
  const { dests } = config;

  dests[command] = dests[command] || [];
  dests[command].push({
    url,
    options
  });

  write && writeConfig(config);

  return config;
}

async function getOpenUrl(command, options) {
  const config = await readConfig();
  const commandConfigs = config.dests[command] || [];
  
  const cfg = commandConfigs.find(cfg => {
    const keys = Object.keys(options);
    const cKeys = Object.keys(cfg.options);
    return keys.length === cKeys.length && keys.every(k => cKeys.includes(k));
  });

  return cfg ? pupa(cfg.url, {
    ...cfg.options,
    ...options
  }): false;
}

module.exports = {
  debug,
  logger,
  addConfig,
  getOpenUrl
};
