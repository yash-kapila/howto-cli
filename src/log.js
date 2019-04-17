const constants = require('./constants');
const utils = require('./utils');

const consoleTitle = arr => {
  console.log(
    arr.reduce((acc, elem) => acc.concat(elem), '')
  );
};

const consoleSeparator = (firstColLength, secondColLength) => {
  const item = ''
    .concat('-'.repeat(firstColLength))
    .concat(utils.horizontalSpacing(4))
    .concat('-'.repeat(secondColLength));

  console.log(item);
};

const createHeadings = longest => {
  const firstHeadingLength = constants.HEADING.COMMAND.length;
  const secondHeadingLength = constants.HEADING.DESCRIPTION.length;
  const firstColLeftPadding = utils.horizontalSpacing((longest.command.length - firstHeadingLength)/2);
  const firstColRightPadding = utils.horizontalSpacing((longest.command.length - firstHeadingLength)/2);
  const columnsSeparator = utils.horizontalSpacing(4);
  const secondColLeftPadding = utils.horizontalSpacing((longest.description.length - secondHeadingLength)/2);
  const secondColRightPadding = utils.horizontalSpacing((longest.description.length - secondHeadingLength)/2);

  consoleSeparator(longest.command.length, longest.description.length);

  consoleTitle([
    firstColLeftPadding,
    constants.HEADING.COMMAND,
    firstColRightPadding,
    columnsSeparator,
    secondColLeftPadding,
    constants.HEADING.DESCRIPTION,
    secondColRightPadding,
  ]);

  consoleSeparator(longest.command.length, longest.description.length);
};

const createBody = (entries, longest) => {
  for (const item of entries) {
    const text = item.command
      .concat(utils.horizontalSpacing(longest.command.length - item.command.length))
      .concat(utils.horizontalSpacing(4))
      .concat(item.description);

      console.log(text);
  }
};

const main = commands => {
  if (commands.length === 0) {
    console.log('No search results for grep condition. Please try a different search criteria.')
    process.exit(1);
  }
  const longest = utils.findLongestWord(commands);
  createHeadings(longest);
  createBody(commands, longest);
  console.log();
};

module.exports = {
  main,
};