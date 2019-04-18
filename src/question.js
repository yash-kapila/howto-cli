const inquirer = require('inquirer');
const util = require('util');
const path = require('path');
const _glob = require('glob');

const glob = util.promisify(_glob);

const whichTool = async () => {
  const files = await glob(path.join(__dirname, 'howto', '*.json'));
  const choices = files.map(file => file.match(/(\w+).json$/)[1]).sort();
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      description: 'Which tool do you wish to seek information about?',
      choices,
    },
  ]);

  return answers;
};

module.exports = {
  whichTool,
};
