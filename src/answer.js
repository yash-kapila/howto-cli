const log = require('./log');
const utils = require('./utils');

const git = require('./howto/git');
const unix = require('./howto/unix');

const lookupInfo = (selected, grep) => {
  switch(selected.toLowerCase()) {
    case 'git':
      log.main(utils.filterCommands(git.commands, grep));
      break;
    case 'unix':
      log.main(utils.filterCommands(unix.commands, grep));
      break;
    default:
      console.log(`Err!! This shouldn't have happened. Please raise an issue on GitHub.`)
  };
};

module.exports = {
  lookupInfo,
}