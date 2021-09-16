#!/usr/bin/env node
const path = require('path')
const parse = require('minimist');
const tp = require('../src/index');
const bin = path.basename(process.argv[1]);
const { _, ...options } = parse(process.argv.slice(2));
const command = _[0] || '';

tp({
  _,
  bin,
  command,
  options
});
