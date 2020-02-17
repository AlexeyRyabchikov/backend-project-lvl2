#!/usr/bin/env node

const program = require('commander'); // (normal include)
//const program = require('../'); // include commander in git clone of commander repo

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format')
  .action(function (firstConfig, secondConfig) {
    cmdValue1 = firstConfig;
    cmdValue2 = secondConfig;
  });

program.parse(process.argv);