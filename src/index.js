#!/usr/bin/env node

const commander = require('commander');

const packageJSON = require('../package.json');
const question = require('./question');
const answer = require('./answer');

const parseArgs = () => {
  commander
    .version(packageJSON.version, '-v, --version')
    .option('-g, --grep <grep>', 'Use this option similar to grep in Unix to search keywords')
    .parse(process.argv);

  return commander.grep;
};

const main = async () => {
  try {
    const grep = (parseArgs() || '').toLowerCase();
    const input = await question.whichTool();
    answer.lookupInfo(input.selected, grep);
  } catch (_) {
    console.log(`Err!! This shouldn't have happened. Please raise an issue on GitHub.`);
  }
};

main();
