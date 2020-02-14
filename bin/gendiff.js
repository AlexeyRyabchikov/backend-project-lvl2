#!/usr/bin/env node

const program = require('commander'); // (normal include)
//const program = require('../'); // include commander in git clone of commander repo

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);

if (!program.args.length) program.help();