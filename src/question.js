const inquirer = require('inquirer');

const constants = require('./constants');

const whichTool = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      description: 'Which tool do you wish to seek information about?',
      choices: constants.OPTIONS
    }
  ]);

  return answers;
}

module.exports = {
  whichTool,
};
