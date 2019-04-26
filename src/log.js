const constants = require('./constants');
const utils = require('./utils');

const columnsSeparator = () => utils.horizontalSpacing(4);

const printTitle = arr => {
  console.log(
    arr.reduce((acc, elem) => acc.concat(elem), '')
  );
};

const printSeparator = (firstColLength, secondColLength) => {
  const item = ''
    .concat('-'.repeat(firstColLength))
    .concat(columnsSeparator())
    .concat('-'.repeat(secondColLength));

  console.log(item);
};

const getCellAttributes = (longest, headings) => {
  const firstColContentLength = (longest.command.length > constants.HEADING.COMMAND.length)
    ? longest.command.length
    : constants.HEADING.COMMAND.length;

  const secondColContentLength = (longest.description.length > constants.HEADING.DESCRIPTION.length)
    ? longest.description.length
    : constants.HEADING.DESCRIPTION.length;
  
  const firstColPadding = (longest.command.length > headings.COMMAND.length)
    ? (longest.command.length - headings.COMMAND.length)/2
    : 0;

  const secondColPadding = (longest.description.length > headings.DESCRIPTION.length)
    ? (longest.description.length - headings.DESCRIPTION.length)/2
    : 0;

  return {
    firstColContentLength,
    firstColLeftPadding: utils.horizontalSpacing(firstColPadding),
    firstColRightPadding: utils.horizontalSpacing(firstColPadding),
    secondColContentLength,
    secondColLeftPadding: utils.horizontalSpacing(secondColPadding),
    secondColRightPadding: utils.horizontalSpacing(secondColPadding),
  };
}

const createHeadings = attributes => {
  printSeparator(attributes.firstColContentLength, attributes.secondColContentLength);

  printTitle([
    attributes.firstColLeftPadding,
    constants.HEADING.COMMAND,
    attributes.firstColRightPadding,
    columnsSeparator(),
    attributes.secondColLeftPadding,
    constants.HEADING.DESCRIPTION,
    attributes.secondColRightPadding,
  ]);

  printSeparator(attributes.firstColContentLength, attributes.secondColContentLength);
};

const createBody = (entries, attributes) => {
  for (const item of entries) {
    const text = item.command
      .concat(utils.horizontalSpacing(attributes.firstColContentLength - item.command.length))
      .concat(columnsSeparator())
      .concat(item.description);

      console.log(text);
  }
};

const main = commands => {
  if (commands.length === 0) {
    console.log('No results found')
    process.exit(1);
  }
  const longest = utils.findLongestWord(commands);
  const attributes = getCellAttributes(longest, constants.HEADING);
  createHeadings(attributes);
  createBody(commands, attributes);
  console.log();
};

module.exports = {
  main,
};