#!/usr/bin/env node

const commander = require('commander');

const packageJSON = require('../package.json');
const question = require('./question');
const answer = require('./answer');

const parseArgs = () => {
  commander
    .version(packageJSON.version, '-v, --version')
    .option('-g, --grep <grep>', 'Grepping')
    .parse(process.argv);

  return commander.grep;
}

const main = async () => {
  const grep = (parseArgs() || '').toLowerCase();
  const input = await question.whichTool();
  answer.lookupInfo(input.selected, grep);
}

main();