const fs = require('fs');
const path = require('path');
const util = require('util');
const log = require('./log');
const utils = require('./utils');

const fsReadFile = util.promisify(fs.readFile);

const lookupInfo = async (selected, grep) => {
  const content = await fsReadFile(path.join(__dirname, 'howto', selected + '.json'), 'utf8');
  const commands = JSON.parse(content);
  log.main(utils.filterCommands(commands, grep));
};

module.exports = {
  lookupInfo,
};
