const commands = [
  {
    command: 'git checkout <branch-name>',
    description: 'Checkout an existing branch',
  },
  {
    command: 'git checkout <branch-name> -b',
    description: 'Create and checkout a new branch',
  },
  {
    command: 'git status',
    description: 'Displays the state of the working directory and the staging area',
  },
  {
    command: 'git diff',
    description: 'Shows difference between commits, commit and working tree etc'
  },
  {
    command: 'git branch',
    description: 'List branches available locally'
  },
  {
    command: 'git branch -r',
    description: 'List branches available on remote'
  },
  {
    command: 'git branch -a',
    description: 'List all branches available locally and on remote'
  },
  {
    command: 'git branch -d <branch-name>',
    description: 'Remove specified branch from local Git repository'
  },
  {
    command: 'git push origin <branch-name>',
    description: 'Push all local commits in a branch to remote'
  },
  {
    command: 'git push origin <branch-name> -d',
    description: 'Remove specified branch from remote Git repository'
  },
];

module.exports = {
  commands,
};
