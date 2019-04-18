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
    description: 'Delete specified branch from local Git repository'
  },
  {
    command: 'git push origin <branch-name>',
    description: 'Push all local commits in a branch to remote'
  },
  {
    command: 'git push origin <branch-name> -d',
    description: 'Delete specified branch from remote Git repository'
  },
  {
    command: 'git rebase develop',
    description: 'Rebase current branch on top of develop'
  },
  {
    command: 'git rebase -i HEAD~2',
    description: 'Modifying multiple commits on the current branch'
  },
  {
    command: 'git log --oneline',
    description: 'Shows all commit logs in a sinle line description'
  },
  {
    command: 'git log --graph --decorate --pretty=oneline --abbrev-commit',
    description: 'Displays all commits in a graph format'
  },
  {
    command: 'git config --local -l',
    description: 'Lists all configurations setup for local repository'
  },
  {
    command: 'git config --global -l',
    description: 'Lists all configurations setup at a global level'
  },
  {
    command: 'git config user.name ""',
    description: 'Set a config property for local repository'
  },
  {
    command: 'git config --global <property> "<value>"',
    description: 'Set a config property at a global level'
  },
  {
    command: 'git checkout develop -- test.txt',
    description: 'Overwrite contents of test.txt in the current branch from develop'
  },
  {
    command: 'git diff develop..master',
    description: 'Display difference between develop and master branch'
  },
  {
    command: 'git reset --soft HEAD~2',
    description: 'Soft reset branch to 2 commits before HEAD'
  },
  {
    command: 'git reset --hard HEAD~2',
    description: 'Hard reset branch to 2 commits before HEAD. All unsaved changes could be lost this way.'
  },
];

module.exports = {
  commands,
};
