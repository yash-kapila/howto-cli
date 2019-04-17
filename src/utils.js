const filterCommands = (commands, grep) => commands
  .filter(elem => (
    (elem.command.toLowerCase().indexOf(grep) !== -1) || (elem.description.toLowerCase().indexOf(grep) !== -1))
  );

const findLongestWord = array => array.reduce((acc, elem) => {
  if (acc.command.length < elem.command.length) {
    acc.command = elem.command;
  }

  if (acc.description.length < elem.description.length) {
    acc.description = elem.description;
  }

  return acc;
}, {
  command: '',
  description: ''
});

const horizontalSpacing = length => ' '.repeat(length);

module.exports = {
  filterCommands,
  findLongestWord,
  horizontalSpacing,
}